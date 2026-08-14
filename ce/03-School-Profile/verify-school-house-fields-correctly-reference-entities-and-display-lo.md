---
draft: true
id: verify-school-house-fields-correctly-reference-ent
summary:
  - "Open the school profile and find the school house configuration."
  - "Check each house references the correct school and year groups."
  - "Confirm the displayed IDs are read-only."
keywords: [school house configuration, verify school houses, house records school profile, house ID locked, student houses]
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
Additional gap: house allocation does not exist yet, confirmed on camera. The
locked-ID behaviour is never demonstrated.
-->

# Verify School House fields correctly reference entities and display locked IDs

School houses group students across year groups for pastoral and competitive
purposes. Check the house configuration references the right records.

1. Open the house configuration

   Open the school profile and find the school house configuration.

2. Check the references

   For each house, confirm it references the correct school and, where
   applicable, the correct year groups.

   ![School house configuration on the school profile](./images/verify-school-house-fields-correctly-reference-entities-and-display-lo-1.png)

3. Confirm IDs are locked

   Confirm the displayed IDs are read-only.

   > **Note:** Houses are used as a notice audience. A house that is missing or
   > misconfigured here cannot be targeted when sending a notice.
