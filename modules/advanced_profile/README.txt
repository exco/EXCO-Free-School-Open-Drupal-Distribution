$Id: README.txt,v 1.10.4.13 2009/07/12 20:17:10 michellec Exp $

CONTENTS OF THIS FILE
---------------------
 * Introduction
 * Installation

INTRODUCTION
------------
Advanced Profile Kit (http://drupal.org/project/advanced_profile) provides building
blocks for putting together fancy user profile pages like those commonly found on social
networking sites.

INSTALLATION
------------
Since this is a kit module, it is not necessary to install this exactly as directed. 
Depending on your experience, you can pick and choose which pieces to use to build your 
unique profiles. The instructions here will get you up and running with the standard APK 
profile.

1. Install:
   <a href="http://drupal.org/project/author_pane>Author Pane</a> (Author pane),
   <a href="http://drupal.org/project/panels">Panels 3</a> (Panels),
   <a href="http://drupal.org/project/ctools">CTools</a> (Chaos Tools, Page Manager),
   <a href="http://drupal.org/project/views">Views</a> (Views, Views content panes),
   <a href="http://drupal.org/project/cck">CCK</a> (Content, Content Copy, Fieldgroup, Option Widgets, Text),
   <a href="http://drupal.org/project/content_profile">Content Profile</a>, and
   <a href="http://drupal.org/project/link">Link</a> (Link - grouped with CCK).
   [OPTIONAL] <a href="http://drupal.org/project/user_relationships">User Relationships</a> 
   [OPTIONAL] Statistics (part of core, needed for user visits pane)

2. Copy the entire advanced_profile module directory into your normal directory for
   modules, usually sites/all/modules

3. Enable the advanced profile module in ?q=admin/build/modules

5. Navigate to ?q=admin/user/settings and enable picture support if you want users to
   have avatars on their profiles.

6. Advanced Profile can create the profile node type for you. It comes with fields
   typically found on user profiles. You can further edit this type to add or remove
   fields. If you prefer to use your own node type, skip this step. If you just want to
   add the fields, you can use the content copy module directly and import the contents
   of uprofile.inc. If you skip this step, you will need to delete the uncreated groups
   from the page.

    a) Navigate to ?q=admin/settings/advanced-profile
    b) Profile type auto creation: Check this box and save configuration. This option
       will be disabled once the node type exists and you will need to delete your node
       type if you want to re-create it. Because of issues with CCK's content copy module,
       this step often fails and gives no errors. You will know it failed if the box is still
       checkable. If that happens, try importing uprofile.inc directly at ?q=admin/content/types/import
 
7. Configure Advanced Profile Kit
    a) Navigate to ?q=admin/settings/advanced-profile (same place as step #6)
    b) Enter the number of profile visits to show.
    c) Check the box to only show the last visit from each user.
    d) The granularity on the profile vists list defaults to 2. Set it to 1 to take up
       less room or to 3 for more precision.
    e) Check any roles you don't want to show up on the list. Make note of the performance warning.

8. Set access control ( ?q=admin/user/permissions ): This will vary from site to site, but you
   will want to look at these items in particular:

    a) access user profiles
    b) create uprofile content
    c) edit any uprofile content (admin perm)
    d) edit own uprofile content

9. Configure statistics module
    a) Navigate to ?q=admin/reports/settings
    b) Enable access log: Enabled
   
10. If you are using the User Relationships module, there is an extra view that is not automatically added the the page.
    a) Most themes have a shortcut on the user page tabs that says "Edit Panel". If you see that, click that and skip to
       step E.
    b) Navigate to ?q=admin/build/pages/list
    c) Under System pages -> User view click the "operations" link and choose "Task handlers"
    d) Cick the "operations" link again and choose "Panel content"
    e) Click the + and then "add content" where you want the User Relationships view to appear.
    f) In the Advanced Profile Kit category, click "Friends Gallery (UR)"
    g) Make changes to the settings if wanted and then click "Finish".