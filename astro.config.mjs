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

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'ignore',
  integrations: [
    starlight({
      title: 'Kotahi',
      description:
        'Documentation and general information for Kotahi, the open-source ' +
        'submission and peer review platform stewarded by eLife Pathways.',
      tagline: 'Open-source submission and peer review',
      logo: {
        src: './src/assets/brand/kotahi-logo.png',
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
          label: 'About Kotahi',
          items: [
            { label: 'What Kotahi is', slug: 'about/what-kotahi-is' },
            { label: 'Who uses Kotahi', slug: 'about/who-uses-kotahi' },
            { label: 'Service and support', slug: 'about/service-and-support' },
            { label: 'Contact', slug: 'about/contact' },
          ],
        },
        {
          label: 'Introduction',
          items: [{ autogenerate: { directory: 'introduction' } }],
        },
        {
          label: 'Using Kotahi',
          items: [{ autogenerate: { directory: 'using-kotahi' } }],
        },
        {
          label: 'Configuration',
          items: [{ autogenerate: { directory: 'configuration' } }],
        },
        {
          label: 'Integrations',
          items: [{ autogenerate: { directory: 'integrations' } }],
        },
        {
          label: 'Production and publishing',
          items: [{ autogenerate: { directory: 'production' } }],
        },
        {
          label: 'BATS CMS',
          items: [{ autogenerate: { directory: 'cms' } }],
        },
        {
          label: 'Designing your workflow',
          items: [{ autogenerate: { directory: 'workflow-design' } }],
        },
      ],
    }),
  ],
});
