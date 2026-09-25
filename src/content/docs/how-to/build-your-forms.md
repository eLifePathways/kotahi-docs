---
title: "Build your forms"
description: "The form builder — submission, review and decision forms, field properties, and who sees what."
sidebar: { order: 1 }
reviewStatus: verified
sourceNote: "Rewritten September 2026 against the current release. Merges three pages converted from docs.kotahi.community (submission.html, reviewer.html, eval.html), because Kotahi builds all three forms in one interface."
---

Kotahi has three forms and one builder for all of them. Choose **Forms** in the left menu.

- **Submission form** — what authors fill in. It also decides which metadata fields are available to editors later, and what can be published.
- **Review form** — what reviewers fill in when they submit a review.
- **Decision form** — what editors fill in when they make a decision.

:::caution[Form edits are not retroactive]
Changing a form alters what is collected from that point on. It does not change data already submitted on existing manuscripts.
:::

:::note[Screenshots being refreshed]
This interface is being re-captured against the current Kotahi release.
:::

## Add a field

Open a form and click the green **+** below the last field. The **Field Properties** dialog opens, starting with **Field type**.

Types are grouped as generic — Text, Rich text, Dropdown selection, Radio buttons, Checkboxes, List of contributors, List of links (URLs) — and special types that Kotahi treats as known metadata, including Title, Abstract, DOI, Attachment, Image attachment and Last edit date.

Choosing a type changes the rest of the dialog.

## Field properties

**Field title** — what the field is called on the form.

**Name (internal field name)** — the metadata identifier, for example `submission.preprintServer`. This matters more than it looks. The name is how the value is carried into JATS export, the public website, the Manuscripts page columns and anything you send to an external system, so it is worth deciding deliberately rather than later.

**Field placeholder** — prompt text inside the input.

**Field description** — a fuller explanation, shown beneath the field.

**Field options** — for dropdowns, radio buttons and checkboxes, the list of choices. Add one per line as `label | value`: the label is what people see, the value is what gets stored. A colour can be set for each.

**Short title** — used where space is tight, such as concise listings.

**Validation options** — including whether the field is **Required**.

## Who sees what

Three properties decide how a field travels through the workflow:

**Hide from reviewers** — keeps the field off the Review page.

**Hide from authors** — collects something without the author seeing it, such as an internal identifier.

**Include when sharing or publishing** — whether the field reaches publication or stays internal.

Between them they set what authors give you, what reviewers see, and what becomes public — from one form.

## The Verdict field

Review and decision forms use a **Verdict** field for the recommendation or the decision itself.

On a decision form, with Verdict set to Radio buttons and options for Accept, Revise and Reject:

- **Accept** enables the Publish action
- **Revise** lets the author submit a new version
- **Reject** disables the Publish action

## More than one form

Each form type can have several forms, but only one is live at a time. The live one carries an **Active** badge.

The gear icon beside it opens the **Update Form** dialog, which holds the form's title, its description — the text shown above the fields — a **Show confirmation page when submitting?** choice, and **Make this the active form**.
