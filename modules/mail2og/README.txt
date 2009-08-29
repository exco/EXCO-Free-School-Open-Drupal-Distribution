; $Id: README.txt,v 1.1 2009/06/10 14:04:37 arthuregg Exp $

Mail To Organic Groups
--------------------------------------
This module works in concert with MailHandler to provide email to OG functionality.
You may also want to use Mail2Web to provide full email support


Drupal Setup
--------------------------------------
Install this module and enable it
Make sure you have a MailHandler mailbox setup to retrive OG emails from an email account
Navigate to admin > settings > mail2og
Select which groups you want email enabled on, which mailbox you want to use, and what content type you want to have this email always create
Enable permissions for users to be able to send email to groups
Enable the "Email information for Mail2og" block (will only display on group pages)

Email Setup
--------------------------------------
The easiest way to configure the email system for mail2og is to have email
aliases which point to a single box. If you can use a catch all alias, this is
the easiest way to maintain the email system. 

If you can not setup a catch all, you will want to do something like this:
  group_name@mydomain.com -> retrieve@domain.com
  
If you can setup a catch all, you will want to do:
  *@domain.com -> retrive@domain.com
  

Usage
--------------------------------------
Users who have permissions can send email to group_name@domain.com. If a group name
(title) has capitals or spaces in it, the email address will will be all lowercase
and replace spaces with underscores. For example: "My Great Group" would become:
  my_great_group@domain.com
The system will also replace a dash (-) if a user uses this by accident. 

