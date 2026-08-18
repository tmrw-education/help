---
draft: true
id: create-excursion-submit-approve-auto-generate-cons
summary:
  - "In **Events and Excursions**, click **New** and set **Event type** to **Excursion** (or **Visit**) — only these types auto-register students."
  - "Pick the **Year group** and roll group in the **Attendee** section to auto-register the students consent is generated for."
  - "Click **Submit** to send the event through its approval matrix, then **Approve** it."
  - "Once every approval is done, the event goes live and consent is created for each registered student."
keywords: [create excursion, auto-generate consent, excursion consent, submit event for approval, approve excursion, event registration consent, generate consent for students]
video:
  youtube:
  bunny:
---

<!-- TODO — THIN SOURCE, UPDATE WHEN MORE INFORMATION IS AVAILABLE
Gap: the source covers auto-registration by year/roll group and the
approval-to-go-live flow, but never demonstrates the consent output itself.
Unconfirmed: the exact app/area name and the New command; the label of the second
attendee field (heard as "roll group"); the tab and field labels for schedule,
venue and finance; the submit-for-approval button label; the go-live control
label; and where the generated consent records appear so they can be checked.
Needs: the full path recorded through to the consent records being created.
-->

# Create an excursion and auto-generate consent for registered students

An excursion registers its students automatically from the year and roll groups
you pick, sends the event for approval, and — once approved and live — creates a
consent record for each registered student. This walkthrough covers that
end-to-end path in the CE back end.

1. Open the Events and Excursions area

   In the CE model-driven app, open the **Events and Excursions** area, then click
   **New** to start a new event.

   ![The Events and Excursions area in CE with the New command highlighted](./images/create-excursion-to-submit-to-approve-to-auto-generate-consent-records-1.png)

2. Name the event and set the type to Excursion

   Enter the event **Name**, then set **Event type** to **Excursion** (or
   **Visit**). **Event subtype L1** and **Event subtype L2** cascade from the
   event type, and **School** defaults to your school.

   > **Note:** This choice matters. Students are auto-registered — and consent
   > auto-generated — **only** for the **Visit** and **Excursion** event types.
   > Every other type has to be registered manually and will not auto-generate
   > consent.

   ![The event header with Event type set to Excursion and the cascading subtype fields](./images/create-excursion-to-submit-to-approve-to-auto-generate-consent-records-2.png)

3. Choose who attends

   In the **Attendee** section, select the **Year group**, then the roll group
   within it. Selecting these automatically registers the matching students — and
   this registered list is exactly who consent is generated for.

   > **Note:** Removing a group here also removes its registrations.

   ![The Attendee section with the Year group and roll group selectors](./images/create-excursion-to-submit-to-approve-to-auto-generate-consent-records-3.png)

4. Complete the schedule, venue and finances

   On the **Schedule** tab set the start and end dates, the registration open and
   close dates, and the payment due date. Select the **Venue**. In the financial
   section, set who is charged — **Parent**, **School**, or both — and the amount.

5. Submit the event for approval

   Click **Submit** to send the event through its **approval matrix**. The matrix
   routes the request on three things — the **school**, the **process type**, and
   the **event type** — to the configured approver, who is notified by email and
   in Teams.

6. Approve the event

   The approver opens the request — from the email, the Teams notification, or the
   event record itself — and clicks **Approve**.

   > **Note:** The event only goes live once **every** required approval in the
   > matrix is complete. A single approval on a multi-step flow is not enough.

   ![An event approval request with the Approve and Reject buttons](./images/create-excursion-to-submit-to-approve-to-auto-generate-consent-records-4.png)

7. Publish and confirm consent was generated

   After approval the event goes live. Consent records are then created for each
   registered student.
