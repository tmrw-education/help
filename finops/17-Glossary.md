# Glossary

Terms used across Dynamics 365 Finance & Operations and this guide.

[A](#a) · [B](#b) · [C](#c) · [D](#d) · [E](#e) · [F](#f) · [G](#g) · [I](#i) · [L](#l) · [M](#m) · [N](#n) · [O](#o) · [P](#p) · [R](#r) · [S](#s) · [T](#t) · [V](#v) · [W](#w)

## A

| Term | Definition |
|---|---|
| Academic Attributes | A flag on a trade agreement journal that enables academic-specific pricing. When selected, trade agreement lines can be set by academic year, curriculum, and stream — differentiating academic fee pricing from standard item pricing. |
| Academic Enrolment | A record in Academic Management that holds a student's active enrolment details, including academic year, effective date, expiration date, and fee and charge interval. Used as the primary filter for fee generation batches. |
| Academic Management | The primary module within Dynamics 365 F&O used to manage student-related financial processes, including fee generation, scholarships, visa management, and enrolment transactions. |
| Academic Year | A configuration record in Academic Management that defines a grade level (e.g., KG1, Grade 1). Each record is assigned a sequence number and linked to a fee master list and tuition fee items used in deposit calculations. |
| Action Pane | The toolbar displayed at the top of any page or module in F&O. It contains contextual buttons such as Back, Save/Edit, and New, and remains consistent regardless of which page is open. |
| Advance Payment | A payment collected for future term invoices before they fall due. Processed through the Cashier Receipt form using a co-branded method of payment. The system calculates applicable discounts based on the Advanced Discount Policy and generates a prepayment invoice per term covered. |
| Advance Tax Invoice | A tax invoice generated against a fee payer's open proforma invoice before full payment is received. Used when a family requests a formal invoice ahead of settlement, for example for employer reimbursement or government funding purposes. |
| Advanced Discount Policy | A configuration that defines the discount rates applied when a fee payer makes an advance payment covering multiple terms. The discount rate is determined by the number of terms paid, and is triggered through the co-branded payment method in the Cashier Receipt form. |
| Application Fee | A pre-admission fee charged when a student submits an enrolment application. Configured as a pre-admission type and typically processed as a general journal or sales order depending on whether a student record exists at the time of payment. |
| Auto Charges | A table in Accounts Receivable used to configure charges (such as staff concessions) that are automatically applied to sales order lines when fees are generated. Charge codes are set up at line level and linked to concession types. |

## B

| Term | Definition |
|---|---|
| Batch Processing | A method of running large tasks (such as generating fee invoices) in the background, allowing the system to process high volumes of records without impacting UI performance. |
| Billing Interval | The frequency at which fees are charged to students (e.g., termly, annually). Set when creating fee schedule templates. |
| Book Fee | A fee item charged for school books or materials. Configured as a released product and included in a dedicated fee schedule template. Priced via a standard trade agreement that does not require academic attributes. |

## C

| Term | Definition |
|---|---|
| Cash Discount | A settlement discount offered to fee payers who pay their invoices before a specified due date. Also referred to as an early payment discount. |
| Cashier Receipt | A form used to process in-person payments, including standard invoice payments, pre-admission fee payments, activity invoice payments, overpayments, and post-dated cheques. Supports receipt printing and emailing on completion. |
| CE System | The Customer Engagement system that integrates with F&O. Student and visa data is typically generated in CE and synced automatically to F&O. |
| Charge Code | A configuration in the auto charges table that defines the posting and financial settings for a specific type of concession or charge. One charge code is created per concession type and linked to the corresponding discount code in the scholarship and discount setup. |
| Co-branded | A payment method option in the Cashier Receipt form that enables advance discount calculation. Must be enabled before selecting the specific payment method in order to trigger the Calculate Discount button. |
| Collection Letter | A system-generated communication sent to fee payers with overdue balances. Letters are generated in a configured sequence (e.g., First Reminder, Second Reminder, Suspension Letter), with each letter triggered a set number of days after the invoice due date. |
| Collections Coordinator | A workspace in F&O used to manage and record debtor interactions, including viewing aged balances, logging activity notes, and sending customer statement emails outside the collection letter sequence. |
| Condition | A filter applied to a fee schedule template line that restricts the fee item to students who meet specific criteria (e.g., a particular academic year or curriculum). Items without a condition apply to all students. |
| Consolidate by Item | A setting in the fee generation batch that controls whether invoices are separated by fee item or combined into a single invoice per student. |
| Consolidate Deposit Slip | A task run at the end of each business day to combine individual deposit slips into a single deposit entry by method of payment. Accessed via the Customer Payments workspace in Accounts Receivable. |
| Curriculum | A classification code assigned to students and fee items that identifies the type of educational programme (e.g., British, IB). Used as an academic attribute in trade agreement pricing and in financial dimension reporting. Must match the code used in the student management system. |
| Customer Integration Mapping | A configuration in Academic Management that maps record types from the CE integration to their corresponding customer types (Student or Fee Payer) and customer groups in D365 F&O. Controls how imported records are classified upon creation. |
| Customer Payment Journal | A journal used to record and post payments made by fee payers, including credit card and over-the-counter transactions. Also used to process fee refunds using the Customer Refund Journal type. |

## D

| Term | Definition |
|---|---|
| Debt Classification | A process for categorising outstanding balances by age, risk, or recovery status. Used within Debt Follow-Up to support reporting and recovery workflows. |
| Debtor Note | A record of an interaction with a fee payer — such as a phone call or promise to pay — logged against the customer's account in the Collections Coordinator workspace. Includes the event category, type, purpose, notes, and a date and time that can be set to a future date for scheduled follow-ups. |
| Deferral Date | The date set on a sessional class or event record that determines when revenue is recognised. Once the event occurs, revenue is automatically transferred from the deferral account to the main revenue account. |
| Deferral Schedule | A configuration linked to a fee invoice that spreads the recognition of revenue across a defined period. Managed under Subscription Billing ▸ Revenue and Expense Deferrals. |
| Deferral Template | A reusable configuration that defines how many months revenue from a fee item should be deferred across. Applied to fee schedule template lines to activate revenue recognition for that item. |
| Deposit Policy | A configuration that defines how enrolment deposits are calculated — either as a fixed amount or as a percentage of the linked tuition fee. Configured per pre-admission type and used by the system to determine the deposit amount during the enrolment process. |
| Deposit Slip | A record generated each time a payment is posted. Individual deposit slips are created throughout the day and consolidated into a single deposit at end of day via the Consolidate Deposit Slip task. |
| Destination School | A field on the student record populated by the CE system when a student is transferring to another school. The system uses this field to identify the company to which a credit balance transfer should be directed. |

## E

| Term | Definition |
|---|---|
| Early Payment Discount | A discount applied to invoices when payment is received before the discount due date. Configured under Cash Discounts and assigned to individual fee items. |
| Effective Date / Expiration Date | Date range fields used across the system to define the period during which a record, discount, enrolment, or visa is considered active. |
| Enrolment Deposit | A refundable deposit paid by a student or fee payer at the time of enrolment. Can be settled, forfeited, or refunded within the Pre-Admission Fees module. |
| Enrolment Fee | A one-time fee charged to a student upon enrolment. Managed within the Pre-Admission Fees module. |
| Event Code | A unique identifier assigned to a sessional class or event in Academic Management. Used as a condition on fee schedule template lines to ensure invoicing applies only to students enrolled in a specific class or event. |

## F

| Term | Definition |
|---|---|
| F&O (Finance and Operations) | Short for Microsoft Dynamics 365 Finance and Operations. The enterprise resource planning (ERP) platform used to manage financial and operational processes. |
| Fee and Charge Interval | A configuration that defines the billing periods (e.g., Term 1, Term 2) for a given academic year. Used in the fee generation batch to determine which students and periods are targeted. |
| Fee Category | A classification assigned to fee items (e.g., sessional classes, events) used to group and organise fees within the system. |
| Fee Generation Reconciliation Report | A report available within a fee schedule batch that summarises how many fee payer accounts and students were included in the batch run. Used to validate that the batch captured the expected student cohort before or after posting. |
| Fee Head | A financial dimension value used to classify the type of fee (e.g., tuition, activity) for reporting and general ledger purposes. Used in split billing, intercompany transfers, and financial check thresholds. |
| Fee Master List Template | A configuration in Academic Management that defines which fee items are synced from D365 F&O to the CE system for inclusion in student offer letters. Each template is linked to one or more academic year records. |
| Fee Payer | The individual or entity financially responsible for a student's fees (e.g., a parent or guardian). A student may have multiple fee payers with split billing responsibilities. |
| Fee Schedule Batch | A batch record generated when fee invoices are created. Used to track, review, and post fee invoices for groups of students. |
| Fee Schedule Template | A reusable template that defines the fee items, billing intervals, conditions, and discounts to be applied when generating student invoices. |
| Fee Type | A configuration used for miscellaneous receipts that defines the default general ledger account and tax postings for a given type of income (e.g., transport fee, security deposit). When selected in the Cashier Receipt form, the system automatically populates the account, description, and sales tax group. |
| Financial Check Override | A toggle on a student record that, when enabled, instructs the system to bypass the financial balance check for that student during the next reenrolment poll. Requires a reason code to create an audit record. |
| Financial Check Threshold | A monetary amount configured per fee head under Fee Schedule Parameters. If a student's outstanding balance for a fee head meets or exceeds the threshold, they are blocked from reenrolment. |
| Forfeit | The process of retaining an enrolment deposit that would otherwise be refundable, typically when a student does not proceed with enrolment. |
| Free Text Invoice | A manually created invoice in Accounts Receivable not linked to a sales order. Used for ad hoc charges such as transfer certificate fees, using pre-configured templates to ensure correct general ledger coding. |

## G

| Term | Definition |
|---|---|
| GEMS Reward Points | A loyalty programme managed by a separate legal entity (GRL). Payments received at a school that include reward point entitlements must be transferred to the GEMS Rewards company at end of day using the Transfer GEMS Reward Balances periodic task. |
| Gender Setup | A configuration table in Academic Management used to define and store the gender values used across student records. Values must be consistent with those used in the student management system. |
| Generate Sales Order Batch Processing | A periodic task in Academic Management used to create sales orders (fee invoices) for students based on selected fee schedule templates and customer filters. |
| Global Party ID | A unique identifier assigned to a student that is consistent across all companies in the system. Used to match student accounts during intercompany credit balance transfers when a student moves between schools. |

## I

| Term | Definition |
|---|---|
| Intercompany Journal | A configuration that defines the control accounts, journal names, and posting profiles used when transferring a student's credit balance between schools. Must be set up in both the originating and destination companies before any transfer can be processed. |

## L

| Term | Definition |
|---|---|
| Last Day Attended (LDA) | A leaving date option in Fee Schedule Parameters that instructs the system to use the student's last attended date — rather than the expiration date — when calculating pro rata adjustments for exiting students. |
| Line Discount Group | A pricing group assigned to a released product (fee item) that links the item to a trade agreement discount, such as a sibling discount. |

## M

| Term | Definition |
|---|---|
| Main Account | The general ledger account to which a transaction or discount is posted. Configured during posting logic setup. |
| Method of Payment | The payment type selected when processing a customer payment (e.g., cash, credit card, cheque). Determines how the transaction is recorded and processed. |
| Miscellaneous Receipt | A payment entry used to record income not linked to a specific student invoice or account, such as event fees or sundry income. Processed via the Miscellaneous Receipt form in Accounts Receivable. |

## N

| Term | Definition |
|---|---|
| Navigation Pane | The left-hand sidebar in F&O used to access all modules and submenus. Expanded using the hamburger menu icon (☰). |
| NSF Payment | A payment reversal option used when a customer cheque is returned due to insufficient funds. Selecting NSF payment in the Reverse function triggers the reversal of the original cheque and initiates the non-sufficient funds fee entry. |

## O

| Term | Definition |
|---|---|
| Over-the-Counter Payment | A payment processed directly at the school's front counter, entered manually into the system by staff. Managed under Accounts Receivable ▸ Payments. |
| Overpayment | An amount entered in a Cashier Receipt that exceeds the invoice total. The excess is recorded in the Overpayment field and can be reviewed before posting. If posted, the excess is retained as an advance on the fee payer's account. |

## P

| Term | Definition |
|---|---|
| Party ID | See Global Party ID. |
| Pay at Any School | A cashier receipt process that allows staff to receive and record a fee payment on behalf of any school within the group, regardless of which school the student is enrolled at. Transactions are flagged with a Pay at Any School indicator for intercompany audit purposes. |
| Payment Option Setup | A configuration in Academic Management that links a payment schedule to a named payment option with a description and active date range. Controls which payment plans are available to parents on the customer statement and in PXP. |
| Payment Plan | An arrangement that divides an invoice into multiple instalments. Applied to a fee payer's account and linked to a payment schedule. |
| Payment Schedule | A configuration that defines how an invoice is split into instalments, including the number of payments, frequency, and allocation method. |
| Period Name | A label applied to fee schedule lines that identifies the term a line belongs to (e.g., Term 1, Term 2). Used as a filter when running the Post Sale Order Invoice batch to control which term's invoices are posted. |
| Post | The action of finalising and committing a transaction to the general ledger. Once posted, a record is no longer in draft or created status. |
| Post-Dated Cheque | A cheque entered into the system with a future maturity date. Processed via the Check details option in the Cashier Receipt form. The payment does not clear until the maturity date is reached. |
| Posting Profile | A configuration that maps a transaction type (e.g., enrolment deposit) to the correct general ledger accounts. Used in pre-admission posting setup and intercompany journal configuration to ensure transactions are recorded to the right accounts. |
| Pre-Admission Fees | Fees charged to students prior to formal enrolment, including application fees, enrolment fees, and enrolment deposits. |
| Pre-Admission Posting | The configuration that defines how each pre-admission transaction type (e.g., application fee) is recorded against the correct ledger accounts. |
| Pre-Admission Types | Categories of pre-admission transactions defined in the system, such as Application Fee, Enrolment Fee, and Enrolment Deposit. |
| Prepayment Invoice | An invoice generated when an advance payment is posted. One prepayment invoice is created per term covered by the advance payment amount. |
| Print Management | A system configuration that defines how and where documents (such as proforma invoices or statements) are distributed. When enabled during sales order confirmation, the system automatically sends the document to the configured destination (e.g., email) without requiring manual distribution. |
| Pro Rata Adjustment | A proportional fee calculation applied to students who start after the official term start date (new students) or leave before the term end date (exiting students). Based on actual study days. |
| Proforma Sales Order | A preliminary sales order generated before formal invoicing, used to communicate upcoming fee charges to fee payers in advance of the official invoice. |
| PXP (Parent Experience) | The parent-facing portal within the tmrw platform. Used by fee payers to view statements, manage payment plans, and complete online registrations and payments. Directly connected to the F&O data layer. |

## R

| Term | Definition |
|---|---|
| Reason Code | A mandatory field required when applying a financial check override or reversing a payment. Creates an audit record that explains why the action was taken. |
| Receipt Intercompany Mapping | A configuration that links a method of payment to a destination school and intercompany journal. Used when cashier receipts involve funds that need to be transferred to another legal entity, such as GEMS Reward Points. |
| Recognition Processing | A periodic batch task run at month end to post deferred revenue to the general ledger for the period being closed. Accessed via Subscription Billing ▸ Revenue and Expense Deferrals ▸ Periodic tasks. |
| Released Products | Items configured in the Product Information Management module, representing fee types (e.g., tuition, music lesson) that can be assigned to fee schedules and linked to discounts. |
| Revenue Recognition | The process of recording deferred income as earned revenue in the correct financial period, in line with deferral schedule configurations. |

## S

| Term | Definition |
|---|---|
| Sales Category | A classification assigned to a pre-admission posting record that determines how the transaction is categorised in the general ledger. Each pre-admission type must have a unique sales category to ensure correct posting. |
| Scholarship / Discount | A financial reduction applied to a student's fees. Requires setup, linking to fee items and students, and an approval process before taking effect. |
| Session Based | A setting on a fee schedule template that enables invoicing based on the number of sessions a student attends, rather than a flat fee. |
| Sessional Class / Event | A fee-generating activity (e.g., excursion, music lesson) that students are enrolled in. Invoiced based on session numbers attended. |
| Sibling Discount | A discount applied to tuition fees based on a student's position within a family (e.g., second child receives a 10% discount). Configured via sibling order setup and trade agreements. |
| Sibling Discount Policy | A school-specific configuration that maps sibling order positions to student types (new student, existing family, existing student) and links each combination to a line discount group and trade agreement. Used by the system to determine which discount applies when fees are generated. |
| Sibling Order | A numbered ranking assigned to each student within a family (e.g., 1 = eldest, 2 = second child) used to determine discount eligibility. |
| Split Billing | A billing arrangement where a student's fees are divided between two or more fee payers. Default percentages are set at the student level and can be overridden per fee item. |
| Staff Concession | A fee reduction applied to students who are dependants of staff members. Managed through the Staff Tuition Fee Concession table (for staff-related reductions) or the Scholarship and Discount table (for other concession types). Requires a charge code and discount code to be configured before use. |
| Stream | A sub-classification within a curriculum used to distinguish different academic programmes within the same school (e.g., Advanced, Standard). Used as an academic attribute in trade agreement pricing. Must match the stream codes used in the student management system. |
| Student Ledger | A consolidated financial report for an individual student, showing invoices, payments, advance invoices, and prepayments over a specified date range. Can be filtered to suppress advance and prepayment invoice detail for a simplified view. |
| Student Management System | The upstream system of record for academic lifecycle data, including enrolment dates, student status, and grade progression. D365 F&O receives enrolment and student data from this system via integration and does not manage these records directly. |
| Student Master | The central record in Academic Management that holds a student's enrolment details, academic year, sibling order, visa information, and fee payer relationships. Accurate student master data is a prerequisite for correct fee generation. |
| Subscription Billing | The D365 module used to manage revenue and expense deferrals. Contains the Deferral Schedules list and Recognition Processing periodic task used during month-end revenue recognition. |

## T

| Term | Definition |
|---|---|
| Trade Agreement | A pricing policy in Sales and Marketing that defines discount percentages applied to specific product groups (e.g., sibling discounts on tuition fees). |
| Transfer Certificate | A document issued when a student withdraws from a school. A corresponding fee invoice is raised in F&O using the TCINV free text invoice template. |

## V

| Term | Definition |
|---|---|
| Visa Management | The section of Academic Management used to create and manage student visa types and view visa details on individual student records. |

## W

| Term | Definition |
|---|---|
| Write-off | The process of removing an unrecoverable debt from accounts receivable. Processed through the Customer Credit and Collections workspace using a write-off journal, which is submitted for approval via workflow before posting to the general ledger. |
