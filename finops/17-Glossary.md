## Glossary

| Term | Definition |
|---|---|
| Academic Management | The primary module within Dynamics 365 F&O used to manage student-related financial processes, including fee generation, scholarships, visa management, and enrolment transactions. |
| Action Pane | The toolbar displayed at the top of any page or module in F&O. It contains contextual buttons such as Back, Save/Edit, and New, and remains consistent regardless of which page is open. |
| Advanced Discount Policy | A configuration that defines the discount rates applied when a fee payer makes an advance payment covering multiple terms. The discount rate is determined by the number of terms paid, and is triggered through the co-branded payment method in the Cashier Receipt form. |
| Advance Payment | A payment collected for future term invoices before they fall due. Processed through the Cashier Receipt form using a co-branded method of payment. The system calculates applicable discounts based on the Advanced Discount Policy and generates a prepayment invoice per term covered. |
| Batch Processing | A method of running large tasks (such as generating fee invoices) in the background, allowing the system to process high volumes of records without impacting UI performance. |
| Billing Interval | The frequency at which fees are charged to students (e.g., termly, annually). Set when creating fee schedule templates. |
| Cash Discount | A settlement discount offered to fee payers who pay their invoices before a specified due date. Also referred to as an early payment discount. |
| Cashier Receipt | A form used to process in-person payments, including standard invoice payments, pre-admission fee payments, activity invoice payments, overpayments, and post-dated cheques. Supports receipt printing and emailing on completion. |
| CE System | The Customer Engagement system that integrates with F&O. Student and visa data is typically generated in CE and synced automatically to F&O. |
| Co-branded | A payment method option in the Cashier Receipt form that enables advance discount calculation. Must be enabled before selecting the specific payment method in order to trigger the Calculate Discount button. |
| Consolidate by Item | A setting in the fee generation batch that controls whether invoices are separated by fee item or combined into a single invoice per student. |
| Consolidate Deposit Slip | A task run at the end of each business day to combine individual deposit slips into a single deposit entry by method of payment. Accessed via the Customer Payments workspace in Accounts Receivable. |
| Customer Payment Journal | A journal used to record and post payments made by fee payers, including credit card and over-the-counter transactions. Also used to process fee refunds using the Customer Refund Journal type. |
| Debt Classification | A process for categorising outstanding balances by age, risk, or recovery status. Used within Debt Follow-Up to support reporting and recovery workflows. |
| Deferral Schedule | A configuration linked to a fee invoice that spreads the recognition of revenue across a defined period. Managed under Subscription Billing ▸ Revenue and Expense Deferrals. |
| Deferral Template | A reusable configuration that defines how many months revenue from a fee item should be deferred across. Applied to fee schedule template lines to activate revenue recognition for that item. |
| Early Payment Discount | A discount applied to invoices when payment is received before the discount due date. Configured under Cash Discounts and assigned to individual fee items. |
| Effective Date / Expiration Date | Date range fields used across the system to define the period during which a record, discount, enrolment, or visa is considered active. |
| Enrolment Deposit | A refundable deposit paid by a student or fee payer at the time of enrolment. Can be settled, forfeited, or refunded within the Pre-Admission Fees module. |
| Enrolment Fee | A one-time fee charged to a student upon enrolment. Managed within the Pre-Admission Fees module. |
| Fee and Charge Interval | A configuration that defines the billing periods (e.g., Term 1, Term 2) for a given academic year. Used in the fee generation batch to determine which students and periods are targeted. |
| Fee Category | A classification assigned to fee items (e.g., sessional classes, events) used to group and organise fees within the system. |
| Fee Head | A financial dimension value used to classify the type of fee (e.g., tuition, activity) for reporting and general ledger purposes. Used in split billing, intercompany transfers, and financial check thresholds. |
| Fee Payer | The individual or entity financially responsible for a student's fees (e.g., a parent or guardian). A student may have multiple fee payers with split billing responsibilities. |
| Fee Schedule Batch | A batch record generated when fee invoices are created. Used to track, review, and post fee invoices for groups of students. |
| Fee Schedule Template | A reusable template that defines the fee items, billing intervals, conditions, and discounts to be applied when generating student invoices. |
| Financial Check Override | A toggle on a student record that, when enabled, instructs the system to bypass the financial balance check for that student during the next reenrolment poll. Requires a reason code to create an audit record. |
| Financial Check Threshold | A monetary amount configured per fee head under Fee Schedule Parameters. If a student's outstanding balance for a fee head meets or exceeds the threshold, they are blocked from reenrolment. |
| F&O (Finance and Operations) | Short for Microsoft Dynamics 365 Finance and Operations. The enterprise resource planning (ERP) platform used to manage financial and operational processes. |
| Forfeit | The process of retaining an enrolment deposit that would otherwise be refundable, typically when a student does not proceed with enrolment. |
| Free Text Invoice | A manually created invoice in Accounts Receivable not linked to a sales order. Used for ad hoc charges such as transfer certificate fees, using pre-configured templates to ensure correct general ledger coding. |
| Generate Sales Order Batch Processing | A periodic task in Academic Management used to create sales orders (fee invoices) for students based on selected fee schedule templates and customer filters. |
| Global Party ID | A unique identifier assigned to a student that is consistent across all companies in the system. Used to match student accounts during intercompany credit balance transfers when a student moves between schools. |
| Intercompany Journal | A configuration that defines the control accounts, journal names, and posting profiles used when transferring a student's credit balance between schools. Must be set up in both the originating and destination companies before any transfer can be processed. |
| Line Discount Group | A pricing group assigned to a released product (fee item) that links the item to a trade agreement discount, such as a sibling discount. |
| Main Account | The general ledger account to which a transaction or discount is posted. Configured during posting logic setup. |
| Method of Payment | The payment type selected when processing a customer payment (e.g., cash, credit card, cheque). Determines how the transaction is recorded and processed. |
| Miscellaneous Receipt | A payment entry used to record income not linked to a specific student invoice or account, such as event fees or sundry income. Processed via the Miscellaneous Receipt form in Accounts Receivable. |
| Navigation Pane | The left-hand sidebar in F&O used to access all modules and submenus. Expanded using the hamburger menu icon (☰). |
| NSF Payment | A payment reversal option used when a customer cheque is returned due to insufficient funds. Selecting NSF payment in the Reverse function triggers the reversal of the original cheque and initiates the non-sufficient funds fee entry. |
| Over-the-Counter Payment | A payment processed directly at the school's front counter, entered manually into the system by staff. Managed under Accounts Receivable ▸ Payments. |
| Overpayment | An amount entered in a Cashier Receipt that exceeds the invoice total. The excess is recorded in the Overpayment field and can be reviewed before posting. If posted, the excess is retained as an advance on the fee payer's account. |
| Payment Plan | An arrangement that divides an invoice into multiple instalments. Applied to a fee payer's account and linked to a payment schedule. |
| Payment Schedule | A configuration that defines how an invoice is split into instalments, including the number of payments, frequency, and allocation method. |
| Period Name | A label applied to fee schedule lines that identifies the term a line belongs to (e.g., Term 1, Term 2). Used as a filter when running the Post Sale Order Invoice batch to control which term's invoices are posted. |
| Post | The action of finalising and committing a transaction to the general ledger. Once posted, a record is no longer in draft or created status. |
| Post-Dated Cheque | A cheque entered into the system with a future maturity date. Processed via the Check details option in the Cashier Receipt form. The payment does not clear until the maturity date is reached. |
| Pre-Admission Fees | Fees charged to students prior to formal enrolment, including application fees, enrolment fees, and enrolment deposits. |
| Pre-Admission Posting | The configuration that defines how each pre-admission transaction type (e.g., application fee) is recorded against the correct ledger accounts. |
| Pre-Admission Types | Categories of pre-admission transactions defined in the system, such as Application Fee, Enrolment Fee, and Enrolment Deposit. |
| Prepayment Invoice | An invoice generated when an advance payment is posted. One prepayment invoice is created per term covered by the advance payment amount. |
| Pro Rata Adjustment | A proportional fee calculation applied to students who start after the official term start date (new students) or leave before the term end date (exiting students). Based on actual study days. |
| Proforma Sales Order | A preliminary sales order generated before formal invoicing, used to communicate upcoming fee charges to fee payers in advance of the official invoice. |
| Recognition Processing | A periodic batch task run at month end to post deferred revenue to the general ledger for the period being closed. Accessed via Subscription Billing ▸ Revenue and Expense Deferrals ▸ Periodic tasks. |
| Released Products | Items configured in the Product Information Management module, representing fee types (e.g., tuition, music lesson) that can be assigned to fee schedules and linked to discounts. |
| Revenue Recognition | The process of recording deferred income as earned revenue in the correct financial period, in line with deferral schedule configurations. |
| Scholarship / Discount | A financial reduction applied to a student's fees. Requires setup, linking to fee items and students, and an approval process before taking effect. |
| Sessional Class / Event | A fee-generating activity (e.g., excursion, music lesson) that students are enrolled in. Invoiced based on session numbers attended. |
| Session Based | A setting on a fee schedule template that enables invoicing based on the number of sessions a student attends, rather than a flat fee. |
| Sibling Discount | A discount applied to tuition fees based on a student's position within a family (e.g., second child receives a 10% discount). Configured via sibling order setup and trade agreements. |
| Sibling Order | A numbered ranking assigned to each student within a family (e.g., 1 = eldest, 2 = second child) used to determine discount eligibility. |
| Split Billing | A billing arrangement where a student's fees are divided between two or more fee payers. Default percentages are set at the student level and can be overridden per fee item. |
| Student Master | The central record in Academic Management that holds a student's enrolment details, academic year, sibling order, visa information, and fee payer relationships. Accurate student master data is a prerequisite for correct fee generation. |
| Trade Agreement | A pricing policy in Sales and Marketing that defines discount percentages applied to specific product groups (e.g., sibling discounts on tuition fees). |
| Transfer Certificate | A document issued when a student withdraws from a school. A corresponding fee invoice is raised in F&O using the TCINV free text invoice template. |
| Visa Management | The section of Academic Management used to create and manage student visa types and view visa details on individual student records. |
