# Glossary

Terms used across Dynamics 365 HR and this guide.

[A](#a) · [B](#b) · [C](#c) · [D](#d) · [E](#e) · [F](#f) · [G](#g) · [H](#h) · [I](#i) · [K](#k) · [L](#l) · [M](#m) · [N](#n) · [O](#o) · [P](#p) · [Q](#q) · [R](#r) · [S](#s) · [T](#t) · [U](#u) · [V](#v) · [W](#w)

## A

| Term | Definition |
|---|---|
| ABC Category | A classification on a worker's visa record that updates automatically based on the visa type selected. |
| Accrual Type | How a leave type accrues — by **months of service** or **hours worked**. Set on the leave type alongside accrual amount, carry forward and minimum balance. |
| Action Pane | The toolbar at the top of any D365 record. **Back**, **Save / Edit** and **New** are always present and stay anchored as you move between tabs and sections. |
| Advance Notice Rule | A validation on a leave type pairing a consecutive-day trigger with a required notice period — for example, 14 or more days must be requested 40 days ahead. Enforced when the employee submits in ESS. |
| Active Dependent | The flag on a personal contact marking them as a live dependent of the employee. It must be set to Yes for the dependent to be picked up by the airfare calculation — dependents without it are skipped and no line is written. |
| Age Group Setup | The form under **Human Resources ▸ Setup** defining the age bands — infant, child, adult — and the from and to ages of each. A dependent's birth date is matched against the bands to decide which fare they attract. |
| Air Ticket Location | The **from** and **to** fields on an employee's profile identifying the route their airfare entitlement is based on. The values must match the From city and To city on a record in the airfare setup. |
| Airfare Setup | The fare table holding the amount per age group for a route, ticket class and ticket type, per legal entity, over a defined period. Loaded in bulk through a data entity when Travel release the year's fares. |
| Answers by Person | The form under **Questionnaire ▸ View and analyse results** used to retrieve an individual employee's questionnaire responses. Filter to the employee, then click **Answers** in the Action Pane. |
| Apply Checklist | The button on a worker action or employee record used to attach an onboarding, pre-onboarding, or offboarding checklist and set its target date. |
| Apply Onboarding Checklist | A flag on a personal action type that causes the nominated default onboarding checklist to be applied automatically when a worker action of that type completes. |
| Assigned To | The field on a checklist task naming who is responsible — a specific person, a user group, or left blank for manual assignment at the time of hire. |
| Attachment Mandatory for Company | A setting on an identification type that requires a supporting file before an employee can submit that document in ESS. When enabled, the ESS **Submit** button stays disabled until a file is uploaded. |
| Attendance Details | The summarised attendance record built from the attendance logs by the SQ attendance summary batch job — one row per employee per day holding work duration, regular minutes and overtime minutes. |
| Attendance Hierarchy | The position hierarchy selected in human resource parameters that decides who sees and approves an employee’s attendance. Used where a designated attendance manager, rather than the line manager, is responsible. |
| Attendance Log | The raw record of a punch in and punch out for an employee on a date. Holds no calculated values — durations and overtime come from the summary batch job. |
| Attendance Shortage | A day where an employee worked fewer minutes than their working time calendar scheduled. |
| Average Score | The mean of an employee's weighted ratings across the performance cycle. Calculated when the manager submits the end of year review, and only produced if the rating weight factor is enabled on the review template. |

## B

| Term | Definition |
|---|---|
| Batch Process | A job that runs in the background to process records in bulk — used to generate probation reviews and offboarding questionnaires. Batches can be run manually or scheduled to run nightly. |
| Bulk Request Time Off | The D365 form used to submit the same leave for many workers at once. Filterable by position type, department and staff category; the requests it creates are system generated and auto-approved. |
| Business Segment | A grouping of schools or entities used to target questionnaire schedules and to segment employees in reporting. |

## C

| Term | Definition |
|---|---|
| Calculated Airfare | The airfare disbursement inquiry — the form holding the output of the calculation, with one line for the employee and one per dependent for the period the batch was run for. Rerunning the batch for an employee overwrites their lines for that period. |
| Calibrated Rating | The rating an employee holds after calibration. Blank in the calibration inquiry until HR has calibrated them, and shown alongside the provisional rating so a change is visible. |
| Calibration Framework | The expected distribution of ratings, entered as a percentage per rating band against the performance year. It is the curve actual results are compared against during calibration. |
| Calibration Inquiry | The D365 form listing every review submitted for calibration, with the review and employee IDs, the final employee rating, the calibrated rating, the manager, and the two release flags. |
| Cancellation Window | The parameter limiting how far back leave can be cancelled from ESS, measured from the leave start date rather than the submission date. Set per legal entity. |
| Code Remark | The value identifying a punch record as a punch in or a punch out, carried on each attendance log row. |
| Company | A legal entity in D365 — in practice, an individual school. Used to scope checklist tasks, user groups, and identification rules. |
| Competency | An assessed area on a review template. On probation templates the template defines which competencies are included and the rating model used; on performance review templates competency is one of the goal classifications a review can carry. |
| Component Master | The compensation setup form listing every pay and benefit component. The **Reward Type** field on each component determines whether and where it appears on the ESS rewards statement. |
| Contract Type | An employment contract category — Full Time, Limited, Part Time — configured under Visa master and used when recording visa and employment information. |
| Course Status | The employee's progress on a GEMSU course — not started, in progress, or completed. Sourced from GEMSU. |
| Course Type | Whether a GEMSU course is mandatory or recommended. Drives the tag the employee sees in ESS. |
| Create To Date | The field on the Generate attendance logs form setting how far forward attendance records are generated. |

## D

| Term | Definition |
|---|---|
| D365 | Microsoft Dynamics 365. The platform hosting the Human Resources module covered by this guide. |
| Data Entity | An import structure used with Data management to load records into D365 from a file. The GEMSU course entity is used for cutover and historical course data; the airfare setup entity is used to load the year's fares in bulk. |
| Default Category | Used with staff level to define a unique combination for probation configuration — for example, Teacher + Grade 1. Each combination has its own Stage 1 and Stage 2 review days and template. |
| Delegation | A configured arrangement that routes a person's tasks to a nominated delegate. If a group's primary member has an active delegation, checklist tasks go to the delegate automatically. |
| Dependency | A prerequisite relationship between checklist tasks. A dependent task stays locked in ESS until its prerequisites are complete, and the task detail view shows what is blocking it. |
| Device Name | The attendance device a punch was recorded on, imported onto the attendance log alongside the location and location ID. |
| Due Date Offset from Start Date | The number of days after an employee's start date by which an onboarding task must be completed. Compare with **Offset Date**, used by pre-onboarding checklists. |

## E

| Term | Definition |
|---|---|
| Eligible for Overtime | The flag on an employee’s employment record controlling whether they can claim overtime. Defaults from the Overtime applicable flag on the staff level when a hire worker action completes, and can be amended on the employee afterwards. |
| Employee Intention Survey Result | The inquiry form listing every employee who answered Yes to the intention-to-leave question in the Intention Questionnaire. Only **Retention Status** and **Comments** are editable. |
| Employee Readiness | How long until an identified successor is ready to take on the role — recorded on the talent review. |
| Employee Visa Information | The form holding an employee's visa and labour card details, including UID number, visa type, professions, working unit and contract type. Populated from the worker action when a hire completes. |
| ESS | Employee Self-Service — the staff-facing portal where employees complete questionnaires, checklist tasks, requests and probation feedback. The ESS cache refreshes on a five-minute cycle. |
| ESS Display Order | A number on a request type controlling its position in the ESS request list. Lower numbers appear first. |
| Exclude from Probation | A field on an employee record that, when set to Yes, causes the probation batch to skip that employee entirely. |
| Exit Confirmed | A retention status indicating the employee is confirmed as leaving. Triggers the recruitment process. |
| Expiring Records | Tiles and workspace views under **Human resources ▸ Workspaces ▸ Personnel management** showing employee documents approaching or past expiry, with days remaining. Thresholds are configured per document type. |

## F

| Term | Definition |
|---|---|
| Final Employee Rating | The rating the manager gave at the point of submitting the end of year review for calibration. Held in the calibration inquiry as the before position against the calibrated rating. |
| Final Review Generated | A flag set to Yes on an employee record when the probation batch creates their Stage 2 review. |
| Finance Approval | The third and final stage of the overtime approval chain. Lists only the overtime HR has already approved. |
| Fixed Allowance | A reward type category for recurring fixed allowance components on the rewards statement. |
| From City / To City | The origin and destination on an airfare setup record. They are matched against the air ticket location fields on the employee's profile — no match, no calculated airfare. |
| Full Entitlement at Once | A flag on a leave type forcing the whole grant to be taken as a single block. ESS calculates the end date from the start date and prevents the employee shortening it. |

## G

| Term | Definition |
|---|---|
| GCO | The group legal entity in which questionnaire schedules are typically created before being released to individual schools or across all companies. |
| GEMS Periodic Batch Jobs | The area under **System administration ▸ Periodic tasks** grouping the custom batch jobs — probation, performance and talent review. The performance review generation job is run from here. |
| Gemsstatus | A status dropdown completed on the termination personnel action when offboarding an employee. |
| GEMSU | The GEMS learning platform. Course assignments and completions flow from GEMSU into D365 through the GEMSU integration, and on into ESS for the employee. |
| GEMSU Course Tracker | The list on an employee record showing their GEMSU courses with course status, course type, start date and date registered. Populated by the integration; not maintained by hand. |
| GEMSU Integration Log | The log recording every message received from GEMSU, viewable per employee or across all employees, with the state of each record — successful import or error. The first place to check when course data is missing. |
| Generate Attendance Logs | The function on the attendance logs form that creates punch in and punch out records for selected employees across a date range, using a default start and end time and a working time calendar. Safe to re-run — it does not create duplicates. |
| Generate Probation Review | The batch process that scans employee records for upcoming probation dates and creates review records, routing them to the assigned manager. |
| Goal Classification | The type of a goal — objective, competency, PIP or PDP. Set on the goal template and drawn from the goal types already defined in the existing system. |
| Goal Template | A record in the goal library defining a single goal with its name, level, category, status and classification. Goal templates are grouped into review templates and copied onto each review at generation. |
| Grant Amount | The fixed entitlement in working days configured against a grant-based leave type — 60 days for maternity leave, for example. |
| Growth and Performance Matrix | The configurable grid employees are placed on — GEMS star, high performer, inconsistent, talent risk and the rest. Configured in D365; used from the ESS manager view. A value can only be defined once across the grid. |

## H

| Term | Definition |
|---|---|
| Header Setup | The area of a request type configuration where each field is set as **Visible** and/or **Mandatory** for the ESS submission form. |
| Hierarchy View | The view on the attendance and overtime forms showing the employees assigned to you through the attendance or overtime hierarchy on their position, rather than your direct reports. |
| Holidays and Closures | The calendar records holding announced public holidays. Moving a holiday here triggers automatic adjustment of every affected leave request in that legal entity. |
| HR Approval | The second stage of the overtime approval chain. Lists only the overtime managers have already approved, and passes what HR approves on to finance. |
| HR Discussion | A retention status indicating a retention conversation has been initiated with the employee. |
| HR Notes | The field on an HR request where HR records their response. This text is what the employee sees on their completed request in ESS. |
| HR Probation Reviews | The central form where HR views all probation reviews — in progress or complete — with ratings, comments, workflow status and outcome. |
| HR Request | A submission made by an employee through ESS, routed to HR by the configured workflow. Each has a system-generated request number. |
| HR Request Types | The setup form defining what employees can request, which fields appear, what is mandatory, which workflow applies, and ESS visibility and ordering. |
| Human Resources Parameters | The system setup form whose **Recruitment** tab nominates the default onboarding checklist and the number of days a new employee has to complete their tasks. |

## I

| Term | Definition |
|---|---|
| Identification Types | The setup form defining each document type (passport, Emirates ID, labour card, medical insurance and others), its mandatory fields, and whether an attachment is required. |
| Identified Successor | The person recorded on an employee's talent review as their succession candidate. |
| Impact of Loss | The effect on the organisation if an employee left, recorded on their talent review alongside risk of loss. |
| Integration Log | See **GEMSU Integration Log**. |
| Intention Questionnaire | The survey asking employees whether they intend to leave. Yes responses populate the Employee Intention Survey Result form live. |

## K

| Term | Definition |
|---|---|
| Khamra | An identification document type whose field set asks for an agency rather than a country. |

## L

| Term | Definition |
|---|---|
| Labour Card | A work authorisation document recorded against an employee alongside their visa. Has its own status values and expiry monitoring. |
| Leave and Absence Request Workflow | The legal-entity-specific workflow that routes leave requests. Its key condition auto-approves requests where the system generated leave flag is Yes. |
| Leave Plan | A container grouping leave types. There is no limit on how many plans exist or how types are grouped, and each plan carries its own ESS visibility flag and enrolled worker list. |
| Leave Type | An individual kind of leave within a plan, carrying its own accrual, eligibility, grant, certificate and advance notice configuration, plus its ESS visibility and sort order. |
| Legal Entity | See **Company**. |
| Line View | The view on the attendance and overtime forms showing your direct reports — the employees whose line manager you are. |
| Living | A reward type category for living and accommodation-related allowances on the rewards statement. |

## M

| Term | Definition |
|---|---|
| Make Primary | The action that nominates one member of a user group as the recipient of that group's checklist tasks. Tasks route to the primary only, not to all members. |
| Mandatory | A toggle on a request type field requiring the employee to complete it before submitting. |
| Minimum Overtime | The threshold in human resource shared parameters below which overtime is not displayed for approval, keeping short daily overruns out of the overtime forms. |
| Missing Attendance | A day where one half of the punch pair is absent — a punch in with no punch out, or a punch out with no punch in. Collected on its own form for correction. |
| MOE Profession | A Ministry of Education occupational classification used to categorise employee roles in line with Ministry requirements. Descriptions are shown alongside codes in dropdowns. |
| MOL Profession | A Ministry of Labour occupational classification required for labour regulatory compliance. Standard professions are pre-loaded. |

## N

| Term | Definition |
|---|---|
| NPS Questionnaire | A Net Promoter Score survey distributed to employees through the questionnaire schedule process. |

## O

| Term | Definition |
|---|---|
| Offboarding Checklist | The set of tasks assigned to a leaving employee and the teams supporting their exit. Also the trigger the offboarding questionnaire batch looks for when generating exit surveys. |
| Offset Date | The number of days *before* the target date by which a pre-onboarding task must be completed. Compare with **Due Date Offset from Start Date**, used by onboarding checklists. |
| Onboarding Checklist | The set of tasks assigned to a new employee and supporting teams on joining. Applied automatically when a hire worker action completes, if configured in HR parameters and on the personal action type. |
| Outside Probation Certificate Threshold | The field on a leave type setting how many days an absence can run before a confirmed employee must attach a medical certificate. Employees within probation must attach one from the first day. |
| Overall Rating | The summary rating a manager gives for the year on the end of year review, recorded with a written summary and any development notes. |
| Overtime Applicable | The flag on the staff levels form marking a staff position category and staff category as able to claim overtime. Drives the Eligible for overtime flag at hire. |
| Overtime Details | The manager’s overtime form in D365. Filtered to employees with overtime records only, and the D365 counterpart of the overtime approval a manager does in ESS. |
| Overtime Hierarchy | The position hierarchy selected in human resource parameters that decides who approves an employee’s overtime. Can be a different person from the attendance approver and from the line manager. |

## P

| Term | Definition |
|---|---|
| PDP Goal | A personal development plan goal. Released ad hoc to develop an employee and deliberately excluded from the weighted scoring — it carries no rating and no weight. |
| Pending Worker Visa Information | The form holding identification and visa data for hires whose worker action is not yet complete. Data carries over from the applicant record and publishes to the employee record when the action completes. |
| Performance Period | A stage within the performance year — goal setting, mid year review or end of year review — with its own start and end dates. The performance year must be attached to each period or it will not work. |
| Performance Year | The annual record tying the performance cycle together, with its start date, end date and rating model. It carries the calibration framework and is attached to every performance period. Set up once a year. |
| Person Identifications | The section of an employee record listing their identification documents. Used to verify that applicant-stage documents published correctly after a hire. |
| Personal Action Types | The setup form listing hire and other action types. The **Apply onboarding checklist** flag is enabled here per action type. |
| Personnel Actions | Actions taken against an employee record from the Action Pane — including **Terminate**, used to begin offboarding. |
| PIP Goal | A performance improvement plan goal. Like PDP goals, released ad hoc and excluded from the weighted scoring. |
| Pre-onboarding Checklist | Tasks that must be completed *before* a new employee's start date, such as collecting credentials or sending welcome documents. Assigned from the worker action with process type set to Pre-onboarding. |
| PRO | Public Relations Officer — the team responsible for visa, labour card and government documentation processing. |
| Probation End Date | The end of an employee's probation period, defaulted from the probation parameters. |
| Probation Horizon Days | The look-ahead window used by the probation batch. Reviews are generated for any employee whose Stage 1 or Stage 2 date falls within this many days from today. Dates already passed are not picked up. |
| Probation Review Days | The number of days from an employee's start date at which the Stage 1 and Stage 2 reviews are generated. Configured per staff level and default category. |
| Probation Status | A field on the employee record set manually to **Confirmed** by HR after a successful Stage 2 review. |
| Process Type | The selection in the Apply checklist dialog — Pre-onboarding, Onboarding, or Offboarding — that determines which checklists are available. |
| Provisional Rating | The rating an employee came into calibration with. Retained alongside the calibrated rating so HR can see what the manager originally submitted. |

## Q

| Term | Definition |
|---|---|
| Questionnaire Schedule | A record targeting a questionnaire to specific people, teams or business segments over a defined start and end date. Must be started before respondents can see it. |

## R

| Term | Definition |
|---|---|
| Rating Model | The scale used to rate goals, set on the review template and on the performance year. |
| Rating Weight Factor | The setting on a review template's **General** tab that enables the average and total score calculation. Without it the scores are not produced. |
| Recruitment Tab | The tab in Human Resources parameters where the default onboarding checklist and completion period are set. |
| Regular Minutes | The scheduled working minutes on an attendance detail record, separate from any overtime minutes worked beyond them. |
| Released to Direct Reports | The calibration inquiry flag set when a manager publishes calibrated ratings to their team. The second of the two release steps. |
| Released to Manager | The calibration inquiry flag set when HR releases calibrated ratings back to the manager. The first of the two release steps. |
| Resolved By | The column in the task management workspace recording which member of a user group actually completed a shared task. |
| Retained Successfully | A retention status indicating the employee has agreed to remain. |
| Retention Status | The editable field on an intentions record tracking the retention conversation — HR Discussion, Retained successfully, or Exit confirmed. |
| Review 1 Generated | A flag set to Yes on an employee record when the probation batch creates their Stage 1 review. |
| Review Outcome | The result recorded on a Stage 2 probation review — Meets Expectations or Performance Concerns. A Performance Concerns outcome routes to HR only; the employee is not notified. |
| Review Template | The definition of one stage of the performance cycle — the goal templates it carries, its rating model, and whether the rating weight factor applies. Selected when generating reviews. |
| Reward Type | The field on a component master record classifying a component as Fixed Allowance, Living, or Other. Components with no reward type are excluded from the ESS rewards statement. |
| Rewards Statement | The ESS view showing an employee their compensation and benefit components, grouped by reward type. |
| Risk of Loss | How likely an employee is to leave, recorded on their talent review alongside impact of loss. |

## S

| Term | Definition |
|---|---|
| SQ Attendance Summary | The periodic batch job under **Time and attendance ▸ Periodic tasks** that reads the attendance logs and creates the summarised attendance detail records. Normally a recurring batch; must be re-run manually after adjusting a log. |
| Staff Level | An employee classification driven by the position. Used with default category to determine probation review days and template, and on the staff level form it holds the calendar and the leave plans an employee is enrolled in per legal entity. |
| Stage 1 Review | The first probation review, generated a configured number of days after the employee's start date. |
| Stage 2 Review | The final probation review. Displays Stage 1 comments alongside Stage 2 for comparison, and carries the review outcome. |
| Submit for Calibration | The manager action closing the end of year review. It calculates the total and average scores and sends the record to the calibration inquiry for HR. |
| System Generated Leave | A flag identifying a leave request raised by the system rather than by an employee — calendar adjustments and bulk submissions. The workflow condition uses it to auto-approve. |

## T

| Term | Definition |
|---|---|
| Talent Review | The succession record held against an employee under the **Work** tab, holding comments, risk and impact of loss, matrix position, identified successor, readiness and any attachments. Completed from the ESS manager view. |
| Target Date | The date entered when applying a checklist, from which individual task due dates are calculated using each task's offset. For offboarding, it should match the employee's end date. |
| Task Management | The area of the Human Resources module holding onboarding, pre-onboarding, and offboarding checklists, and the workspace where assigned tasks are worked. |
| Template | The probation review template linked to a staff level and category combination, defining the competencies assessed and the rating model used. |
| Terminate | The personnel action that begins offboarding, capturing termination reason, termination date, last day worked, and personnel action type. |
| Ticket Class | The travel class an airfare entitlement is held at — economy, premium economy or business. Set on the airfare setup record, and held per dependent so a family can travel in a lower class than the employee. |
| Ticket Type | Whether an airfare entitlement is a **return** or a **one way** ticket. Each type is a separate record in the airfare setup. |
| TMRW HR Time Attendance | The data entity used to import punch records into the attendance log through data management. |
| Total Approved Minutes | The running total of overtime minutes approved, shown on the overtime approval screens as records are approved. |
| Total Score | The sum of an employee's weighted ratings for the cycle. Calculated on submission of the end of year review. |

## U

| Term | Definition |
|---|---|
| UID Number | The unique identifier recorded on an employee's visa information and shown on expiring records lists. |
| Update Leave and Absence Plan | The flag on a personnel action type that makes hire, transfer and promotion actions apply the leave plans configured against the staff level. Without it, the position changes but the enrolment does not. |
| User Group | A set of employees assigned to checklist tasks together. When any member completes the task it is marked complete for all. Groups are scoped by legal entity. |

## V

| Term | Definition |
|---|---|
| Valid From / Valid To | The dates a dependent's record is valid against an employee. The airfare calculation runs from the valid from date — so a dependent added late in the year is paid pro rata from it rather than from their date of birth — and the valid to date must extend past the end of the airfare period for them to be covered to the end of it. |
| Visa Issuing Unit | The authority that issued a worker's visa, recorded on the worker action. |
| Visa Labour Card Status | The lifecycle status of a visa or labour card — Applied, Not Applied, Visa Holder, or LC Holder. |
| Visa Master | The setup area under **Human Resources ▸ Setup** holding visa status, visa type, MOL and MOE professions, and contract type reference tables. |
| Visa Programme | A field on the employee visa information record identifying the programme under which the visa was issued. |
| Visa Type | The visa category recorded against an employee — for example, Employment Visa A. Determines the ABC Category automatically. |
| Visible | A toggle on a request type field controlling whether it appears on the employee's ESS submission form. |

## W

| Term | Definition |
|---|---|
| WebESS Display | A toggle on a request type controlling whether employees can see and raise it in ESS. Request types HR initiates internally are set not to display. |
| Weighting | The share of overall performance a goal represents, set by the employee. Weightings across a review must total exactly 100% — the system blocks both an under-total and an over-total on submission. |
| Work Duration | The total minutes between an employee’s clock in and clock out on a day, calculated by the attendance summary batch job. Splits into regular minutes and overtime minutes. |
| Work History | The section of an employee record holding the probation fields — Stage 1 and Stage 2 dates, end date, template, generation flags, status, and exclusion. |
| Worker Action | The D365 process that creates or changes an employment record — including hires. Visa data and checklists are attached here, and publish to the employee record when the action completes. |
| Worker Benefit Enrolment | The enrolment record an employee's airfare eligibility is derived from — specifically the row where the plan type is **AirTicket** and the status is **Selected** and **Confirmed**. It sets how many tickets they are entitled to, the class, and whether the entitlement is return or one way — for example, self + 3, economy, return. |
| Worker Region | A scoping value used alongside company to vary identification requirements by employee location. |
| Working Time Calendar | The calendar selected on the Generate attendance logs form that determines which days in a range count as working days, and so which days produce generated records. |
| Working Unit | A field on the employee visa information record identifying the unit the employee works within. |
| Workflow | The configured approval routing applied to a request type or probation review. **View History** traces each action taken and which conditions evaluated true or false. |
