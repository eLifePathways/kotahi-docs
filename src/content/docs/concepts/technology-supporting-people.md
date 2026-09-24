---
title: "Technology supporting people"
description: "What you can change in Kotahi yourself, what needs an administrator, and what needs a developer."
sidebar:
  order: 5
reviewStatus: rewritten
sourceNote: "Rewritten September 2026. Replaces material converted from docs.kotahi.community/designing-and-optimising-workflow/think.html."
---

Kotahi is built to be configured rather than coded. Most of what shapes how your
team works is a setting someone on your team can change — no release, and no
call to us.

It is worth knowing where the lines fall before you plan a workflow around them.

## What your team changes day to day

Anyone holding a Group Manager role or above moves manuscripts through your
process: triaging submissions, assigning editors, running review rounds,
producing files, and — depending on your instance type — publishing.

No configuration is involved. This is the everyday work.

## What an administrator changes

A **Group Admin** configures the instance itself:

- Submission, review and decision **forms**
- **Task templates** and **email templates**
- **Users**, and the roles they hold
- **Integrations** — Crossref or DataCite, COAR Notify, Hypothesis, webhooks
- Your **public website** content
- Workflow, production and notification **settings**

These take effect straight away.

## What needs a developer

A few things sit below the settings screens:

- **Your instance type** — journal, PRC or preprint — which is set in the server
  configuration and normally fixed once chosen
- **Creating a new group**
- **Saving a workflow as a reusable template**

That middle one matters if you want to trial a new process alongside your live
one. Kotahi can run several groups in a single deployment with their data kept
separate, so a pilot need not disturb what you are already doing — but the group
itself has to be created for you.

## What Kotahi will not let you do

Manuscripts cannot be deleted, only archived. That is deliberate: the record of
what was submitted and reviewed stays intact.
