---
draft: true
id: configure-leave-request-auto-approval
summary:
  - "Open the **approval matrix**, find your school, and set the process type to **Leave request approval**."
  - "Define the conditions — **case type**, **school**, **leave type** and **absence reason**."
  - "Turn on **AI auto-approval** and check the approved, submitted and rejected values."
keywords: [leave request auto approval, approval matrix CE, AI auto-approval, student leave approver setup, leave type absence reason, auto approve absence, leave request process type, agent configuration leave]
video:
  youtube:
  bunny:
---

<!-- SOURCE ROW — delete before publishing
Epic:    Agent setup (CE)
Feature: Student Leave Request Approver Agent
Area:    CE
Role:    School Admin
-->

<!-- SOURCE — 3 Sep 2026 SXP Agent Demo, Attendance Compliance and Student Leaver
Request (14:38–18:30), demonstrated by Peter Nguyen.
TO RE-VERIFY BEFORE PUBLISHING:
(1) Peter did not create the demo record himself and several fields were locked to
    his account, so the add flow was described rather than performed. Walk the
    add flow on a UAT build and confirm the field names before publishing.
(2) Overlaps with 12-Attendance-Setup/configure-leave-approval-workflow.md, which
    is still a stub. Decide whether that page absorbs this one or cross-references
    it before either is published.
No screenshots available — add to ./images/ from a UAT build. -->

# Configure leave request auto-approval

The student leave request approver acts on every leave request a parent submits.
What it does with one depends on what you set here: requests matching the
conditions you define are approved automatically, and everything else goes to the
attendance officer with a recommendation attached.

1. Open the approval matrix

   Go to the **approval matrix** and find the record for your school.

2. Set the process type

   Set **Process type** to **Leave request approval**. The agent only looks at
   records of this type.

3. Define the conditions

   Set the conditions that a request must meet to be approved automatically:

   - **Case type** — must be **Leave request**.
   - **School** — the school this rule covers.
   - **Leave type** — must include **Request for leave** for the agent to work. You can add other types alongside it, such as *pick up early* or *late arrival*.
   - **Absence reason** — the reasons that qualify for automatic approval.

   > **Note:** Set the absence reason deliberately. Auto-approval does not weigh
   > anything up — it does not look at the student's attendance, their academic
   > performance, or how often they have been away. Any request matching the leave
   > type and reason you list is approved on arrival. Keep the list to reasons that
   > genuinely need no judgement, and leave anything a person should look at off it.

4. Turn on AI auto-approval

   Switch **AI auto-approval** on. With it off, every request goes to the
   attendance officer to decide.

5. Check the status values

   Three values control how the outcome is written back, and the agent will not
   work correctly if they are wrong:

   - **Approved value** — must be **Approved**.
   - **Submitted value** — must be **Pending**. This is the default, but it can be changed, so check it.
   - **Rejected value** — must be **Rejected**.

   > **Note:** If the rejected value is set to *approved*, declined requests are
   > written back as approved. Check all three before saving.

6. Save

   Save the record. It applies to requests submitted from that point on.

## What happens to everything else

Requests that do not match your conditions go to the attendance officer in StaffXP,
on the **Leave Request** table, with the parent's reason, any attachments, any
sibling request over the same dates, and a recommendation from the agent. The
recommendation is set against the student's attendance where thresholds are
configured — see
[Set attendance risk thresholds](./set-attendance-risk-thresholds.md). Without
thresholds the agent says it cannot assess risk, and the officer decides unaided.

## Who sets this up

The school admin. Which reasons a school is willing to approve without review is
the school's own decision. Where a school prefers, the implementation team can load
the initial configuration — but the school still needs to be able to change it
later, without coming back to the team years afterwards.
