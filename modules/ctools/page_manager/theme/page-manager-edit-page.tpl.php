<?php
// $Id: page-manager-edit-page.tpl.php,v 1.2 2009/07/09 17:51:50 merlinofchaos Exp $
/**
 * @file
 * Template for the page manager page editor.
 *
 * Variables available:
 * - 
 *
 * For javascript purposes the id must not change.
 */
?>
<div id="page-manager-edit">
  <?php print $locked; ?>
  <div class="page-manager-wrapper">
    <?php if (isset($operations['primary'])): ?>
      <div class="primary-actions clear-block actions">
        <?php print $operations['primary']; ?>
      </div>
    <?php endif; ?>
    <div class="page-manager-tabs clear-block">
      <div class="page-manager-edit-operations">
        <div class="inside">
          <?php print $operations['nav']; ?>
        </div>
      </div>
      <div class="page-manager-ajax-pad">
        <div class="inside">
          <div class="content-header">
            <div class="content-title">
              <?php print $changed; ?>
              <?php print $content['title']; ?>
            </div>
            <?php if (isset($operations['secondary'])): ?>
              <div class="secondary-actions clear-block actions">
                <?php print $operations['secondary']; ?>
              </div>
            <?php endif; ?>
          </div>

          <div class="content-content">
            <?php print $content['content']; ?>
          </div>
        </div>
      </div>
    </div>
  </div>
  <?php print $save; ?>
</div>