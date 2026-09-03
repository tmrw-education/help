---
id: create-a-class-update
summary:
  - "Prompt Felix with **create a class update** and select your classes."
  - "Fill in **events**, **learning topics** and **reminders**, and attach photos or video."
  - "Resolve any **consent flags**, preview as a parent will see it, then **Confirm**."
keywords: [class update, create a class update, weekly class update, parent update, Felix class update agent, consent flag class update, class newsletter, PXP preview, birthdays class update]
video:
  youtube:
  bunny:
---

<!-- SOURCE — 26 Aug 2026 Agent walkthrough (34:53–44:50, primary);
2 Jun 2026 AI Agents Sprint Demo (0:05–12:22).
TO RE-VERIFY BEFORE PUBLISHING:
(1) Consent fix — on 2 Jun Meredith asked for the "replace the name with a
    student" suggestion to be dropped in favour of simply removing the student
    from the birthday list. The 26 Aug build still offered substitution. Step 5
    describes substitution; rewrite if the change has landed.
(2) Teacher access to the published PDF — shown in Dynamics CE only, which
    teachers have no licence for. A SharePoint folder structure (class/date) was
    intended but not built. DO NOT document a teacher access path until it exists.
(3) Editability indicators were flagged as confusing and were awaiting a design
    pass with Ginno.
No screenshots available — add to ./images/ from a UAT build. -->

# Create a class update

A class update is the round-up you send to the parents of a class — what happened
last week, what is coming up, birthdays, assignments due and your reminders. Felix
drafts most of it from class data and checks it against each student's consent
before it goes out.

1. Start the update and pick your classes

   Open **Felix** and prompt *create a class update*. Felix finds the classes you
   teach and lists them. Select the ones you want to write for, or select all.

   > **Note:** What you see depends on how you teach. A homeroom teacher usually
   > has one class; a subject teacher sees every class they take, and the update
   > becomes subject-based rather than a general round-up. Long lists are shown in
   > a scrollable, paged container.

2. Review what Felix generated

   For each class Felix fills in, from your class data, timetable and assignments:

   - **Past week's events**, summarised.
   - **Upcoming events**.
   - **Birthdays** falling in the period.
   - **Assignments due**.

   These sections are read-only — if something is wrong, fix it at the source
   rather than here. **Birthdays** is the exception: you can edit it, so a student
   can be removed.

3. Fill in the free-text fields

   Three fields are yours to write:

   - **Events** — anything Felix could not pull in, such as an activity you ran in class.
   - **Learning topics** — what the class covered.
   - **Reminders** — pre-suggested from your timetable and assignments, and editable. For example *please make sure your child brings their reading book*.

   The grey placeholder text disappears as soon as you start typing.

   > **Note:** Learning topics cannot be filled in automatically. There is no
   > teaching-programme data source to draw them from yet.

4. Attach photos or video

   Add an image or a video to the update. The limits are **5 MB** per image and
   **25 MB** per video. The progress indicator for a class turns green once
   everything is complete.

5. Preview and resolve consent flags

   Click **Preview**. Felix checks every student named in the update against their
   consent records and flags anyone whose parents have not given permission for
   their name, birthday or photo to be shared.

   Each flag comes with a suggested fix — replacing the student's name with *a
   student*. Click **Apply** to take the suggestion, or close it and edit the
   field yourself, for example by removing that student from the birthday list.

   > **Note:** You cannot move past this step with a flag outstanding. Resolving
   > them is mandatory.

   A general warning also appears on any attached photo or video, because Felix
   cannot check faces against consent records. Check your media yourself before
   publishing.

6. Preview as a parent

   Once the flags are cleared, Felix shows the update as parents will see it in
   the Parent Experience Platform, on mobile. Move between classes to check each
   one. **Edit** takes you back to the form.

7. Publish

   Click **Confirm**. Parents are notified in the Parent Experience Platform, and
   a PDF of each class update is saved to CE. A success message confirms which
   classes went out.
