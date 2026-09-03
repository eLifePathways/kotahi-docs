---
title: "Workflow notation"
description: "A shared notation for describing editorial workflows."
sidebar:
  order: 3
reviewStatus: converted-unverified
sourceNote: "Converted from docs.kotahi.community/designing-and-optimising-workflow/notation.html."
---

*A handy tool to document workflows.*

The most effective way to describe workflow is through a numbered list of who and what for each step, using WorkFlow MarkUp (WFMU).

The most effective way to describe workflow is through a numbered list of who and what for each step, using WorkFlow MarkUp (WFMU).

There is no need to have complex flow diagrams and extended narratives - most of the time, these do not add clarity and sometimes mystify.

The three elements of WFMU are:

1. **Who** - usually the role of a team member or group (eg author, or editor). We use the naming convention of the host organisation for the role names. In some cases, the ‘who’ is an automation ‘role’ and refers to a machine (computer/s).
2. **What** - usually a single verb that describes what actually happens (eg review’, or ‘write’ etc).

The third part of documenting each step - **When** - is usually understood simply by the position in the numbered list.

An entire publishing process can be described in WFMU. Here is a short example:

1. **Author** creates a new Submission
2. **Author** completes Submission
3. **Author** Submits
4. **Editor** reviews Submission
5. **Editor** invites Reviewers
6. **Reviewers** accept (or reject) the invitation
7. **Reviewers** write reviews
8. **Reviewers** submit reviews
9. **Editor** reads reviews
10. **Editor** writes decision 1. If accept → publish (go to 15) 2. If revise → Author revises, return to (5)

Documenting workflow like this is straightforward to create and easy to read.

WFMU enables us to easily identify where problems exist. For example, if we saw this:

1. **Editor** reviews Submission
2. **Editor** invites Reviewers
3. **Reviewers** accept the invitations (or reject)
4. **Editor** considers a possible desk rejection

We can easily see a problem – we have just spent a lot of time inviting reviewers for a submission (Step 5) that might be rejected (Step 7) before reviews are written. These kinds of problems are not uncommon and are clearly exposed with WFMU.

Conditional Logic

As you can see from the above example, we can easily capture conditional logic by using nested bullets and conditional statements eg:

1. Editor writes decision

1. If accept → publish (go to 15)

2. If revise → Author revises, return to (5)

Documenting Automation

Automation can also be described using WFMU, for exam

1. Author Submits
2. System checks document validity

   1. If all passes -> create workspace
   2. If fail -> generate report for Author

Note: When designing new or optimised workflows that involve automation, we must avoid magical thinking. To this end, it is good to have trusted technicians in the room to help the group understand the promise of technology.
