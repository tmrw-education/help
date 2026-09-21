---
draft: true
id: import-attendance-data
summary:
  - "In D365, go to **Data management ▸ Import**, name the project, and select the **TMRW HR time attendance** entity."
  - "Upload the CSV of punch records and map the columns, including the code remark and device fields."
  - "Click **Import**, then check the loaded rows in **Time and attendance ▸ Attendance logs**."
keywords: [import attendance, data management, attendance log import, CSV import, TMRW HR time attendance entity, punch records, biometric data, clock in clock out, data entity, D365]
video:
  youtube:
  bunny:
---

# Import attendance data

Attendance data reaches D365 as punch records — a clock in and a clock out per employee per day. In the live design an integration with the biometric system delivers these automatically, so this import is not something you run daily or weekly. Use it where the integration is not yet in place, or to correct or add records in bulk.

The integration was still being built with the Phoenix team at the time this was recorded, both for receiving biometric data and for sending approved overtime out to payroll. Until it goes live, the Excel or CSV import below is how the data gets in.

1. Open a data import project

   In D365, go to **Workspaces ▸ Data management** and click **Import**.

2. Name the project

   Give the project a **Group name**. Where you are duplicating an existing project, give it a different name so you don't overwrite the original.

3. Select the entity and file type

   Set the file type to **CSV** and select the **TMRW HR time attendance** entity.

4. Upload the file

   Click **Upload** and select your file, then apply it to the project.

   ![The data import project with the TMRW HR time attendance entity and the uploaded file](./images/import-attendance-data-1.png)

5. Map the remaining columns

   You may see a warning that the entity is not fully mapped. Map the outstanding fields — the code remark in and out, the timestamp, the device ID and the device name — then apply the mapping.

6. Run the import

   Click **Import**. The file loads into the attendance log table.

7. Check the loaded records

   Go to **Time and attendance ▸ Attendance logs** and review what came in. Each row holds the entry date, employee ID, clock in date and time, code remark in, any remark passed through from the time and attendance clock, the clock out date and time, and the location and device it was recorded on.

   ![Imported rows in the attendance logs form, showing a punch in and punch out on the same date](./images/import-attendance-data-2.png)

   Work duration is not calculated at this point. The attendance log is only the raw record of a punch in and punch out — durations, regular minutes and overtime are worked out by the summary batch job.

Next, run the summary — see [Run the attendance summary batch job](./06-run-the-attendance-summary-batch-job.md).
