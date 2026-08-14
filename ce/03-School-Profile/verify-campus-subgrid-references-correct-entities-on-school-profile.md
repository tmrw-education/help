---
draft: true
id: verify-campus-subgrid-references-correct-entities
summary:
  - "Open the school profile and go to the **Campus** tab."
  - "Check each campus shows its key contact, address and campus offering."
  - "Confirm the key contact resolves to a staff profile, not a bare contact."
keywords: [campus subgrid school profile, verify campus records, multi campus school, campus offering, campus key contact]
video:
  youtube:
  bunny:
---

<!-- SOURCE ROW — delete before publishing
Epic:    School Profile (CE)
Feature: Campus
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
-->

# Verify Campus subgrid references correct entities on School Profile

Schools running more than one campus hold each campus as its own record under the
school profile. Check the campus records point at the right entities.

1. Open the campus tab

   Open the school profile and go to the **Campus** tab.

2. Check each campus

   For each campus, confirm:

   - The **Key contact** is populated
   - The **Address** is correct
   - The **Campus offering** reflects what that campus actually provides

   ![The Campus tab on a school profile showing key contact, address and offering](./images/verify-campus-subgrid-references-correct-entities-on-school-profile-1.png)

3. Check the references resolve

   Open a campus record and confirm the lookups resolve to the right underlying
   records rather than to loose contacts.

   > **Note:** Campuses matter beyond the profile — notice audiences can be
   > targeted by campus, so a missing campus record limits who a notice can
   > reach.
