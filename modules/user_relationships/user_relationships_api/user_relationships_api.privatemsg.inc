<?php
// $Id: user_relationships_api.privatemsg.inc,v 1.1.2.1 2009/06/22 07:54:07 alexk Exp $
/**
 * @file Integration with Privatemsg module
 * @author mannspams
 */
/**
 * Fills new Privatemsg autocomplete To: field with friends only.
 *
 */
function user_relationships_api_privatemsg_sql_autocomplete_alter(&$fragments, $search, $names) {

  unset($fragments['select']);
  unset($fragments['where']);
  unset($fragments['order_by']);

  global $user;

  $fragments['primary_table'] = '{user_relationships}';
  $fragments['select'][] = 'users_user_relationships.name AS name';
  $fragments['where'][] = "name LIKE '%s'";
  $fragments['inner_join'][] = 'INNER JOIN users users_user_relationships ON user_relationships.requestee_id = users_user_relationships.uid';
  $fragments['query_args'][] = $user->uid;
  $fragments['where'][] = 'user_relationships.approved = 1';
  $fragments['where'][] = 'user_relationships.requester_id ='. $user->uid;
  $fragments['order_by'][] = 'name ASC'; 
}


/**
 * Blocks messages to users that are not in relationships with sender.
 * @see hook_privatemsg_block_message()
 */
function user_relationships_api_privatemsg_block_message($author, $recipients) {
  $blocked = array();
  foreach ($recipients as $recipient) {
    //block if user is only receiving pm's from his relationships, and author is not one of them
    if ($recipient->user_relationships_allow_private_message == 'on in relations' && !module_invoke_all('socnet_is_related', $author->uid, $recipient->uid)) {
      $blocked[] = array(
        'uid' => $recipient->uid,
        'message' => t('!name is not a friend of yours.', array('!name' => $recipient->name))
      );
    }
  }
  return $blocked;
}
