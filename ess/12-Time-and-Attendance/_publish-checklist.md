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

1. Delete the `draft: true` line from each of the 4 task files in this folder.
2. Paste the three blocks below back into their live files.
3. Delete this file.

---

## 1. Index bullet

**File:** `ess/index.md` — the *What's in this guide* list, immediately **before** the
`- **Troubleshooting**` line.

```markdown
- **Time and Attendance** — checking your own attendance calendar, seeing your team's attendance and shortages, and approving your team's overtime
```

---

## 2. Troubleshooting section

**File:** `ess/13-Troubleshooting.md` — append to the **end** of the file.

````markdown
---

## Time and Attendance

### My attendance for today isn't showing

**Cause** — Attendance refreshes on an interval, and the feed from the attendance system arrives once a day.

**Fix** — Allow about five minutes and refresh. A day's punches will not be there in real time as you work.

### A day on my attendance calendar is wrong

**Cause** — The punch recorded against you doesn't match what you actually worked — the machine wasn't available, or a late arrival or early exit was agreed.

**Fix** — This can't be corrected in ESS. Raise it with HR, who amend the underlying attendance log in D365. The change appears here at the next refresh. See [View your attendance](./12-Time-and-Attendance/01-view-your-attendance.md).

### I can't see the Team attendance tab

**Cause** — The team tabs only appear where people report to you.

**Fix** — If you manage people and the tab is missing, contact HR to check that you are set as their line manager, or as their attendance or overtime manager on their position.

### People I expect to see aren't in my team attendance

**Cause** — There are two reporting views and you may be looking at the wrong one.

**Fix** — Toggle between **Line** and **Hierarchy**. Line shows your direct reports; hierarchy shows the people assigned to you as their attendance or overtime manager. The lists are usually different. See [View your team's attendance](./12-Time-and-Attendance/02-view-your-teams-attendance.md).

### An employee worked overtime but it isn't in my overtime list for approval

**Cause** — Either their staff level is not flagged as eligible for overtime, or the overtime is below the minimum HR has set for approval.

**Fix** — Short daily overruns are excluded on purpose so approvers only see overtime worth approving. If the amount is substantial, ask HR to check the employee's overtime eligibility.

### I approved overtime — does HR need to do anything else?

**Cause** — Your approval is the first of three.

**Fix** — Yes. Overtime goes manager ▸ HR ▸ finance before it is released for payroll. Your approval writes back to D365 immediately, and HR and finance approve from there. See [Approve your team's overtime](./12-Time-and-Attendance/04-approve-your-teams-overtime.md).

### I approved the wrong overtime entry

**Cause** — Approval is confirmed at the point you click Confirm.

**Fix** — Contact HR. The record is in D365 and the overtime detail shows who approved it and when, so it can be picked up before HR and finance approve it.

### A shortage is showing against one of my team that I know is wrong

**Cause** — The shortage is calculated from what was recorded, not from what was agreed.

**Fix** — Ask HR to correct the attendance log in D365. The shortage clears from this view once the attendance summary job runs again. See [Review attendance shortages for your team](./12-Time-and-Attendance/03-review-attendance-shortages-for-your-team.md).
````

---

## 3. Glossary rows

**File:** `ess/14-Glossary.md` — insert each row into its letter section's table, in
alphabetical order by term.

- Section **## A** — `| Absence Hours | The hours shown on your attendance calendar as absence across the period, alongside your scheduled and booked hours. |`
- Section **## A** — `| Attendance | The area reached from the Attendance tile, holding your own attendance calendar and, if you manage people, your team’s attendance, shortages and overtime. |`
- Section **## A** — `| Attendance Shortage | A day where fewer minutes were worked than the working calendar scheduled. Managers see their team’s shortages on the Attendance shortage tab. |`
- Section **## B** — `| Booked Hours | The hours recorded against you for the period, shown on your attendance calendar against your scheduled hours. |`
- Section **## H** — `| Hierarchy | The team view showing the people assigned to you as their attendance or overtime manager, rather than your direct reports. Usually a different list from the line view. |`
- Section **## L** — `| Line | The team view showing your direct reports — the people whose line manager you are. |`
- Section **## M** — `| My Attendance | The tab showing your own attendance calendar, in a week view or a longer multi-week overview. |`
- Section **## O** — `| Overtime | Minutes worked beyond the scheduled hours on a day. Raised to the manager for approval in ESS, then approved by HR and finance before it reaches payroll. |`
- Section **## S** — `| Scheduled Hours | The hours your working calendar sets for the period, shown on your attendance calendar against your booked and absence hours. |`
- Section **## T** — `| Team Attendance | The manager tab showing your team’s attendance calendars, with a toggle between the line and hierarchy views. |`
- Section **## T** — `| Total Approved Minutes | The running total of overtime minutes you have approved, updating as you approve each entry. |`

The full rows, ready to place:

```markdown
| Absence Hours | The hours shown on your attendance calendar as absence across the period, alongside your scheduled and booked hours. |
| Attendance | The area reached from the Attendance tile, holding your own attendance calendar and, if you manage people, your team’s attendance, shortages and overtime. |
| Attendance Shortage | A day where fewer minutes were worked than the working calendar scheduled. Managers see their team’s shortages on the Attendance shortage tab. |
| Booked Hours | The hours recorded against you for the period, shown on your attendance calendar against your scheduled hours. |
| Hierarchy | The team view showing the people assigned to you as their attendance or overtime manager, rather than your direct reports. Usually a different list from the line view. |
| Line | The team view showing your direct reports — the people whose line manager you are. |
| My Attendance | The tab showing your own attendance calendar, in a week view or a longer multi-week overview. |
| Overtime | Minutes worked beyond the scheduled hours on a day. Raised to the manager for approval in ESS, then approved by HR and finance before it reaches payroll. |
| Scheduled Hours | The hours your working calendar sets for the period, shown on your attendance calendar against your booked and absence hours. |
| Team Attendance | The manager tab showing your team’s attendance calendars, with a toggle between the line and hierarchy views. |
| Total Approved Minutes | The running total of overtime minutes you have approved, updating as you approve each entry. |
```
