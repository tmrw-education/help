---
draft: true
id: verify-address-section-reflects-contact-entity-dat
summary:
  - "Open the student profile and go to the **Demographic** tab."
  - "Check the address shown."
  - "Open the underlying **Contact** record and confirm the two match."
keywords: [student address verification, address from contact entity, student demographic address, contact address student profile]
video:
  youtube:
  bunny:
---

<!-- SOURCE ROW — delete before publishing
Epic:    Student Profile (CE)
Feature: Demographics
Area:    CE
Role:    Registrar, School Admin
-->

<!-- TODO — THIN SOURCE, UPDATE WHEN MORE INFORMATION IS AVAILABLE
Written from: School, Parent & Student Profiles (16 Apr) 42:08-45:44.
Gap: that segment is a field-level DESIGN REVIEW of the student profile, not a
task walkthrough. Field names are reliable; navigation, exact tab labels and the
behaviour being verified here are not demonstrated. No verification is ever
performed on camera.
Needs: a task-shaped walkthrough of the student profile.
-->

# Verify address section reflects Contact entity data correctly

Address is personal information, so it is held on the **Contact** record rather
than on the student profile. The profile displays it; the contact owns it.

1. Check the address on the profile

   Open the student profile and go to the **Demographic** tab. Note the address
   shown.

2. Check the contact

   Open the underlying **Contact** record and compare the address held there.

   ![The demographic tab on a student profile showing the address](./images/verify-address-section-reflects-contact-entity-data-correctly-1.png)

3. Confirm they match

   The two should be the same. A difference means the profile is not reading
   through to the contact as intended.

   > **Note:** Correct the address on the contact, not on the profile. Personal
   > information is owned by the contact so that it stays consistent across every
   > profile that person holds.
