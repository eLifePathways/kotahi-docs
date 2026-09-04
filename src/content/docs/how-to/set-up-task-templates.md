---
title: "Set up task templates"
description: "Using task templates to standardise repeatable editorial work."
sidebar:
  order: 5
reviewStatus: converted-unverified
sourceNote: "Converted from docs.kotahi.community/advanced-kotahi/tasks.html."
---

*Tasks help define, manage, track and optimize your workflow.*

The task configuration in Kotahi is an extremely powerful yet often underestimated feature. Defining tasks is not just a to-do list but rather it is where you can further optimise and customise your editorial and publishing workflows.

In Settings→Tasks you can set up a template for tasks that will be inherited by all research objects submitted.

![Task Template Builder listing template tasks in columns headed 'Title', 'Assignee' and 'Duration in days' — entries such as 'Assign handling editor' (Editor, 3 days), 'Review submission' (Editor, 1) and 'Publish' (Editor, None) — each row with a drag handle and an ellipsis menu.](../../../assets/screenshots/c6eeec203d2b-1000w.png)

Strategic task configuration unlocks benefits like:

- mapping out clear step-by-step workflows for different types of research objects
- automatically prompting editors/curators, reviewers and authors to complete important actions
- improving transparency by providing visibility into workflow status
- identifying workflow bottlenecks
- adapting workflows over time by iteratively improving task definitions
- standardising workflows across users by assigning the same task lists

With some upfront planning around aims, the flexible task engine enables enacting efficient, consistent, and customisable workflows in Kotahi. The tasks truly represent a powerful yet often overlooked opportunity for workflow optimisation.

## How to make task templates

The initial task list for the research object will be inherited from the task list set up in the system settings (see that section). It is also possible to add/delete/alter the inherited list to suit the needs of the specific research object.

Tasks can be created, edited, deleted, modified, started, and reordered from this interface.

**Starting a task** is done from the displayed ‘Start’ button.

**Adding tasks** is done via the ‘+’ button at the bottom of the task list.

**Adding a title** and **adding an assignee** can all be done via the input fields provided. The assignee dropdown displays a list of roles, and the full searchable list of users in the system for selection.

**Duration** (in days) can be managed via the duration field.

**Deleting** or **editing** of the tasks can be managed through the ellipses icon displayed between the task title and the assignee.

![Tasks list with the ellipsis menu open on a row, showing two options, 'Edit' and 'Delete'; the row also shows an assignee, a due date and a 'Done' status control.](../../../assets/screenshots/cbdd24de16d9-2500w.png)

Deletion will ask you for a confirmation before completing.

When editing a task, the overlay for that task will appear.

!['Task details' overlay with a 'Task title' field, 'Assignee' set to 'Editor', a 'Due date' field with a date picker open, plus 'Recipient', 'Select email template' and 'Send notification' controls and an 'Add Notification Recipient' button.](../../../assets/screenshots/b09a67bda603.png)

!['Task details' overlay with a task title, an assignee, a due date, an 'Add Notification Recipient' button and a 'Save' button.](../../../assets/screenshots/214fed84a384.png)

Duration can be changed from the **Due Date** item on the left. When clicked it will display a date picker where you set a due date.

Clicking **Add Notification Recipient** will display an interface for adding new recipients of notifications. You can add as many recipients as you like.

!['Task details' overlay after adding a recipient row: a 'Select a recipient' dropdown, a 'Select email template' dropdown, and 'Send notification' controls reading 'Send 0 days before due date', plus 'Send Now' and remove buttons.](../../../assets/screenshots/9847099e3199-2500w.png)

The input fields require a chosen recipient from the **Recipient** dropdown list. You can also add a recipient that is not registered in Kotahi by choosing ‘Unregistered user’ from the dropdown. This selection will display additional fields for the email address and name of the recipient.

!['Task details' overlay with two recipient rows: the first set to 'Assignee' with the 'Task notification' template, the second set to 'Unregistered User', which reveals extra 'Email' and 'Name' fields.](../../../assets/screenshots/6c41cd08ab40-2500w.png)

!['Task details' overlay before any recipient is added, showing the task title, assignee, due date and the 'Add Notification Recipient' button.](../../../assets/screenshots/21f44787b103-1500w.png)

You can also **Select an email template** to be sent to each recipient.

!['Task details' overlay with the 'Select email template' dropdown open on the 'Unregistered User' recipient row, listing 'Author invitation', 'Reviewer invitation' and 'Task notification'.](../../../assets/screenshots/862b16422085-2500w.png)

Next set when the notification is sent out. The notification can be sent at a time of your choosing (including ‘now’) relative to the due date of the task. The **Send notification** fields allow you to choose a time before or after the due date by the number of days you require.

Email notifications are only sent when a task status is **I\*\*\*\*n progress**. To enable a task, click on the **Start** action. A task that is ‘Paused’ or marked as ‘Done’ will suppress scheduled email notifications from being sent. Notifications can still be manually using the ‘Send Now’ from the overlay.

!['Tasks' list with columns 'Title', 'Assignee' and 'Duration/Due Date'; the first row's status dropdown is open, offering 'In progress', 'Pause' and 'Done', while other rows show 'Start' buttons.](../../../assets/screenshots/aa357c0336fd-1000w.png)

## Special actions

We are adding further controls to the task manager as we believe it has enormous potential. Two important actions already possible from the task manager are inviting authors and inviting reviewers. You can action these from the notification controls. Inviting reviewers will add the reviewer invitation to the research objects reviewer list (accessible from the **Control** page). Inviting authors is for inviting an author to join a submission if that submission was automatically ingested (useful for some preprint review workflows).

The ‘Task notification’ email template contains a hyperlink that will direct the user to the manuscript task list. This can be particularly useful for editors who wish to be reminded of upcoming task deadlines.
