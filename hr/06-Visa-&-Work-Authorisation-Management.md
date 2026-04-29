## Visa Information Management

The Visa Information Management module allows HR and PRO (Public Relations Officer) teams to configure, record, and track visa and labour card information for employees. The module includes both a setup section (for reference data) and an employee-level recording section.

Notifications for expiring visa and identification documents are surfaced through tiles on the ESS dashboard and through the expiring records workspace, based on the expiry thresholds configured in the system.

---

### Visa Status Setup

The Visa Status setup defines the lifecycle stages used to track the progress of visa and labour card applications. These are predefined values that can be viewed and edited by administrators.

| Status | Description |
|---|---|
| **Created** | Record has been created in the system |
| **Submitted** | Application has been submitted to the relevant authority |
| **Approved** | Application has been approved |
| **Rejected** | Application has been rejected |
| **Finished** | Process has been completed |

### Viewing or Editing Visa Statuses (Administrator)

1. From **Dynamics 365**, navigate to **Visa Master** ▸ **Visa Label Status**.
2. Review the list of configured statuses.
3. To edit an existing status, click **Edit** on the relevant row and make your changes.
4. To export the full list, click **Export to Excel**.
5. Click **Save** when complete.

---

### Visa Type Setup

The Visa Type setup defines the categories of visa that are available for selection when recording employee visa information. These types align with the data previously maintained in the organisation's prior system.

### Viewing or Adding a Visa Type (Administrator)

1. From **Dynamics 365**, navigate to **Visa Master** ▸ **Visa Type**.
2. The full list of configured visa types is displayed.
3. To add a new visa type, click **New** and complete the required fields.
4. To export the list, click **Export to Excel**.
5. Click **Save** when complete.

---

### MOL Professions

MOL (Ministry of Labour) Professions define the occupational classifications used for labour regulatory compliance. All standard MOL professions are pre-loaded into the system.

### Viewing or Adding an MOL Profession (Administrator)

1. From **Dynamics 365**, navigate to **Visa Master** ▸ **MOL Profession**.
2. The full list of MOL professions is displayed.
3. To add a new profession, click **New** and enter the profession details.
4. To export the list, click **Export to Excel**.
5. Click **Save** when complete.

---

### MOE Professions

MOE (Ministry of Education) Professions define the occupational classifications relevant to the education sector. These are used to categorise employees' roles in line with Ministry of Education requirements.

### Viewing or Adding an MOE Profession (Administrator)

1. From **Dynamics 365**, navigate to **Visa Master** ▸ **MOE Profession**.
2. Review the list of configured professions.
3. To add a new profession, click **New** and complete the required fields.
4. Click **Save** when complete.

---

### Contract Type

The Contract Type setup defines the employment contract categories available for assignment to employees (e.g., Full Time, Limited, Part Time). These values are used when recording visa and employment information.

### Viewing Contract Types (Administrator)

1. From **Dynamics 365**, navigate to **Visa Master** ▸ **Contract Type**.
2. Review the list of configured contract types.
3. To add a new type, click **New** and complete the required fields.
4. Click **Save** when complete.

---

### Record Visa Information

The Record Visa Information form allows HR and PRO teams to record the full visa details for an individual employee. This includes all key fields required for visa processing and regulatory compliance.

Fields captured include:

- UID Number
- Visa Type
- Visa Programme
- MOL Profession
- MOE Profession
- Working Unit
- Labour Card details
- ABC Category
- Contract Type
- Issue date and expiry date

### Recording Visa Information for an Employee

1. From **Dynamics 365**, navigate to the relevant **employee record**.
2. Open the **Visa Information** section.
3. Click **New** to create a new visa record.
4. Complete all required fields, selecting values from the configured dropdowns (e.g., Visa Type, MOL Profession, Contract Type).
5. Enter the **issue date** and **expiry date** for the visa or labour card.
6. Click **Save** to record the information.

> **Note:** *The descriptions for MOL and MOE profession codes are displayed in the dropdown lists — not just the numeric codes — to ensure clarity when making selections.*

---

## Expiring Records Workspace

The Expiring Records workspace provides HR and PRO teams with a centralised view of all employee documents and visa records that are approaching or have passed their expiry dates. This workspace is accessible from the ESS dashboard through dedicated tiles.

Each tile displays:
- The **document type** (e.g., Passport, Visa, Labour Card, Emirates ID).
- The **employee name** and **UID**.
- The **expiry date** and number of **days remaining**.

Expiry thresholds (i.e., how far in advance an alert is triggered) are configured in the system setup. For example, a passport alert may be triggered 50 days before expiry, displaying a count of 49 days remaining.

### Viewing Expiring Records

1. From the **ESS dashboard**, locate the **Expiring Records** tile for the document type you wish to review (e.g., Passport, Visa).
2. Click the tile to open the full workspace view.
3. Review the list of employees with expiring or expired documents.
4. Take the necessary action (e.g., initiating a renewal, contacting the employee) and update the record accordingly.

