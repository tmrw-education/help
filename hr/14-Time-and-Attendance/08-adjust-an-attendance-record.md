---
draft: true
id: adjust-an-attendance-record
summary:
  - "In D365, go to **Time and attendance ▸ Attendance logs** and find the employee and date to correct."
  - "Click **Edit** and change the clock in or clock out date and time, then **Save**."
  - "Re-run **SQ attendance summary** — the correction does not reach the attendance details or ESS until you do."
keywords: [adjust attendance, correct attendance record, edit attendance log, clock in time, clock out time, machine not working, late arrival, early exit, re-run batch job, ESS refresh, D365]
video:
  youtube:
  bunny:
---

# Adjust an attendance record

Where an employee's recorded times are wrong — the biometric machine wasn't working, or they have raised an HR request for a late arrival or an early exit — you correct the attendance log and re-run the summary. This is the route for a one-off correction; for a large number of corrections, load them through the import instead.

1. Open the attendance logs

   In D365, go to **Time and attendance ▸ Attendance logs**.

2. Find the record

   Filter to the employee and the date you are correcting. Apply the filter before you edit so you don't change anyone else's record by mistake.

3. Edit the times

   Click **Edit** and change the **Clock in date and time** or **Clock out date and time** to the correct values.

   ![Editing the clock in date and time on an attendance log record](./images/adjust-an-attendance-record-1.png)

4. Save

   Click **Save**.

5. Re-run the summary batch job

   Go to **Time and attendance ▸ Periodic tasks ▸ SQ attendance summary** and click **OK**. Wait for the message centre to confirm it has completed.

   This step is not optional. The attendance log is the raw record; the work duration, regular minutes and overtime that everyone actually looks at are calculated by this job. Until it runs again, your correction exists only in the log.

6. Check the corrected record in D365

   Go back to **Time and attendance ▸ Attendance details**, or to **Employees ▸ Work ▸ Attendance ▸ View attendance** on the employee, and confirm the corrected times and the recalculated duration.

7. Check it in ESS

   Open the employee's attendance in ESS and check the same date. ESS refreshes on an interval of about five minutes rather than instantly, so allow a moment before deciding the change hasn't taken.

   The interval is deliberate — the attendance feed arrives once a day, so refreshing the portal every minute would cost performance for nothing.
