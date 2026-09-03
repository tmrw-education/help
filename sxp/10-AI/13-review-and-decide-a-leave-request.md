---
id: review-and-decide-a-leave-request
summary:
  - "Requests a parent submits arrive on the **Leave Request** table and you are notified."
  - "Open one to see the reason, any attachments, sibling requests and the **AI recommendation**."
  - "**Approve** or **Decline** with a reason — you have around 15–20 seconds to undo."
keywords: [leave request, approve leave request, decline leave request, student leave approver, absence request parent, AI recommendation leave, sibling leave request, auto-approve leave, attendance officer leave]
video:
  youtube:
  bunny:
---

<!-- SOURCE — 3 Sep 2026 SXP Agent Demo, Attendance Compliance and Student Leaver
Request (14:38–21:43).
TO RE-VERIFY BEFORE PUBLISHING:
(1) The demo tenant had no attendance thresholds configured, so the AI
    recommendation shown said only that it could not assess risk. The richer
    recommendation described by Peter ("this student is at 50%, the threshold is
    80") was never seen on screen. Step 4 is written from his description.
(2) What the parent receives after a decision was not shown or described. Left
    out deliberately — add once confirmed.
No screenshots available — add to ./images/ from a UAT build. -->

# Review and decide a leave request

When a parent asks for their child to be away from school, the request comes to the
attendance officer with the context needed to decide it — the reason, any
supporting documents, whether a sibling has asked for the same days, and a
recommendation from the agent.

This is the one agent you do not prompt. It runs on every leave request as it
arrives.

1. Pick up the notification

   You are notified in StaffXP when requests are waiting. Click through from the
   notification, or open the **Leave Request** table directly.

2. Open a request

   The table lists the student, the dates and the request status. Click a row to
   open it.

3. Read the context

   Each request shows:

   - The **student**, the **dates** and the **absence reason** the parent chose.
   - **Attachments** — for example a medical certificate.
   - **Sibling requests** — any similar request raised for a sibling over the same dates. Bereavement and family travel usually affect more than one child, so this saves you finding them separately.

4. Read the AI recommendation

   The agent recommends approving or reviewing, and says why. Where your school has
   attendance thresholds configured, the recommendation is set against the
   student's own attendance — for example that a student at 50% against a threshold
   of 80% is a high-risk profile and the request warrants a closer look.

   > **Note:** The recommendation is advice, not a decision. A member of staff
   > reviews every request that is not auto-approved. If no attendance thresholds
   > are configured in CE, the agent says so and cannot assess risk.

5. Approve or decline

   Click **Approve**, or **Decline** and enter your reason. The decision takes
   effect immediately and the request moves out of the queue.

6. Undo, if you need to

   For roughly **15 to 20 seconds** after you decide, an undo is offered. Taking it
   returns the request to the queue for you to decide again.

7. Find resolved requests

   Everything decided moves to the resolved list, where you can sort by start and
   end date to find a past request.

## Requests you never see

Your school can set some kinds of request to be approved automatically — typically
routine reasons where no judgement is needed. Those are approved as they arrive and
do not reach the queue. Which reasons and leave types qualify is set by a school
admin in CE; see **Configure leave request auto-approval** under **Agent setup** in
the CE user guide.

> **Note:** Auto-approval does not look at attendance or academic performance. It
> approves everything matching the leave type and absence reason your school has
> listed, so the list should be kept to reasons that genuinely need no review.
