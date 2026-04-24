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
