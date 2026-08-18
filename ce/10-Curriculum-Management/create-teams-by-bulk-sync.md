---
draft: true
id: create-teams-by-bulk-sync
summary:
  - "Confirm enrolment and re-enrolment are complete and timetable data has returned."
  - "Check the class codes and naming convention on the class records."
  - "Trigger the bulk sync — Teams are created and members added automatically."
keywords: [bulk sync Teams, create Teams in bulk, start of year Teams creation, automated class team creation, class code naming convention]
video:
  youtube:
  bunny:
---

<!-- SOURCE ROW — delete before publishing
Epic:    Curriculum Management (CE)
Feature: Teams Edu Integration
Area:    CE
Role:    Timetable coordinator, School admin
-->

<!-- TODO — THIN SOURCE, UPDATE WHEN MORE INFORMATION IS AVAILABLE
Written from: Curriculum Management workshop (14 May) 22:44-24:35, where
the year-start automation is described in full.
Gap: the bulk run itself is never executed on screen. The presenter states it
"will be the automation process at the beginning of the years... without manual
intervention". We do not know where the trigger lives, who has access to it,
what the progress or error reporting looks like, or how failures are retried.
Needs: a recording of an actual bulk run, or written detail on the trigger point
and error handling.
-->

# Create Teams by bulk sync

At the start of the academic year, class Teams are created in bulk rather than
one at a time. The bulk run is the normal route — creating a Team by hand is the
exception.

1. Complete the upstream steps

   Bulk sync depends on data that arrives earlier in the year-start sequence:

   - Enrolment and re-enrolment must be complete, so student subject choices are
     known
   - Student, teacher and room data must have gone out to the timetable solution
   - Timetable data must have come back into CE, giving the teaching schedule

2. Check the class mapping

   CE maps the returned timetable data to classes and class students, and assigns
   a **class code** to each class. Class codes follow a naming convention managed
   through a spreadsheet — check this before the run, because the code determines
   the Team name.

   ![Class records showing generated class codes](./images/create-teams-by-bulk-sync-1.png)

3. Trigger the sync

   The bulk run creates the Teams in Teams Edu and adds class members
   automatically. It is normally triggered by IT admin or on a schedule rather
   than by school staff.

   > **Note:** This is a once-a-year automated process, not something to run
   > casually. Speak to IT admin before triggering it.

4. Spot-check the result

   Open a sample of classes and confirm the Team was created and the members
   came across. Students missing a Microsoft identity are dropped from the sync
   silently.
