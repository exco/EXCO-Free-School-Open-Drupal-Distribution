<?php
// $Id: user_relationships_ui.actions.inc,v 1.1.2.12 2009/05/07 21:59:36 alexk Exp $

/**
 * @file
 * User Relationships Actions
 */


/**
 * Validate relationship request.
 */
function user_relationships_ui_request_validate($form, &$form_state) {
  $requester = user_load($form_state['values']['requester']);
  $requestee = user_load($form_state['values']['requestee']);
  $rtid = $form_state['values']['rtid'];
  
  if (user_access('can have relationships', $requestee)) {
    //check that a type has been chosen
    if (!$rtid || !($rtype = user_relationships_type_load($rtid))) {
      form_set_error('rtid', user_relationships_ui_get_message('relationship_type_not_set'));
      //need to handle requests from ajax forms separately
      if (isset($_GET['ajax'])) {
        drupal_goto();
      }
      else {
        return;
      }
    }
    $current_relationships = user_relationships_load(array('between' => array($requester->uid, $requestee->uid)), array('sort' => 'rtid'));
    //check for multiple relationships
    if (!variable_get('user_relationships_allow_multiple', TRUE) && count($current_relationships)) {
    form_set_error('rtid', user_relationships_ui_get_message('too_many_relationships'));
      if (isset($_GET['ajax'])) {
        drupal_goto();
      }
      else {
        return;
      }
    }
    //check user is allowed to request this type
    if (!user_relationships_api_can_request($requester, $rtype)) {
      $rtype->requester = $requester;
      $rtype->requestee = $requestee;
      form_set_error('rtid', user_relationships_ui_get_message('relationship_type_not_allowed', $rtype));
      if (isset($_GET['ajax'])) {
        drupal_goto();
      }
      else {
        return;
      }
    }

    if (!db_result(db_query(
      'SELECT COUNT(*) FROM {user_relationship_types}' . 
      ($current_relationships ? ' WHERE rtid NOT IN ('. db_placeholders($current_relationships) .')' : ''),
      array_keys($current_relationships)
    ))) {
      drupal_set_message(user_relationships_ui_get_message('too_many_relationships'), 'error');
      drupal_goto();
    }
    else if ($current_relationships[$rtid]) {
      $message_name = $current_relationships[$rtid]->approved ? 'existing_relationship' : 'existing_request';
      form_set_error('rtid', user_relationships_ui_get_message($message_name, NULL, array(
        '!requester'                => $requester->name,
        '!requestee'                => $requestee->name,
        '%relationship_name'        => $current_relationships[$rtid][0]->name,
        '%relationship_plural_name' => $current_relationships[$rtid][0]->plural_name
      )));
    }
  }
  else {
    drupal_set_message(user_relationships_ui_get_message('not_accepting_requests'));
    drupal_goto();
  }
}

/**
 * Process relationship request.
 */
function user_relationships_ui_request_submit($form, &$form_state) {
  $requester          = user_load($form_state['values']['requester']);
  $requestee          = user_load($form_state['values']['requestee']);
  $relationship_type  = user_relationships_type_load($form_state['values']['rtid']);

  $relationship = user_relationships_request_relationship($requester, $requestee, $relationship_type);

  if ($relationship === FALSE) {
    drupal_set_message(user_relationships_ui_get_message('unknown_error', $relationship));
  }

  $relationship->requester = $requester;
  $relationship->requestee = $requestee;
  $relationship->type = $relationship_type;

  drupal_set_message(user_relationships_ui_get_message(($relationship->approved ? 'pre_approved' : 'submitted'), $relationship));

  $form_state['redirect'] = $_GET['destination'];
}


/**
 * Approve, Disapprove, or Cancel a relationship request
 */
function user_relationships_ui_pending_requested_submit($form, &$form_state) {
  global $user;

  $relationships = user_relationships_load(array('rid' => $form_state['values']['rid']), array('include_user_info' => TRUE));
  $relationship = $relationships[$form_state['values']['rid']];
  $requester    = $relationship->requester;
  $requestee    = $relationship->requestee;

  switch ($form_state['values']['action']) {
  case 'approve':
    if (!user_access('maintain own relationships') || (!user_access('administer user relationships') && $user->uid != $requestee->uid)) {
      drupal_access_denied();
      exit();
    }
    $relationship->approved = TRUE;
    user_relationships_save_relationship($relationship, $form_state['values']['action']);
    drupal_set_message(user_relationships_ui_get_message('accepted', $relationship));
    break;

  case 'cancel':
    if (!user_access('maintain own relationships') || (!user_access('administer user relationships') && $user->uid != $requester->uid)) {
      drupal_access_denied();
      exit();
    }
    user_relationships_delete_relationship($relationship, $user, $form_state['values']['action']);
    drupal_set_message(user_relationships_ui_get_message($form_state['values']['action'], $relationship));
    break;

  case 'disapprove':
    if (!user_access('maintain own relationships') || (!user_access('administer user relationships') && $user->uid != $requestee->uid)) {
      drupal_access_denied();
      exit();
    }
    user_relationships_delete_relationship($relationship, $user, $form_state['values']['action']);
    drupal_set_message(user_relationships_ui_get_message($form_state['values']['action'], $relationship));
    break;

  default:
    drupal_set_message(user_relationships_ui_get_message('default'));
  }

  $form_state['redirect'] = str_replace('destination=', '', drupal_get_destination());
}


/**
 * Remove a relationship
 */
function user_relationships_ui_remove_submit($form, &$form_state) {
  global $user;

  $relationship = user_relationships_load($form_state['values']['rid']);

  if (!user_access('maintain own relationships') || (!user_access('administer user relationships') && $user->uid != $relationship->requester_id && $user->uid != $relationship->requestee_id)) {
    drupal_access_denied();
    exit();
  }
  
  user_relationships_delete_relationship($relationship, $user);
  drupal_set_message(user_relationships_ui_get_message('removed', $relationship));

  return "user/{$form_values['viewed_id']}/relationships";
}
