---
id: review-gemsu-integration-log
summary:
  - "Open the **GEMSU integration log** in D365 to see the messages received from GEMSU."
  - "Review the log for a single employee, or across all employees, to check for **errors** and **successful imports**."
  - "Use the log to confirm whether missing course data is an integration failure or a source data issue."
keywords: [GEMSU, integration log, integration message, errors, successful import, failed import, course data, troubleshooting, D365, learning]
video:
  youtube:
  bunny:
---

# Review the GEMSU integration log

Every message that comes into D365 from GEMSU is recorded in the integration log. When course data is missing or looks wrong, the log is the first place to check — it tells you whether the message arrived and whether it imported successfully.

1. Open the integration log for an employee

   In D365, open the employee record and go to the **GEMSU integration log**. This shows the messages received for that employee.

   ![The GEMSU integration log for a single employee in D365](./images/review-gemsu-integration-log-1.png)

2. Open the log across all employees

   To see everything the integration has received rather than one employee's records, open the all-employee view of the integration log. This is the view to use when you are checking the health of the integration overall rather than investigating a single case.

   ![The all-employee GEMSU integration log in D365 showing records with their import state](./images/review-gemsu-integration-log-2.png)

3. Check the state of each record

   Each log entry records the state of that message — for example a successful import, or an error where the record could not be processed. Filter on the error state to isolate the records that need attention.

4. Act on what the log tells you

   - Records showing as **successfully imported** confirm the data reached D365. If the employee still can't see the course in ESS, the issue is downstream of the integration.
   - Records showing an **error** need investigating with the GEMSU team — the message arrived but could not be written to the course tables.
   - **No log entry at all** means nothing was received for that employee. Confirm with the GEMSU team that the course was assigned at source.
