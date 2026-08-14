---
draft: true
id: configure-approval-extra-curricular-activity
summary:
  - "Check the activity requires approval — leave **Skip approval** off."
  - "Create an **Approval request** and assign it to the approver."
  - "The approver approves, declines, or asks for more information."
keywords: [configure approval extra-curricular, approve a co-curricular activity, decline an activity, approval request activity, more information required approval]
video:
  youtube:
  bunny:
---

<!-- SOURCE ROW — delete before publishing
Epic:    Extra-Curricular Activities (CE)
Feature: Approval Configuration & Approval
Area:    CE
Role:    IT Admin, School admin
-->

# Configure approval for extra-curricular activity

Extra-curricular and co-curricular activities go through the same approval
mechanism as events. The activity carries an **Event approval** section; the
decision itself is recorded on an **Approval request**.

## Set the activity to require approval

1. Check the approval setting

   Open the activity and find the **Event approval** section. Approval is
   required by default. Selecting **Skip approval** bypasses it — leave it
   unselected when approval is needed.

   ![The Event approval section on an activity with the skip approval option](./images/configure-approval-for-extra-curricular-activity-1.png)

## Raise the approval request

2. Create the request

   In the approval section, create a new **Approval request**. Set the owner to
   the person who will make the decision — this does not have to be the person
   who owns the activity.

   Save. A task is created for the approver, and the request sits at **Pending**.

   > **Note:** Activities submitted from the Staff Experience Platform create
   > their approval request automatically. You only create one by hand for
   > activities raised directly in CE.

3. Let the approver decide

   The approver opens the request and chooses one of three outcomes:

   - **Approve** — the record is approved and the request completes
   - **Reject** — the record is rejected
   - **More information is required** — an email goes to the activity lead
     asking for detail, and the request leaves the approver's queue until it
     comes back

   ![An approval request showing the approve, reject and more information options](./images/configure-approval-for-extra-curricular-activity-2.png)

4. Save and confirm

   Save and close. The approval status on the activity updates to match —
   approved requests show as **Completed**.

   > **Note:** Where the matrix defines several levels, each level completes in
   > turn. Level 2 stays pending until level 1 is decided.
