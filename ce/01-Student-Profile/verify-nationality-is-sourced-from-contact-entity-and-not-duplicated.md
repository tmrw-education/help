---
draft: true
id: verify-nationality-sourced-contact-entity-not-dupl
summary:
  - "Open the student profile and find the nationality."
  - "Open the underlying **Contact** record and compare."
  - "Confirm there is only one nationality field, held on the contact."
keywords: [nationality student profile, nationality from contact, duplicate nationality field, verify nationality source, student personal information]
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

# Verify Nationality is sourced from Contact entity and not duplicated

Nationality is personal information and belongs on the **Contact** record. It
should not be stored a second time on the student profile, because two copies
will eventually disagree.

1. Check the profile

   Open the student profile and find the nationality shown.

2. Check the contact

   Open the underlying **Contact** record and compare.

   ![Nationality shown on the student profile and on the contact record](./images/verify-nationality-is-sourced-from-contact-entity-and-not-duplicated-1.png)

3. Confirm there is one source

   Confirm nationality is stored once, on the contact, and only displayed on the
   profile.

   > **Note:** The same principle applies to the rest of the personal
   > information — name, date of birth, identification documents. The contact
   > owns it; profiles display it.
