---
draft: true
id: monitor-comment-progress
summary:
  - "Execute **Populate data into template** to fill the template and have the AI draft each student's comments."
  - "On **Comment progress**, track review by class, year group, teacher and status."
  - "Execute **Comment notification sent** to tell teachers their comments are ready to review."
keywords: [comment progress, AI generated comments, populate data into template, comment notification sent, track comment review, class comment detail, leader view comments, report comments status, academic reporting]
video:
  youtube:
  bunny:
---

# Monitor comment progress

{/* SOURCE — Academic Reporting Tool walkthrough video transcript
(AR_Video Transcript.docx, received 13 Oct 2026).
TO VERIFY: the status values shown on Comment progress; which role counts as a
"leader" here and how leaders reach the class detail.
No screenshots available — add to ./images/ from a UAT build. */}

Once grades are in, artificial intelligence (AI) drafts a comment for every student. You then follow
teachers' review of those comments from the **Comment Progress** sub-tab, under the **Monitor Progress** tab. Admins
and leaders can read the comments but can't change them.

1. Generate the comments

   On the report's **Timeline**, execute the **Populate data into template**
   milestone. It fills the template with the available student data and triggers
   the AI to draft the comments. You get a notification when it completes.

2. Open comment progress

   Click the notification to open **Comment Progress**. Track the review by
   **Class**, **Year Group**, **Teacher** and **Status**.

   ![The Comment progress page showing review progress by class, year group, teacher and status](./images/monitor-comment-progress-1.png)

3. Read a class's comments

   Click a class to open its class comment detail and read the generated
   comments. This view is read-only.

   ![The class comment detail page showing the AI-generated comments for each student](./images/monitor-comment-progress-2.png)

4. Tell teachers to start reviewing

   Execute the **Comment notifications sent - Subject** milestone. Teachers are notified
   that their class comments are ready to review, and leaders are notified that
   the comment review phase has started.

5. Track teachers' progress

   As each teacher submits a class, its status on **Comment Progress** changes to
   **Completed**.

## What leaders see

Leaders get a notification when the comment review phase starts. They can open a
class's details and read the generated comments, but, like the admin, can't edit
or approve them.
