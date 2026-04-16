# Employee Self Service (ESS) – User Guide

This guide covers the full range of features available in the Employee Self Service (ESS) portal, built on Microsoft Dynamics 365. It is intended for employees, HR teams, school administrators, and IT staff who will use or support the system. The ESS portal allows employees to manage their own profile information, respond to surveys, complete onboarding and offboarding tasks, and track document expiry — all in real time through a single web-based interface.

> **Note:** *The ESS portal is accessible via a web browser. There is no separate login; access is managed through your existing Dynamics 365 account. Profile updates submitted through ESS are reflected in Dynamics 365 in near real time.*

---

## Profile Management Overview

When you first access the ESS portal, you are presented with a profile summary view showing key information such as your name, position, reporting manager, staff ID, personal number, organisational details, and years of service. From this overview, you can navigate to your full profile by clicking the **View Full Profile** button.

The full profile is organised into a series of tabs, each handling a specific category of your employee information. A notification bell in the top-right corner provides real-time alerts for work items assigned to you and for records that are approaching their expiry date — such as identification documents or certificates.

---

## Identification Management

The Identification Management section allows employees to record and maintain their official identification documents, including passports, Emirates IDs, labour cards, and visas. Each record captures the document type, document number, issuing authority, and validity dates.

When a document is approaching its expiry, a warning label — **Expiring Soon** — appears on the relevant tab, and a notification is also surfaced through the notification bell at the top of the screen. Only the current active identification document is displayed by default to avoid confusion from historical records.

Any new identification record or update submitted through ESS is routed through an approval workflow and will remain in a **Pending** status until it has been reviewed and approved by HR.

### Recording an Identification Document

1. Navigate to your **Full Profile** and click the **Identification** tab.
2. Click **Add New** to create a new identification record.
3. Select the **document type** from the dropdown list (e.g., Passport, Emirates ID, Labour Card).
4. Enter the **document number**, **issuing authority**, and **valid from / expiry dates**.
5. Click **Submit** to send the record for approval.
6. The record status will show as **Pending** until approved by HR.
   > **Note:** *Once submitted, you can view the record but cannot make further changes until it has been processed.*

---

## DEWA / Ejari Information

This section allows employees to record and maintain their DEWA (Dubai Electricity and Water Authority) account and Ejari tenancy registration details, which are required for certain housing and utility-related HR processes.

### Adding DEWA / Ejari Information

1. Navigate to your **Full Profile** and click the **DEWA / Ejari** tab.
2. Click **Add New** to enter your details.
3. Complete the required fields, including account reference numbers and relevant dates.
4. Click **Submit** to save the information.

---

## Address Management

The Address Management tab allows employees to maintain their residential and other address details, including description, purpose, street, city, and country or region.

One address must always be designated as your **Primary Residence**. The primary address is pinned to the top of the list for easy access. Note that a primary address cannot be deleted directly — you must first designate another address as primary before the original can be removed.

Address changes are applied immediately and are reflected in the back-end Dynamics 365 system upon saving, without requiring an approval workflow.

### Adding or Updating an Address

1. Navigate to your **Full Profile** and click the **Address** tab.
2. To add a new address, click **Add New Address** and complete the fields: description, purpose, street, city, and country.
3. To mark an address as primary, select it and enable the **Primary Residence** toggle.
4. To delete a non-primary address, select it and click **Delete**, then confirm by clicking **Submit**.
   > **Note:** *You cannot delete your primary address. Assign another address as primary first.*

---

## Contact Information

The Contact Information tab allows employees to manage their phone numbers, email addresses, and other contact details. Each contact entry can be assigned a type (e.g., business or personal) and a purpose (e.g., home, local). One contact entry can be marked as the **primary contact method**.

Contact information changes are applied immediately without an approval workflow.

### Adding a Contact Record

1. Navigate to your **Full Profile** and click the **Contact Information** tab.
2. Click **Add New Contact**.
3. Select the **contact type** (e.g., phone, email).
4. Enter the relevant details, such as the phone number or email address.
5. Select the **purpose** (e.g., home, local) and indicate whether this is your **primary contact**.
6. Click **Submit**.
   > **Note:** *A confirmation prompt may appear before saving. Click **Yes** to proceed.*

---

## Personal Contacts and Dependents

The Personal Contacts section allows employees to maintain details of related individuals, including family members, emergency contacts, dependents, and beneficiaries. Each contact record includes a relationship type and flags to indicate whether the person is an emergency contact, a dependent, or a beneficiary.

This section is organised into dedicated sub-tabs for each category of information.

### Basic Details Sub-Tab

The Basic Details sub-tab captures core information such as the contact's name and relationship type. You can flag the individual as an emergency contact and select them as a primary contact using the available toggles.

Navigation buttons at the bottom of the sub-tab allow you to:
- **Save** – saves and remains on the current sub-tab.
- **Next** – saves and moves to the next sub-tab.
- **Skip** – moves to the next sub-tab without saving changes.

### Dependent Details Sub-Tab

This sub-tab records additional attributes for dependents, including gender, date of birth, and specific conditions such as student status, disability, or order eligibility. Fields such as **Full-Time Student** are particularly important for processes like tuition fee or transport concession eligibility.

### Dependent Address Sub-Tab

This sub-tab captures address information specific to the dependent, including purpose and primary address designation.

### Dependent Contact Information Sub-Tab

Communication details for the dependent — such as phone numbers and email addresses — can be stored here, with the option to define purpose and mark a primary contact method.

### Dependent Identification Sub-Tab

Identification documents for the dependent are recorded here, including document type, number, issuing authority, and validity dates.

---

## Profile Image

Employees can update their profile photo directly from the ESS home screen. Click the profile image icon on the home page to open the image upload window and select the image you wish to use. The image submission is routed through an approval workflow and will remain pending until approved by HR or your line manager.

### Uploading a Profile Image

1. From the **ESS home page**, click your **profile image** or the image placeholder.
2. In the window that opens, click **Choose File** and select the image from your device.
3. Click **Submit** to send for approval.
4. Navigate to **Employee Self Service** ▸ **Edit Personal Details** ▸ **Image** to monitor the approval status.

---

## Screening

The Screening section displays compliance and pre-employment screening checks associated with your employee profile. Visibility of specific screening items is configured by HR to show only the checks that are relevant to you. This section is read-only for most employees; only items explicitly designated for employee action will be available to update.

---

## Education

The Education tab allows employees to record their academic background, including qualifications, institutions, and study dates.

Any new qualification submitted is routed through an approval workflow and will appear in **In Review** status until approved. Once approved, the record is immediately reflected in both the ESS portal and the back-end Dynamics 365 system.

### Adding an Education Record

1. Navigate to your **Full Profile** and click the **Education** tab.
2. Click **Add New Qualification**.
3. Select the **qualification type** (e.g., Master's, Bachelor's) and enter the **field of study** and **institution name**.
4. Enter the **start date**, **completion status**, and **duration**.
5. Click **Submit** to send for approval.
6. The status will display as **In Review** until your manager or HR approves the record.

---

## References

The References tab allows employees to record details of professional references, including referee name, organisation, and relationship. Like the Education section, any reference submitted is sent through the approval workflow and remains pending until approved.

---

## NC Checklist

The NC (New Colleague) Checklist displays compliance or competency tasks assigned to an employee by HR. Employees can view and update their assigned tasks, and any submissions follow the configured approval workflow. This tab is only visible where tasks have been specifically assigned by HR for employee action.

---

## Professional Experience

The Professional Experience tab allows employees to record their employment history, including previous job titles, organisations, and responsibilities. All updates are submitted through an approval workflow and remain pending until approved.

### Adding a Professional Experience Record

1. Navigate to your **Full Profile** and click the **Professional Experience** tab.
2. Click **Add New Experience**.
3. Complete the fields: **job title**, **organisation**, **start and end dates**, and **responsibilities**.
4. Click **Submit** to send for approval.

---

## Subject Management

The Subject Management tab allows employees to declare the subjects they are qualified or available to teach. Subjects are selected using a subject ID or description, and one subject can be marked as the primary subject. Subject submissions are routed through the approval workflow and remain pending until approved.

### Adding a Subject

1. Navigate to your **Full Profile** and click the **Subjects** tab.
2. Click **Add New Subject**.
3. Search by keyword or select a subject from the dropdown list.
4. Toggle the **Primary** flag if this is your main subject.
5. Click **Submit** to send for approval.

---

## Company Directory

The Company Directory provides a centralised search tool for finding employee information across the organisation. Users can search by employee name or reporting manager to quickly locate contact details, department, and role information. This eliminates the need for manual coordination across multiple teams or systems.

### Searching the Company Directory

1. From the **ESS home page**, navigate to **Company Directory**.
2. Type an employee's **name** or their **reporting manager's name** in the search bar.
3. The matching employee profile will be displayed, showing key details such as department and position.

---

## Organisational Hierarchy

The Organisational Hierarchy feature provides a live, visual representation of the organisation's reporting structure, fetched directly from Dynamics 365. Any changes made in Dynamics are reflected immediately upon refreshing the view.

The hierarchy displays employee photos (where available), names, and reporting relationships. Users can navigate across levels of the hierarchy by clicking on any individual to expand or explore their team. The chart is particularly useful for understanding approval flows, escalation paths, and team structures — especially for new employees.

> **Note:** *The initial load of the hierarchy may take a few seconds. Once loaded, navigation between levels is immediate.*

---

## Certifications

The Certifications section allows employees to view and update their professional and compliance certificates. The system monitors expiry dates and displays a clear status indicator for each certificate:

| Status | Meaning |
|---|---|
| **Valid** | Certificate is current and not near expiry |
| **Expiring** | Certificate is approaching its expiry date |
| **Expired** | Certificate has passed its expiry date |
| **Invalid** | Certificate has been marked as no longer valid |

Employees will also receive expiry notifications through the notification bell on the ESS home screen.

### Viewing All Certificates

1. From the **ESS home page**, locate the **Certificates** tile showing your certificate summary.
2. Click **View All Certificates** to open the full list.
3. Review the status of each certificate and take action on any that are expiring or expired.

---

## Skills Management

The Skills Management section allows employees to view, maintain, and filter their skills and competencies to keep their profile current. Any skill added or updated is routed through an approval workflow involving the employee's manager or HR, and a status indicator is available to monitor progress.

### Adding a Skill

1. Navigate to your **Full Profile** and click the **Skills** tab.
2. Click **Add New Skill**.
3. Search for the skill by entering a keyword (e.g., "communication") or select from the dropdown list.
4. Select the **proficiency level** from the available options.
5. Enter the **date acquired** and **years of experience**.
6. Click **Submit** to send for approval.
7. The skill will appear in a **Pending Approval** state until reviewed by your manager or HR.

---

## Questionnaires

The Questionnaires section in ESS allows employees to view and respond to surveys distributed by HR. Questionnaires appear under the **Questionnaires** tab in the top navigation of the ESS portal. Each questionnaire shows its current status: **Not Started**, **In Progress**, or **Completed**.

Employees can save a partially completed questionnaire as a draft and return to it later. All previously entered responses are retained when resuming a draft.

### Completing a Questionnaire

1. From the **ESS portal**, click the **Questionnaires** tab.
2. Select a questionnaire with a status of **Not Started** or **In Progress**.
3. Click **Start** (or **Continue** if resuming a draft) to open the survey.
4. Answer each question in sequence. Use the navigation buttons to move between questions.
5. To save your progress and return later, click **Save as Draft**. The status will change to **In Progress**.
6. Once all questions are answered, click **Submit** to finalise your response.

---

### Intention Questionnaire

The Intention Questionnaire is a targeted survey distributed to specific employee groups — typically teaching staff — to identify employees who may be considering leaving the organisation. It contains questions such as likelihood of recommending the organisation as a place to work and whether the employee intends to leave in the near future.

This questionnaire is set up in Dynamics 365 and distributed via a questionnaire schedule that targets specific worker groups, legal entities, or schools. Employees complete it through the ESS Questionnaires tab in the same way as other surveys.

---

### Intentions Inquiry (HR View)

The Intentions Inquiry is a report available to HR that displays employees who have indicated, through the Intention Questionnaire, that they intend to leave the organisation. HR staff can access this report via:

**Human Resources** ▸ **Workers** ▸ **Inquiries & Reports** ▸ **Intentions Report**

Each record in the report shows the employee's details and a **Retention Status** field, which HR updates as the process progresses. The available status options are:

| Status | Meaning |
|---|---|
| **Identified** | Employee has answered 'Yes' to the intention to leave question |
| **HR Discussion** | A discussion has been initiated with the employee |
| **Retained Successfully** | The employee has agreed to remain with the organisation |
| **Exit Confirmed** | The employee is confirmed as leaving; triggers the recruitment process |

### Updating the Retention Status

1. Navigate to **Human Resources** ▸ **Workers** ▸ **Inquiries & Reports** ▸ **Intentions Report**.
2. Locate the relevant employee record.
3. Click **Edit** to open the record.
4. Update the **Retention Status** field to reflect the current stage of the retention conversation.
5. Click **Save** to record the change.

---

### NPS Questionnaire

The NPS (Net Promoter Score) Questionnaire is a brief pulse survey that appears when employees log into the ESS portal. It presents a simple rating scale and an optional text response field. The survey is designed to capture immediate feedback on the employee experience.

The NPS is configured to appear periodically. Employees may skip it up to twice; on the third prompt, a response is required before proceeding. This ensures a consistent volume of responses for HR analytics.

> **Note:** *The NPS is configured and distributed by HR through the questionnaire schedule in Dynamics 365.*

---

### Offboarding Survey

The Offboarding Survey (exit survey) is distributed to employees who are in the process of leaving the organisation. It captures feedback on their experience and reasons for departure. The survey is assigned as part of the offboarding checklist process and is completed through the ESS Questionnaires tab.

---

## Approvals and Tasks Workspace

The Approvals and Tasks workspace is accessible from the ESS portal and serves as the central location where employees and managers can view, action, and track all pending approvals and assigned tasks.

The workspace is divided into two tabs:
- **Tasks** – displays all checklist tasks assigned to you (e.g., onboarding tasks).
- **Approvals** – displays all items awaiting your approval (e.g., identification updates, education records, skills submissions from your direct reports).

---

### Approval Task Details

When an item is submitted by an employee and routed through a workflow, it appears in the **Approvals** tab of the relevant approver's workspace. Approvers can review the submitted information and either approve or reject the request.

### Reviewing and Approving a Request

1. From the **ESS portal**, navigate to **Tasks** ▸ **Approvals** tab.
2. The list displays all pending approval items, including the type of request (e.g., Identification, Education, Subject, Professional Experience).
3. Click on a record to open the full detail view.
4. Review the submitted information.
5. Click **Approve** to accept the change, or **Reject** to decline it.
6. The employee's record is updated immediately upon approval, and the status reflects the outcome in their ESS profile.

---

### Setting Up Delegations

The delegation feature allows a user to assign their approval responsibilities to another person for a specified period — for example, during leave. This ensures that approval workflows continue to be processed without interruption.

### Creating a Delegation

1. From the **ESS portal** or **Dynamics 365**, navigate to your **Approval Settings**.
2. Select **Delegation** and click **New**.
3. Enter the **name of the delegate** (the person who will act on your behalf).
4. Set the **start date** and **end date** for the delegation period.
5. Select the **scope** of the delegation (e.g., all approvals, or specific workflow types).
6. Click **Save** to activate the delegation.

> **Note:** *Delegations are time-bound and will expire automatically at the end date specified.*

---

## Onboarding Checklist

When a new employee joins the organisation, an onboarding checklist is automatically applied to their profile. The checklist contains a series of tasks that must be completed by various parties — including the employee, their manager, IT, HR, and other support teams — as part of the onboarding process.

Employees and assigned staff can view their outstanding onboarding tasks by navigating to the **Tasks** tab in the Approvals and Tasks workspace.

Each task displays:
- The **task name** and description.
- The **current status** (e.g., Open, In Progress, Completed).
- Any **dependencies** that must be completed before this task can be progressed.

### Completing an Onboarding Task

1. From the **ESS portal**, navigate to **Tasks**.
2. Locate the relevant onboarding task in your list.
3. Open the task to view its details and any dependencies.
4. Once the task is ready to be actioned, update the **status** to reflect completion.
5. Click **Save** to record the update.

---

### Onboarding Checklist Dependencies

Some onboarding tasks are dependent on other tasks being completed first. For example, configuring a laptop may depend on an Active Directory (AD) account being set up first. If a task has unresolved dependencies, the system will display them clearly but will **not allow the task to be completed** until the dependent tasks are finished.

The task view shows:
- The list of **dependency tasks** and their current statuses.
- Who each dependency is **assigned to** and the **target completion date**.

This provides full visibility so that all parties are aware of what is blocking progress, without hiding tasks from the assignee.

> **Note:** *If a task shows as blocked, check the dependencies listed within the task detail to understand what must be completed first and by whom.*

---

### Onboarding Checklists Applicable by School

Onboarding checklists can be configured to apply to specific legal entities (schools). This means that tasks relevant only to a particular school are assigned only when a new employee is onboarded at that school, keeping the checklist focused and relevant.

School-specific task rules are set up in Dynamics 365 by HR or the system administrator. When configuring a task, the applicable legal entities are specified, and the task will only appear on checklists for those schools.

### Configuring a School-Specific Checklist Task (Administrator)

1. From **Dynamics 365**, navigate to **Task Management** ▸ **Onboarding Checklists**.
2. Open the relevant checklist and select the task to configure.
3. Click **Edit**.
4. In the **Legal Entity** field, select the school(s) this task applies to.
5. To add a dependency, click **Set Dependency** and select the task that must be completed first.
6. Click **Save** to apply the configuration.

---

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

---

## Bank Account

The Bank Account section allows employees to maintain their bank details for payroll processing. The information captured includes bank name, account name, account number, and IBAN.

At any given time, only **one bank account** can be marked as **Active**. This is the account to which salary payments will be made. Inactive accounts are retained in the system for historical reference but are filtered from the employee's default view in ESS.

Any changes to bank account details are subject to a duplicate IBAN check and are intended to be routed through an approval workflow before becoming active.

### Adding or Updating a Bank Account

1. Navigate to your **Full Profile** and click the **Payment Methods** tab.
2. Click **Add New** to enter a new bank account.
3. Complete the required fields: **bank name**, **account name**, **account number**, and **IBAN**.
4. Set the account status to **Active**.
5. Click **Submit** to send for approval.
   > **Note:** *Only one account can be active at a time. If you are replacing an existing bank account, the previous account will be marked as inactive once the new one is approved.*
