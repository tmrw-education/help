---
draft: true
id: verify-school-profile-data-correctly-populated-ext
summary:
  - "Open the school **Account** record and go to **Related** then **School profile**."
  - "Check the imported values on the **General** tab against the source system."
  - "Confirm the **School code** matches — it is the key used for synchronisation."
keywords: [verify school profile import, school data from external system, school code sync, school profile populated, check imported school data]
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

# Verify School Profile data is correctly populated from external system import

School data arrives from an external system. The **Account** record holds the
basic organisation detail; the **School profile** extends it with everything
education-specific. Check both after an import.

1. Open the account

   Open the school's **Account** record. It holds the basic detail: name, school
   code, zip code, phone, WhatsApp, email and website.

2. Open the school profile

   Go to **Related** then **School profile**. This is where the education
   specific data sits, across several tabs.

   ![Navigating from the school Account record to the School profile](./images/verify-school-profile-data-is-correctly-populated-from-external-system-1.png)

3. Check the school code

   Confirm the **School code** matches the source system. The same code is
   maintained across systems and is what synchronisation relies on — including
   the integration with finance and operations.

   > **Note:** School code and school name are sensitive. Where they are changed
   > on the school profile, check the change is reflected on the parent Account
   > record too.

4. Check the general tab

   Work through the **General** tab and confirm the contact information, key
   contacts and school configuration match what was expected.
