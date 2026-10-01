---
title: "The Submission page"
description: "Where an author starts a submission, supplies its metadata and sends it for review."
sidebar: { order: 2.5 }
reviewStatus: new
sourceNote: "Written 29 September 2026 from staging (prc group) and from packages/client/app/components/component-submit/src/components/UploadManuscript.jsx. No page on this screen previously existed, although *How the screens fit together* has listed it as screen 2 since the site launched. The fields shown on a submission form belong to the group's own form, so this page deliberately documents the screen rather than the fields. Not yet confirmed and not claimed here: what happens after Submit is pressed; whether a part-finished submission can be left and returned to; and what the version dropdown in the header bar offers. With Vukile from 30 September."
---

*Where an author starts a submission and supplies its details.*

Every submission begins here. What the author is asked for varies from group to
group, because each group builds its own submission form — but the route in and
the shape of the screen are the same everywhere.

## Starting a submission

Choose **Dashboard** in the left menu and click **+ New submission**, at the top
right. The button is there whichever Dashboard tab you are on.

## Two ways to begin

The **New Submission** screen offers a choice.

**Upload Manuscript** takes a file, by drag and drop or by clicking to browse.
The accepted types are listed on screen: **pdf, epub, zip, docx and latex**.

**Submit a URL instead** is for work that already exists somewhere else — a
preprint, for example.

:::note[What "Submit a URL instead" does]
It does not ask you for a URL. It creates the submission straight away with no
file attached and opens the form, where you add the link in whichever field
your group's form provides for it — often the DOI field.
:::

## The submission record

Either route opens the submission itself. A bar across the top shows the
submission's title and which version you are looking at. Below it are two tabs.

### Edit submission info

This is your group's **submission form**, and it is the part of the screen that
differs most between groups. One group asks for a DOI and a publication date;
another asks for funding statements and ethical declarations. Nothing on this
tab is fixed by Kotahi.

To change what is asked for here, see
[Build your forms](../../how-to/build-your-forms/). Remember that form changes
are not retroactive — they alter what is collected from that point on, not what
has already been submitted.

**The title is filled in for you** when the submission is created, using the
date and time. It is there so the submission has a name before anyone has typed
one. Replace it with the real title.

:::caution[Check the wording your form shows authors]
The seeded submission forms carry text written for particular customers years
ago. The `prc` seed still announces that *Aperture is now accepting Research
Object Submissions*; the `preprint1` and `preprint2` seeds have their own
equivalents. It is the first thing an author reads, and it names an
organisation that is almost certainly not yours.

A future release replaces the seeded text with a neutral *Please fill out the
form below to complete your submission.* Until that ships, change it yourself
in the submission form settings when the group is set up.
:::

### Manuscript text

The manuscript itself, where the submission has one.

A submission started with **Submit a URL instead** has no file, and this tab
reports that the file cannot be displayed. That message appears both when there
is no file and when there is one Kotahi cannot render, so it does not on its own
tell you which has happened.

## Submitting

The submit button sits at the end of the form. Its wording comes from the form,
so it may not say "Submit" — on a group set up for research objects it reads
**Submit your research object**.

Required fields are marked with an asterisk, and the submission cannot be sent
until they are filled in.

## Where it goes next

A submitted manuscript appears on the [Manuscripts page](../../reference/manuscripts-page/)
for the people who manage the group, and on the author's own **My Submissions**
tab on the [Dashboard](../../reference/dashboard/). From there an editor picks
it up on the [Control page](../../reference/control-page/).
