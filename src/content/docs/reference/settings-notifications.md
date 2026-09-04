---
title: "Settings: Notifications and email"
description: "The Notifications and E-mail tab — the sending account and event notification templates."
sidebar:
  order: 10
reviewStatus: converted-unverified
sourceNote: "Converted from docs.kotahi.community/advanced-kotahi/configuration.html. That single page covered every settings tab; it is split here so each tab can be verified on its own."
---

To reach these settings in Kotahi, choose **Settings → Configuration**.

### Emails

Configuration for the account information through which Kotahi will send emails. Currently, only Gmail is supported. These [instructions](https://support.google.com/accounts/answer/185833?hl=en) outline the correct Gmail password to use when configuring your account.

:::note[Screenshot being refreshed]
This screen is being re-captured against the current Kotahi release. Until then, here is what it shows.

**The screen shows:** 'Emails' settings section with three fields: 'Gmail email address', 'Gmail sender email address' and 'Gmail password' showing a masked value.
:::

## Event notifications

Configuration options for sending email notifications. Each workflow type has supporting events, and the option to assign an email notification template.

!['Event Notifications' settings section listing template dropdowns for 'Reviewer rejects an invitation to review' (empty), 'Reviewer invitation' set to 'Reviewer Invitation', 'Submitted review' (empty), 'Submitted manuscript' (empty), 'Unread discussion message' set to 'Chat notification', and '@mentioned in a message' set to '@mention notification'.](../../../assets/screenshots/2c0567f24dc7-1000w.png)

1. **Reviewer rejects an invitation to review** - choose from the email templates for the email to be sent to the reviewer when they reject an invitation to review.
2. **Reviewer invitation** - set the email to be sent to the reviewer when they are invited to review.
3. **\*Submitted review** - set the email to be sent to the author when the editor has submitted a decision (accept, revise or reject) .
4. **\*Submitted manuscript** - choose the email to be sent to the submitter when a research object is submitted.
5. **Author proof assigned invitation** - choose this email sent to the author when invited to participate in a round of proofing.
6. **Author proof completed and submitted feedback** - choose this email if you wish an editor (editor role assigned) to receive a notification that the author has submitted proofing feedback.
7. **Unread discussion message** - choose the email to be read when messages are remaining to be read in a chat for all users.
8. **Immediate Notification for users @mentioned in a message** - choose the email template to be sent when a user is @ mentioned in the chat.

\*\*\*\*\*Currently, only available when using the journal workflow (instance archetype)
