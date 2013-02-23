<?php

/**
 * @file
 * This file is empty by default because the base theme chain (Alpha & Omega) provides
 * all the basic functionality. However, in case you wish to customize the output that Drupal
 * generates through Alpha & Omega this file is a good place to do so.
 * 
 * Alpha comes with a neat solution for keeping this file as clean as possible while the code
 * for your subtheme grows. Please read the README.txt in the /preprocess and /process subfolders
 * for more information on this topic.
 */

function adam_site_theme_preprocess_block(&$variables) {
  if ($variables['block']->module == 'twitter_block') {
    $variables['block']->twitter_image = variable_get('adam_tweaks_twitter_image', NULL);
  }
}
