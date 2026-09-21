---
draft: true
id: review-missing-attendance
summary:
  - "In D365, open the **Missing attendance** form under time and attendance."
  - "It lists days where an employee punched in without punching out, or punched out without punching in."
  - "Switch between the **Line** and **Hierarchy** views, then correct the day in the attendance logs."
keywords: [missing attendance, no punch out, no punch in, incomplete attendance, unmatched punch, attendance exception, line view, hierarchy view, D365]
video:
  youtube:
  bunny:
---

# Review missing attendance

An employee who punches in in the morning but never punches out in the evening leaves an incomplete day. The missing attendance form collects these so they can be chased and corrected rather than quietly producing a wrong duration.

1. Open the missing attendance form

   In D365, go to the **Missing attendance** form under time and attendance.

2. Read the exceptions

   Each row is a day where one half of the pair is absent — a punch in on a date with no punch out, or a punch out on a date with no punch in. Both cases are recorded as missing attendance.

   ![The missing attendance form showing a punch in with no punch out and a punch out with no punch in](./images/review-missing-attendance-1.png)

3. Switch between the line and hierarchy views

   As on the other attendance forms, **Line** shows your direct reports and **Hierarchy** shows the people assigned to you through the attendance hierarchy.

4. Correct the record

   Where you have established what the missing time should have been — from the employee, their manager, or an HR request for a late arrival or early exit — correct it in the attendance logs and re-run the summary batch job. See [Adjust an attendance record](./08-adjust-an-attendance-record.md).
