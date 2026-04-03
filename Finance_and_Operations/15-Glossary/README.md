## Glossary

| Term | Definition |
|---|---|
| Academic Management | The primary module within Dynamics 365 F&O used to manage student-related financial processes, including fee generation, scholarships, visa management, and enrolment transactions. |
| Action Pane | The toolbar displayed at the top of any page or module in F&O. It contains contextual buttons such as Back, Save/Edit, and New, and remains consistent regardless of which page is open. |
| Batch Processing | A method of running large tasks (such as generating fee invoices) in the background, allowing the system to process high volumes of records without impacting UI performance. |
| Billing Interval | The frequency at which fees are charged to students (e.g., termly, annually). Set when creating fee schedule templates. |
| Cash Discount | A settlement discount offered to fee payers who pay their invoices before a specified due date. Also referred to as an early payment discount. |
| CE System | The Customer Engagement system that integrates with F&O. Student and visa data is typically generated in CE and synced automatically to F&O. |
| Consolidate by Item | A setting in the fee generation batch that controls whether invoices are separated by fee item or combined into a single invoice per student. |
| Customer Payment Journal | A journal used to record and post payments made by fee payers, including credit card and over-the-counter transactions. |
| Early Payment Discount | A discount applied to invoices when payment is received before the discount due date. Configured under Cash Discounts and assigned to individual fee items. |
| Effective Date / Expiration Date | Date range fields used across the system to define the period during which a record, discount, enrolment, or visa is considered active. |
| Enrolment Deposit | A refundable deposit paid by a student or fee payer at the time of enrolment. Can be settled, forfeited, or refunded within the Pre-Admission Fees module. |
| Enrolment Fee | A one-time fee charged to a student upon enrolment. Managed within the Pre-Admission Fees module. |
| Fee Category | A classification assigned to fee items (e.g., sessional classes, events) used to group and organise fees within the system. |
| Fee Payer | The individual or entity financially responsible for a student's fees (e.g., a parent or guardian). A student may have multiple fee payers with split billing responsibilities. |
| Fee Schedule Batch | A batch record generated when fee invoices are created. Used to track, review, and post fee invoices for groups of students. |
| Fee Schedule Template | A reusable template that defines the fee items, billing intervals, conditions, and discounts to be applied when generating student invoices. |
| F&O (Finance and Operations) | Short for Microsoft Dynamics 365 Finance and Operations. The enterprise resource planning (ERP) platform used to manage financial and operational processes. |
| Forfeit | The process of retaining an enrolment deposit that would otherwise be refundable, typically when a student does not proceed with enrolment. |
| Generate Sales Order Batch Processing | A periodic task in Academic Management used to create sales orders (fee invoices) for students based on selected fee schedule templates and customer filters. |
| Line Discount Group | A pricing group assigned to a released product (fee item) that links the item to a trade agreement discount, such as a sibling discount. |
| Main Account | The general ledger account to which a transaction or discount is posted. Configured during posting logic setup. |
| Method of Payment | The payment type selected when processing a customer payment (e.g., cash, credit card). Determines how the transaction is recorded and processed. |
| Navigation Pane | The left-hand sidebar in F&O used to access all modules and submenus. Expanded using the hamburger menu icon (☰). |
| Over-the-Counter Payment | A payment processed directly at the school's front counter, entered manually into the system by staff. Managed under Accounts Receivable > Payments. |
| Payment Plan | An arrangement that divides an invoice into multiple instalments. Applied to a fee payer's account and linked to a payment schedule. |
| Payment Schedule | A configuration that defines how an invoice is split into instalments, including the number of payments, frequency, and allocation method. |
| Post | The action of finalising and committing a transaction to the general ledger. Once posted, a record is no longer in draft or created status. |
| Pre-Admission Fees | Fees charged to students prior to formal enrolment, including application fees, enrolment fees, and enrolment deposits. |
| Pre-Admission Posting | The configuration that defines how each pre-admission transaction type (e.g., application fee) is recorded against the correct ledger accounts. |
| Pre-Admission Types | Categories of pre-admission transactions defined in the system, such as Application Fee, Enrolment Fee, and Enrolment Deposit. |
| Pro Rata Adjustment | A proportional fee calculation applied to students who start after the official term start date (new students) or leave before the term end date (exiting students). Based on actual study days. |
| Released Products | Items configured in the Product Information Management module, representing fee types (e.g., tuition, music lesson) that can be assigned to fee schedules and linked to discounts. |
| Scholarship / Discount | A financial reduction applied to a student's fees. Requires setup, linking to fee items and students, and an approval process before taking effect. |
| Sessional Class / Event | A fee-generating activity (e.g., excursion, music lesson) that students are enrolled in. Invoiced based on session numbers attended. |
| Session Based | A setting on a fee schedule template that enables invoicing based on the number of sessions a student attends, rather than a flat fee. |
| Sibling Discount | A discount applied to tuition fees based on a student's position within a family (e.g., second child receives a 10% discount). Configured via sibling order setup and trade agreements. |
| Sibling Order | A numbered ranking assigned to each student within a family (e.g., 1 = eldest, 2 = second child) used to determine discount eligibility. |
| Split Billing | A billing arrangement where a student's fees are divided between two or more fee payers. Default percentages are set at the student level and can be overridden per fee item. |
| Trade Agreement | A pricing policy in Sales and Marketing that defines discount percentages applied to specific product groups (e.g., sibling discounts on tuition fees). |
| Visa Management | The section of Academic Management used to create and manage student visa types and view visa details on individual student records. |
