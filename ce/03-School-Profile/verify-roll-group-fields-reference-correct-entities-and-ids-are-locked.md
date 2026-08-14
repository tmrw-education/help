---
draft: true
id: verify-roll-group-fields-reference-correct-entitie
summary:
  - "Open the school profile and find the year group configuration."
  - "Open a year group and check its roll groups."
  - "Confirm the codes are correct and the generated IDs are read-only."
keywords: [roll group school profile, verify roll groups, year group configuration, roll group code locked, classroom management groups]
video:
  youtube:
  bunny:
---

<!-- SOURCE ROW — delete before publishing
Epic:    School Profile (CE)
Feature: Roll Groups & School House
Area:    CE
Role:    School Admin
-->

<!-- TODO — THIN SOURCE, UPDATE WHEN MORE INFORMATION IS AVAILABLE
Written from: School, Parent & Student Profiles (16 Apr) 5:02-13:32.
Gap: that segment is a field-level DESIGN REVIEW of the school profile, not a
task walkthrough. It is also unresolved in places — the presenter agrees on
camera that several fields need revising, including removing Curriculum type in
favour of a Curriculum lookup. Field names are reliable; the verification steps
here are inferred.
Needs: a task-shaped walkthrough of the school profile once the field changes
have landed.
Additional gap: allocation is confirmed missing on camera (48:44-1:04:37), and
merge/split scenarios for roll groups are raised as an open requirement. The
locked-ID behaviour this topic calls for is never demonstrated.
-->

# Verify Roll Group fields reference correct entities and IDs are locked

Year groups are configured per school and per curriculum. Roll groups sit under
year groups and are what students are grouped into for classroom management.

1. Open the year group configuration

   Open the school profile and find the year group configuration. Year groups
   link directly to the school.

2. Check the year group codes

   Confirm the **Year group code** values are correct. The same codes are
   expected to be used by the timetable solution, so they need to match.

   ![Year group configuration on the school profile showing year group codes](./images/verify-roll-group-fields-reference-correct-entities-and-ids-are-locked-1.png)

3. Check the roll groups

   Open a year group and confirm its roll groups are present and correctly named.

4. Confirm generated IDs are locked

   Confirm any auto-generated IDs are read-only and cannot be edited by hand.

   > **Note:** Roll group and house ALLOCATION — deciding which students go into
   > which roll group after enrolment — does not exist yet. This page covers
   > checking the configuration, not allocating students to it.
