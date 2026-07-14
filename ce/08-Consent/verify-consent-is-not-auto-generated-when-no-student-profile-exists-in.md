---
id: verify-consent-not-auto-generated-when-no-student
summary:
  - "Open an **Excursion** (or **Visit**) event and select its **Year group** / roll group in the **Attendee** section."
  - "Check the event's registration list."
  - "Confirm that a registration with no linked student profile does not produce a consent record."
keywords: [consent not generated, no student profile, missing profile registration, verify consent excursion, registration without profile]
video:
  youtube:
  bunny:
---

# Check that consent isn't created for a registrant with no student profile

Consent is generated per registered student, keyed to the student's profile. This check confirms that a registration entry with no linked student profile does not produce a consent record.

1. Open an excursion and load its attendees

   In the **Events and Excursions** area, open an event whose **Event type** is **Excursion** or **Visit**, then select a **Year group** and roll group in the **Attendee** section to auto-register students.

2. Find a registration with no linked student profile

   Open the event's registration list and locate a registration that is not linked to a student profile. TODO: confirm how a registration ends up without a linked student profile and the exact tab/label of the registration list — the source describes year/roll-group auto-registration but does not demonstrate the no-profile condition.

   ![The event registration list with a registration that has no linked student profile](./images/verify-consent-is-not-auto-generated-when-no-student-profile-exists-in-1.png)

3. Confirm no consent was generated

   Confirm that no consent record was created for that registration. TODO: confirm where generated consent records are listed so their absence can be verified (source does not demo the consent-record output).
