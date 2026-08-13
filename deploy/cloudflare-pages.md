# Cloudflare Pages

No file needed — configure in the dashboard.

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `20` (environment variable `NODE_VERSION=20`) |

Environment variables:

| Name | Value |
| --- | --- |
| `SITE_URL` | `https://docs.elifepathways.org` |
| `BASE_PATH` | leave unset unless serving from a subdirectory |

## Notes

- Preview deployments are created per pull request automatically, which is
  useful if non-engineers review content changes before they go live.
- Set `SITE_URL` to `$CF_PAGES_URL` in the **Preview** environment so preview
  builds generate correct canonical URLs.
- Custom domain: add it under the project's **Custom domains** tab. The domain
  must be owned by eLife, not by an individual.
