---
draft: true
id: verify-school-offerings-curriculum-supports-multi
summary:
  - "Open the school profile and find the curriculum offering."
  - "Check every curriculum the school offers is listed."
  - "Confirm the school appears under each of those curricula."
keywords: [school curriculum offering, multi curriculum school, school offers British Indian, curriculum multi-select, verify school curriculum]
video:
  youtube:
  bunny:
---

<!-- SOURCE ROW — delete before publishing
Epic:    School Profile (CE)
Feature: General
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
Additional gap: MULTI-SELECT specifically is never demonstrated. The curriculum
is shown on the school profile and confirmed to come from the curriculum master
table, but no school is shown carrying two curricula at once.
-->

# Verify School Offerings Curriculum supports multi-select

A school can offer more than one curriculum — a British stream and an Indian
stream, for example. Where it does, it holds a separate school setting per
curriculum per academic year.

1. Check the curriculum on the school profile

   Open the school profile and find the curriculum configuration on the
   **General** tab. Confirm every curriculum the school offers is present.

   ![The curriculum configuration on a school profile](./images/verify-school-offerings-curriculum-supports-multi-select-1.png)

2. Check the school settings

   Confirm there is a school setting for each curriculum for the current academic
   year, each with its own start date, end date and terms.

3. Check the reverse reference

   Open the curriculum record in **Curriculum Management** and confirm the school
   is listed against it. Curriculum is the master table — the same records drive
   the curriculum lookups on the school, parent and student profiles.

   > **Note:** There is a known field change in flight: **Curriculum type** is
   > being removed in favour of a proper **Curriculum** lookup. If you see both,
   > the lookup is the one that matters.
