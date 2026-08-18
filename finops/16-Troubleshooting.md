# Troubleshooting

Common problems in Dynamics 365 Finance & Operations and how to resolve them. Use the contents list on the right to jump to a section, or press **Ctrl+F** to search this page.

## Navigating the F&O Platform

### The navigation pane is not visible or has disappeared

**Cause** — The navigation pane may have been collapsed using the hamburger menu icon.

**Fix** — Click the hamburger menu icon (☰) at the top left of the screen to expand the navigation pane.

### A module or page cannot be found in the navigation pane

**Cause** — The user may not have the correct security role or permissions to access that module, or the module may be in a different location than expected.

**Fix** — Use the search bar at the top of the page to search for the module or form by name. If it does not appear, contact your system administrator to confirm access permissions.

### The Home icon does not return the user to the correct dashboard

**Cause** — The default dashboard may not have been configured for the user's role.

**Fix** — Click the Home icon at the top of the navigation pane. If the wrong dashboard loads, contact your system administrator to update the default dashboard for your role.

---

## Setup

### A sibling discount is not applying to a student's invoice

**Cause** — The sibling order number may not be assigned to the student record, the trade agreement may not have been posted, or the line discount group has not been linked to the tuition fee item.

**Fix** — Confirm the student's sibling order number is set under General in their student record. Verify the trade agreement has been posted and that the Line discount group on the relevant released products is set to the Sibling discount trade agreement.

### The wrong discount percentage is applying to a sibling

**Cause** — The sibling order number assigned to the student does not match the correct discount group in the trade agreement.

**Fix** — Review the student's sibling order number and compare it against the Customer price/discount groups setup under **Sales and marketing** ▸ **Prices and discounts**. Correct any mismatches and rerun the sales order batch.

### A sibling discount is applying to a student who should not be receiving one

**Cause** — The student may have been assigned a sibling order number of 2 or higher when they should have been assigned 0 (not current) or 1 (eldest/only child).

**Fix** — Navigate to the student's record, open the General section, and check the Sibling field. Update the sibling order number to the correct value. If the student has no siblings currently enrolled, set the value to 1 or 0 per your school's configuration.

### The payment schedule isn't appearing in the Payment plan dropdown

**Cause** — The payment schedule may not have been linked to a payment option under Academic Management ▸ Setup ▸ Payment option setup.

**Fix** — Navigate to **Setup** ▸ **Payment option setup**, confirm the payment plan has been created and linked to the correct payment schedule, and ensure the start and end dates are valid.

### The financial check threshold is not blocking students as expected during reenrolment

**Cause** — The threshold limit may not have been configured for the relevant fee head, or the dimension value assigned to the threshold does not match the fee head on the student's outstanding invoices.

**Fix** — Navigate to **Academic Management** ▸ **Setup** ▸ **Fee schedule parameters** and review the thresholds configured under the Financial dimension section. Confirm the Dimension value for each threshold matches the fee head on the student's outstanding transactions.

---

## Debtor Management

### Student details are incorrect when generating fees

**Cause** — The student's record has not been updated prior to fee generation.

**Fix** — Navigate to **Modules** ▸ **Academic Management** ▸ **Students** ▸ **All students**, open the student record, and update the academic year, effective date, and expiration date before running the fee generation batch.

### The student's academic year is still showing the previous year

**Cause** — The student's Current academic year field has not been updated after promotion or reenrolment.

**Fix** — Open the student record in **Modules** ▸ **Academic Management** ▸ **Students** ▸ **All students**, confirm the Current academic year under Enrolment details, and update it if required before running fee generation.

### A student's Paid percentage total in the Relationships section does not equal 100

**Cause** — Split billing percentages have not been assigned or were entered incorrectly across the fee payers linked to the student.

**Fix** — Navigate to the student record and scroll to the Relationships section. Adjust the paid percentages for each listed fee payer so the combined total equals 100.00 before running any fee generation batch.

---

## Billing

### Fee invoices are not being generated for some students

**Cause** — The student may not be included in the customer filter, or the fee schedule template may not have been selected in the batch.

**Fix** — When running the Generate Sales Order Batch Processing task, confirm that the correct customer academic year is selected under Records to include (Customers) and the correct fee schedule template is selected under Records to include (Fee schedule templates).

### Invoices are created but not posted

**Cause** — The Create sale orders posting option was selected instead of Post invoice automatically, requiring a manual posting step.

**Fix** — Navigate to **Accounts receivable** ▸ **Sales orders** ▸ **All sales orders** and manually post the invoices from there.

### The fee generation reconciliation report shows fewer students than expected

**Cause** — Some students may have been excluded by the customer filter, or their records may not meet the conditions set in the fee schedule template.

**Fix** — Review the customer filter applied during batch processing and confirm all students are assigned to the correct academic year and meet any template conditions.

### Invoices are being generated for the wrong students or academic year

**Cause** — The Fee and charge interval selected in the batch does not match the intervals configured on the relevant students' academic enrolment records.

**Fix** — Confirm the Fee and charge interval in the Generate Sales Order Batch Processing task matches the interval configured on each student's academic enrolment record. Only students with a matching interval will be picked up by the batch.

### Term 2 or Term 3 invoices are not posting separately from Term 1

**Cause** — The Post Sale Order Invoice batch may not have been filtered by period name, causing all terms to post together or not at all.

**Fix** — When running the Post Sale Order Invoice batch, set the Period name filter to the specific term being posted (e.g., Term 1, Term 2). Each term must be run as a separate batch job.

### A new fee schedule template is not applying conditions correctly to a student cohort

**Cause** — The condition on the fee schedule template line may be referencing the wrong field or criteria value, or the condition may not have been enabled.

**Fix** — Open the fee schedule template, select the relevant line, and click Condition in the toolbar. Confirm the field and criteria value are correct. If the item should apply to all students, ensure Condition is not enabled.

### The split billing percentages are not applying correctly to a student's invoice

**Cause** — The split percent by fee items configuration may have been set up after the sales orders were already generated, meaning existing invoices are unaffected.

**Fix** — Set up the split configuration before running the sales order generation. For existing invoices, delete the sales order and rerun the Generate Sales Order Batch Processing task after the split configuration is in place.

### The total paid percentage for fee payers does not equal 100

**Cause** — The split percentages assigned to each fee payer in the student's Relationships section have not been configured correctly.

**Fix** — Navigate to the student record, scroll to the Relationships section, and adjust the paid percentages so that the total equals 100.00 before generating invoices.

### A new student is being charged the full term fee instead of a pro rata amount

**Cause** — The Pro rata field on the tuition fee item has not been enabled, or the student's effective date has not been updated to reflect their actual start date.

**Fix** — Confirm the Pro rata field on the released product is set to any option except None. Then navigate to the student's academic enrolment record and update the Effective date to the student's actual start date before rerunning the fee generation batch.

### An exiting student's refund amount appears incorrect

**Cause** — The student's last day at school may have been entered incorrectly when running the Calculate fee and charge adjustment task.

**Fix** — Review the sales order adjustment and confirm the Quantity column shows a negative value reflecting the correct number of remaining school days. If incorrect, rerun the Calculate fee and charge adjustment task with the correct leaving date.

### The fee payer hasn't received the proforma invoice

**Cause** — The Use print management destination option may not have been enabled when confirming the sales order, or the fee payer's email address is not on file.

**Fix** — Navigate to the sales order, click Sell in the Action Pane, then select Sales order confirmation under Journals. Open the latest confirmation, click Preview/Print, and select Use print management. Confirm the fee payer has a valid email address on their account before resending.

### A fee price needs updating on an already-generated proforma invoice

**Cause** — A price change was made to the trade agreement after the sales order was generated, so existing open orders still reflect the old price.

**Fix** — Navigate to **Academic Management** ▸ **Periodic tasks** ▸ **Recalculate Open Sales Order**. Filter for the relevant student or sales order, enable Recalculate sales price, and click OK. Refresh the sales order to confirm future term lines show the updated price.

---

## Pre-Admission Fees

### The Pre-Admission Types page is not visible in the menu

**Cause** — The Setup menu under Academic Management may not be fully expanded, or the user does not have the correct permissions.

**Fix** — Expand **Modules** ▸ **Academic Management** ▸ **Setup** ▸ **Pre-admission fees** and click **Pre-admission types**. If the option is still not visible, contact your system administrator.

### A pre-admission fee record cannot be posted

**Cause** — Required fields in the record may be incomplete, or the posting logic for that transaction type has not been configured.

**Fix** — Ensure all required columns in the record are filled in. Verify that posting logic has been set up for the relevant transaction type under **Setup** ▸ **Pre-admission fees** ▸ **Pre-admission posting**.

### The status of a pre-admission fee does not update after posting

**Cause** — The posting process may not have completed successfully, or a required field such as bank account was not selected.

**Fix** — Review the record for any error messages. Re-attempt the post after confirming all required fields are complete. Check that the correct bank account has been assigned.

### A deposit cannot be forfeited or refunded

**Cause** — Only deposits with a status of Received or Partial are eligible for forfeiture or refund. Deposits in any other status cannot be processed.

**Fix** — Filter the Pre-admission deposits list by status and confirm the deposit shows as Received or Partial before attempting to forfeit or refund.

### The Reverse option is not available for a pre-admission fee

**Cause** — The fee may not have a status of Posted, or the user may not have the correct permissions to perform reversals.

**Fix** — Filter the All pre-admission fees list by Status = Posted to confirm the record is eligible for reversal. Contact your system administrator if the Cancel button remains unavailable.

### A registration fee receipt can't be processed — the sales order doesn't exist

**Cause** — The student record may not have been progressed to Registered status in the student management system before the manual post was attempted, so the sales order was never created.

**Fix** — Confirm the student management system shows the student as Registered. Then navigate to **Academic Management** ▸ **Inquiries and reports** ▸ **Pre-admission fees** ▸ **All pre-admission fees**, locate the application fee record, and click Post with Preview set to Yes. Once posted, the sales order will be available for cashier receipting.

---

## Concession Management

### A new scholarship or discount cannot be saved

**Cause** — Required columns such as Code or Name may be incomplete, or the approval group has not been assigned.

**Fix** — Ensure all required columns are completed, including Code, Name, Active, Approval, and User group, before clicking Save.

### The scholarship or discount is not visible on the student's invoice

**Cause** — The discount may still be in Draft or Under Review status and has not been fully approved.

**Fix** — Navigate to the scholarship or discount record, open the Students tab, and confirm the approval status. Select Approve from the Approval dropdown if the record is Under Review.

### The Approve option is not available in the Approval dropdown

**Cause** — The logged-in user may not be a member of the approval group assigned to the scholarship or discount.

**Fix** — Contact your system administrator to confirm the correct user group is assigned and that your account has been added as an approver.

### A scholarship or discount is not applying to a student's invoice after approval

**Cause** — The scholarship or discount may not have been linked to the correct fee items, or the student's record may not have been linked with valid effective and expiration dates.

**Fix** — Confirm the scholarship or discount is linked to the correct fee items under the General tab and that the student has been added under the Students tab with valid effective and expiration dates.

### Published rows in the Excel add-in import are highlighted in red and not saving

**Cause** — One or more fields in the row contain invalid or missing data that failed the system's validation on publish.

**Fix** — Review the highlighted rows and correct any flagged fields. Common causes include missing required fields, incorrect date formats, or student account numbers that do not exist in the system. Click Publish again after correcting the data.

### The Excel add-in is not connecting to the GEMS environment after downloading the template

**Cause** — The add-in may not have completed sign-in, or the connection to the environment has timed out.

**Fix** — Wait for the Excel add-in to finish sign-in before clicking Design or Refresh. If the connection fails, close and reopen the file, enable editing, and allow the add-in to reconnect before proceeding.

---

## Visa Management

### A new visa type cannot be created manually

**Cause** — The user may not have the correct permissions, or the visa type already exists in the system.

**Fix** — Search for the visa type before creating a new one to avoid duplicates. If creation is blocked, contact your system administrator to confirm permissions. Note that visa entries are typically generated automatically from CE.

### Visa details are not visible on a student's record

**Cause** — The visa information may not have been synced from CE, or the student record may not have a visa assigned.

**Fix** — Scroll to the **Other Information** tab on the student record to locate visa details. If the information is missing, confirm whether the visa has been created in CE and that the integration is functioning correctly.

---

## Subject & Event Management

### A sessional class or event fee is not generating for a student

**Cause** — The student may not have been enrolled in the sessional class or event, or the fee schedule template may not have the correct condition configured.

**Fix** — Navigate to **Inquiries and reports** ▸ **Fee schedules** ▸ **Sessional class and event details** and confirm the student has been assigned to the correct class or event with valid effective and expiration dates.

### The system is charging a flat fee instead of a session-based fee

**Cause** — The Session Based option on the fee schedule template has not been enabled.

**Fix** — Open the relevant fee schedule template, enable the **Session Based** option, click Save, and delete any previously generated sales orders for the event or student before rerunning the Generate Sale Order Batch Process.

### A sessional class adjustment is not generating after updating session numbers

**Cause** — The record status may not have been changed from Invoice to Change before updating session numbers.

**Fix** — Open the record in **Sessional class and events details**, change the status to Change using the Change status dropdown, enter the updated session numbers, save, and then run the Generate sessional class and event adjustments task.

### Revenue is posting immediately instead of being deferred to the event date

**Cause** — The Deferred option on the event record may not have been enabled, or the deferral date has not been set.

**Fix** — Navigate to **Academic Management** ▸ **Setup** ▸ **Subject and event names**, locate the event record, click Deferrals, enable the Deferred option, and set the Deferral date to the event date. Delete any existing sales orders for the event and rerun the fee generation batch.

---

## Student Promotion

### A student is blocked from reenrolment despite being within the threshold

**Cause** — The financial check threshold may not have been configured correctly for the relevant fee head, or the dimension value assigned to the threshold does not match the fee head on the student's outstanding invoices.

**Fix** — Navigate to **Academic Management** ▸ **Setup** ▸ **Fee schedule parameters** and review the thresholds configured under the Financial dimension section. Confirm the Dimension value for each threshold matches the fee head on the student's outstanding transactions.

### A financial check override hasn't opened the student for reenrolment

**Cause** — The system poll that checks financial clearance has not yet run since the override was applied.

**Fix** — The override takes effect on the next system poll, not immediately. Confirm the override has been saved on the student record and wait for the next scheduled poll. If the status does not update after the poll, contact your system administrator.

### Overrides from a previous promotion cycle are still active

**Cause** — Overrides were not cleared at the start of the new academic year.

**Fix** — Navigate to **All students**, add the Financial check override column using Insert field, and clear overrides either individually by unchecking the checkbox per student, or in bulk by exporting to Excel, clearing the values, and importing the file back.

### A transfer certificate invoice is not posting correctly

**Cause** — The Financial dimension fields on the invoice line may not have been set, or the TCINV template was not selected when creating the free text invoice.

**Fix** — When creating the transfer certificate invoice, confirm the TCINV template is selected in the New from template dialog. After the invoice is created, expand Line details, open Financial dimension line, and set the required dimensions (Curriculum, School Levels, Year Group) before posting.

---

## Collections

### An over-the-counter payment is not allocating to the correct invoice

**Cause** — The invoice checkbox may not have been marked before posting the payment.

**Fix** — Before clicking Post, ensure the correct invoices are checked in the payment form. If the payment has already been posted without allocation, review the advance payment and manually settle it against the correct invoice.

### A payment is sitting as an unallocated advance

**Cause** — The invoice was not marked before posting, so the payment was recorded as an advance rather than applied to the outstanding balance.

**Fix** — Locate the student's account in **Modules** ▸ **Academic Management** ▸ **Students** ▸ **All students**, click Customer in the Action Pane, then click Transactions to view the advance. Manually settle the advance against the correct invoice.

### A credit card payment proposal is not returning any invoices

**Cause** — The date range entered may not match any due invoices, or the Method of payment filter is not set to credit card (CC).

**Fix** — Confirm the date range covers the correct period and that the Method of payment is set to CC. Check that invoices exist within that period and have not already been paid.

### Credit card authorisation is failing during payment processing

**Cause** — The payment service provider may have rejected the request, or the card details or account setup may be incorrect.

**Fix** — Review the failure message returned by the system. Unauthorised lines will be deleted automatically. Manually retry or review the affected transactions and contact your payment service provider if the issue persists.

### A post-dated cheque is not appearing in the system after entry

**Cause** — The Postdated check toggle may not have been enabled in the Check details window, or the cheque was not posted after entry.

**Fix** — When processing a post-dated cheque via Cashier Receipt, ensure the Method of payment is set to Cheque, click Check details, enable the Postdated check toggle, enter the maturity date and other required fields, and post the journal.

### An overpayment was posted by mistake and needs to be corrected before the receipt is issued

**Cause** — An amount exceeding the invoice total was entered in the Amount field, and the excess was recorded as an overpayment.

**Fix** — Before clicking Post, review the Overpayment field that appears after saving. If the overpayment was entered in error, correct the amount in the Amount field before proceeding to post.

### An advance payment discount has not been calculated when processing a co-branded payment

**Cause** — The Co-branded option may not have been enabled in the Cashier Receipt form, or the Advanced Discount Policy has not been configured for the relevant fee and charge interval.

**Fix** — Confirm the Advanced Discount Policy is configured for the relevant fee and charge interval. When processing the payment, ensure the Co-branded option is enabled before selecting the method of payment. The Calculate Discount button only activates when Co-branded is enabled.

### An invoice is not splitting into instalments after a payment plan is applied

**Cause** — The payment plan may not have been applied and confirmed correctly, or the invoice was generated before the payment plan was set up.

**Fix** — Follow the Apply Payment Plan to Fee Payer steps in full, including selecting the invoice, previewing, and confirming. If the invoice was generated prior to the payment plan setup, the plan may need to be applied and the invoice re-split.

### A cash discount is not applying when a payment is processed

**Cause** — The payment date may be after the discount due date, or the Early payment discount eligibility setting has not been configured correctly.

**Fix** — Ensure the payment date is set before the discount due date when settling transactions. Confirm the Early payment discount eligibility setting is correctly configured under **Academic Management** ▸ **Setup** ▸ **Fee schedule parameter**.

### A discount has been applied to an invoice but should not have been

**Cause** — The Early payment discount eligibility setting may be disabled, allowing discounts to apply even when only one invoice is paid.

**Fix** — Navigate to **Academic Management** ▸ **Setup** ▸ **Fee schedule parameter** and enable the Early payment discount eligibility checkbox so that discounts only apply when all due invoices are paid together.

### Discounts are not appearing on invoices after running the bulk update task

**Cause** — The date range entered in the Update early payment discount task may not have captured the correct invoices, or the early payment date was not set correctly.

**Fix** — Rerun the **Update early payment discount** task with the correct date range and early payment date. Then navigate to **Accounts receivable** ▸ **Invoices** ▸ **Open Customer Invoices** to confirm discounts have been applied.

### An early payment discount isn't appearing on generated invoices

**Cause** — The Update early payment discount batch task may not have been run after the discount was assigned to the product.

**Fix** — Navigate to **Academic Management** ▸ **Periodic tasks** and run the **Update early payment discount** task for the relevant date range and fee payers. Confirm discounts appear on open invoices in **Accounts receivable** ▸ **Invoices** ▸ **Open Customer Invoices**.

### A fee refund cannot be posted because the fee head financial dimension has not been set

**Cause** — The Financial dimensions for the account or offset account were not completed before posting the customer refund journal.

**Fix** — Before clicking Post, click **Financial dimensions** above the journal lines table and set the Fee head value. Then click **Financial dimensions** again for the offset account and set the Cashflow field to Refund. Submit for workflow approval if required before posting.

### A posted payment needs to be reversed but the reversal date field is not accepting the entry

**Cause** — The reversal date cannot be set to a date prior to the original posting date.

**Fix** — Set the reversal date to a date on or after the original posting date. Navigate to the student's transaction list via **Customer** ▸ **Transactions** in the Action Pane, select the transaction, click Reverse, then Cancel payment, and enter a valid date before selecting a reason code and confirming.

### A dishonoured cheque was reversed but no NSF fee appeared

**Cause** — The NSF payment option may not have been selected during the reversal, or the resulting journal was not posted.

**Fix** — Confirm that NSF payment was selected (not a standard reversal) when processing the cancel. Navigate to **Accounts receivable** ▸ **Payments** ▸ **Customer payment journal**, enable Show user-created only, locate the journal created for the NSF reversal, open Lines, and click Post.

### A Pay at Any School receipt isn't flagged correctly

**Cause** — The Company field may not have been set to the correct school when creating the cashier receipt journal.

**Fix** — When processing a Pay at Any School payment, ensure the Company field in the cashier receipt is set to the school that issued the invoice — not the school processing the payment. Once posted, confirm the Pay at Any School column on the journal header is ticked.

---

## Inquiries and Reports

### A fee payer statement is generating with no data

**Cause** — The date range selected may not include any transactions, or the filter may be pointing to the wrong account.

**Fix** — Confirm the start and end dates cover the correct statement period. Open the Records to include section and verify the correct fee payer account has been selected in the filter.

---

## Debt Follow-Up

### A customer write-off journal is not available to post after creation

**Cause** — The journal may require workflow approval before it can be posted, or the posting account has not been configured.

**Fix** — Navigate to **General Ledger** ▸ **Journal entries** ▸ **General journals**, locate the write-off journal, and review its status. If workflow is enabled, submit the journal for approval and follow the approval process before posting. If workflow is not enabled, post the journal directly.

### A debtor note is not visible after it was created in the Collections Coordinator workspace

**Cause** — The activity filter in the events list may be set to show only open items, hiding closed or resolved notes.

**Fix** — In the customer detail screen, open **Collect** ▸ **Collections** ▸ **Show** in All activities, and select **Open and closed** to display all notes including resolved items. Click the Notes tab to review the full history.

---

## Cash & Bank

### Open deposit slips are still showing after the end-of-day consolidation was run

**Cause** — The Consolidate deposit slip task may not have been filtered by the correct Method of payment, or the date range did not capture all transactions from the day.

**Fix** — Return to **Modules** ▸ **Accounts receivable** ▸ **Workspaces** ▸ **Customer payments** and rerun the Consolidate deposit slip task, ensuring the correct date range and Method of payment filter are applied. Verify that the consolidated slip appears and that individual slips no longer show under Open deposit slips.

### The end-of-day deposit total does not match the expected cash received for the day

**Cause** — One or more individual payments may not have been posted before the consolidation was run, or a payment was posted with the wrong method of payment.

**Fix** — Review the open deposit slips for the date in question and confirm all payments for the day have been posted. Check that each payment was recorded against the correct method of payment. Re-consolidate if needed after correcting any errors.

### The Transfer GEMS Reward Balances task is not generating a journal when run

**Cause** — The GEMS reward balance account may already be at zero for the selected date range, meaning there is no balance to transfer. This can also occur if the task has already been run for the same date.

**Fix** — Navigate to **General Ledger** ▸ **Inquiries and reports** ▸ **Trial balance** and confirm the GEMS reward balance account has a non-zero balance for the selected date range before running the transfer. If the balance is already zero, no transfer is required for that period.

### The GEMS reward transfer journal has posted but the balance account has not cleared to zero

**Cause** — The offset account in the journal may not have been configured correctly in the Receipt intercompany mapping, or the From date and To date do not match the trial balance dates used to verify the balance.

**Fix** — Review the journal lines in **General Ledger** ▸ **Journal entries** ▸ **General journals** and confirm the credit amount equals the debit minus credit balance from the trial balance. Check the Receipt intercompany mapping setup to confirm the correct offset company and general ledger account are configured for the GEMS reward method of payment.

---

## Intercompany Transactions

### A credit balance transfer cannot be completed for a student moving between schools

**Cause** — The student may have advanced tax invoices still outstanding, or the Destination school field on the student record has not been populated by the CE system.

**Fix** — Cancel any outstanding advanced tax invoices before attempting the transfer. Confirm the Destination school field is populated under Other Information on the student record. If the field is blank, verify the transfer has been initiated in CE and that the integration is functioning correctly.

### The intercompany transfer journals aren't generating in both schools

**Cause** — The intercompany channel setup may not have been completed in either the originating or destination school, or the Party ID does not match across both companies.

**Fix** — Confirm the intercompany journal setup has been completed in both schools under **Academic Management** ▸ **Setup** ▸ **Intercompany journal**. Verify that the student's Party ID is identical in both the originating and destination school's records, as the system uses this to match accounts across companies.

---

## Revenue Recognition

### Revenue recognition processing is posting journal entries to the wrong period

**Cause** — The Override transaction date field may not have been set to Yes, or the Transaction date entered does not match the last day of the period being closed.

**Fix** — When running Recognition processing, set Override transaction date to Yes and enter the last day of the relevant month in both the Cutoff date and Transaction date fields.

### The recognition processing preview is returning no lines for the current period

**Cause** — Deferral schedules may not have been configured for the relevant fee items, or all eligible lines may have already been recognised for the period.

**Fix** — Navigate to **Subscription billing** ▸ **Revenue and expense deferrals** ▸ **All deferral schedules** and confirm deferral schedules exist for the relevant invoices. If schedules exist but lines have already been recognised, no further action is required for that period.
