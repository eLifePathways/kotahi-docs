---
title: "Key features"
description: "What Kotahi does, across configuration, review, production and publishing."
sidebar:
  order: 2
reviewStatus: rewritten
sourceNote: "Rewritten September 2026. Replaces material converted from docs.kotahi.community/getting-started/features.html."
---

Kotahi is open source, and nearly everything below is a setting rather than a code change.

## Configure it to your process

- **Build your own forms.** Submission, review and decision forms are assembled in a drag-and-drop editor — add, remove and reorder fields, and attach the metadata tags your domain needs to each one. See [Build a submission form](../../how-to/build-a-submission-form/).
- **Choose a review model.** Open, single-anonymous or double-anonymous. Reviewers can work on a shared review or submit individually, and you decide how much of it the author sees. See [Review models](../../concepts/review-models/).
- **Set the tasks.** Task templates give every submission the same checklist, and it can be adjusted for an individual manuscript. See [Set up task templates](../../how-to/set-up-task-templates/).
- **Write the emails.** Every notification Kotahi sends is an editable template. See [Customise email templates](../../how-to/customise-email-templates/).
- **Keep the history.** Each new submission round creates a new version of both the manuscript and its metadata, so the trail from first draft to published article stays intact.

## Produce the files

- **JATS XML** — tag content visually in the production editor and Kotahi converts it to validated JATS. Nobody needs to write XML.
- **Print-ready PDFs** — typeset in the browser with [Paged.js](https://pagedjs.org/), one at a time or in batches. See [Produce a PDF](../../how-to/produce-a-pdf/).

## Publish

Manuscripts, evaluations and data, in any combination, to your public website and to Crossref or DataCite, Hypothesis, COAR Notify or a webhook of your own. See [What Kotahi publishes](../../concepts/what-kotahi-publishes/).

The public website is generated as static files rather than assembled from a database on each request, so it stays fast however much you publish.

## Run more than one group

A single Kotahi deployment can host several groups — journals, preprint servers, review communities — each with its own forms, workflow, appearance and publishing endpoints, and each with its data kept separate from the others. That is how you pilot a new process alongside a live one without disturbing it.

Creating a group is a developer task rather than a setting. See [Technology supporting people](../../concepts/technology-supporting-people/) for where the lines fall between what your team changes, what an administrator changes, and what needs a developer.
