---
title: "The Production page"
description: "The Production page — preparing accepted content for publication."
sidebar: { order: 5 }
reviewStatus: rewritten
sourceNote: "Rewritten September 2026 against the current release. Converted from docs.kotahi.community/advanced-kotahi/production.html; the configuration reference that page also carried now lives on the Settings reference pages."
---

The Production page is where content is prepared for publication and where author proofing happens. It is available to Group Managers, Group Admins and Admins.

Open it from the **Manuscripts** page: each row carries a **Production** link in the Actions column, beside Control and View. It is available whatever stage the manuscript has reached.

:::note[Screenshot being refreshed]
This screen is being re-captured against the current Kotahi release.
:::

## The tabs

**Editor** — the manuscript itself, editable in place. If the submitted file is a type Kotahi's editor cannot render, this shows *No supported view of the file*.

**History** — earlier states of the manuscript. How often a version is taken is set by **Interval to automatically save a manuscript version in minutes** on the [Production settings tab](../../reference/settings-production/).

**PDF template**, **PDF CSS**, **PDF assets** and **PDF metadata** — the Paged.js HTML template, its stylesheet, the fonts and images it draws on, and the shortcodes that pull article data into it. [Produce a PDF](../../how-to/produce-a-pdf/) covers all four in detail.

**Ai Design Studio** — marked Beta. Select part of the page, describe the change you want, and it adjusts the styling. Needs an OpenAI key set under [Integrations and publishing](../../reference/settings-integrations/).

## Check Payload

**Check Payload**, top right, opens a picker of the registration APIs available to your group so you can check the metadata payload before it is deposited.

:::caution[The PDF template is not per-manuscript]
You reach these tabs from inside a single manuscript, but the template, CSS and assets apply to **every** manuscript exported as a PDF in that group.
:::

## Related

- [Produce a PDF](../../how-to/produce-a-pdf/) — templates, CSS, assets and metadata shortcodes.
- [Check and improve citations](../../how-to/check-citations/) — reference handling.
- [Settings: Production](../../reference/settings-production/) — the citation and version-history settings behind this screen.
