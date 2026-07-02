---
id: assign-preonboarding-checklist-on-hire
summary:
  - "On the worker action form, click **Apply checklist** and select **Pre-onboarding** as the process type."
  - "Select the checklist to apply and set the **target date** — individual task due dates are calculated automatically from offset settings."
  - "Continue with the worker action — tasks are released to the assigned group or person immediately."
keywords: [pre-onboarding, checklist, worker action, hire, apply checklist, target date, offset, due date, task assignment, recruitment, new hire, pre-onboarding checklist]
video:
  youtube:
  bunny:
---

# Assign a pre-onboarding checklist on hire

When processing a hire worker action in D365, you can assign a pre-onboarding checklist directly from the worker action form. This releases tasks to the designated HR teams or individuals immediately, so pre-onboarding activities can begin before the new employee's official start date.

The pre-onboarding checklist must be configured before it can be assigned here. See [Configure a pre-onboarding checklist](./04-configure-preonboarding-checklist.md).

1. Open the worker action

   From the relevant recruitment project, initiate or open the hire worker action for the applicant. Complete required fields such as position, employment category, employment type, and start date, then click **Continue** to open the worker action form.

2. Apply the checklist

   On the worker action form, click **Apply checklist** (or the equivalent checklist assignment button in the action pane).

   ![The worker action form with the Apply checklist button visible in the action pane](./images/assign-preonboarding-checklist-on-hire-1.png)

3. Select Pre-onboarding as the process type

   In the checklist assignment dialog, set the **Process type** to **Pre-onboarding**. Only pre-onboarding checklists are available for selection here.

4. Select the checklist

   Choose the pre-onboarding checklist to apply. Where multiple checklists have been configured, select the one appropriate for this hire.

5. Set the target date

   Enter the **target date** — the date by which all pre-onboarding tasks should be completed (typically the new employee's start date or a date shortly before it). Individual task due dates are calculated automatically by the system: target date minus the offset days configured on each task.

   ![The checklist assignment dialog showing process type set to Pre-onboarding, the selected checklist, and the target date field](./images/assign-preonboarding-checklist-on-hire-2.png)

6. Confirm

   Click **OK** (or the equivalent confirm button). Tasks are immediately released to the assigned groups or individuals. Group members can see and complete these tasks from the D365 task management workspace or from ESS.

7. Continue with the worker action

   Complete the remaining steps of the worker action (including compensation setup) and submit it for approval through the standard workflow. When the worker action is fully approved and completed, the onboarding checklist is applied automatically to the new employee record based on the HR parameters configuration.
