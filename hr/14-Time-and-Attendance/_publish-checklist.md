# Publish checklist — Time and Attendance

This folder is **drafted**. Every task file carries `draft: true`, so nothing here
renders on the live site.

The Troubleshooting, Glossary and index entries that belong with these tasks are
parked below rather than sitting in the live files — they would have rendered,
and the Troubleshooting links to these drafted pages would have failed the
Docusaurus build.

This file starts with an underscore, so Docusaurus ignores it. Delete it once the
content below has been merged.

---

## To publish

1. Delete the `draft: true` line from each of the 11 task files in this folder.
2. Paste the three blocks below back into their live files.
3. Delete this file.

---

## 1. Index bullet

**File:** `hr/index.md` — the *What's in this guide* list, immediately **before** the
`- **Troubleshooting**` line.

```markdown
- **Time and Attendance** — attendance and overtime hierarchies, overtime eligibility, loading and generating attendance logs, the summary batch job, and the manager, HR and finance overtime approvals
```

---

## 2. Troubleshooting section

**File:** `hr/15-Troubleshooting.md` — append to the **end** of the file.

````markdown
---

## Time and Attendance

### An employee's attendance shows no work duration or overtime

**Cause** — The attendance log holds the raw punch records only. Durations, regular minutes and overtime are calculated by the summary batch job.

**Fix** — Run **Time and attendance ▸ Periodic tasks ▸ SQ attendance summary**. In normal operation this is a recurring batch, so check with your administrator whether the schedule has stopped. See [Run the attendance summary batch job](./14-Time-and-Attendance/06-run-the-attendance-summary-batch-job.md).

### I corrected an attendance log but nothing changed

**Cause** — Editing the log alone does not recalculate anything downstream.

**Fix** — Re-run **SQ attendance summary** after saving the correction, then check the attendance details. See [Adjust an attendance record](./14-Time-and-Attendance/08-adjust-an-attendance-record.md).

### An employee doesn't appear in attendance details or overtime details

**Cause** — The forms only show people in your line or your attendance or overtime hierarchy. This is a deliberate restriction.

**Fix** — Toggle between the **Line** and **Hierarchy** views. If they appear in neither, they are not assigned to you — check the hierarchies on their position. See [Assign attendance and overtime managers to a position](./14-Time-and-Attendance/02-assign-attendance-and-overtime-managers-to-a-position.md).

### Overtime records aren't showing for an employee who worked extra hours

**Cause** — Either their staff level isn't flagged as overtime applicable, or the overtime falls below the minimum threshold.

**Fix** — Check **Overtime applicable** on their staff level and **Eligible for overtime** on their employment record, then check the minimum overtime value in **Human resource shared parameters**. Anything below that value is excluded by design.

### The overtime details form looks like it's missing most employees

**Cause** — A filter on the overtime minutes column excludes everyone with no overtime.

**Fix** — This is expected. The form is a working list of employees with overtime, not a full roster.

### HR approval is empty

**Cause** — Only records the manager has already approved reach HR.

**Fix** — Check whether the manager has approved in ESS or in the overtime details form. Overtime moves manager ▸ HR ▸ finance, and each stage only sees what the stage before approved. See [Complete the HR and finance overtime approvals](./14-Time-and-Attendance/10-complete-the-hr-and-finance-overtime-approvals.md).

### Finance approval doesn't show records HR approved

**Cause** — HR's approval wasn't saved.

**Fix** — Reopen the HR approval form, approve the records, and click **Save** before moving to finance.

### An employee has a punch in but no punch out

**Cause** — One half of the pair is missing from the feed.

**Fix** — The day is listed on the **Missing attendance** form. Establish the correct time and amend the attendance log, then re-run the summary job. See [Review missing attendance](./14-Time-and-Attendance/11-review-missing-attendance.md).

### Re-running Generate attendance logs will duplicate my data

**Cause** — Assumed, but not the case.

**Fix** — Re-running over the same period with the same parameters does not create duplicates. Existing records are left unchanged and only missing days are regenerated. See [Generate attendance logs](./14-Time-and-Attendance/05-generate-attendance-logs.md).

### The attendance import warns that the entity isn't mapped

**Cause** — Some columns in the file aren't mapped to entity fields.

**Fix** — Map the outstanding fields — the code remark in and out, the timestamp, and the device ID and device name — then apply the mapping and import. See [Import attendance data](./14-Time-and-Attendance/04-import-attendance-data.md).

### A newly hired employee has Eligible for overtime set to No

**Cause** — Either the staff level wasn't flagged when the worker action completed, or the position's staff category doesn't match a flagged one.

**Fix** — The flag is written as the hire worker action completes, so flagging the staff level afterwards doesn't backfill it. Amend **Eligible for overtime** on the employee's employment record directly. See [Set overtime eligibility on staff levels](./14-Time-and-Attendance/03-set-overtime-eligibility-on-staff-levels.md).

### A change made in D365 isn't showing in ESS

**Cause** — ESS refreshes on an interval rather than instantly.

**Fix** — Allow about five minutes and refresh. The interval is deliberate — the attendance feed arrives once a day, so a shorter refresh would cost performance for no benefit.
````

---

## 3. Glossary rows

**File:** `hr/16-Glossary.md` — insert each row into its letter section's table, in
alphabetical order by term.

- Section **## A** — `| Attendance Details | The summarised attendance record built from the attendance logs by the SQ attendance summary batch job — one row per employee per day holding work duration, regular minutes and overtime minutes. |`
- Section **## A** — `| Attendance Hierarchy | The position hierarchy selected in human resource parameters that decides who sees and approves an employee’s attendance. Used where a designated attendance manager, rather than the line manager, is responsible. |`
- Section **## A** — `| Attendance Log | The raw record of a punch in and punch out for an employee on a date. Holds no calculated values — durations and overtime come from the summary batch job. |`
- Section **## A** — `| Attendance Shortage | A day where an employee worked fewer minutes than their working time calendar scheduled. |`
- Section **## C** — `| Code Remark | The value identifying a punch record as a punch in or a punch out, carried on each attendance log row. |`
- Section **## C** — `| Create To Date | The field on the Generate attendance logs form setting how far forward attendance records are generated. |`
- Section **## D** — `| Device Name | The attendance device a punch was recorded on, imported onto the attendance log alongside the location and location ID. |`
- Section **## E** — `| Eligible for Overtime | The flag on an employee’s employment record controlling whether they can claim overtime. Defaults from the Overtime applicable flag on the staff level when a hire worker action completes, and can be amended on the employee afterwards. |`
- Section **## F** — `| Finance Approval | The third and final stage of the overtime approval chain. Lists only the overtime HR has already approved. |`
- Section **## G** — `| Generate Attendance Logs | The function on the attendance logs form that creates punch in and punch out records for selected employees across a date range, using a default start and end time and a working time calendar. Safe to re-run — it does not create duplicates. |`
- Section **## H** — `| Hierarchy View | The view on the attendance and overtime forms showing the employees assigned to you through the attendance or overtime hierarchy on their position, rather than your direct reports. |`
- Section **## H** — `| HR Approval | The second stage of the overtime approval chain. Lists only the overtime managers have already approved, and passes what HR approves on to finance. |`
- Section **## L** — `| Line View | The view on the attendance and overtime forms showing your direct reports — the employees whose line manager you are. |`
- Section **## M** — `| Minimum Overtime | The threshold in human resource shared parameters below which overtime is not displayed for approval, keeping short daily overruns out of the overtime forms. |`
- Section **## M** — `| Missing Attendance | A day where one half of the punch pair is absent — a punch in with no punch out, or a punch out with no punch in. Collected on its own form for correction. |`
- Section **## O** — `| Overtime Applicable | The flag on the staff levels form marking a staff position category and staff category as able to claim overtime. Drives the Eligible for overtime flag at hire. |`
- Section **## O** — `| Overtime Details | The manager’s overtime form in D365. Filtered to employees with overtime records only, and the D365 counterpart of the overtime approval a manager does in ESS. |`
- Section **## O** — `| Overtime Hierarchy | The position hierarchy selected in human resource parameters that decides who approves an employee’s overtime. Can be a different person from the attendance approver and from the line manager. |`
- Section **## R** — `| Regular Minutes | The scheduled working minutes on an attendance detail record, separate from any overtime minutes worked beyond them. |`
- Section **## S** — `| SQ Attendance Summary | The periodic batch job under **Time and attendance ▸ Periodic tasks** that reads the attendance logs and creates the summarised attendance detail records. Normally a recurring batch; must be re-run manually after adjusting a log. |`
- Section **## T** — `| TMRW HR Time Attendance | The data entity used to import punch records into the attendance log through data management. |`
- Section **## T** — `| Total Approved Minutes | The running total of overtime minutes approved, shown on the overtime approval screens as records are approved. |`
- Section **## W** — `| Work Duration | The total minutes between an employee’s clock in and clock out on a day, calculated by the attendance summary batch job. Splits into regular minutes and overtime minutes. |`
- Section **## W** — `| Working Time Calendar | The calendar selected on the Generate attendance logs form that determines which days in a range count as working days, and so which days produce generated records. |`

The full rows, ready to place:

```markdown
| Attendance Details | The summarised attendance record built from the attendance logs by the SQ attendance summary batch job — one row per employee per day holding work duration, regular minutes and overtime minutes. |
| Attendance Hierarchy | The position hierarchy selected in human resource parameters that decides who sees and approves an employee’s attendance. Used where a designated attendance manager, rather than the line manager, is responsible. |
| Attendance Log | The raw record of a punch in and punch out for an employee on a date. Holds no calculated values — durations and overtime come from the summary batch job. |
| Attendance Shortage | A day where an employee worked fewer minutes than their working time calendar scheduled. |
| Code Remark | The value identifying a punch record as a punch in or a punch out, carried on each attendance log row. |
| Create To Date | The field on the Generate attendance logs form setting how far forward attendance records are generated. |
| Device Name | The attendance device a punch was recorded on, imported onto the attendance log alongside the location and location ID. |
| Eligible for Overtime | The flag on an employee’s employment record controlling whether they can claim overtime. Defaults from the Overtime applicable flag on the staff level when a hire worker action completes, and can be amended on the employee afterwards. |
| Finance Approval | The third and final stage of the overtime approval chain. Lists only the overtime HR has already approved. |
| Generate Attendance Logs | The function on the attendance logs form that creates punch in and punch out records for selected employees across a date range, using a default start and end time and a working time calendar. Safe to re-run — it does not create duplicates. |
| Hierarchy View | The view on the attendance and overtime forms showing the employees assigned to you through the attendance or overtime hierarchy on their position, rather than your direct reports. |
| HR Approval | The second stage of the overtime approval chain. Lists only the overtime managers have already approved, and passes what HR approves on to finance. |
| Line View | The view on the attendance and overtime forms showing your direct reports — the employees whose line manager you are. |
| Minimum Overtime | The threshold in human resource shared parameters below which overtime is not displayed for approval, keeping short daily overruns out of the overtime forms. |
| Missing Attendance | A day where one half of the punch pair is absent — a punch in with no punch out, or a punch out with no punch in. Collected on its own form for correction. |
| Overtime Applicable | The flag on the staff levels form marking a staff position category and staff category as able to claim overtime. Drives the Eligible for overtime flag at hire. |
| Overtime Details | The manager’s overtime form in D365. Filtered to employees with overtime records only, and the D365 counterpart of the overtime approval a manager does in ESS. |
| Overtime Hierarchy | The position hierarchy selected in human resource parameters that decides who approves an employee’s overtime. Can be a different person from the attendance approver and from the line manager. |
| Regular Minutes | The scheduled working minutes on an attendance detail record, separate from any overtime minutes worked beyond them. |
| SQ Attendance Summary | The periodic batch job under **Time and attendance ▸ Periodic tasks** that reads the attendance logs and creates the summarised attendance detail records. Normally a recurring batch; must be re-run manually after adjusting a log. |
| TMRW HR Time Attendance | The data entity used to import punch records into the attendance log through data management. |
| Total Approved Minutes | The running total of overtime minutes approved, shown on the overtime approval screens as records are approved. |
| Work Duration | The total minutes between an employee’s clock in and clock out on a day, calculated by the attendance summary batch job. Splits into regular minutes and overtime minutes. |
| Working Time Calendar | The calendar selected on the Generate attendance logs form that determines which days in a range count as working days, and so which days produce generated records. |
```
