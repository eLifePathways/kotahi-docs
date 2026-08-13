# What "eLife infrastructure" is, and whether this site belongs on it

Researched from the public `elifesciences` GitHub organisation (322 repos),
August 2026. Everything below is evidenced from public repositories; the three
things I could **not** determine are listed at the end.

## What eLife actually runs

| Layer | What they use | Evidence |
| --- | --- | --- |
| Cloud | **AWS**, with some GCP | `builder` — "create and manage AWS and GCP resources" |
| Compute | **EC2** instances and **EKS** (managed Kubernetes) | `builder` docs; `elife-flux-test` targets the `kubernetes-aws--flux-test` cluster |
| Infra as code | **`builder`** — a bespoke Python tool, projects declared in `projects/elife.yaml` | `elifesciences/builder` |
| Cluster state | **FluxCD**, GitOps — "Flux will try to apply any yaml file in this repo to the cluster" | `elife-flux-test` |
| CI (older) | **Jenkins** — `Jenkinsfile`, `Jenkinsfile.release`, `Jenkinsfile.update-ami` | `elifesciences/builder` |
| CI (newer) | **GitHub Actions** | `enhanced-preprints-client`: "Each push to `master` triggers a GitHub CI build" |
| Containers | Docker throughout | `Dockerfile`, `docker-compose*.yaml` in the enhanced-preprints repos |

### Their newest deployment pattern, in full

From `enhanced-preprints-client`:

1. GitHub Actions builds and publishes a container image
2. Flux image automation updates the **staging** deployment
3. Renovate bot opens a pull request on the e2e testing repository
4. **On approval**, the image receives a production tag
5. Flux updates the **production** deployment

## Should this site go on that?

**No.** Not because the platform is bad — it is a sensible platform for
containerised applications — but because this site is not one.

The Kotahi docs build output is a folder of HTML, CSS, images and a search
index. No server, no database, no runtime, no container. Deploying it through
`builder` + Kubernetes would mean:

- writing a `builder` project definition and getting it reviewed
- producing and publishing a container image just to serve static files
- running an nginx pod, with its own resource requests, monitoring and upgrades
- putting content changes through Flux

And critically, **step 4 above is an approval gate**. That is exactly right for
an application that can take the site down. For fixing a typo in documentation,
it means every content change waits on someone else's review of an e2e PR. That
directly undoes the answer that decided the platform choice in the first place:
*Ash maintains this alone, and needs to be able to publish a correction without
raising a ticket.*

The failure mode this whole project exists to fix — documentation going stale
and then disappearing — is caused by friction and unclear ownership. Adding a
Kubernetes deployment pipeline adds friction.

## Recommended: GitHub Actions → GitHub Pages

This is the option that satisfies every constraint at once:

- **Consistent with eLife's current practice.** GitHub Actions is already in
  active use on their newest projects, so this is not fighting convention.
- **Ownership is correct.** The repository lives in the `elifesciences` org, so
  the content, the history and the deploy credentials all belong to eLife rather
  than to any individual — the thing that killed `kotahi.community`.
- **No infra team in the loop.** Merge to `main`, site updates in about a minute.
- **£0.** No cluster resources, no CloudFront bill, nothing to capacity-plan.
- **Reversible.** If eLife later wants it on their own infrastructure, the build
  output is unchanged; only the deploy step differs.

Use `deploy/github-pages.yml`.

## If eLife insists it must be on eLife-owned infrastructure

Then the right shape is **S3 + CloudFront**, not Kubernetes. It is static
hosting for a static site: pennies per month, no pods, no images, no Flux.
`deploy/s3-cloudfront.yml` implements it with GitHub Actions using OIDC, so no
long-lived AWS keys are stored in GitHub.

You would need from the infrastructure team:

- an S3 bucket, private, fronted by CloudFront with an Origin Access Control
- a CloudFront distribution with a default root object of `index.html`
- an IAM role trusting the GitHub OIDC provider, scoped to this repository,
  allowed only `s3:PutObject`/`DeleteObject` on that bucket plus
  `cloudfront:CreateInvalidation` on that distribution

That is a one-off request, and afterwards deploys are self-service. It is a
much smaller ask than a `builder` project, and it keeps the important property:
**Ash can publish without a ticket.**

## Three things I could not determine from public repositories

1. **Whether GitHub Pages is enabled for the `elifesciences` organisation.**
   Organisation settings are private. Some orgs disable Pages by policy. **Ask
   before assuming.** If it is disabled, Cloudflare Pages or the S3 route apply.
2. **Whether `builder` supports a static-site project type** (S3 website or
   CloudFront). I found S3 referenced only for keypair storage. If a static-site
   pattern already exists, reuse it rather than inventing one.
3. **Who administers DNS for `elifepathways.org`.** `docs.elifepathways.org`
   needs one CNAME record. Whoever holds that domain must be an eLife
   organisational account, not an individual's registrar login.

## The questions to ask, and of whom

To whoever runs eLife infrastructure:

> We have a static documentation site — a folder of HTML with no server or
> database. Three questions:
>
> 1. Is GitHub Pages enabled for the `elifesciences` org, and can I publish a
>    repo through it?
> 2. If not, can I get an S3 bucket plus a CloudFront distribution and a
>    GitHub OIDC role scoped to one repository? I don't need anything in the
>    Kubernetes cluster.
> 3. Who adds a CNAME for `docs.elifepathways.org`?
>
> The important constraint is that I need to be able to publish a content fix by
> merging a pull request, without raising a ticket each time.

That last sentence is the one that matters. If the answer is "no, everything
goes through the standard pipeline", that is a legitimate answer — but it means
budgeting for documentation changes to be slow, and it is worth saying so out
loud before committing.
