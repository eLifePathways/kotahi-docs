---
title: "BATS CMS administration"
description: "Administering a BATS CMS site: signing in, managing team members, publications, categories, page content, users and settings."
sidebar:
  order: 4
reviewStatus: new
appliesTo: "BATS CMS as at June 2026"
sourceNote: "Generalised from an internal Kotahi Admin Training Guide (June 2026). Customer-specific details, personal contact information and unreleased features have been withheld — see the note at the foot of this page."
---

**BATS CMS** is the content management layer that presents your published
content as a public website. It reads from Kotahi over the Kotahi GraphQL API,
so publications created in Kotahi can surface on your site without re-entry.

This page covers administering a BATS CMS site. It does not cover the Kotahi
submission and review side — see [Using Kotahi](/using-kotahi/dashboard/) for
that.

:::note[Two systems, one platform]
**Kotahi** handles submission and peer review: authors submit, editors manage
review, reviewers give feedback. **BATS CMS** handles the public-facing
website: what visitors see. They are connected but administered separately,
with separate logins.
:::

## Signing in to the admin panel

1. Go to your site's admin URL — your public site address followed by `/admin`.
2. Enter your username and password. Contact eLife Pathways to request an
   account.
3. You will land on the **Admin Dashboard**, which shows live content counts.

The sidebar gives you: Dashboard, Team Members, Categories, Publications,
Background Papers, What We Do, User Management, Settings, and a link back to
the public site.

## Team members

**Admin → Team Members.** Researchers and staff shown on your site.

1. Click **Add Team Member**.
2. Complete the required fields: **Name**, **Title/Position**,
   **Institution/Organisation**, **Bio/Description**.
3. Optionally add an email address, website URL, social media link and profile
   photo.
4. Click **Save**. The member appears in the list immediately.

To change the display order, click **Reorder Members**, drag rows into the
order you want, then save. To change or remove an entry, use the pencil (edit)
or bin (delete) icon on its row.

## Publications

**Admin → Publications.** Research outputs listed on your site.

1. Click **Add Publication**.
2. Complete the form: **Title**, **Authors**, **Year**, plus optional
   publication date and abstract.
3. Set any quality or assessment fields your site is configured with.
4. Assign a **category**, and add a link to the source article.
5. Click **Save**.

### Refreshing from Kotahi

**Refresh Publications** re-fetches data from the connected Kotahi backend. Use
it if publications added in Kotahi are not appearing on the site.

:::tip[Link, don't copy]
Where a publication exists elsewhere, link to the original source article
rather than reproducing its abstract on your site. It avoids creating a second
copy of text you do not control, and sidesteps the rights question entirely.

Some sites make this a formal editorial policy. If yours has one, follow it —
it will be recorded in your own site's editorial guidance, not here.
:::

## Background papers

**Admin → Background Papers.** Educational and contextual resources.

1. Click **Add Paper**.
2. Complete the form: **Title** and **Category** are required; a resource link,
   description and image are optional.
3. Click **Save**.

## Categories

**Admin → Categories.** Categories group publications and background papers.
Each has a name, a description, and an optional image.

1. Click **Add Category**, then give it a name and description. Upload an image
   if you want it represented visually.
2. When adding a publication or background paper, select the category from the
   dropdown.
3. Use the icons on each category row to edit or delete it.

Deleting a category does **not** delete the content assigned to it.

:::note[Category names vary by site]
The category taxonomy is configured per deployment, so the names in your admin
panel will reflect your own subject area rather than a fixed list.
:::

## "What We Do" content

**Admin → What We Do** has two tabs.

### Sections tab

1. **Add New Section** — set a title, subtitle, slug (the URL name) and display
   order.
2. Click **Edit** on any row to update its details or change its order.

Structural changes beyond this require developer input — contact eLife
Pathways.

### Content tab

Where the descriptive text and media for each section is managed.

1. Select the section you want to add content to.
2. Click **Add Content**, choose a content type (text, image and so on),
   complete the form, and save.
3. Use the drag handles to reorder content blocks within a section.

## User management

**Admin → User Management.** To create an account, go to **Add User**, enter a
username, and set a password. Share credentials over a secure channel, not
email.

:::danger[Before your site goes live]
- **Change the default admin password.** A site launched on default credentials
  is a site anyone can edit.
- **Give every administrator their own account.** Shared logins mean you cannot
  tell who changed what, and cannot revoke access for one person.
:::

## Settings

**Admin → Settings** covers four areas.

| Area | What you can change |
| --- | --- |
| Website | Site name, contact email, site description, theme (Default / Light / Dark / System) |
| Features | **Allow Registration** — public self-registration on or off. **Maintenance Mode** — restricts the site to admins |
| API | The Kotahi GraphQL endpoint this CMS reads from. Set per deployment; contact eLife Pathways to change it |
| Security | Contact eLife Pathways for security configuration changes |

## Getting help

Email the eLife Pathways team at
**[pathways@elifesciences.org](mailto:pathways@elifesciences.org)**.

:::caution[What was removed from the source document, and why]
This page was generalised from an internal training guide written for one
specific BATS CMS deployment. The following was deliberately left out:

- **A specific deployment URL.** The source named a live customer admin panel
  on a shared hosting domain. Publishing the admin URL of someone else's site
  is not something to do by default.
- **Four eLife staff email addresses and one external collaborator's
  institutional address.** Replaced with a single team contact.
- **The name and institution of a named individual** identified as site
  administrator. That is a customer's staffing arrangement, not product
  documentation.
- **An unreleased feature.** The source described issue reporting and an
  analytics dashboard under an "upcoming feature" heading. Documenting
  unshipped functionality on a public site creates support requests for
  something that does not exist yet.
- **Customer-specific taxonomy and assessment fields.** The source used one
  deployment's subject categories and its bespoke evidence-quality fields.
  Described generically here instead.

**Open question for eLife Pathways:** is BATS CMS a product with one shared
public documentation set, or is each deployment documented for its own
customer? This page assumes the former. If it is the latter, this content
belongs in a customer-specific pack rather than on a public site.
:::
