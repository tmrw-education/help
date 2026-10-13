---
draft: true
id: how-academic-reporting-works
summary:
  - "An admin sets up each report in three steps: **Report Template**, **Report Process** and **Report Timeline**."
  - "The admin then runs the report milestone by milestone from the **Timeline** on the **Monitor Progress** tab."
  - "Teachers enter grades and review AI-drafted comments, QA checks them, optional human reviewers sign off, and the admin publishes."
keywords: [academic reporting, academic reporting tool, student reports, report cycle, reporting cycle, report card, term report, report milestones, AI generated comments, report comments, report QA, publish reports]
video:
  youtube:
  bunny:
---

# How academic reporting works

{/* SOURCE — Academic Reporting Tool walkthrough video transcript
(AR_Video Transcript.docx, received 13 Oct 2026). No timestamps in the transcript.
TO VERIFY: the name of the first milestone (the transcript says only that it "has
already been completed"); whether the tool sits inside StaffXP or is a separate
app; the exact name of the admin role.
No screenshots available — add to ./images/ from a UAT build. */}

The **academic reporting tool** produces a set of student reports for one
reporting cycle — for example, the Term 1 report for a year group. It collects
grades from teachers, uses artificial intelligence (AI) to draft each student's comments, checks those
comments through quality assurance (QA), and publishes the finished reports.

Each report moves through a fixed sequence of **milestones**. The admin sets the
dates for them when the report is set up, then starts each one from the
report's **Timeline**. Most milestones send a notification when they finish, and
that notification takes the next person straight to their task.

## Who does what

| Role | What they do |
| --- | --- |
| Admin | Sets up the report, runs the milestones, manages report blocks and reassignments, monitors progress, sends QA revision tasks, and publishes |
| Teacher | Enters student grades, reviews and approves the AI-drafted comments for their classes, and revises comments flagged by QA |
| Leader | Views comment progress and the generated comments; cannot change them |
| Human reviewer | Optional. Reviews and edits the comments for the classes assigned to them |

## The reporting cycle

1. Set up the report

   The admin creates the report and works through the three setup steps. The admin will also assign the dates for when each task should be completed — see
   [Create a new report](./02-create-a-new-report.md),
   [Upload assessment data](./03-upload-assessment-data.md),
   [Configure the report process](./04-configure-the-report-process.md) and
   [Set the report timeline](./05-set-the-report-timeline.md).
   When you assign milestone dates, some task dates may overlap; confirm to start the reporting cycle.


2. Run and track the milestones

   From the report's **Monitor Progress** tab, the admin can track the status of each milestone —
   see [Run the report timeline](./06-run-the-report-timeline.md). The milestones,
   in order:

   | Milestone | What it does |
   | --- | --- |
   | **Report configuration completed** | Starts the report cycle and assigns due dates to the remaining milestones |
   | **Block email sent** | Collects the students whose report is on hold, such as for financial reasons, ready for follow-up |
   | **Input collection** | Tells teachers they can start entering grades |
   | **Populate data into template** | Fills the template with student data and triggers the AI to draft the comments |
   | **Comment notification sent** | Tells teachers their comments are ready for review |
   | **Report ready for QA** | Starts the QA check on the comments teachers have submitted |
   | **QA report ready** | Completes the QA run and produces the QA summary |
   | **QA remediation completion** | Checks whether any comments still need revising |
   | **Human review completed** | Checks whether every human review task is done |
   | **Ready to publish** | Checks every publishing condition is met |

4. Collect grades

   The admin sets up what is collected; teachers enter it — see
   [Configure input collection](./09-configure-input-collection.md) and
   [Enter student grades](./10-enter-student-grades.md).

5. Review the comments

   Teachers review and submit the AI-drafted comments while the admin and leaders
   track progress — see
   [Review and submit class comments](./12-review-and-submit-class-comments.md)
   and [Monitor comment progress](./11-monitor-comment-progress.md).

6. QA and human review

   QA checks every submitted comment; flagged comments go back to the teacher, and
   any human reviewers then sign off their classes — see
   [Review the QA summary](./13-review-the-qa-summary.md),
   [Revise comments flagged by QA](./14-revise-comments-flagged-by-qa.md) and
   [Complete a human review](./15-complete-a-human-review.md).

7. Publish

   Once every condition is met, the admin publishes the reports — see
   [Publish reports](./16-publish-reports.md).

Along the way, the admin can follow up on students whose report is on hold — see
[Manage report blocks](./07-manage-report-blocks.md) — and move a teacher's
classes to someone else — see [Reassign report tasks](./08-reassign-report-tasks.md).
