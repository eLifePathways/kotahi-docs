---
title: "Email templates"
description: "Creating and editing the email templates Kotahi sends."
sidebar:
  order: 6
reviewStatus: converted-unverified
sourceNote: "Converted from docs.kotahi.community/advanced-kotahi/email.html."
---

*Managing email templates.*

There are many options for managing customized event-driven automated emails.

You can view, edit and/or create email notification templates here. All templates appear as options to assign in the event in the Configuration manager, recipients in the Task manager and when sending an ad-hoc Notification.

![Kotahi 'Email Templates' page: a template list (@mention notification, Author Invitation, Chat notification, Reviewer Invitation, Task notification) beside the selected template's SUBJECT, CC and BODY fields, using Handlebars variables such as {{ currentUser }} and {{ recipientName }}.](../../../assets/screenshots/03f423e9295c-750w.png)

Group Managers can create a new template or edit an existing template from the Settings>Email page.

Email body content can be personalised using the Handlebars.js variables framework. A set of variables map to select metadata content that is either system-generated (e.g. manuscript id) or captured in a form (e.g. manuscript title).

These initial variables allow for the insertion of text and hyperlinks in the body content of an email notification template e.g. Manuscript titles, sender/recipient usernames, manuscript ids etc.

A list of variables that can be used include:

1. Manuscript title - {{ manuscriptTitle }}
2. Group login link - {{{ loginLink }}}
3. Sender name - {{ senderName }}
4. Recipient name - {{ recipientName }}
5. Author name - {{ authorName }}
6. \*Manuscript link (URL) - {{{ manuscriptLink }}}
7. Manuscript title link (`submission.link`) - {{{ manuscriptTitleLink }}}
8. Manuscript number (`shortId`) - {{ manuscriptNumber }}

\*This link is adapted based on the receiver's role. If an editor receives an email notification that includes a link to a Manuscript in Kotahi - the link will point to the Control panel. If the recipient is a reviewer, the link will direct the user to the Review page and the author to the Submission page.

Group Managers can manually add a CC from the Emails>Email template>CC field, allowing someone apart from the primary recipient to receive a copy of the email. Selecting the checkbox will CC all editors assigned to a manuscript into the email notification when sent.

![Email template editor with the CC area outlined in red: a CC field containing an example address and an unticked checkbox 'Automatically add manuscript editors in 'cc' when sending this email (if applicable)', above the Handlebars body text and an 'Update' button.](../../../assets/screenshots/3195d5074159-1000w.png)
