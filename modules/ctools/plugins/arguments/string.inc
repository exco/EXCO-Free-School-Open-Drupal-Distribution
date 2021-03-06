<?php
// $Id: string.inc,v 1.3 2009/07/11 01:17:44 merlinofchaos Exp $

/**
 * @file
 *
 * Plugin to provide an argument handler for a raw string
 */

/**
 * Implementation of specially named hook_ctools_arguments().
 */
function ctools_string_ctools_arguments() {
  $args['string'] = array(
    'title' => t("String"),
    // keyword to use for %substitution
    'keyword' => 'string',
    'description' => t('A string is a minimal context that simply holds a string that can be used for some other purpose.'),
    'context' => 'ctools_string_context',
    'placeholder form' => array(
      '#type' => 'textfield',
      '#description' => t('Enter a value for this argument'),
    ),
  );
  return $args;
}

/**
 * Discover if this argument gives us the term we crave.
 */
function ctools_string_context($arg = NULL, $conf = NULL, $empty = FALSE) {
  // If unset it wants a generic, unfilled context.
  if ($empty) {
    return ctools_context_create_empty('string');
  }

  $context = ctools_context_create('string', $arg);
  $context->original_argument = $arg;

  return $context;
}
