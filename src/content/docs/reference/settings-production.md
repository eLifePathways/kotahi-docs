---
title: "Settings: Production"
description: "The Production configuration tab — citation parsing, citation styles and version history."
sidebar: { order: 8 }
reviewStatus: verified
sourceNote: "Checked against Kotahi staging, September 2026. Converted from docs.kotahi.community/advanced-kotahi/configuration.html, which covered every settings tab on one page; it is split here so each tab can be verified on its own."
---

Choose **Configuration** in the left menu, then the **Production** tab. For the tools these settings govern, see [Check and improve citations](../../how-to/check-citations/).

## Citation parsing

**Email address for Crossref search and data retrieval correspondence** — Crossref asks for a contact address with every lookup. Use a shared address that someone monitors, not a personal one.

**Number of results to return from Crossref search** — how many candidate matches a lookup offers. The default is 3.

**Search and retrieve citation results from Datacite** — a checkbox. With it ticked, Kotahi looks citations up in DataCite as well as Crossref.

**If Datacite retrieval yields no result, select Crossref result as a fallback** — a checkbox, and only meaningful alongside the one above.

## Citation styles

**Select citation style** — the style applied to formatted citations, for example American Psychological Association (APA).

**Select citation locale** — the locale used when formatting them, for example `en-US`.

## Manuscript version history

**Interval to automatically save a manuscript version in minutes** — how often Kotahi takes an automatic version of a manuscript being edited. The default is 10.
