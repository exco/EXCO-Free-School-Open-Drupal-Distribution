<?php
// $Id: advanced_profile.pages_default.inc,v 1.1.2.3 2009/07/12 20:58:00 michellec Exp $

/**
 * @file
 * Holds the export of the task handler for the user page.
 */
 
/**
 * Implementation of hook_default_page_manager_handlers()
 */
function advanced_profile_default_page_manager_handlers() {
// BEGIN HANDLER EXPORT ******************************************************/
$handler = new stdClass;
$handler->disabled = FALSE; /* Edit this to true to make a default handler disabled initially */
$handler->api_version = 1;
$handler->name = 'user_view_panel_context_2';
$handler->task = 'user_view';
$handler->subtask = '';
$handler->handler = 'panel_context';
$handler->weight = 1;
$handler->conf = array(
  'autogenerate_title' => TRUE,
  'title' => 'Panel',
  'no_blocks' => 0,
  'css_id' => 'user-profile',
  'css' => '',
  'css_cache_file' => '',
  'contexts' => array(),
  'relationships' => array(
    '0' => array(
      'context' => 'argument_uid_1',
      'name' => 'node_from_user',
      'id' => 2,
      'identifier' => 'Profile Node',
      'keyword' => 'content_profile',
      'relationship_settings' => array(
        'type' => 'uprofile',
      ),
    ),
  ),
  'access' => array(
    'logic' => 'and',
  ),
);
$display = new panels_display;
$display->did = 'new';
$display->layout = 'flexible';
$display->layout_settings = array(
  'items' => array(
    'canvas' => array(
      'type' => 'row',
      'contains' => 'column',
      'children' => array(
        '0' => 'main',
      ),
      'parent' => NULL,
    ),
    'main' => array(
      'type' => 'column',
      'width' => 100,
      'width_type' => '%',
      'children' => array(
        '0' => 1,
        '1' => 'main-row',
      ),
      'parent' => 'canvas',
    ),
    'main-row' => array(
      'type' => 'row',
      'contains' => 'region',
      'children' => array(
        '0' => 'center',
      ),
      'parent' => 'main',
    ),
    'center' => array(
      'type' => 'region',
      'title' => 'Bottom',
      'width' => 100,
      'width_type' => '%',
      'parent' => 'main-row',
    ),
    '1' => array(
      'type' => 'row',
      'contains' => 'column',
      'children' => array(
        '0' => 2,
        '1' => 3,
      ),
      'parent' => 'main',
    ),
    '2' => array(
      'type' => 'column',
      'width' => '225',
      'width_type' => 'px',
      'parent' => '1',
      'children' => array(
        '0' => 4,
      ),
    ),
    '3' => array(
      'type' => 'column',
      'width' => '70',
      'width_type' => '%',
      'parent' => '1',
      'children' => array(
        '0' => 5,
        '1' => 6,
      ),
    ),
    '4' => array(
      'type' => 'row',
      'contains' => 'region',
      'children' => array(
        '0' => 'left',
      ),
      'parent' => '2',
    ),
    'left' => array(
      'type' => 'region',
      'title' => 'Left',
      'width' => 100,
      'width_type' => '%',
      'parent' => '4',
    ),
    '5' => array(
      'type' => 'row',
      'contains' => 'region',
      'children' => array(
        '0' => 'right',
      ),
      'parent' => '3',
    ),
    'right' => array(
      'type' => 'region',
      'title' => 'Right',
      'width' => 100,
      'width_type' => '%',
      'parent' => '5',
    ),
    '6' => array(
      'type' => 'row',
      'contains' => 'region',
      'children' => array(
        '0' => 'right_bottom',
      ),
      'parent' => '3',
    ),
    'right_bottom' => array(
      'type' => 'region',
      'title' => 'Right bottom',
      'width' => 100,
      'width_type' => '%',
      'parent' => '6',
    ),
  ),
);
$display->panel_settings = array(
  'right' => array(
    'style' => 'rounded_corners',
  ),
  'style_settings' => array(
    'right' => array(
      'corner_location' => 'panel',
    ),
    'right_bottom' => array(
      'corner_location' => 'pane',
    ),
    'left' => array(
      'corner_location' => 'pane',
    ),
    'center' => array(
      'corner_location' => 'panel',
    ),
  ),
  'right_bottom' => array(
    'style' => 'rounded_corners',
  ),
  'left' => array(
    'style' => 'rounded_corners',
  ),
  'center' => array(
    'style' => 'rounded_corners',
  ),
);
$display->cache = array();
$display->title = '';
$display->hide_title = TRUE;
$display->content = array();
$display->panels = array();
  $pane = new stdClass;
  $pane->pid = 'new-1';
  $pane->panel = 'center';
  $pane->type = 'node_comment_form';
  $pane->subtype = 'node_comment_form';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'context' => 'relationship_node_from_user_2',
    'override_title' => 1,
    'override_title_text' => 'Comment wall',
  );
  $pane->cache = array();
  $pane->style = array();
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 0;
  $display->content['new-1'] = $pane;
  $display->panels['center'][0] = 'new-1';
  $pane = new stdClass;
  $pane->pid = 'new-2';
  $pane->panel = 'center';
  $pane->type = 'node_comments';
  $pane->subtype = 'node_comments';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'mode' => '2',
    'order' => '1',
    'comments_per_page' => '30',
    'context' => 'relationship_node_from_user_2',
    'override_title' => 0,
    'override_title_text' => '',
  );
  $pane->cache = array();
  $pane->style = array();
  $pane->css = array();
  $pane->extras = array();
  $pane->position = 1;
  $display->content['new-2'] = $pane;
  $display->panels['center'][1] = 'new-2';
  $pane = new stdClass;
  $pane->pid = 'new-3';
  $pane->panel = 'left';
  $pane->type = 'author_pane';
  $pane->subtype = 'author_pane';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'image_path' => '',
    'template_file' => 'advanced_profile_author-pane',
    'context' => 'argument_uid_1',
    'override_title' => 0,
    'override_title_text' => '',
  );
  $pane->cache = array();
  $pane->style = array();
  $pane->css = array(
    'css_id' => 'profile-author-pane',
    'css_class' => '',
  );
  $pane->extras = array();
  $pane->position = 0;
  $display->content['new-3'] = $pane;
  $display->panels['left'][0] = 'new-3';
  $pane = new stdClass;
  $pane->pid = 'new-4';
  $pane->panel = 'left';
  $pane->type = 'content_fieldgroup';
  $pane->subtype = 'uprofile:group_contact';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'empty' => '',
    'context' => 'relationship_node_from_user_2',
    'override_title' => 0,
    'override_title_text' => '',
  );
  $pane->cache = array();
  $pane->style = array();
  $pane->css = array(
    'css_id' => 'profile-contact',
    'css_class' => '',
  );
  $pane->extras = array();
  $pane->position = 1;
  $display->content['new-4'] = $pane;
  $display->panels['left'][1] = 'new-4';
  $pane = new stdClass;
  $pane->pid = 'new-5';
  $pane->panel = 'left';
  $pane->type = 'content_fieldgroup';
  $pane->subtype = 'uprofile:group_stats';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'empty' => '',
    'context' => 'relationship_node_from_user_2',
    'override_title' => 0,
    'override_title_text' => '',
  );
  $pane->cache = array();
  $pane->style = array();
  $pane->css = array(
    'css_id' => 'profile-stats',
    'css_class' => '',
  );
  $pane->extras = array();
  $pane->position = 2;
  $display->content['new-5'] = $pane;
  $display->panels['left'][2] = 'new-5';
  $pane = new stdClass;
  $pane->pid = 'new-6';
  $pane->panel = 'left';
  $pane->type = 'content_fieldgroup';
  $pane->subtype = 'uprofile:group_links';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'empty' => '',
    'context' => 'relationship_node_from_user_2',
    'override_title' => 0,
    'override_title_text' => '',
  );
  $pane->cache = array();
  $pane->style = array();
  $pane->css = array(
    'css_id' => 'profile-links',
    'css_class' => '',
  );
  $pane->extras = array();
  $pane->position = 3;
  $display->content['new-6'] = $pane;
  $display->panels['left'][3] = 'new-6';
  $pane = new stdClass;
  $pane->pid = 'new-7';
  $pane->panel = 'left';
  $pane->type = 'profile_visitors';
  $pane->subtype = 'profile_visitors';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'context' => 'argument_uid_1',
    'override_title' => 0,
    'override_title_text' => '',
  );
  $pane->cache = array();
  $pane->style = array();
  $pane->css = array(
    'css_id' => 'profile-visitors',
    'css_class' => '',
  );
  $pane->extras = array();
  $pane->position = 4;
  $display->content['new-7'] = $pane;
  $display->panels['left'][4] = 'new-7';
  $pane = new stdClass;
  $pane->pid = 'new-8';
  $pane->panel = 'right';
  $pane->type = 'content_field';
  $pane->subtype = 'uprofile:field_about_me';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'label' => 'hidden',
    'formatter' => 'default',
    'context' => 'relationship_node_from_user_2',
    'override_title' => 1,
    'override_title_text' => 'About %user',
  );
  $pane->cache = array();
  $pane->style = array();
  $pane->css = array(
    'css_id' => 'profile-about-me',
    'css_class' => '',
  );
  $pane->extras = array();
  $pane->position = 0;
  $display->content['new-8'] = $pane;
  $display->panels['right'][0] = 'new-8';
  $pane = new stdClass;
  $pane->pid = 'new-9';
  $pane->panel = 'right';
  $pane->type = 'content_field';
  $pane->subtype = 'uprofile:field_interests';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'label' => 'hidden',
    'formatter' => 'default',
    'context' => 'relationship_node_from_user_2',
    'override_title' => 0,
    'override_title_text' => '',
  );
  $pane->cache = array();
  $pane->style = array();
  $pane->css = array(
    'css_id' => 'profile-interests',
    'css_class' => '',
  );
  $pane->extras = array();
  $pane->position = 1;
  $display->content['new-9'] = $pane;
  $display->panels['right'][1] = 'new-9';
  $pane = new stdClass;
  $pane->pid = 'new-10';
  $pane->panel = 'right_bottom';
  $pane->type = 'views_panes';
  $pane->subtype = 'apk_user_posts-panel_pane_1';
  $pane->shown = TRUE;
  $pane->access = array();
  $pane->configuration = array(
    'items_per_page' => '10',
    'override_title' => 1,
    'override_title_text' => 'My posts',
    'context' => array(
      '0' => 'argument_uid_1',
    ),
  );
  $pane->cache = array();
  $pane->style = array();
  $pane->css = array(
    'css_id' => 'profile-user-posts',
    'css_class' => '',
  );
  $pane->extras = array();
  $pane->position = 0;
  $display->content['new-10'] = $pane;
  $display->panels['right_bottom'][0] = 'new-10';
$handler->conf['display'] = $display;


// END HANDLER EXPORT ******************************************************/
  
 $handlers[$handler->name] = $handler; 
 return $handlers;
}
