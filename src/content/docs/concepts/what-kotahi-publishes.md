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

<svg viewBox="0 0 760 320" role="img" aria-labelledby="pubflow-title pubflow-desc" xmlns="http://www.w3.org/2000/svg" style="width:100%;max-width:680px;height:auto;margin:1.75rem 0;">
  <title id="pubflow-title">How Kotahi publishes</title>
  <desc id="pubflow-desc">Manuscripts, evaluations and data pass through Kotahi and can be published to your public website, to Crossref or DataCite, to Hypothesis, over COAR Notify, or to a webhook.</desc>
  <g fill="none" stroke="var(--sl-color-accent)" stroke-width="1.5" opacity="0.55">
    <path d="M148,108 C186,108 182,172 216,172"/>
    <path d="M148,172 H216"/>
    <path d="M148,236 C186,236 182,172 216,172"/>
    <path d="M292,172 C338,172 340,68 378,68"/>
    <path d="M292,172 C338,172 340,120 378,120"/>
    <path d="M292,172 H378"/>
    <path d="M292,172 C338,172 340,224 378,224"/>
    <path d="M292,172 C338,172 340,276 378,276"/>
  </g>
  <g font-size="11" letter-spacing="0.08em" fill="var(--sl-color-gray-3)">
    <text x="0" y="20">WHAT YOU PUBLISH</text>
    <text x="378" y="20">WHERE IT GOES</text>
  </g>
  <g fill="none" stroke="var(--sl-color-gray-5)" stroke-width="1.5">
    <rect x="0" y="88" width="148" height="40" rx="6"/>
    <rect x="0" y="152" width="148" height="40" rx="6"/>
    <rect x="0" y="216" width="148" height="40" rx="6"/>
    <rect x="378" y="48" width="240" height="40" rx="6"/>
    <rect x="378" y="100" width="240" height="40" rx="6"/>
    <rect x="378" y="152" width="240" height="40" rx="6"/>
    <rect x="378" y="204" width="240" height="40" rx="6"/>
    <rect x="378" y="256" width="240" height="40" rx="6"/>
  </g>
  <rect x="216" y="88" width="76" height="168" rx="12" fill="var(--sl-color-accent-low)" stroke="var(--sl-color-accent)" stroke-width="1.5"/>
  <g font-size="15" fill="currentColor">
    <text x="16" y="113">Manuscript</text>
    <text x="16" y="177">Evaluation</text>
    <text x="16" y="241">Data</text>
    <text x="394" y="73">Your public website</text>
    <text x="394" y="125">Crossref or DataCite</text>
    <text x="394" y="177">Hypothesis</text>
    <text x="394" y="229">COAR Notify</text>
    <text x="394" y="281">A webhook</text>
  </g>
  <text x="254" y="177" font-size="15" text-anchor="middle" fill="currentColor" font-weight="600">Kotahi</text>
</svg>

## Where it goes

**Your public website.** Kotahi builds the site your readers see.

**Crossref or DataCite.** Kotahi sends the metadata for a published item; the agency registers the DOI against your own prefix.

**Hypothesis.** Preprint reviews are published as Hypothesis annotations, which is how they reach services that read from Hypothesis.

**COAR Notify.** Kotahi talks to COAR Notify repositories in both directions — a repository can send a review request into Kotahi, and Kotahi can announce the outcome back to it. [Work with COAR Notify](../../how-to/work-with-coar-notify/) covers the whole exchange.

**A webhook.** Anything else that accepts an HTTP request: Kotahi posts to a URL you supply, using a token you supply.

An item can go to your website, to external services, or to both. Whatever you decide, the settings are under **Settings → Configuration** — this is configuration, not code.

[Settings: Integrations and publishing](../../reference/settings-integrations/) lists the fields for each endpoint.
