# Kotahi documentation

Documentation and general information for **Kotahi**, the open-source
submission and peer review platform stewarded by
[eLife Pathways](https://elifepathways.org).

Built with [Astro Starlight](https://starlight.astro.build/). Static output, no
server, no database, no licence fees.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built output locally
```

Requires Node 20 or newer.

## Editing content

Pages live in `src/content/docs/` as Markdown. The sidebar is defined in
`astro.config.mjs` — most groups autogenerate from their directory, ordered by
the `sidebar.order` value in each page's frontmatter.

### Frontmatter

Beyond Starlight's own fields, every page carries provenance:

```yaml
---
title: "The Dashboard"
description: "One sentence, used for search results and link previews."
sidebar:
  order: 2
reviewStatus: converted-unverified   # see below
sourceNote: "Converted from docs.kotahi.community/getting-started/dashboard.html."
appliesTo: "4.1"                     # optional: Kotahi version described
---
```

`reviewStatus` renders a banner at the top of the page. Values:

| Value | Meaning |
| --- | --- |
| `converted-unverified` | Machine-converted from the July 2026 archive, **not** checked against a running instance. The default, and the honest one. |
| `verified` | Checked against a running Kotahi instance. |
| `new` | Written for this site. |
| `rewritten` | Rewritten to reflect eLife Pathways stewardship. |

**When you verify a page against a real instance, change its `reviewStatus` to
`verified`.** That banner is the only thing telling readers whether they can
trust the screenshots.

### Images

Screenshots live in `src/assets/screenshots/` and are referenced with relative
paths so Astro optimises them:

```markdown
![Alt text describing what the screen shows.](../../../assets/screenshots/name.png)
```

**Always write alt text.** Every image on the site currently has it; please
don't be the one who breaks that.

## Deploying

The build is a folder of static files. It will run anywhere — GitHub Pages,
Cloudflare Pages, Netlify, S3 + CloudFront, or an eLife-managed web server.

Two environment variables control the output, so the same source deploys
anywhere without a code change:

| Variable | Purpose | Example |
| --- | --- | --- |
| `SITE_URL` | Absolute site URL. Used for the sitemap and canonical links. | `https://docs.elifepathways.org` |
| `BASE_PATH` | Only if serving from a subdirectory. | `/kotahi-docs` |

```bash
SITE_URL=https://docs.elifepathways.org npm run build
```

Ready-made config for the common hosts is in `deploy/`. Copy the one you want
into place:

- `deploy/github-pages.yml` → `.github/workflows/deploy.yml` — **recommended**
- `deploy/s3-cloudfront.yml` → `.github/workflows/deploy.yml` — if it must live
  on eLife-owned AWS
- `deploy/netlify.toml` → `netlify.toml`
- `deploy/cloudflare-pages.md` → dashboard settings, no file needed

**Read `deploy/elife-infrastructure-notes.md` before choosing.** It documents
what eLife actually runs (AWS, EKS Kubernetes, FluxCD, `builder`, Jenkins on
older projects and GitHub Actions on newer ones), why this site should *not* go
into the Kubernetes cluster, and the three questions to ask the infrastructure
team.

### Whichever host you pick

Three things matter more than the host:

1. **The domain must be owned by eLife, not by an individual.** The previous
   documentation disappeared because `kotahi.community` was registered to a
   person who left. Do not repeat that.
2. **The repository must live in an eLife-owned org**, for the same reason.
3. **Deploys should trigger from a push to `main`.** If publishing a typo fix
   requires a ticket to another team, the docs will go stale again.

## Repository layout

```
src/
  content/docs/        Markdown pages (the sidebar mirrors this tree)
  assets/screenshots/  UI screenshots referenced from pages
  assets/brand/        Kotahi and eLife Pathways logos
  components/          Starlight component overrides
  styles/
    kotahi-tokens.css  Colour system — GENERATED, see below
    kotahi.css         Layout and typography
    fonts.css          Self-hosted Poppins and Montserrat
public/                Served as-is (favicon, hero logo, fonts)
deploy/                Host configuration templates
_quarantined-screenshots/   NOT published — see below
```

## The colour system is generated

`src/styles/kotahi-tokens.css` is produced by a script that computes the palette
and **fails if any pair drops below WCAG AA**. Do not hand-edit it.

The important thing to know: **Kotahi brand green `#2FAC66` scores 2.91:1 on the
page background.** That fails AA for body text (4.5:1) and fails even the 3:1
minimum for UI components. So:

- raw `#2FAC66` is used for **large display type and fills only**
- links and small text use `#24854F` (4.51:1) in light mode
- dark mode can use the true brand green — it scores 6.43:1 there
- **never white text on raw brand green** — 2.91:1. Green fills carry dark ink.

If someone "fixes" the greens back to the brand value, the site stops meeting
AA. The generated file says so at the top.

## Quarantined screenshots

`_quarantined-screenshots/` holds 23 images from the original archive that are
**deliberately not published** because they expose API keys, webhook tokens,
mail credentials, or real people's names, email addresses and ORCID identifiers.

Every page that needed one shows a visible callout describing what the
screenshot should show. Each needs re-capturing against an instance seeded with
test data, then dropping into `src/assets/screenshots/` and referencing normally.

Do not simply move these files back.

`_quarantined-screenshots/` is **git-ignored on purpose**. Committing images
containing API keys would put those keys in git history, which is much harder to
purge than a web server. The directory is delivered out of band instead.

**Separately:** two access tokens are fully readable in those captures, and were
published on the previous public documentation site for an unknown period. Both
predate eLife Pathways' stewardship and belong to third-party infrastructure
rather than eLife's. They need revoking by whoever administers those systems.

Specifics are deliberately not recorded here, since this repository is public.
They are in the internal handover notes held by the eLife Pathways product
manager — ask there.

## Accessibility

The site currently reports **zero WCAG 2.1 A/AA violations** under axe-core
across representative pages in both light and dark mode. Worth re-checking
before any release:

```bash
npm run build
python3 -m http.server 4321 --directory dist
# then run axe against the served pages
```

## Licence

Content: to be confirmed by eLife Pathways. Site code: MIT.
