---
title: "JATS XML"
description: "What JATS is, why publishers need it, and what Kotahi does with it."
sidebar: { order: 4 }
reviewStatus: new
sourceNote: "Written 29 September 2026 from the Kotahi source — packages/server/services/jatsexport/ and packages/server/controllers/jats.controllers.js — and from ProductionWaxEditorConfig.js for the tagging tools. No page on JATS previously existed. Still deliberately does not describe how to obtain a copy of the JATS file. Asked of Vukile on 30 September 2026; he could not reproduce an export, and recorded that Yannis had generated a JATS retrieval link earlier. The expected route is Manuscripts page, Production, Download, JATS — unverified, and not stated here until someone has watched it work. ADA was named on this page beside Crossref and DataCite and was cut on 1 October: it is bespoke work built for Astromat, not a general integration. The schema version, the validation step and the list of handled elements are read from source and can be relied on."
---

*The XML format scholarly publishing runs on, and what Kotahi does with it.*

## What JATS is

**JATS** — the Journal Article Tag Suite — is the standard way of describing a
scholarly article as structured data rather than as a page. It is a NISO
standard, and it is what most of the scholarly infrastructure expects to
receive.

A PDF tells a machine almost nothing. It has words on pages, but nothing in it
says *this is the abstract*, *this is the third author's affiliation*, *this is
a reference to another paper*. JATS says all of that explicitly.

## Why it matters

Because other systems read it. Indexes, archives, preservation services and
aggregators take JATS and use it to work out what your article is, who wrote
it, what it cites and who funded it. Without it, your content can be read by
people but not by anything else — which in practice means it is harder to find,
harder to cite and harder to preserve.

It is also the format you will be asked for. A publisher who wants to be in
PubMed Central, or who is depositing into an archive, will be asked for JATS
rather than PDFs.

## What Kotahi does with it

**You tag the article visually.** JATS tagging is built into the editor on the
[Production page](../../reference/production-page/) — there is a JATS side menu
and a list of the tags applied. Nobody has to write XML by hand.

**Kotahi does the conversion.** It produces **JATS 1.3 journal publishing XML
with MathML**, and it handles the parts that are tedious to do well: citations,
funding statements, keywords, appendices, glossaries, and tables with their
captions. Mathematics written in LaTeX is converted to images so it survives in
formats that cannot render equations.

**Kotahi validates what it produces**, against the published JATS schema rather
than simply emitting XML and assuming it is correct.

## Where it goes


JATS is what Kotahi sends when it deposits your content. The metadata that
reaches **Crossref** and **DataCite** is built from it.

So for most groups JATS is not something you handle directly. You tag the
article, and Kotahi produces and deposits the XML as part of publishing. See
[Settings: Integrations and publishing](../../reference/settings-integrations/)
for the endpoints themselves.
