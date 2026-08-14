---
draft: true
id: verify-cascading-dropdowns-entity-references-resid
summary:
  - "Open the school profile and go to the **Residential** tab."
  - "Check the residential houses and their manager and key contact."
  - "Confirm the dropdowns cascade correctly from the selection above."
keywords: [residential house school profile, boarding house records, residential cascading dropdown, house manager key contact, verify residential]
video:
  youtube:
  bunny:
---

<!-- SOURCE ROW — delete before publishing
Epic:    School Profile (CE)
Feature: Residential
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

# Verify cascading dropdowns and entity references for Residential House

Where students board during the academic year, residential detail is held on the
school profile with its own houses, managers and contacts.

1. Open the residential tab

   Open the school profile and go to the **Residential** tab.

2. Check the residential detail

   Confirm the contact and address information for the residential provision.

3. Check the houses

   Each **Residential house** groups students together. For each house, confirm
   the manager and the key contact are populated and resolve correctly.

   ![The Residential tab showing residential houses with manager and key contact](./images/verify-cascading-dropdowns-and-entity-references-for-residential-house-1.png)

4. Check the cascade

   Confirm that selecting a value in one field correctly narrows the options in
   the field below it.

   > **Note:** Residential houses are separate from school houses. Do not assume
   > a student's school house and residential house are the same.
