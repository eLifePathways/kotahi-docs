---
title: "Settings: Workflow"
description: "The Workflow configuration tab — dashboard, manuscripts page, control panel, submission, review, discussions, tasks, reports and users."
sidebar: { order: 7 }
reviewStatus: verified
sourceNote: "Checked against Kotahi staging, September 2026. Converted from docs.kotahi.community/advanced-kotahi/configuration.html, which covered every settings tab on one page; it is split here so each tab can be verified on its own."
---

Choose **Configuration** in the left menu, then the **Workflow** tab.

:::note[Screenshots being refreshed]
This tab is being re-captured against the current Kotahi release.
:::

## Dashboard

**Landing page for Group Manager users upon login** — the Dashboard or the Manuscripts page. The Dashboard suits most groups; flatter communities sometimes prefer everyone to land on the Manuscripts page, which is common among small teams and some preprint review communities.

**Dashboard pages visible to registered users** — which of the three Dashboard tabs appear: **My Submissions**, **Review Assignments** and **Editing Queue**. Show only what your group uses. A journal usually wants all three; a community reviewing automatically imported preprints may want only Review Assignments.

**My Submissions / Review Assignments / Editing Queue Column Fields** — the columns shown in each of those tabs. Defaults are Manuscript Number and Title, plus Created and Updated for My Submissions, and Status and Version for the Editing Queue.

## Manuscripts page

**List columns to display on the Manuscripts page** — a comma-separated list of internal field names. The default is `shortId, meta.title, created, updated, status, submission.labels, author`.

This is more useful than it first appears. A field you add in the submission form builder can be listed here, so a workflow-status dropdown on the submission form becomes a column on the Manuscripts page. Fields can be hidden from the submission and review forms and still used as columns.

**Number of manuscripts listed per page on the Manuscripts page** — pagination size. The default is 10.

**Hour when manuscripts are imported daily (UTC)** — when the daily preprint import runs.

**Number of days a manuscript should remain in the Manuscripts page before being automatically archived** — leave it empty to turn auto-archiving off. Useful where imports bring in more than a team can triage.

**'Add new submission' action visible on the Manuscripts page** — shows the button to start a submission from this page, which lets a group with automatic imports also add items by hand.

**Display action to 'Select' manuscripts for review from the Manuscripts page** — 'Select' is a triage action. It sets the manuscript's label to 'Ready to evaluate', which can then be filtered on.

**Import manuscripts manually using the 'Refresh' action** — adds a Refresh button so the import can be run on demand rather than waiting for the daily run.

## Control panel

**Display manuscript short id** — shows Kotahi's internal identifier on the Control page. It is not a DOI; it exists so people can refer to a manuscript easily.

**Display author team table** — shows the author team on the Control page.

**Reviewers can see submitted reviews** — if off, a reviewer sees only their own review.

**Authors can see individual peer reviews** — if on, authors see each reviewer's review in full.

**Allow authors to participate in proofreading rounds** — lets editors assign authors to a round of proofing.

**Editors can edit submitted reviews** — lets an editor change the text of a review after it has been submitted.

**Editors can edit submitted discussion form field posts** — the same, for posts in the discussion form fields.

**Editors can delete submitted reviews** — lets an editor remove a submitted review.

**Group Managers can Publish articles/reviews** and **Editors can Publish articles/reviews** — who may publish, alongside what your instance type allows. See [Manage users and roles](../../how-to/manage-users-and-roles/).

**Control pages visible to editors** — which tabs an editor sees on the Control page: Team, Decision, Reviews, Manuscript text, Metadata, Tasks & Notifications, and COAR Notify Metadata.

## Submission

**Allow an author to submit a new version of their manuscript at any time** — off means an author waits for a new review round before submitting a new version. On means they can submit at any point, including mid-review. Used where the review process and the submission system are separate, as in preprint review.

## Submission page

**Title** and **Description** — the heading and introductory text an author sees on the submission page. The description is a rich-text field.

**Choose a submission view** — how an author submits. One of:

- Allow an author to upload a manuscript file only
- Allow an author to upload a manuscript file with a form
- Allow an author to submit a form
- Allow an author to submit a form and access a blank editor

**Prevent Group Manager from altering a manuscript that they have authored post-submission** — stops someone holding Group Manager rights from editing their own submission once it has been made.

## Review page

**Reviewers can see the Decision form data** — whether a reviewer can see the decision and evaluation information.

## Discussion channels

Four settings control who can see the discussion attached to a manuscript:

- Hide discussion from Group Admins and Group Managers
- Hide discussion from editors, reviewers and authors
- Hide discussion from authors only
- Hide discussion from reviewers only

## Task Manager

**Set timezone for Task Manager due dates** — the timezone used by the date picker when setting due dates on tasks.

## Reports

**Group Manager and admin can access Reports** — shows or hides the Reports page in the menu.

Despite its wording, this checkbox does not grant access to any role. It turns the Reports page on or off for everyone. Reports are available to Group Admins and Admins.

## User management

**All users are assigned Group Manager and Admin roles** — the label is inaccurate: the roles granted are **Group Admin** and **Admin**. It gives you a flat community hierarchy in which everyone can reach every page. Roles are applied at each user's next login, and it is off by default.

**Switching it off later does not take the roles away.** Anyone already granted Group Admin and Admin keeps them.
