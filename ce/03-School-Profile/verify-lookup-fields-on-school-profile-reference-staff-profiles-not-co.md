---
draft: true
id: verify-lookup-fields-school-profile-reference-staf
summary:
  - "Open the school profile and find the key contact fields."
  - "Open each lookup and check what it resolves to."
  - "Confirm it points at a staff profile rather than a bare contact record."
keywords: [school profile lookups, staff profile not contact, key contact school profile, verify lookup fields, staff profile reference]
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
-->

# Verify lookup fields on School Profile reference Staff Profiles (not Contacts)

People in CE are held as **Contact** records, which are then extended into
student, parent and staff profiles depending on their role. Key contact lookups
on the school profile should resolve to the **staff profile** extension, not to
the underlying contact.

1. Open the school profile

   Open the school profile and go to the **General** tab, where the key contact
   and key person subgrid sit.

2. Check each lookup

   Open each key contact lookup and check what it resolves to.

   ![Key contact lookups on the school profile general tab](./images/verify-lookup-fields-on-school-profile-reference-staff-profiles-not-co-1.png)

3. Confirm it is a staff profile

   Confirm the lookup resolves to a staff profile record. A lookup pointing at a
   bare contact means the person's staff context — their role and school — is not
   attached.

   > **Note:** The same person can hold more than one profile over time. The
   > contact holds what does not change; the profile holds the role.
