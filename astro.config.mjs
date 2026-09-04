// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

/**
 * Kotahi documentation — an eLife Pathways platform
 *
 * `site` is read from an env var so the same source can be deployed to
 * GitHub Pages, Cloudflare Pages, Netlify, or eLife's own infrastructure
 * without a code change. Set SITE_URL (and BASE_PATH if serving from a
 * subdirectory) in the deploy environment.
 */
const SITE_URL = process.env.SITE_URL || 'https://docs.kotahi.example';
const BASE_PATH = process.env.BASE_PATH || undefined;

/**
 * The site was reorganised on 3 September 2026, from the old course-derived
 * structure into Start here / How-to / Reference / Concepts. Those old links
 * had already been shared with colleagues, so every one still resolves.
 *
 * Keys are base-relative — Astro serves them under `base` automatically.
 * TARGETS ARE NOT: Astro does not prepend `base` to a redirect destination, so
 * a bare '/concepts/...' target sends a visitor to the domain root and 404s
 * under a project subpath. Hence withBase() below.
 */
const MOVED_PAGES = {
  '/about/service-and-support/': '/start-here/service-and-support/',
  '/about/what-kotahi-is/': '/start-here/what-kotahi-is/',
  '/about/who-uses-kotahi/': '/start-here/who-uses-kotahi/',
  '/cms/advanced-cms/': '/how-to/administer-bats-cms/',
  '/cms/bats-cms-administration/': '/how-to/administer-bats-cms/',
  '/cms/overview/': '/how-to/administer-bats-cms/',
  '/cms/using-the-cms/': '/how-to/publish-through-the-cms/',
  '/configuration/decision-forms/': '/how-to/build-a-decision-form/',
  '/configuration/email-templates/': '/how-to/customise-email-templates/',
  '/configuration/managing-users/': '/how-to/manage-users-and-roles/',
  '/configuration/reviewer-forms/': '/how-to/build-a-reviewer-form/',
  '/configuration/settings-reference/': '/reference/settings-general/',
  '/configuration/submission-forms/': '/how-to/build-a-submission-form/',
  '/configuration/task-templates/': '/how-to/set-up-task-templates/',
  '/integrations/coar-notify-enabling/': '/how-to/enable-coar-notify/',
  '/integrations/coar-notify-using/': '/how-to/work-with-coar-notify/',
  '/introduction/faq/': '/reference/faq/',
  '/introduction/key-features/': '/start-here/key-features/',
  '/introduction/review-models/': '/concepts/review-models/',
  '/introduction/use-cases/': '/concepts/use-cases/',
  '/introduction/what-kotahi-publishes/': '/concepts/what-kotahi-publishes/',
  '/introduction/why-kotahi/': '/concepts/why-kotahi-exists/',
  '/production/citation-tools/': '/how-to/check-citations/',
  '/production/producing-pdf/': '/how-to/produce-a-pdf/',
  '/production/production-page/': '/reference/production-page/',
  '/using-kotahi/control-page/': '/reference/control-page/',
  '/using-kotahi/dashboard/': '/reference/dashboard/',
  '/using-kotahi/interface-overview/': '/reference/how-the-screens-fit-together/',
  '/using-kotahi/manuscripts-page/': '/reference/manuscripts-page/',
  '/workflow-design/technology-supporting-people/': '/concepts/technology-supporting-people/',
  '/workflow-design/understanding-your-workflow/': '/concepts/understanding-your-workflow/',
  '/workflow-design/workflow-notation/': '/concepts/workflow-notation/',
  '/workflow-design/workflow-sprints/': '/concepts/workflow-sprints/',
};

const withBase = (p) => `${BASE_PATH ?? ''}${p}`;
const REDIRECTS = Object.fromEntries(
  Object.entries(MOVED_PAGES).map(([from, to]) => [from, withBase(to)]),
);

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'ignore',
  redirects: REDIRECTS,

  integrations: [
    starlight({
      title: 'Kotahi',
      description:
        'Documentation and general information for Kotahi, the open-source ' +
        'submission and peer review platform stewarded by eLife Pathways.',
      tagline: 'Open-source submission and peer review',
      logo: {
        src: './src/assets/brand/kotahi-logo.svg',
        alt: 'Kotahi',
        replacesTitle: true,
      },
      favicon: '/favicon.svg',
      customCss: [
        './src/styles/fonts.css',
        './src/styles/kotahi-tokens.css',
        './src/styles/kotahi.css',
      ],
      components: {
        // Adds the "an eLife Pathways platform" attribution beside the logo
        SiteTitle: './src/components/SiteTitle.astro',
        PageTitle: './src/components/PageTitle.astro',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/eLifePathways/Kotahi',
        },
      ],
      editLink: {
        // Points at the repo so typo fixes can arrive as pull requests.
        baseUrl: 'https://github.com/eLifePathways/kotahi-docs/edit/main/',
      },
      lastUpdated: true,
      pagination: true,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      sidebar: [
        {
          label: 'Start here',
          items: [{ autogenerate: { directory: 'start-here' } }],
        },
        {
          label: 'How-to guides',
          items: [{ autogenerate: { directory: 'how-to' } }],
        },
        {
          label: 'Reference',
          items: [{ autogenerate: { directory: 'reference' } }],
        },
        {
          label: 'Concepts',
          items: [{ autogenerate: { directory: 'concepts' } }],
        },
        {
          label: 'About',
          items: [{ autogenerate: { directory: 'about' } }],
        },
      ],
    }),
  ],
});
