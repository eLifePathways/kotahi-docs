---
title: "Contact"
description: "How to reach the eLife Pathways team about Kotahi — support, demos, and contributing."
sidebar:
  order: 4
reviewStatus: rewritten
sourceNote: "Replaces two dead contact routes: info@kotahi.community and forum.kotahi.community. The email below needs confirming as monitored before launch."
---

Kotahi is stewarded by **eLife Pathways**.

## General enquiries and demos

**[pathways@elifesciences.org](mailto:pathways@elifesciences.org)**

Get in touch about running Kotahi, arranging a demo, or discussing which
[service model](/about/service-and-support/) fits your community.

## Reporting a problem or requesting a feature

If you have a support agreement, use the route in your agreement — it is routed
and tracked, and email is not.

For bugs in the open-source software, open an issue on
**[GitHub](https://github.com/eLifePathways/Kotahi/issues)**.

## Contributing

Kotahi is open source. Code contributions, documentation fixes and bug reports
are all welcome through
**[the repository](https://github.com/eLifePathways/Kotahi)**.

Every page on this site has an **Edit page** link at the bottom that opens a
pull request against the documentation source — that is the fastest way to fix
a typo or an out-of-date screenshot.

:::note[Note on the code repository]
Kotahi's source lives at
[eLifePathways/Kotahi](https://github.com/eLifePathways/Kotahi) and its default
branch is `staging` rather than `main` — worth knowing if you are opening a pull
request against the software itself. This documentation site is a separate
repository.
:::

:::caution[Contact routes need confirming before launch]
The archived site directed everyone to `info@kotahi.community` and a community
forum at `forum.kotahi.community`. Both are on an expired domain and are gone.

Three things need checking before this page is published:

1. **Is `pathways@elifesciences.org` monitored**, and by whom? A published
   address that nobody watches is worse than no address.
2. **Is there a replacement community forum**, or has that capability simply
   been lost? If it is gone, say so somewhere rather than leaving people to
   discover it.
3. **Confirm this repository's name.** The **Edit page** links assume the site
   lives at `eLifePathways/kotahi-docs` on the `main` branch. If it is created
   under a different name, update `editLink.baseUrl` in `astro.config.mjs` or
   every Edit link will 404.
:::
