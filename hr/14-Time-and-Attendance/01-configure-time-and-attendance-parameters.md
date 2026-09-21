---
draft: true
id: configure-time-and-attendance-parameters
summary:
  - "In D365, go to **Human Resources ▸ Setup ▸ Human resource parameters ▸ General** and set the attendance and overtime hierarchies."
  - "Pick a hierarchy for each so approvals can route to a designated attendance or overtime manager instead of the line manager."
  - "In **Human resource shared parameters**, set the minimum overtime threshold so short daily overruns are not raised for approval."
keywords: [time and attendance parameters, human resource parameters, attendance hierarchy, overtime hierarchy, position hierarchy, human resource shared parameters, minimum overtime, overtime threshold, overtime display, D365]
video:
  youtube:
  bunny:
---

# Configure time and attendance parameters

Two parameter settings drive the whole time and attendance process: the hierarchies that decide who approves attendance and overtime, and the threshold below which overtime is not worth raising. Set both before you load any attendance data.

1. Open the human resource parameters

   In D365, go to **Human Resources ▸ Setup ▸ Human resource parameters** and open the **General** section.

2. Set the attendance and overtime hierarchies

   In the hierarchy area you will find two fields — one for **Attendance** and one for **Overtime**. Select the position hierarchy you want each to use.

   ![The attendance and overtime hierarchy fields on the General tab of human resource parameters](./images/configure-time-and-attendance-parameters-1.png)

   These exist because the person who approves attendance is not always the line manager. Where a separate designated employee handles attendance or overtime, the hierarchy you select here is the one used to route it, and you then assign individuals into that hierarchy on their position. Where the line manager does approve attendance and overtime, you can point both fields at the line hierarchy — there is no problem with that.

3. Save the parameters

   Click **Save**.

4. Set the minimum overtime threshold

   Go to **Human Resources ▸ Setup ▸ Human resource shared parameters** and enter the minimum number of minutes to treat as overtime.

   Anything below the value you enter here will not show up as overtime. This keeps trivial daily overruns — five minutes past the end of a shift, say — out of the overtime forms so approvers are only looking at overtime that matters.

5. Save the shared parameters

   Click **Save**. The threshold applies from the next run of the attendance summary batch job.

Next, put people into those hierarchies — see [Assign attendance and overtime managers to a position](./02-assign-attendance-and-overtime-managers-to-a-position.md).
