---
title: "Customise email templates"
description: "Writing the emails Kotahi sends, and deciding when each one goes out."
sidebar: { order: 6 }
reviewStatus: rewritten
sourceNote: "Rewritten September 2026 against the current release. Replaces material converted from docs.kotahi.community/advanced-kotahi/email.html."
---

Sending an email from Kotahi takes three things: a mail provider to send it, a template to send, and an event to send it on. Group Admins and Admins can set all three.

## 1. Connect a provider

Nothing sends until Kotahi has SMTP details. See [Settings: Email and notifications](../../reference/settings-notifications/).

## 2. Write the template

Choose **Configuration → Notification Templates**, then **Create**, or open an existing template to edit it.

A template has a **Description** — how you will recognise it in a list — a **Subject**, and a **Body**.

The body can carry variables that Kotahi fills in when it sends. They use the Handlebars syntax:

| Variable | What it inserts |
| --- | --- |
| `{{ manuscriptTitle }}` | The manuscript's title |
| `{{ manuscriptNumber }}` | Its short ID |
| `{{ senderName }}` | The name of whoever triggered the email |
| `{{ recipientName }}` | The name of whoever receives it |
| `{{ authorName }}` | The author's name |
| `{{{ loginLink }}}` | A link to log in to your group |
| `{{{ manuscriptLink }}}` | A link to the manuscript |
| `{{{ manuscriptTitleLink }}}` | The title, as a link to the manuscript |

**`{{{ manuscriptLink }}}` resolves differently for each recipient.** An editor is taken to the Control page, a reviewer to the Review page, an author to the Submission page. One variable, the right destination for whoever opens the email.

Links use three braces rather than two.

## 3. Send it on an event

Choose **Configuration → Notification Events**, find the event, and assign your template to it.

Until an event has a template, nothing is sent when it occurs.
