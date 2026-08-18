---
draft: true
id: configure-approval-matrix-event-approvers
summary:
  - "In **System Settings**, open **Approval matrices** and click **New**."
  - "Set the **School profile**, **Process type**, **Event type** and **Approval flow**, then **Save**."
  - "Add an **Approval matrix detail** row per approver, each with an **Order number**."
keywords: [configure approval matrix, event approval matrix, set up event approvers, sequential approval events, approval flow CE, who approves an event]
video:
  youtube:
  bunny:
---

<!-- SOURCE ROW — delete before publishing
Epic:    School & Corporate Events (CE)
Feature: Configuration
Area:    CE
Role:    IT Admin, School admin
-->

# Configure approval matrix for event approvers

An approval matrix is the rule that decides who approves an event. When an event
is submitted, CE matches it against the matrices and routes the approval
accordingly. Set the matrix up once and it applies to every matching event from
then on.

The match is made on three things: the **school**, the **process type**, and the
**event type**.

1. Open Approval matrices

   Go to **System Settings** and open **Approval matrices**. The existing
   matrices are listed. Click **New matrix**.

   ![The Approval matrices list in System Settings](./images/configure-approval-matrix-for-event-approvers-1.png)

2. Set the matching rule

   Complete the header:

   - **Name** and date
   - **School profile** — the school this matrix applies to
   - **Process type** — for example Events and excursions approval
   - **Event type** — for example Corporate events, Visit, Excursion, Camp, Tour
   - **Approval flow** — Single, Sequential or Parallel

   > **Note:** One matrix covers one combination. If you need a different
   > approver for co-curricular activities at the same school, create a second
   > matrix with that event type.

3. Save the header

   Click **Save**. The **Approval matrix detail** section becomes available.

4. Add the approvers

   Add one detail row per approver. For each row, give it a name, set the
   **Order number**, and select the approver.

   With a sequential flow, order number 1 is approached first. Only once that
   approval completes does the request move to order number 2, then 3, and so
   on.

   ![Approval matrix detail rows with order numbers and approvers](./images/configure-approval-matrix-for-event-approvers-2.png)

5. Check it is active

   Save and close. The matrix shows as **Active** and will be picked up by any
   matching event submitted from now on.

   > **Note:** Changing the approver on a matrix changes who receives future
   > approvals. It does not redirect approvals already in flight.
