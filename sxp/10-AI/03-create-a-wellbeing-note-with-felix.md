---
id: create-a-wellbeing-note-with-felix
summary:
  - "Describe the concern to Felix — you do not have to say the words *wellbeing note*."
  - "Confirm the student, then check the **type**, **sentiment**, **priority** and **notify** settings Felix suggests."
  - "Add or skip an attachment, then **Approve and publish**."
keywords: [create a wellbeing note with Felix, wellbeing note by prompt, AI wellbeing note, log a concern, report a student injury, Felix wellbeing agent, wellbeing note priority, notify parents wellbeing]
video:
  youtube:
  bunny:
---

{/* SOURCE — 21 Apr 2026 AI Agents Sprint Demo (0:04–9:45, primary);
9 Apr 2026 (19:13–24:20).
TO RE-VERIFY BEFORE PUBLISHING: skipping the attachment step errored on 21 Apr
(Denny confirmed a missing null check); the duplicate-note guardrail's *suggest*
option errored on 9 Apr and was not re-demonstrated. Both steps are written from
intended behaviour and must be checked on a fixed build.
No screenshots available — add to ./images/ from a UAT build. */}

# Create a wellbeing note with Felix

Felix can raise a wellbeing note from a description of what happened. It picks the
note type, sentiment and priority from what you write, explains why it chose them,
and decides whether parents and staff should be notified.

You can also create a note from the Wellbeing pages — see
[Create a wellbeing note](../07-Wellbeing/04-create-wellbeing-note.md).

1. Describe the concern

   Open **Felix** and say what happened. You do not need to mention wellbeing at
   all — *Johnny cut his finger in the playground yesterday* is recognised as a
   wellbeing concern and routed to the agent. A longer prompt gives Felix more to
   work with: name the student and set out what you have observed.

2. Confirm the student

   Felix shows the **full name** and **student ID** for you to confirm. If several
   students match, they are all listed — pick the right one.

3. Check the drafted note

   Felix returns a complete note for review: **title**, **wellbeing note type**,
   **category**, **sentiment** and **priority**, along with its reasoning — for
   example *low priority because this was a minor injury and first aid was given*.
   It also sets **Notify parents** and **Notify staff** to match the situation.

4. Edit or add to the note

   Change any field directly, or prompt Felix — for example *add some next steps
   to the description*. It regenerates the note with the addition.

   > **Note:** Suggested next steps are general good practice, not advice drawn
   > from this student's record. Treat them as a prompt for your own judgement.

5. Add or skip an attachment

   Felix suggests the kind of attachment that would suit the note — a first-aid
   record for an injury, an email exchange for an ongoing concern. Upload a
   document or image from your device, or tell Felix you have nothing to add.

6. Approve and publish

   Check the final review, then **Approve and publish**. The note appears in
   **Wellbeing** under the student.

## If a similar note already exists

If a note very like this one was created for the same student a short time ago,
Felix stops and tells you. You can edit the existing note instead, cancel, or ask
Felix for fresh suggestions — so the same incident is not recorded twice.
