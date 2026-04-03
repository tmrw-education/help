## Troubleshooting Guide

---

### Navigating the F&O Platform

🔴 **Problem:** The navigation pane is not visible or has disappeared.

🟡 **Cause:** The navigation pane may have been collapsed using the hamburger menu icon.

🟢 **Solution:** Click the hamburger menu icon (☰) at the top left of the screen to expand the navigation pane.

---

🔴 **Problem:** A module or page cannot be found in the navigation pane.

🟡 **Cause:** The user may not have the correct security role or permissions to access that module, or the module may be in a different location than expected.

🟢 **Solution:** Use the search bar at the top of the page to search for the module or form by name. If it does not appear, contact your system administrator to confirm access permissions.

---

🔴 **Problem:** The Home icon does not return the user to the correct dashboard.

🟡 **Cause:** The default dashboard may not have been configured for the user's role.

🟢 **Solution:** Click the Home icon at the top of the navigation pane. If the wrong dashboard loads, contact your system administrator to update the default dashboard for your role.

---

### Pre-Admission Fees

🔴 **Problem:** The Pre-Admission Types page is not visible in the menu.

🟡 **Cause:** The Setup menu under Academic Management may not be fully expanded, or the user does not have the correct permissions.

🟢 **Solution:** Expand **Modules** ▸ **Academic Management** ▸ **Setup** ▸ **Pre-admission fees** and click **Pre-admission types**. If the option is still not visible, contact your system administrator.

---

🔴 **Problem:** A pre-admission fee record cannot be posted.

🟡 **Cause:** Required fields in the record may be incomplete, or the posting logic for that transaction type has not been configured.

🟢 **Solution:** Ensure all required columns in the record are filled in. Verify that posting logic has been set up for the relevant transaction type under **Setup** ▸ **Pre-admission fees** ▸ **Pre-admission posting**.

---

🔴 **Problem:** The status of a pre-admission fee does not update after posting.

🟡 **Cause:** The posting process may not have completed successfully, or a required field such as bank account was not selected.

🟢 **Solution:** Review the record for any error messages. Re-attempt the post after confirming all required fields are complete. Check that the correct bank account has been assigned.

---

🔴 **Problem:** A deposit cannot be forfeited or refunded.

🟡 **Cause:** Only deposits with a status of Received or Partial are eligible for forfeiture or refund. Deposits in any other status cannot be processed.

🟢 **Solution:** Filter the Pre-admission deposits list by status and confirm the deposit shows as Received or Partial before attempting to forfeit or refund.

---

🔴 **Problem:** The Reverse option is not available for a pre-admission fee.

🟡 **Cause:** The fee may not have a status of Posted, or the user may not have the correct permissions to perform reversals.

🟢 **Solution:** Filter the All pre-admission fees list by Status = Posted to confirm the record is eligible for reversal. Contact your system administrator if the Cancel button remains unavailable.

---

### Generate Fees

🔴 **Problem:** Student details are incorrect when generating fees (e.g., wrong academic year or enrolment dates).

🟡 **Cause:** The student's record has not been updated prior to fee generation.

🟢 **Solution:** Navigate to **Modules** ▸ **Academic Management** ▸ **Students** ▸ **All students**, open the student record, and update the academic year, effective date, and expiration date before running the fee generation batch.

---

🔴 **Problem:** A scholarship or discount is not applying to a student's invoice.

🟡 **Cause:** The scholarship or discount may not have been approved, linked to the correct fee items, or the student's record may not have been linked.

🟢 **Solution:** Confirm the scholarship or discount status is Approved. Verify it is linked to the correct fee items under the General tab and that the student has been added under the Students tab with valid effective and expiration dates.

---

🔴 **Problem:** Fee invoices are not being generated for some students.

🟡 **Cause:** The student may not be included in the customer filter, or the fee schedule template may not have been selected in the batch.

🟢 **Solution:** When running the Generate Sales Order Batch Processing task, confirm that the correct customer academic year is selected under Records to include (Customers) and the correct fee schedule template is selected under Records to include (Fee schedule templates).

---

🔴 **Problem:** Invoices are created but not posted.

🟡 **Cause:** The Create sale orders posting option was selected instead of Post invoice automatically, requiring a manual posting step.

🟢 **Solution:** Navigate to **Accounts receivable** ▸ **Sales orders** ▸ **All sales orders** and manually post the invoices from there.

---

🔴 **Problem:** The fee generation reconciliation report shows fewer students than expected.

🟡 **Cause:** Some students may have been excluded by the customer filter, or their records may not meet the conditions set in the fee schedule template.

🟢 **Solution:** Review the customer filter applied during batch processing and confirm all students are assigned to the correct academic year and meet any template conditions.

---

### Scholarships and Discounts

🔴 **Problem:** A new scholarship or discount cannot be saved.

🟡 **Cause:** Required columns such as Code or Name may be incomplete, or the approval group has not been assigned.

🟢 **Solution:** Ensure all required columns are completed, including Code, Name, Active, Approval, and User group, before clicking Save.

---

🔴 **Problem:** The scholarship or discount is not visible on the student's invoice.

🟡 **Cause:** The discount may still be in Draft or Under Review status and has not been fully approved.

🟢 **Solution:** Navigate to the scholarship or discount record, open the Students tab, and confirm the approval status. Select Approve from the Approval dropdown if the record is Under Review.

---

🔴 **Problem:** The Approve option is not available in the Approval dropdown.

🟡 **Cause:** The logged-in user may not be a member of the approval group assigned to the scholarship or discount.

🟢 **Solution:** Contact your system administrator to confirm the correct user group is assigned and that your account has been added as an approver.

---

### Visa Management

🔴 **Problem:** A new visa type cannot be created manually.

🟡 **Cause:** The user may not have the correct permissions, or the visa type already exists in the system.

🟢 **Solution:** Search for the visa type before creating a new one to avoid duplicates. If creation is blocked, contact your system administrator to confirm permissions. Note that visa entries are typically generated automatically from CE.

---

🔴 **Problem:** Visa details are not visible on a student's record.

🟡 **Cause:** The visa information may not have been synced from CE, or the student record may not have a visa assigned.

🟢 **Solution:** Scroll to the **Other Information** tab on the student record to locate visa details. If the information is missing, confirm whether the visa has been created in CE and that the integration is functioning correctly.

---

### Sessional Classes & Events

🔴 **Problem:** A sessional class or event fee is not generating for a student.

🟡 **Cause:** The student may not have been enrolled in the sessional class or event, or the fee schedule template may not have the correct condition configured.

🟢 **Solution:** Navigate to **Inquiries and reports** ▸ **Fee schedules** ▸ **Sessional class and event details** and confirm the student has been assigned to the correct class or event with valid effective and expiration dates.

---

🔴 **Problem:** The system is charging a flat fee instead of a session-based fee.

🟡 **Cause:** The Session Based option on the fee schedule template has not been enabled.

🟢 **Solution:** Open the relevant fee schedule template, enable the **Session Based** option, click Save, and delete any previously generated sales orders for the event or student before rerunning the Generate Sale Order Batch Process.

---

🔴 **Problem:** A sessional class adjustment is not generating after updating session numbers.

🟡 **Cause:** The record status may not have been changed from Invoice to Change before updating session numbers.

🟢 **Solution:** Open the record in **Sessional class and events details**, change the status to Change using the Change status dropdown, enter the updated session numbers, save, and then run the Generate sessional class and event adjustments task.

---

### Sibling Discounts

🔴 **Problem:** A sibling discount is not applying to a student's invoice.

🟡 **Cause:** The sibling order number may not be assigned to the student record, the trade agreement may not have been posted, or the line discount group has not been linked to the tuition fee item.

🟢 **Solution:** Confirm the student's sibling order number is set under General in their student record. Verify the trade agreement has been posted and that the Line discount group on the relevant released products is set to the Sibling discount trade agreement.

---

🔴 **Problem:** The wrong discount percentage is applying to a sibling.

🟡 **Cause:** The sibling order number assigned to the student does not match the correct discount group in the trade agreement.

🟢 **Solution:** Review the student's sibling order number and compare it against the Customer price/discount groups setup under **Sales and marketing** ▸ **Prices and discounts**. Correct any mismatches and rerun the sales order batch.

---

### Split Bill Override

🔴 **Problem:** The split billing percentages are not applying correctly to a student's invoice.

🟡 **Cause:** The split percent by fee items configuration may have been set up after the sales orders were already generated, meaning existing invoices are unaffected.

🟢 **Solution:** Set up the split configuration before running the sales order generation. For existing invoices, delete the sales order and rerun the Generate Sales Order Batch Processing task after the split configuration is in place.

---

🔴 **Problem:** The total paid percentage for fee payers does not equal 100.

🟡 **Cause:** The split percentages assigned to each fee payer in the student's Relationships section have not been configured correctly.

🟢 **Solution:** Navigate to the student record, scroll to the Relationships section, and adjust the paid percentages so that the total equals 100.00 before generating invoices.

---

### Pro Rata Adjustments

🔴 **Problem:** A new student is being charged the full term fee instead of a pro rata amount.

🟡 **Cause:** The Pro rata field on the tuition fee item has not been enabled, or the student's effective date has not been updated to reflect their actual start date.

🟢 **Solution:** Confirm the Pro rata field on the released product is set to any option except None. Then navigate to the student's academic enrolment record and update the Effective date to the student's actual start date before rerunning the fee generation batch.

---

🔴 **Problem:** An exiting student's refund amount appears incorrect.

🟡 **Cause:** The student's last day at school may have been entered incorrectly when running the Calculate fee and charge adjustment task.

🟢 **Solution:** Review the sales order adjustment and confirm the Quantity column shows a negative value reflecting the correct number of remaining school days. If incorrect, rerun the Calculate fee and charge adjustment task with the correct leaving date.

---

### Payment Schedule

🔴 **Problem:** A payment schedule is not appearing in the Payment plan dropdown when applied to a fee payer.

🟡 **Cause:** The payment schedule may not have been linked to a payment option under Academic Management ▸ Setup ▸ Payment option setup.

🟢 **Solution:** Navigate to **Setup** ▸ **Payment option setup**, confirm the payment plan has been created and linked to the correct payment schedule, and ensure the start and end dates are valid.

---

🔴 **Problem:** An invoice is not splitting into instalments after a payment plan is applied.

🟡 **Cause:** The payment plan may not have been applied and confirmed correctly, or the invoice was generated before the payment plan was set up.

🟢 **Solution:** Follow the Apply Payment Plan to Fee Payer steps in full, including selecting the invoice, previewing, and confirming. If the invoice was generated prior to the payment plan setup, the plan may need to be applied and the invoice re-split.

---

### Customer Payments

🔴 **Problem:** An over-the-counter payment is not allocating to the correct invoice.

🟡 **Cause:** The invoice checkbox may not have been marked before posting the payment.

🟢 **Solution:** Before clicking Post, ensure the correct invoices are checked in the payment form. If the payment has already been posted without allocation, review the advance payment and manually settle it against the correct invoice.

---

🔴 **Problem:** A credit card payment proposal is not returning any invoices.

🟡 **Cause:** The date range entered may not match any due invoices, or the Method of payment filter is not set to credit card (CC).

🟢 **Solution:** Confirm the date range covers the correct period and that the Method of payment is set to CC. Check that invoices exist within that period and have not already been paid.

---

🔴 **Problem:** Credit card authorisation is failing during payment processing.

🟡 **Cause:** The payment service provider may have rejected the request, or the card details or account setup may be incorrect.

🟢 **Solution:** Review the failure message returned by the system. Unauthorised lines will be deleted automatically. Manually retry or review the affected transactions and contact your payment service provider if the issue persists.

---

### Fee Payer Statements

🔴 **Problem:** A fee payer statement is generating with no data.

🟡 **Cause:** The date range selected may not include any transactions, or the filter may be pointing to the wrong account.

🟢 **Solution:** Confirm the start and end dates cover the correct statement period. Open the Records to include section and verify the correct fee payer account has been selected in the filter.

---

### Settlement Discounts

🔴 **Problem:** A cash discount is not applying when a payment is processed.

🟡 **Cause:** The payment date may be after the discount due date, or the Use cash discounts setting may not be enabled in Accounts Receivable parameters.

🟢 **Solution:** Ensure the payment date is set before the discount due date when settling transactions. Confirm the Early payment discount eligibility setting is correctly configured under **Academic Management** ▸ **Setup** ▸ **Fee schedule parameter**.

---

🔴 **Problem:** A discount has been applied to an invoice but should not have been.

🟡 **Cause:** The Early payment discount eligibility setting may be disabled, allowing discounts to apply even when only one invoice is paid.

🟢 **Solution:** Navigate to **Academic Management** ▸ **Setup** ▸ **Fee schedule parameter** and enable the Early payment discount eligibility checkbox so that discounts only apply when all due invoices are paid together.

---

🔴 **Problem:** Discounts are not appearing on invoices after running the bulk update task.

🟡 **Cause:** The date range entered in the Update early payment discount task may not have captured the correct invoices, or the early payment date was not set correctly.

🟢 **Solution:** Rerun the **Update early payment discount** task with the correct date range and early payment date. Then navigate to **Accounts receivable** ▸ **Invoices** ▸ **Open Customer Invoices** to confirm discounts have been applied.
