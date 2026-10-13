---
title: "Manage users and roles"
description: "The roles Kotahi uses, what each one can do, and how permissions are assigned."
sidebar:
  order: 4
reviewStatus: verified
appliesTo: "release 2026.09.17-0"
sourceNote: "Rewritten September 2026 against permissions confirmed by Kotahi engineering. Replaces material converted from docs.kotahi.community/advanced-kotahi/users.html. The permissions were a four-column table until 13 October 2026, when they became nested lists. At 375px the table overflowed by 20px and Starlight makes the table element itself the scroll container with no keyboard access, so the right-hand column was unreachable for a keyboard user — axe scrollable-region-focusable, WCAG 2.1.1 Keyboard. Shortening the row labels does not fix it: the three role columns need 235px between them, and the only remaining way to narrow the table would be abbreviating the role names, which is precisely what this page exists to get right. Do not restore the table. If a fourth role arrives with issue 539, keep the list form."
---

Kotahi has three **group roles** — Group Manager, Group Admin and Admin. They
nest: each can do everything the role before it can, and more.

Editor, reviewer and author are **not** group roles. They are assignments made
on an individual manuscript.

## Where users are managed

Users are managed from **Users** in the left menu, which requires Group Admin or Admin.

:::note[Screenshot being refreshed]
This screen is being re-captured against the current Kotahi release. Until then,
here is what it shows.

**The screen shows:** Kotahi Settings 'Users' table listing ten of 24 users,
each row showing name and ORCID iD, 'Created' and 'Last Online' dates, role
tags, and a 'Delete' link, with pagination below.
:::

Each row shows the user's name, when they created their account, when they were
last online, the roles they hold, and a link to delete them.

## What each group role can reach

**Group Manager**

- Manuscripts page — view, archive, import
- COAR Notify inbox
- Control page
- Production page

**Group Admin** — all of the above, plus:

- Reports
- Task templates
- Configuration
- Form builder
- User management, including granting group roles
- Public website

**Admin** — all of the above, plus:

- Any user's profile
- Granting Admin to someone else

A Group Admin's permissions apply to their own group. An Admin holds the same
permissions everywhere, across every group.

## Who can publish

This depends on your instance type.

- **Preprint instances** — only Group Admins can publish.
- **Journal and PRC instances** — Group Managers and editors can publish by
  default. A setting can block either or both. That setting sits under
  Configuration, so only a Group Admin can change it.

## Roles assigned on a manuscript

**Editor** — assigned on a manuscript's control page. An editor can use the
control and production pages **for that manuscript**. Editors do not see the
Manuscripts page, and there is no group-wide editor role.

**Reviewer** — assigned to review a manuscript. Reviewers reach the review page
and review form, and can communicate with the editorial team. Their assignments
appear on the Dashboard under 'To Review'.

**Author** — can access and manage their own submissions, submit further
versions, and communicate with the editorial team. Their submissions appear on
the Dashboard under 'My Submissions'.

## Making everyone an admin

A setting under Configuration assigns Group Admin and Admin to every user at
their next login. It is off by default, and it gives you a flat community
hierarchy in which everyone can reach everything.

**It cannot be undone by switching it off.** Turning the setting off stops new
users being granted those roles, but anyone who already has them keeps them.
