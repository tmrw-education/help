---
draft: true
id: assign-attendance-and-overtime-managers-to-a-position
summary:
  - "In D365, go to **Human Resources ▸ Employees**, open the employee, and open their **Positions**."
  - "Set the attendance hierarchy and overtime hierarchy on the position, naming the person who approves each."
  - "Leave them unset where the line manager approves; the line hierarchy is used instead."
keywords: [attendance manager, overtime manager, position hierarchy, assign hierarchy, employee positions, line manager, attendance approver, overtime approver, D365]
video:
  youtube:
  bunny:
---

# Assign attendance and overtime managers to a position

An employee's attendance and overtime are visible to, and approved by, whoever sits above them in the attendance and overtime hierarchies. You set that on the employee's position. Until you do, only the line manager sees them.

1. Open the employee

   In D365, go to **Human Resources ▸ Employees** and open the employee whose approver you are setting.

2. Open their position

   Open **Positions** on the employee record and scroll to the hierarchy area. You will see the line manager already recorded, and the attendance and overtime hierarchies empty.

   ![The position record showing the line manager and the empty attendance and overtime hierarchies](./images/assign-attendance-and-overtime-managers-to-a-position-1.png)

3. Add the attendance hierarchy

   Add a row against the attendance hierarchy and select the position that will approve this employee's attendance.

4. Add the overtime hierarchy

   Do the same against the overtime hierarchy. This is often the same person as the attendance approver, but it does not have to be.

5. Save

   Click **Save**. The employee now appears under that approver when they switch to the hierarchy view in the attendance details and overtime details forms in D365, and under **Hierarchy** on the team attendance screens in ESS.

Where the line manager is also the attendance and overtime approver, you can leave these unset — the employee will appear under the line view instead. An employee who is in neither your line nor your hierarchy does not appear for you at all, by design.
