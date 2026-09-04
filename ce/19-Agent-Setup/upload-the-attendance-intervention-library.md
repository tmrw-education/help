---
draft: true
id: upload-the-attendance-intervention-library
summary:
  - "In the administrator app, go to **Reference data** to find the **Active Intervention Actions** library."
  - "Download the **Excel template**, then set out the signals and the actions for each risk level."
  - "Upload the completed file — the agent recommends only from what is uploaded and saved in the library."
keywords: [intervention library, attendance intervention library, attendance policy reference data, agent recommendations attendance, upload intervention template, risk level actions, service management reference data]
video:
  youtube:
  bunny:
---

<!-- SOURCE ROW — delete before publishing
Epic:    Agent setup (CE)
Feature: Attendance Compliance Checker Agent
Area:    CE
Role:    School Admin
-->

<!-- SOURCE — 3 Sep 2026 SXP Agent Demo, Attendance Compliance and Student Leaver
Request (6:00–8:00), demonstrated by Peter Nguyen; 26 Aug 2026 Agent walkthrough
(4:46–6:20).
TO RE-VERIFY BEFORE PUBLISHING: the Excel template was shown on screen but its
columns were described rather than read out in full. Get a copy of the template
and list its actual columns in step 2 before publishing.
No screenshots available — add to ./images/ from a UAT build. -->

# Upload the attendance intervention library

The intervention library includes the school's policy and action plan for each attendance risk band. The attendance compliance checker reads it, matches a
student's situation against it, and recommends only the actions it finds there.

This is what keeps the agent's recommendations consistent and within school policy.
Without a library, the agent still produces recommendations, but they come from the
model's general reasoning — nothing controls them, and nothing makes them repeatable.

1. Open the reference data

   Go to **Reference data** and click **Intervention Actions**. The **Active Intervention Actions** are held there.

2. Download and complete the template

   Match the Excel sheet to the provided headings. It is a table of risk levels against the
   interventions the school wants applied, with a row per condition. For each risk
   level — high, medium and low — set out:

   - The **Signal Condition** that should trigger an intervention, for example, missing work, or a grade dropping between assessments.
   - The agent will use the **Action Description** and the **Action Method** to inform which intervention action to take.

   [Headings in the Active Intervention Library](./images/upload-the-attendance-intervention-library-1.png)

3. Upload the completed file

   Import the sheet from Excel to populate the library. The agent picks it up on its next scheduled
   run.

4. Check the result

   Open a flagged student in StaffXP. The intervention actions list on their risk profile is
   drawn from this library. A student showing several signals at once — missed
   homework, negative wellbeing notes, a dropping grade, and time already spent in
   the lower bands — sees the actions your library defines for that combination.

## Who sets this up

The school admin. What a school does about attendance is the school's own policy,
and the agent's recommendations are held to it.

> **Note:** Review the library whenever school policy changes. The agent does not
> look anything up outside CE — it works from what is uploaded here and from the
> student's own record.
