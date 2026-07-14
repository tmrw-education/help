---
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

# Create an excursion and auto-generate consent for registered students

An excursion registers its students automatically from the year/roll groups you pick, sends the event for approval, and — once approved and live — creates a consent record for each registered student. This walkthrough covers that end-to-end path in the CE (Dynamics 365) back end.

1. Open the Events and Excursions area

   In the CE model-driven app, open the **Events and Excursions** area, then click **New** to start a new event. TODO: confirm the exact app/area name and the command that starts a new event (source describes an "event and excursions" module but does not name the app or the New command precisely).

   ![The Events and Excursions area in CE with the New command highlighted](./images/create-excursion-to-submit-to-approve-to-auto-generate-consent-records-1.png)

2. Name the event and set the type to Excursion

   Enter the event **Name**, then set **Event type** to **Excursion** (or **Visit**). This choice matters: students are auto-registered — and consent is auto-generated — **only** for the **Visit** and **Excursion** event types. Every other type (Camp, Co-curricular, Corporate) has to be registered manually and will not auto-generate consent. **Event subtype L1** and **Event subtype L2** cascade from the event type, and **School** defaults to your school.

   ![The event header with Event type set to Excursion and the cascading subtype fields](./images/create-excursion-to-submit-to-approve-to-auto-generate-consent-records-2.png)

3. Choose who attends

   In the **Attendee** section, select the **Year group**, then the roll group within it. Selecting these automatically registers the matching students for the event — this registered list is exactly who consent is generated for. Removing a group here also removes its registrations. TODO: confirm the exact label of the second attendee field (heard in the demo as "roll group").

   ![The Attendee section with the Year group and roll group selectors](./images/create-excursion-to-submit-to-approve-to-auto-generate-consent-records-3.png)

4. Complete the schedule, venue and finances

   On the **Schedule** tab set the start and end dates, the registration open/close dates and the payment due date. Select the **Venue**. In the financial section, set who is charged (**Parent**, **School**, or both) and the amount. TODO: confirm the exact tab and field labels for schedule, venue and finance (the demo showed these screens but did not spell out every label).

5. Submit the event for approval

   Click **Submit** to send the event through its **approval matrix**. The matrix routes the request on three things — the **school**, the **process type** (Events and Excursions approval), and the **event type** — to the configured approver, who is notified by email and in Teams. TODO: confirm the exact label of the submit-for-approval button.

6. Approve the event

   The approver opens the request (from the email, the Teams notification, or the event record itself) and clicks **Approve**. The event only goes live once **every** required approval in the matrix is complete — a single approval on a multi-step flow is not enough.

   ![An event approval request with the Approve and Reject buttons](./images/create-excursion-to-submit-to-approve-to-auto-generate-consent-records-4.png)

7. Publish and confirm consent was generated

   After approval the event goes live (Publish / go live). Consent records are then created for each registered student. TODO: confirm where the generated consent records appear and the exact label of the go-live control — the source establishes auto-registration and the approval-to-go-live flow, but does not demo the consent-record output itself.
