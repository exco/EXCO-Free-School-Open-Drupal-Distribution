<?php
// $Id: theme.inc,v 1.2.4.9 2009/05/04 01:59:07 michellec Exp $

/**
 * @file
 * Holds theme and preprocess functions.
 */

// PREPROCESS FUNCTIONS ******************************************************/

function template_preprocess_advanced_profile_visitors(&$variables) {
  $visitors = advanced_profile_visitors($variables['account']->uid);

  if (!empty($visitors)) {
    $variables['visitors'] = theme_item_list($visitors);
  }
  else {
    $variables['visitors'] = t("No recent visitors.");
  }
}

function advanced_profile_preprocess_user_profile(&$variables) {
  $image_path = advanced_profile_path_to_images();
  $variables['author_pane'] = theme('author_pane', $variables['account'], $image_path, 'advanced_profile_author-pane');
  $variables['profile_visitors'] = theme('advanced_profile_visitors', $variables['account']);
}

/**
 * Preprocesses template variables for the author pane.
 */
function advanced_profile_preprocess_author_pane(&$variables) {
  // Author pane is used in various places. The only way to be sure to only
  // hit it when we are using it is to check the template suggestion.
  if ($variables['template_suggestion'] == 'advanced_profile_author-pane') {
    // Attempt to override the user picture fetched by Author Pane from core.
    $sized_picture = theme('advanced_profile_user_picture', $variables['account']);
    if (!empty($sized_picture)) {
      $variables['picture'] = $sized_picture;
    }
  }
}

// THEME FUNCTIONS ***********************************************************/

/**
 * Theme function to return imagecached version of the user picture.
 */
function theme_advanced_profile_user_picture($account) {
  // Get the imagecache preset to use, if any.
  $preset = variable_get('advanced_profile_user_picture_preset', '');
  
  // Only proceed if user pictures are enabled, and there is a preset set, and 
  // imagecache is enabled. For performace reasons, we return nothing if these
  // critera aren't met because we only call this function when the non
  // imagecached version is already created. If you use this function elsewhere
  // you will need to provide a picture when imagecache is not used.
  if (variable_get('user_pictures', 0) && !empty($preset) && module_exists('imagecache')) {
    if ($account->picture && file_exists($account->picture)) {
      // User has picture, so use that
      $alt = t("@user's picture", array('@user' => $account->name ? $account->name : 'Visitor'));
      $picture = theme('imagecache', $preset, $account->picture);   
    } 
    else {
      // User doesn't have a picture so use the default, if any
      $default_picture = variable_get('user_picture_default', ''); 
      if ($default_picture) {
        $picture = theme('imagecache', $preset, $default_picture);
      }     
    }
    
    if (!empty($picture)) {
      // If the user has access to view profiles, link the picture
      if (!empty($account->uid) && user_access('access user profiles')) {
        $picture = l($picture, "user/$account->uid", array('title' => t('View user profile.'), 'html' => TRUE));
      }
    }
    
    return '<div class="picture">' . $picture . '</div>';
  }
}

// THEME UTILTIY FUNCTIONS ***************************************************/

/**
 * Returns the path to the images used by this module.
 */
function advanced_profile_path_to_images() {
  $image_directory = variable_get('advanced_profile_image_directory', '');
  if (!empty($image_directory)) {
    $image_directory = path_to_theme() . '/' . $image_directory;
  }
  else {
    $image_directory = drupal_get_path('module', 'advanced_profile') . '/images';
  }

  return $image_directory;
}

/**
 * Adds the needed CSS.
 */
function advanced_profile_add_css() {
  // Find the CSS file by looking first in the theme and then in the module.
  $css_file = path_to_theme() . '/advanced_profile.css';

  if (!file_exists($css_file)) {
    $css_file = drupal_get_path('module', 'advanced_profile') . '/theme/advanced_profile.css';
  }

  drupal_add_css($css_file);
}



