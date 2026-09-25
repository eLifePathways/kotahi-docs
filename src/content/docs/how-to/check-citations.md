---
title: "Check and improve citations"
description: "Kotahi's citation look-up tools, on the Production page."
sidebar: { order: 10 }
reviewStatus: rewritten
sourceNote: "Rewritten September 2026. Replaces material converted from docs.kotahi.community/advanced-kotahi/citations.html."
---

Kotahi can look a citation up against external services and offer you corrected versions of it. The tools sit on the Production page: open a manuscript's **Production** link from the Manuscripts page and scroll to the reference list.

![Production interface showing a manuscript scrolled to its 'Acknowledgments' and 'References' sections as a numbered reference list, with a left-hand panel of insert options including 'Citations', 'Reference list' and 'Reference'.](../../../assets/screenshots/ea804cdf4a84.png)

The left-hand panel holds the reference tools.

![Close-up of the production interface's left panel with the 'Citations' group expanded and the 'Reference' tool highlighted, alongside the greyed-out 'Acknowledgments' and 'References' text.](../../../assets/screenshots/69aa1bd4a869-1000w.png)

Select a reference, then click the reference tool. A small menu appears beside it.

![Reference list in the production interface with a small vertical menu of icon buttons appearing to the right of the selected reference, used to launch the citation look-up tools.](../../../assets/screenshots/c683437844d1-750w.png)

Choosing one of those icons opens the look-up overlay.

!['Select citation' overlay listing candidate citations with radio-style checkboxes, each tagged by source — 'Original', 'AnyStyle' or 'CrossRef' — with one CrossRef entry ticked, and 'Edit' and 'Apply' buttons at the bottom.](../../../assets/screenshots/d66afa263b88-750w.png)

Each candidate is tagged with where it came from, and formatted in the citation style set for your group. Select one and click **Edit** to correct it — author names, article title, journal, DOI, volume, issue, year, page and citation number.

!['Edit citation' overlay showing the original citation at the top, then editable fields for author family and given name, 'Add author', article title, journal, DOI, volume, issue, year, page and citation number, with 'Back' and 'Apply'.](../../../assets/screenshots/c1abe6a90ba8-1500w.png)

## Where the suggestions come from

Kotahi queries **Crossref**, and can also query **DataCite**, with an option to fall back to Crossref when DataCite returns nothing. **AnyStyle** is different: it parses the text of the original citation rather than looking it up anywhere.

These are third-party services, so results depend on them being available. If a look-up returns nothing when you expected something, running it again later is worth trying before assuming the citation is at fault.

## The settings behind it

Choose **Configuration** in the left menu, then the **Production** tab. That is where the contact address sent to Crossref, the number of candidates offered, whether DataCite is queried, and the citation style and locale are set. See [Settings: Production](../../reference/settings-production/).
