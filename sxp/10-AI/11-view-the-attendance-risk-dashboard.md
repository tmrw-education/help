---
id: view-the-attendance-risk-dashboard
summary:
  - "You are notified when the attendance compliance checker has a report ready."
  - "Prompt Felix with **show me the attendance risk dashboard**, or open the report from the notification."
  - "Read the **low**, **medium** and **high** risk tiles, then drill into the full report."
keywords: [attendance risk dashboard, attendance compliance checker, students at risk attendance, attendance risk report, high risk attendance, attendance threshold, last updated next update, Felix attendance risk]
video:
  youtube:
  bunny:
---

<!-- SOURCE — 3 Sep 2026 SXP Agent Demo, Attendance Compliance and Student Leaver
Request (0:07–14:38); 26 Aug 2026 Agent walkthrough (1:30–7:58).
NOTE: the 26 Aug transcript began mid-session and the opening of this flow was
lost; the 3 Sep demo restores it.
TO RE-VERIFY BEFORE PUBLISHING: Peter noted the ad-hoc-prompt response ("your
attendance compliance check has been queued and will be processed shortly") does
not yet reflect the next scheduled update, and said it would be improved.
No screenshots available — add to ./images/ from a UAT build. -->

# View the attendance risk dashboard

The **attendance compliance checker** works through your school's attendance data
on a schedule and sorts students into risk bands against the thresholds your
school has set. It runs in the background; you pick up the results.

Setting the thresholds and the schedule is a school admin job, done in CE. See
**Set attendance risk thresholds**, **Schedule the attendance compliance checker**
and **Upload the attendance intervention library** under **Agent setup** in the CE
user guide. Without them the agent has nothing to measure against and nothing to
recommend.

1. Wait for the notification

   When the checker has finished a run, you get a notification in StaffXP — for
   example *you have 13 students at risk*. Click the link in it to go straight to
   the report.

2. Or ask Felix

   You can also prompt **Felix** at any time: *show me the attendance risk
   dashboard*, or *show me the attendance risk report*.

   > **Note:** Say **attendance** risk. StaffXP has more than one kind of risk
   > report, and Felix asks which you meant if you leave it out.

3. Read the risk tiles

   The dashboard opens on tiles for **low**, **medium** and **high** risk, with the
   number of students in each and the total for your scope.

4. Check when the data is from

   **Last updated** and **next update** sit with the tiles. The figures are as at
   the last run, not as at right now.

   > **Note:** The checker cannot be run on demand. If you ask Felix to run it, the
   > request is queued rather than executed — the schedule is set per school in CE,
   > for performance reasons. Attendance taken since the last run is not reflected
   > until the next one.

5. Open the full report

   Click through from a tile to the full report, listing every student in that
   band with their attendance. From there, open a student to see their risk
   profile and act on it — see
   [Review a student at attendance risk](./12-review-a-student-at-risk.md).

## What you can see

| Your role | Scope |
| --- | --- |
| Teacher (homeroom or subject) | The students in the classes you teach |
| Head of year, school leader, attendance officer, admin | Every student in your school |

There is no cross-school or cluster view. Leaders also get a wider attendance
overview than teachers do, broken down by risk band.
