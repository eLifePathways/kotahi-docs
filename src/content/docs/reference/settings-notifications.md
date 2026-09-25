---
title: "Settings: Email and notifications"
description: "The Email Settings, Notification Templates and Notification Events tabs."
sidebar: { order: 10 }
reviewStatus: verified
sourceNote: "Checked against Kotahi staging, September 2026. Converted from docs.kotahi.community/advanced-kotahi/configuration.html, which covered every settings tab on one page; it is split here so each tab can be verified on its own."
---

Choose **Configuration** in the left menu. Three tabs cover email: **Email Settings** connects Kotahi to a mail provider, **Notification Templates** holds the emails themselves, and **Notification Events** decides when each one is sent.

:::note[Screenshots being refreshed]
These tabs are being re-captured against the current Kotahi release.
:::

## Email Settings

Kotahi connects to any mail provider over SMTP — SendGrid, Mailgun or your own server. Your provider's SMTP documentation supplies these values.

**Sender** — the sender name and address recipients see, for example `"Kotahi Journal" <noreply@example.com>`. Some providers also need this address registering at their end.

**Host** — your provider's SMTP hostname.

**Port** — the SSL port your provider uses, usually 465.

**User** — the username for your mail provider account, not a Kotahi username.

**Password** — the password that goes with it.

**BCC** — an optional address that receives a blind copy of **every** email Kotahi sends. Useful for archiving; worth a moment's thought about who should hold that copy.

### Advanced settings

**Secure connection** — establishes a secure connection immediately. Normally on for port 465.

**Require TLS** — only applies when Secure connection is off. Opens a plain connection and upgrades it once contact is made, which is how port 587 usually works.

Leaving both off is not recommended.

## Notification Templates

Each template has a **Description**, a **Subject** and a rich-text **Body**.

Templates are listed as **System** — the ones Kotahi ships, including author and reviewer invitations, proofing notifications and task notifications — and **Custom**, which are yours. **Create** adds a new one.

## Notification Events

This tab pairs an event with a template: when the event happens, that template is sent. Events are listed on the right with search and filtering, and each one can be expanded to see or set its template.

Events cover the review lifecycle — invitations issued, accepted and declined, for authors, reviewers and collaborative reviewers — along with proofing and discussion activity.

:::caution[A struck-through template name means it is missing]
If an event shows its template name struck through in red, the template it points at no longer exists. Assign an existing template, or the event has nothing to send.
:::
