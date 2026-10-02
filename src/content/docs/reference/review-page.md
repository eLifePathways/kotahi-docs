---
title: "The Review page"
description: "Where a reviewer reads a submission and writes their review, and how they get there."
sidebar: { order: 4.5 }
reviewStatus: new
sourceNote: "Written 2 October 2026 entirely from the Kotahi source, because no reviewer account was available to walk the screen: packages/client/app/components/component-review/src/components/review/ReviewLayout.jsx for the screen itself, Router.tsx for the route, ui/shared/_constants.ts for the reviewer statuses, pages/hooks/useManuscriptsTable.tsx for the Dashboard actions, and i18n/en/translation.js for every on-screen string quoted here. Nobody has watched this screen work, so it carries no screenshots and no claim about timing or behaviour that the code does not state. Verify against a running instance before moving this page to verified. Not covered and not claimed: what a reviewer sees if their invitation is withdrawn mid-review, and whether a completed review can be reopened."
---

*Where a reviewer reads a submission and writes their review.*

Reviewers do not browse to this page. They are invited to review a specific
manuscript, and the invitation is what takes them here.

## Getting there

A reviewer signs in and opens the **Dashboard**. Their invitations are on the
**Review Assignments** tab, alongside **My Submissions** and **Editing Queue**.

Each row offers an action, and the action depends on where the reviewer is in
the process:

| What the row offers | What it means |
| --- | --- |
| **Accept** / **Decline** | A new invitation. Both ask to confirm — *"Accept this review invitation?"* |
| **Do Review** | Accepted, not yet started. Opens the Review page |
| **Continue Review** | Started and saved, not yet submitted |
| **View** | Submitted. The page opens read-only |

An invitation can also be accepted from the link in the invitation email, which
arrives at the same place.

### The statuses a reviewer moves through

| Status | Shown as | How it is reached |
| --- | --- | --- |
| `invited` | Invited | The editor invites them |
| `accepted` | Accepted | They accept |
| `inProgress` | In Progress | They open the review |
| `completed` | Completed | They submit |
| `closed` | Closed | A collaborative review is locked |
| `rejected` | **Declined** | They decline |

The value stored for a declined invitation is `rejected`, but nothing on screen
says "rejected" — readers and editors both see **Declined**.

## The screen

A bar across the top switches between **versions** of the manuscript. It lists
only the versions this reviewer was a reviewer of — a reviewer brought in at
round two does not see round one.

Below that are tabs. Which tabs appear depends on the manuscript and on the
group's configuration:

**Metadata** — the submission as the author filled it in, read-only. Fields
marked editor-only are not shown to reviewers.

**Manuscript** — the manuscript text itself, read-only. **This tab appears only
where there is manuscript text to show.** A submission made by URL, or one whose
file Kotahi cannot convert, has no Manuscript tab at all. See
[Submission page](../../reference/submission-page/) for which file types convert.

**Review** — where the review is written. This is your group's own **review
form**, so what it asks for is whatever you have built. See
[Build your forms](../../how-to/build-your-forms/).

**Other Reviews** — appears only when another reviewer's review has been shared
with this one. If nothing has been shared, the tab is absent.

**The decision form** — appears only on groups that show it, and only once a
decision exists. Before the manuscript reaches a decision, its contents are
withheld even where the tab is present.

## Writing and submitting

**There is no save button.** The review is saved as it is typed, which is why a
part-finished review comes back as **Continue Review** rather than being lost.

The submit button sits at the end of the form and reads **Submit**.

Submitting does two things: it sets the reviewer's status to **Completed**, and
it returns them to the Dashboard. After that the page opens read-only — the
review can be read, but not changed.

A review can also be **collaborative**, shared between co-reviewers who write
into it together. Where a group uses that, the review is edited by more than one
person at once rather than passed between them.

## Where it goes next

A submitted review reaches the editor on the
[Control page](../../reference/control-page/), where it is read alongside the
others and a decision is made.

Whether the author ever sees an individual review is a group setting, and
individual reviews can also be hidden one at a time. See
[Settings: Workflow](../../reference/settings-workflow/).
