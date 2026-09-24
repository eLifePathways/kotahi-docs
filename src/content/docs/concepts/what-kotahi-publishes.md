---
title: "What Kotahi publishes"
description: "The kinds of research object Kotahi can publish, and where it sends them."
sidebar:
  order: 3
reviewStatus: rewritten
sourceNote: "Rewritten September 2026. Replaces material converted from docs.kotahi.community/getting-started/content.html."
---

Kotahi publishes manuscripts, evaluations and data. These are not a fixed bundle. Publish all three together, or evaluations on their own without the manuscript they assess, or a dataset with no accompanying paper, or nothing at all.

## What you can publish

- **Manuscripts** — preprints, journal articles, conference papers, micropublications and other documents.
- **Evaluations** — review content and decision summaries, published in full or as edited excerpts.
- **Data** — datasets, code, multimedia and other files attached to a submission.

![Flow diagram: three boxes labelled 'Evaluation', 'Data' and 'Manuscript' on the left, each with an arrow converging on a single box labelled 'Publication' on the right.](../../../assets/screenshots/73adabf61ed7-1000w.png)

## Where it goes

**Your public website.** Kotahi builds the site your readers see.

**Crossref or DataCite.** Kotahi sends the metadata for a published item; the agency registers the DOI against your own prefix.

**Hypothesis.** Preprint reviews are published as Hypothesis annotations, which is how they reach services that read from Hypothesis.

**COAR Notify.** Kotahi talks to COAR Notify repositories in both directions — a repository can send a review request into Kotahi, and Kotahi can announce the outcome back to it. [Work with COAR Notify](../../how-to/work-with-coar-notify/) covers the whole exchange.

**A webhook.** Anything else that accepts an HTTP request: Kotahi posts to a URL you supply, using a token you supply.

An item can go to your website, to external services, or to both. Whatever you decide, the settings are under **Settings → Configuration** — this is configuration, not code.

[Settings: Integrations and publishing](../../reference/settings-integrations/) lists the fields for each endpoint.
