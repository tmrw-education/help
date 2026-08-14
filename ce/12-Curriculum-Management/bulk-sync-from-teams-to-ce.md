---
draft: true
id: bulk-sync-teams-ce
summary:
  - "Confirm teachers have marked and returned work in Teams."
  - "Run the bulk sync to pull assessment results back into CE."
  - "Check the marks against the class teacher assessment records."
keywords: [bulk sync from Teams, pull grades from Teams, sync assessment results, Teams grades to CE, bulk assessment sync]
video:
  youtube:
  bunny:
---

<!-- SOURCE ROW — delete before publishing
Epic:    Curriculum Management (CE)
Feature: Sync Data from Teams to CE
Area:    CE
Role:    Timetable coordinator, School admin
-->

<!-- TODO — THIN SOURCE, UPDATE WHEN MORE INFORMATION IS AVAILABLE
Written from: Curriculum Management workshop (14 May) 33:45-35:47, which
demonstrates the single-class 'Sync assignment' round trip in full.
Gap: the BULK variant is never demonstrated. Only the per-class sync is shown.
We do not know the trigger, the scope (school? academic year? term?), the
schedule, or the error reporting.
Needs: confirmation of whether a bulk pull exists separately from the per-class
sync, and if so a recording of it.
-->

# Bulk sync from Teams to CE

Work set and marked in Teams Edu flows back into CE so that results sit alongside
the rest of the student record. Running it in bulk brings back results across
classes in one pass, rather than class by class.

1. Check the work is ready

   Results only come back once teachers have marked the work and returned it to
   students in Teams. Anything still unmarked will sync as submitted but
   ungraded.

2. Run the bulk sync

   Trigger the bulk sync to pull assessment data from Teams Edu into CE.

3. Check the results landed

   Open a class, go to **Teacher assessment**, and confirm the assigned date,
   submit date and published points have come through.

   ![Teacher assessment records in CE showing points returned from Teams](./images/bulk-sync-from-teams-to-ce-1.png)

   > **Note:** The data pulled back is what Teams Edu makes available through its
   > API. Where Teams holds a rubric, the allocated marks come across; richer
   > detail may not.
