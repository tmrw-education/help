---
draft: true
id: schedule-the-attendance-compliance-checker
summary:
  - "Open **Active Attendance Compliance Checker configs** and add a schedule for the school."
  - "Set the **trigger time** and whether it repeats **daily**, **weekly** or **monthly**."
  - "Set an **until** date and save — the agent runs on that schedule and cannot be run on demand."
keywords: [attendance compliance checker config, schedule attendance agent, agent schedule CE, attendance agent trigger time, daily weekly monthly agent run, event grid agent trigger, attendance risk report schedule]
video:
  youtube:
  bunny:
---

<!-- SOURCE ROW — delete before publishing
Epic:    Agent setup (CE)
Feature: Attendance Compliance Checker Agent
Area:    CE
Role:    School Admin
-->

<!-- SOURCE — 3 Sep 2026 SXP Agent Demo, Attendance Compliance and Student Leaver
Request (0:07, 4:00–6:00, 12:40–14:38), demonstrated by Peter Nguyen;
26 Aug 2026 Agent walkthrough (6:43–7:58, 10:33).
No screenshots available — add to ./images/ from a UAT build. -->

# Schedule the attendance compliance checker

The attendance compliance checker does not run when a user asks for it. It runs on
a schedule you set here, and staff in StaffXP see the results of the last run. Each
school needs its own schedule — without one, the agent never runs at all.

1. Open the configuration

   In the administrator app, go to **System settings ▸ Settings ▸ Active Attendance Threshold** and add a configuration for the
   school.

2. Set when it runs

   The schedule works like a recurring meeting:

   - **Trigger time** — the time of day the agent runs, for example, 4 pm.
   - **Recurrence** — **daily**, **weekly** or **monthly**.
   - **Day** — for a weekly schedule, the day of the week; for monthly, the day of the month.

   > **Note:** For a monthly schedule set to day 31, the agent runs on the last day
   > of any shorter month — 28 February, for example.

3. Set an end date

   Set the **until** date for the schedule, then save.

   [New attendance compliance form with completed fields](./images/schedule-the-attendance-compliance-checker-1.png)

5. Check it in StaffXP

   Staff see **last updated** and **next update** alongside the risk tiles in
   StaffXP, taken from this schedule. When the agent finishes a run, it notifies the
   attendance officer, admin, school leaders and teachers that a report is ready.

## Choosing a cadence

Balance how current the data needs to be against the system load. The agent
analyses every student in scope on each run, and schools sit together in one
tenant, so a large school running daily has a real cost.

> **Note:** The agent cannot be triggered on demand. If a user asks Felix to run
> the attendance risk report, the request is queued rather than executed —
> attendance taken since the last run is not reflected until the next one. Set a
> cadence the school is happy to work to.

## How it works

The schedule is held in CE and raises an event that calls the agent, which analyses
the attendance data and writes its findings back. That is why the schedule lives
here rather than in StaffXP, and why StaffXP has no run button.

## Who sets this up

The school admin. Each school runs to its own cadence, and it usually changes over
time.
