---
draft: true
id: verify-parents-caregivers-section-references-paren
summary:
  - "Find the parents and caregivers section."
  - "Open each entry and check what it resolves to."
  - "Confirm it points at a parent profile rather than a bare contact."
keywords: [parents caregivers section, parent profile not contact, caregiver reference, verify parent references, cross profile integration]
video:
  youtube:
  bunny:
---

<!-- SOURCE ROW — delete before publishing
Epic:    School Profile (CE)
Feature: Cross-Profile Integration
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
Additional gap: the parent profile itself was NEVER REACHED in the 16 Apr session
— it was explicitly deferred at 1:28:16 and the session ran out of time. Nothing
about the parent profile has been demonstrated in any recording.
-->

# Verify Parents/Caregivers section references Parent Profiles (not Contacts)

Parents and caregivers are **Contact** records extended into a **parent
profile**. References should resolve to the parent profile, so that the academic
context — which children, which school — comes with them.

1. Open the section

   Find the parents and caregivers section.

2. Check each reference

   Open each entry and check what it resolves to.

   ![The parents and caregivers section showing profile references](./images/verify-parents-caregivers-section-references-parent-profiles-not-conta-1.png)

3. Confirm it is a parent profile

   Confirm the reference resolves to a parent profile, not to the bare contact
   record.

   > **Note:** A contact holds personal information that does not change. The
   > parent profile holds the relationship to the school and to the children.
   > Referencing the contact alone loses that.
