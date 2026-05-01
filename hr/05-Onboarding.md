# Onboarding

## Onboarding Checklist

When a new employee joins the organisation, an onboarding checklist is automatically applied to their profile. The checklist contains a series of tasks that must be completed by various parties — including the employee, their manager, IT, HR, and other support teams — as part of the onboarding process.

Employees and assigned staff can view their outstanding onboarding tasks by navigating to the **Tasks** tab in the Approvals and Tasks workspace.

Each task displays:
- The **task name** and description.
- The **current status** (e.g., Open, In Progress, Completed).
- Any **dependencies** that must be completed before this task can be progressed.

### Completing an Onboarding Task

1. From the **ESS portal**, navigate to **Tasks**.
2. Locate the relevant onboarding task in your list.
3. Open the task to view its details and any dependencies.
4. Once the task is ready to be actioned, update the **status** to reflect completion.
5. Click **Confirm** to record the update.

---

### Onboarding Checklist Dependencies

Some onboarding tasks are dependent on other tasks being completed first. For example, configuring a laptop may depend on an Active Directory (AD) account being set up first. If a task has unresolved dependencies, the system will display them clearly but will **not allow the task to be completed** until the dependent tasks are finished.

The task view shows:
- The list of **dependency tasks** and their current statuses.
- Who each dependency is **assigned to** and the **target completion date**.

This provides full visibility so that all parties are aware of what is blocking progress, without hiding tasks from the assignee.

> **Note:** *If a task shows as blocked, check the dependencies listed within the task detail to understand what must be completed first and by whom.*

---

### Onboarding Checklists Applicable by School

Onboarding checklists can be configured to apply to specific legal entities (schools). This means that tasks relevant only to a particular school are assigned only when a new employee is onboarded at that school, keeping the checklist focused and relevant.

School-specific task rules are set up in Dynamics 365 by HR or the system administrator. When configuring a task, the applicable legal entities are specified, and the task will only appear on checklists for those schools.

### Configuring a School-Specific Checklist Task (Administrator)

1. From **Dynamics 365**, navigate to **Task Management** ▸ **Onboarding Checklists**.
2. Open the relevant checklist and select the task to configure.
3. Click **Edit**.
4. In the **Legal Entity** field, select the school(s) this task applies to.
5. To add a dependency, click **Set Dependency** and select the task that must be completed first.
6. Click **Save** to apply the configuration.

---
