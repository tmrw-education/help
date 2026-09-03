---
id: review-a-student-at-risk
summary:
  - "Open a student from the attendance risk report to see their risk profile."
  - "Read the **summary**, the supporting data, and what the agent has **already done**."
  - "Work the recommended actions — create a task, email the parent, or follow up through the case."
keywords: [student at risk, attendance risk profile, attendance case, intervention library, assign a task attendance, follow up attendance risk, head of year attendance, attendance officer case, AI case summary]
video:
  youtube:
  bunny:
---

<!-- SOURCE — 3 Sep 2026 SXP Agent Demo, Attendance Compliance and Student Leaver
Request (0:07–14:38); 26 Aug 2026 Agent walkthrough (0:03–3:00).
TO RE-VERIFY BEFORE PUBLISHING:
(1) Outlook was not connected in either demo environment — Peter described the
    Send email button as opening an Outlook pop-up but never clicked it.
(2) Academic average is named as a supporting data point but is being built for
    phase four and is not present at this release.
No screenshots available — add to ./images/ from a UAT build. -->

# Review a student at attendance risk

When the attendance compliance checker flags a student, it does not just record the
number. It opens a case, drafts a summary, sets up monitoring, and recommends what
should happen next based on your school's intervention library. Your job is to
review that and act.

Start from the risk report — see
[View the attendance risk dashboard](./11-view-the-attendance-risk-dashboard.md).

1. Open the student

   Click a student in the risk report to open their risk profile.

2. Read the summary and supporting data

   The profile opens with the student's **risk level** and a summary of the case.
   Underneath sit the data points the agent used to reach it — **wellbeing notes**,
   **missed assignments** and attendance history — so you can judge the call
   yourself rather than take it on trust.

3. Check who owns it

   The profile names the person currently responsible for acting — typically the
   **head of year**. If that is not you, the recommended actions are shown for
   information and the action buttons do not appear.

4. See what has already been done

   The agent records what it has set in motion — for example a **case logged for
   visibility**, a **monitoring schedule created**, a **task sent** to a member of
   staff, and a **parent reminder sent**. Read this before you act, so you do not
   duplicate it.

5. Work the recommended actions

   The **must do** list is drawn from your school's intervention library — the
   actions your school has decided are appropriate at each risk level, matched
   against the signals this student is showing. Depending on your role you can:

   - **Send email** — opens Outlook to write to the parent.
   - **Follow up through a case** — opens the case the agent created.
   - **Add a task** — assign follow-up to a member of staff.

   > **Note:** The recommendations come from the intervention library your school
   > admin uploaded to CE, not from a general search. If the library is missing,
   > the wording is left to the model and is neither controlled nor consistent —
   > see **Upload the attendance intervention library** under **Agent setup** in
   > the CE user guide.

6. Work the case

   The case carries an **AI summary** of the situation and the tasks raised
   against it. From the case you can:

   - Create a task — for example *check in with the student* — and assign it to a member of staff, who is notified in StaffXP.
   - Read and update tasks others have raised.
   - **Close**, **complete** or **cancel** the case once it is resolved or no longer applies.
