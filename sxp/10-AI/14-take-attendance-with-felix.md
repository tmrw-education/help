---
draft: true
id: take-attendance-with-felix
summary:
  - "Prompt **Felix** with *show me attendance* to bring a class roll into the chat panel."
  - "Mark each student **Present**, **Absent** or **Late** — or expand the roll to the canvas for more room."
  - "Once every student has a status, **Submit** enables — click **Submit**."
keywords: [take attendance with Felix, take the roll by prompt, mark attendance AI, show me attendance, Felix roll, mark student absent Felix, mark student late Felix, attendance chat panel, submit roll Felix]
video:
  youtube:
  bunny:
---

# Take attendance with Felix

{/* SOURCE — 9 Oct 2026 SXP Felix Attendance walkthrough with Amber Do (2:20–10:26).
Demonstrated in the DEV environment, not UAT (Amber, 25:03).
TO RE-VERIFY BEFORE PUBLISHING:
(1) Which class Felix brings up is changing. In the demo Felix retrieved the
    teacher's next class, but the on-screen prompt text said to mark "a class that
    just finished" — Amber described this as a new enhancement from SIT feedback
    she had not seen yet. Brendan flagged the wording as confusing (3:09). Step 1
    is written as "the class Felix brings up"; confirm on a UAT build whether it is
    the current, next or just-finished class, and whether a teacher can name a
    specific class in the prompt (Amber, 3:48 — not demonstrated).
(2) The today-only rule (step 1 note) predates that enhancement (11:37). Amber was
    not sure it still holds.
(3) Unanswered: can a roll be updated during the lesson, for a student who
    arrives late? Brendan asked at 4:05; no answer was given.
(4) The label on the control that expands the roll to the canvas was not read out.
No screenshots — the transcript holds speaker avatars only. Add to ./images/ from a
UAT build. */}

You can take the roll without leaving what you are doing. Ask Felix and it brings
the class roll into the chat panel, where you mark students and submit just as you
would on the **Attendance** page.

To take the roll from the Attendance page instead, see
[Take the daily roll](../03-Attendance/02-take-attendance-roll.md).

1. Ask Felix for the roll

   Open **Felix** and prompt *show me attendance*. Felix looks up your timetable
   and shows the roll for your class in the chat panel.

   > **Note:** Check the class name and time before you start marking. Felix
   > picks the class from your timetable, so make sure it is the one you meant.
   > Felix takes attendance for today's classes only — ask for a future class and
   > it tells you so.

2. Mark each student

   For each student, choose **Present**, **Absent** or **Late**.

3. Expand to the canvas, if you want more room

   Expand the roll to open it in the canvas beside the chat. The canvas shows the
   full roll in more detail, and you can carry on marking there.

4. Submit the roll

   When every student has a status, **Submit** enables — click it. Submit stays
   disabled while any student is unmarked, so a partial roll cannot be sent.

5. Check the result

   The submitted marks show on the roll in the canvas straight away.

   > **Note:** Once submitted, the roll is locked. To change a mark, ask Felix
   > for a correction — see
   > [Request an attendance correction with Felix](./15-request-an-attendance-correction-with-felix.md).
