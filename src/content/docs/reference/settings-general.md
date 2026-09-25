---
title: "Settings: General"
description: "The General configuration tab — instance type and group identity."
sidebar: { order: 6 }
reviewStatus: verified
sourceNote: "Checked against the product September 2026. Converted from docs.kotahi.community/advanced-kotahi/configuration.html, which covered every settings tab on one page; it is split here so each tab can be verified on its own."
---

To reach these settings in Kotahi, choose **Settings → Configuration**.

![Kotahi Configuration page on the 'General' tab, alongside 'Workflow', 'Production', 'Integrations and Publishing Endpoints' and 'Notifications and E-mail' tabs, showing an 'Instance Type' dropdown set to 'Journal' and 'Group Identity' fields for Brand name, Title, Description, ISSN and Contact, with a 'Save' button.](../../../assets/screenshots/95ff97de272a-1000w.png)

## Instance type

Kotahi comes with preset configurations called **instance types**. Each group (tenant) has one, and it normally cannot be changed once an administrator has set it — but you can create as many groups as you like, each with its own instance type. Instance types are set by a developer in the system configuration (`.env`) file. See [Technology supporting people](../../concepts/technology-supporting-people/) for what else sits below the settings screens.

The instance types are:

1. **journal** — a typical journal workflow
2. **prc** — a publish-review-curate workflow
3. **preprint1** — submit, review and publish from a single form
4. **preprint2** — as preprint1, and can import preprints

## Group identity

Basic branding for your group.

![Kotahi 'Group Identity' configuration screen with a 'Brand name' field, 'Brand primary colour' and 'Brand secondary colour' swatches, and Logo and Favicon uploads showing the current files with 'Remove' links.](../../../assets/screenshots/7b4fd9de7311-2500w.png)

**Brand name** — the name of the group. It appears in the dropdown at login on installations with more than one group.

**Title** — the title of your publication.

**Description** — a brief summary of what your publication is for.

**ISSN** — your publication's ISSN, if it has one.

**Contact** — contact details, as plain text.

**Brand primary colour** — used for the left-hand menu, some buttons and title text.

**Brand secondary colour** — used for additional highlighting.

**Logo** — the logo on the group login page.

**Favicon** — the icon shown on the browser tab.
