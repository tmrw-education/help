#### Student Ledger

The student ledger provides a consolidated view of a student's financial activity over a specified date range. School finance staff use it to review invoices, payments, advance invoices, and prepayments associated with an individual student. The report can be filtered to suppress advance and prepayment invoice detail where a simplified view is required.

---

## Student Ledger

1. Open **Modules** ▸ **Academic Management**.
2. Expand **Students** and click **All Students**.
3. Select the **student** for whom the ledger is required.
4. Click **Collect** on the Action Pane.
5. Click **Statements**.
6. Enter the **From date**.
7. Enter the **To date**.
8. Select the **Suppress Advance Invoice** toggle if advance invoice or prepayment invoice detail should be excluded from the report.
   > **Note:** *Enabling this toggle hides both advance invoice and prepayment invoice lines from the generated report, producing a simplified statement view.*
9. Click **OK** to generate the report.

![Student Ledger 1](./99-Images/student_ledger_1.png)

![Student Ledger 2](./99-Images/student_ledger_2.png)

---

#### Proforma Invoice Generation

Proforma invoices are generated from confirmed sales orders and sent to fee payers before a formal tax invoice is issued. Once fee schedules have been run and sales orders created, staff can confirm individual orders manually for a single student, or process all open proforma invoices in bulk for a billing cycle. Both methods trigger the print management destination configured in the system, which automatically distributes the proforma document to the fee payer. If a proforma invoice needs to be resent or reprinted, staff can regenerate it from the confirmed sales order without creating a new order.

---

## Generate Proforma Invoice Document

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Students** and click **All students**.
3. Open the **Account** column filter.
4. Enter the student's account number in the **Account** field using the *contains* filter.
5. Click **Sell**.
6. Click **Orders**.
7. Click **All sales orders**.

> **Note:** *This displays all sales orders for the student, including open proforma invoices awaiting confirmation.*

7. Select the sales order to confirm.
8. On the Action Pane, click **Sell**.
9. Click **Confirm sales order**.
10. Set the **Print confirmation** field to *Yes*.
11. Set the **Use print management destination** field to *Yes*.
12. Click **OK**.

> **Note:** *The system sends the proforma invoice to the fee payer using the print management destination configured for the school. No manual distribution is required.*

13. Click **Back**.

![Generate Proforma Invoice Document 1](./99-Images/generate_proforma_invoice_document_1.png)

---

## Regenerate Proforma Invoice Document

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Students** and click **All students**.
3. Filter for the student and click **Sell**.
4. Open **Orders**, click **All sales orders** and open the relevant sales order.
5. On the Action Pane, click **Sell**.
6. Under **Journals**, click **Sales order confirmation**.
7. Select the latest version of the confirmation.
8. Click **Preview/Print**.
9. Click **Use print management**.
10. Click **Close**.

> **Note:** *This regenerates and resends the proforma invoice without creating a new sales order or confirmation record.*

![Regenerate Proforma Invoice Document 1](./99-Images/regenerate_proforma_invoice_document_1.png)

---

## Generate Proforma Invoices in Bulk

1. From the **FNO dashboard**, open **Modules** ▸ **Sales and Marketing**.
2. Expand **Sales orders** ▸ **Order confirmation** and click **Confirm sales order**.
3. Click **Select**.
4. Add a filter for **Fee and charge interval**.
5. Click **Ok**.
6. Enter the **billing cycle year** to filter for the proforma invoices to be generated.

> **Note:** *The system lists all open proforma invoices (sales orders) matching the selected billing cycle.*

6. Enable **Print confirmation**.
7. Enable **Use print management destination**.
8. Click **OK** to generate and send the documents immediately.

> **Note:** *If there are a large number of sales orders, processing may take several minutes. Use the Batch option in step 9 to run in the background instead.*

9. To run as a scheduled batch job instead, click **Batch**.
10. Enable **Batch processing**.
11. Click **OK**.

> **Note:** *The system automatically emails each proforma invoice to the fee payer as an attachment once the batch completes.*

![Generate Proforma Invoices In Bulk 1](./99-Images/generate_proforma_invoices_in_bulk_1.png)

---

#### Day-End Procedures

The day-end procedure ensures that all cash transactions processed throughout the day are combined into a single deposit slip before being reconciled against the bank statement. Staff access the Customer Payments workspace, consolidate open deposit slips by payment method, and generate a combined deposit slip report for banking. Once the consolidated deposit slip is created, staff can verify the result on the bank account transaction view to confirm the correct amount is reflected.

---

## End of Day Procedure

1. From the **FNO dashboard**, open **Modules** ▸ **Cash and bank management**.
2. Expand **Inquiries and reports** and click **Deposit slips**.
3. Click **Open deposit slips**.

> **Note:** *Open deposit slips shows all individual deposit slips created across the day. Each slip represents a separate cash transaction that has not yet been consolidated.*

4. From the **FNO dashboard**, open **Modules** ▸ **Accounts receivable** ▸ **Workspaces** ▸ **Customer payments**.
5. Click **Consolidate deposit slip**.
6. Enter the **date range** for the consolidation.
7. Expand **Records to include** and click **Filter**.
8. Select the **Method of payment** (e.g., *Cash*).
9. Click **OK**.
10. Click **OK** again to confirm.
11. Return to **Modules** ▸ **Cash and bank management** ▸ **Inquiries and reports** ▸ **Deposit slips**.
13. Locate the consolidated deposit slip for the relevant date.

> **Note:** *The individual open deposit slips for the selected date will no longer appear under Open deposit slips. They are replaced by the single consolidated entry.*

13. Note the **deposit slip number**.
14. Return to **Modules** ▸ **Cash and bank management** ▸ **Inquiries and reports** ▸ **Deposit slips**.
15. Click **Deposit slip reports**.
16. Expand **Records to include** and click **Filter**.
17. Enter the **deposit slip number** in the criteria field.
18. Click **OK** to generate the report.
19. From the **FNO dashboard**, open **Modules** ▸ **Cash and bank management**.
20. Click **Bank accounts** and select the relevant **bank account**.
21. Click **Transactions** to verify the deposit.

> **Note:** *The consolidated deposit should appear as a single transaction amount for the day, confirming the end-of-day consolidation has been applied correctly.*

![End of Day Procedure 1](./99-Images/end_of_day_procedure_1.png)

![End of Day Procedure 2](./99-Images/end_of_day_procedure_2.png)

![End of Day Procedure 3](./99-Images/end_of_day_procedure_3.png)

![End of Day Procedure 4](./99-Images/end_of_day_procedure_4.png)

![End of Day Procedure 5](./99-Images/end_of_day_procedure_5.png)

![End of Day Procedure 6](./99-Images/end_of_day_procedure_6.png)

---

#### Month End Processing

Month-end processing in GEMS covers the tasks required to close out a financial period accurately. Revenue recognition is performed at the end of each month to ensure that deferred revenue is posted to the correct general ledger accounts in line with the school's billing and deferral schedule configuration. Staff can run recognition across all eligible schedules using the Periodic tasks batch process, or target a single invoice directly from the Deferral schedules list.

---

## Revenue Recognition Processing

1. From the **FNO dashboard**, open **Modules** ▸ **Subscription billing** ▸ **Revenue and expense deferrals**.
2. Expand **Periodic tasks** and click **Recognition processing**.
3. In the **Cutoff date** field, enter the last day of the month.
4. In the **Description** field, enter a value.
5. In the **Override transaction date** field, select *Yes*.
6. In the **Transaction date** field, enter the last day of the month.

> **Note:** *The Cutoff date and Transaction date should both be set to the last day of the month being closed. Setting Override transaction date to Yes ensures the journal posts with the correct period date regardless of when the process is run.*

7. Click **View preview**.

> **Note:** *The preview lists all deferral schedule lines that will be recognised up to the cutoff date. Review this list before posting to confirm the entries are correct.*

8. Click **Process** to post the revenue recognition journal.

![Revenue Recognition Processing 1](./99-Images/revenue_recognition_processing_1.png)

![Revenue Recognition Processing 2](./99-Images/revenue_recognition_processing_2.png)

---

## Recognise a Specific Invoice

1. From the **FNO dashboard**, open **Modules** ▸ **Subscription billing** ▸ **Revenue and expense deferrals**.
2. Expand **Deferral schedules** and click **All deferral schedules**.
3. Locate and select the posted invoice.
4. Click the **deferral number** to open the schedule.
5. Select the **Line**.
6. Click **Recognize**.
7. In the **Cutoff date** field, enter the last day of the month.
8. In the **Description** field, enter a value.
9. In the **Override transaction date** field, select *Yes*.
10. In the **Transaction date** field, enter the last day of the month.
11. Click **View preview**.
12. Click **Process**.

> **Note:** *After posting, click **Audit trail** to verify the journal entry was posted, then click **Voucher transaction** to review the posted voucher.*

![Recognise a Specific Invoice 0](./99-Images/recognise_a_specific_invoice_0.png)

![Recognise a Specific Invoice 1](./99-Images/recognise_a_specific_invoice_1.png)

![Recognise a Specific Invoice 2](./99-Images/recognise_a_specific_invoice_2.png)

![Recognise a Specific Invoice 3](./99-Images/recognise_a_specific_invoice_3.png)

---
