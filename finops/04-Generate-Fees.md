# Generate Fees

This section walks through everything required to generate accurate fee invoices for students. It covers verifying student master data, setting up scholarships and discounts, configuring subject and event names, building fee schedule templates, and running the batch process to generate and post invoices. It also includes reconciling generated sales orders to confirm accuracy before posting.

---


#### Check Student Master Data
Accurate fee generation depends entirely on the quality of the data held against each student's record. Before running any fee batch, it is essential to verify that each student has the correct academic year assigned, that their enrolment effective and expiration dates are current, that sibling order numbers are set for students eligible for family discounts, and that the financial responsibility percentages across all fee payers add up to 100. Any gaps or errors in this data at this stage will flow through to the invoices generated, making it significantly harder to correct after the fact.


---

## Check Student Details

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Students** and click **All students**.
3. Click on a **student**'s name to retrieve their details.
4. Confirm the Current academic year under Enrolment details and update if needed.
5. Open the **Academic** tab in the top toolbar.
6. Click on **Academic enrolments** under Related information.
7. Confirm the **Effective date** and **Expiration date** and update if needed.
8. Click **Back** in the top toolbar.
9. If the student has siblings, confirm the Sibling field under General has a number (e.g., eldest sibling = 1).
10. In the Relationships section, ensure the total **Paid percentage equals 100.00**.
11. Click **Save** if any changes were made.

![Check Student Details Creation 1](./99-Images/check_student_details_creation_1.png)

![Check Student Details Creation 2](./99-Images/check_student_details_creation_2.png)

![Check Student Details Creation 3](./99-Images/check_student_details_creation_3.png)

![Check Student Details Creation 4](./99-Images/check_student_details_creation_4.png)

---

## Scholarship and Discount Setup

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Setup** and click **Scholarships and discounts**.
3. Click **New** in the top toolbar.
4. Complete the following fields:
   - Enter or create a code in the **Code column**.
   - Enter the scholarship or discount name in the **Name column**.
   - Check the **Active** and **Approval boxes**.
   - Assign or create the approval group in the **User group** column.
     *Note: To assign an existing group, select it from the dropdown.*
5. To create a new group, if necessary, right-click the dropdown arrow, select **View details**, then click **New**.
6. Enter a **Name** for the group and then select the **User group**.
7. Click **Add / remove users**.
8. Search for and select the **approvers**.
9. Click **Add to group** and go **back**.
10. Select the new **User group** and click **Save**.
11. Select the **scholarship or discount** you created.
12. Go to the **General tab** and click **Items** under Fees.
13. Click **New** and select the relevant fees; repeat as needed.
14. Click **Save** and go back.
15. Go to the **General tab** and click **Students**.
16. Click **New** and add the student.
17. Enter the discount amount under **Discount %**.
18. Enter the **Effective date** and **Expiration date**.
19. From the **Approval dropdown**, select **Report as ready**.
20. Repeat to fully approve by selecting **Approve**.
21. Click **Save**.

![Scholarship And Discount Setup Creation 1](./99-Images/scholarship_and_discount_setup_creation_1.png)

![Scholarship And Discount Setup Creation 2](./99-Images/scholarship_and_discount_setup_creation_2.png)

![Scholarship And Discount Setup Creation 3](./99-Images/scholarship_and_discount_setup_creation_3.png)

![Scholarship And Discount Setup Creation 4](./99-Images/scholarship_and_discount_setup_creation_4.png)

![Scholarship And Discount Setup Creation 5](./99-Images/scholarship_and_discount_setup_creation_5.png)

![Scholarship And Discount Setup Creation 6](./99-Images/scholarship_and_discount_setup_creation_6.png)

---

## Subject and Event Name Setup

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Setup** and click **Subject and event names**.
3. Click **New** in the toolbar.
4. Fill out the following fields to create a subject or event:
   - Enter or create a code in the **Code column**.
   - Enter the **subject or event name**.
   - Select the correct **Category** from the dropdown.
   - Check **Active**.
5. Click **Save**.
6. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
7. Expand **Inquiries and reports** ▸ **Fee schedules**.
8. Click **Sessional class and event details**.
9. Click **New** in the toolbar.
10. Fill out the following fields to assign a student to the subject or event:
    - Add the student under **Student account**.
    - Add the **code** for the sessional class or event.
    - Enter **Session numbers** if required (leave 0 for single sessions).
    - Enter the **Effective date and Expiration date**.
11. Click **Save**.

![Subject And Event Name Setup Creation 1](./99-Images/subject_and_event_name_setup_creation_1.png)

![Subject And Event Name Setup Creation 2](./99-Images/subject_and_event_name_setup_creation_2.png)

---

## Fee Schedule Templates

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Fee schedules** and click **All fee schedules**.
3. Click **New** in the toolbar.
4. Set **Customer type** to **Student**.
5. Enter a **Description**.
6. Select the **Fee and charge interval**.
   > **Note:** *The fee and charge interval determines which students and terms the system targets when generating invoices. Start and end dates populate automatically based on this selection.*
7. Click **+ Add line** under **Fee schedule lines**.
8. Select the **Item number**.
9. Select the **Unit**.
   > **Note:** *The unit must match the unit used when setting up the item price in the trade agreement.*
10. Enable **Quantity** if the system should use the quantity from the fee and charge interval rather than the template.
    > **Note:** *Enable this for items charged monthly. Leave disabled for items charged once per year.*
11. Enable **Consolidate all periods** if all terms should be consolidated into one sales order line.
    > **Note:** *Enable this for recurring items such as tuition fees. Leave disabled for one-off items such as ID card fees.*
12. Set **Apply to** to **Student account**.
13. If the item should only apply to students who meet specific criteria, enable **Condition**.
14. Click **Condition** in the toolbar.
15. Select the **Field** and enter the required value in the **Criteria** column.
16. Click **OK**.
    > **Note:** *Use conditions when the school has different fee structures for different student types. Items without conditions apply to all students.*
17. Repeat steps 7–16 for each additional fee item.
18. To set up revenue recognition, click **Deferral** in the toolbar.
19. Enable the **Deferral** option for each term.
20. Select the **Deferral template** for the number of months to allocate revenue across.
    > **Note:** *If a revenue recognition date is set in the fee and charge interval, the system automatically populates the deferral start date.*
21. Click **Ok**.
22. Click **Save**.

![Create Fee Schedule Templates 1](./99-Images/create_fee_schedule_templates_1.png)

![Create Fee Schedule Templates 2](./99-Images/create_fee_schedule_templates_2.png)

![Create Fee Schedule Templates 3](./99-Images/create_fee_schedule_templates_3.png)

---

## Event Template Setup

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Fee schedules** and click on **All fee schedules**.
3. Click **New** in the toolbar to create the fee invoice.
4. Enter details in **Description** (e.g., Event template).
5. Choose the **Billing interval**.
6. Click **+ Add line**.
7. Complete the required fields for each line.
8. Add **conditions** if required.
9. Click **Save**.

![Create Fee Schedule Templates Creation 7](./99-Images/create_fee_schedule_templates_creation_7.png)

---

#### Create Fee Invoices
With student data confirmed and fee schedule templates in place, the system is ready to generate fee invoices through a batch process. Staff navigate to the Generate Sales Order Batch Processing task and configure the run by setting the fee generation and posting dates, selecting the posting option, choosing whether to consolidate invoices by item, and filtering for the relevant student cohort and fee schedule templates. For large groups, the batch can be run in the background to avoid performance issues. Once complete, the system generates sales orders for all selected students, which can then be reviewed before posting.

---

## Generate the Sales Order Batch

> **Note:** *Before running this batch, confirm that each student has an academic enrolment record with the correct fee and charge interval, and that at least one active fee schedule template exists for the target academic year. The fee and charge interval is the key field linking students, templates, and the batch job.*

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Periodic tasks** and click **Generate sale order batch processing**.
3. Set the **Fee generation date**.
   > **Note:** *Set this to the start date of the academic year or the start date of the fee charge interval.*
4. Set the **Posting date**.
   > **Note:** *The posting date is only required if using the Post invoice automatically option. Leave blank if creating open sale orders for manual review.*
5. Select the **Posting option**:
   - *Create sale orders* — generates open sales orders for review before posting.
   - *Post invoice automatically* — creates and posts invoices in a single step.
6. Select the **Fee and charge interval**.
   > **Note:** *This filters which students are included. Only students whose academic enrolment record contains this interval will be picked up by the batch.*
7. Enter a **Batch description**.
8. Select the **Fee schedule template number**, or leave blank to include all active templates.
9. In **Records to include**, **filter** certain criteria if running for a specific cohort, students, academic year, etc.
    > **Note:** *Leave this blank to run the batch across all eligible students for the selected interval.*
10. Click **OK** to submit the batch job.
11. Wait for the batch job to complete.
12. Open **Modules** ▸ **Academic Management** ▸ **Fee schedule batches** ▸ **All fee schedule batches**.
    > **Note:** *The system generates a new batch number for each run. All sales orders created in that batch are listed under the batch number.*
13. Click the **batch number** to review all generated sales orders.

> **Note:** *The system reuses an existing deposit sales order if the student has already paid an enrolment deposit, inserting the fee items into that order. If no deposit has been paid, a new sales order is created automatically. The sales order type is set to Fee Generation to distinguish it from other order types.*

![Run The Generate Sale Order Batch 1](./99-Images/run_the_generate_sale_order_batch_1.png)

![Run The Generate Sale Order Batch 2](./99-Images/run_the_generate_sale_order_batch_2.png)

![Run The Generate Sale Order Batch 3](./99-Images/run_the_generate_sale_order_batch_3.png)

---

## Post Sale Order Invoices by Term

> **Note:** *Invoices are not posted in a single run. Each term is posted separately by scheduling a batch job filtered to the relevant period name. If the school has three terms, three separate batch jobs are required.*

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Periodic tasks** and click **Post sale order invoice**.
3. Set the **Posting date** for the term being posted.
4. Enable **Split invoice by item**.
   > **Note:** *With this option enabled, the system generates a separate invoice for each line item within the term. For example, if a student has two items in Term 1, two invoices are created.*
5. In **Records to include**, set the **Period name** filter to the term being posted (e.g., *Term 1*).
   > **Note:** *The system looks up all open sales order lines where the period name matches this filter and posts only those lines. This is how term-by-term invoice posting is controlled.*
6. Expand **Run in the background** and enable **Batch processing**.
7. Click **OK** to submit.
8. Wait for the batch job to complete.
9. Open **Modules** ▸ **Academic Management** ▸ **Fee schedule batches** ▸ **All fee schedule batches**.
10. Open the relevant batch and confirm that the status of each posted line has changed to **Invoice**.
11. Repeat steps 2–10 for each remaining term.

![Post Sale Order Invoices By Term 1](./99-Images/post_sale_order_invoices_by_term_1.png)

![Post Sale Order Invoices By Term 2](./99-Images/post_sale_order_invoices_by_term_2.png)

---

## Reconcile the Generated Sales Orders

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Fee schedule batches** and select **All fee schedule batches**.
3. Click the relevant **Fee schedule batch number** to view details.
4. Open **Fee generation reconciliation report** to check:
   - How many fee payer accounts were included.
   - How many students were included.
5. To export data, right-click the **Fee payer name** column header and select **Export all rows**.
6. In the dialog, click **Download** to export to Excel or SSRS for further validation if needed.

![Reconcile The Generated Sales Orders Creation 1](./99-Images/reconcile_the_generated_sales_order_creation_1.png)

![Reconcile The Generated Sales Orders Creation 2](./99-Images/reconcile_the_generated_sales_orders_creation_2.png)

![Reconcile The Generated Sales Orders Creation 3](./99-Images/reconcile_the_generated_sales_orders​_creation_3.png)

---

#### Post Fee Invoice and Settle Deposit
After fee invoices have been generated and reviewed, they need to be formally posted to create the financial transactions in the system. This is done by selecting the relevant fee schedule batch and initiating the post, either directly or as a background job for large volumes. Once posted, the batch status updates from Active to Invoice. At this point, the system also automatically matches any received enrolment deposits to the corresponding invoices, settling them against the posted amounts. Staff should confirm that deposit statuses update from Received to Settled to ensure the reconciliation has completed correctly.


---

## Post Fee Invoices

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Fee schedule batches** and click **All fee schedule batches**.
3. Click on the **Fee schedule batch number** you want to post (status must be Active).
4. Click **Post** in the toolbar.
5. Choose the **Posting date** (e.g., end of June).
6. Decide whether to:
   - Post directly, or
   - Run as a background job (recommended for large batches).
7. If running in the background, submit and wait for processing.
8. When complete, the batch status changes from Active to Invoice, and invoices are generated.

![Post Fee Invoices Creation 1](./99-Images/post_fee_invoices_creation_1.png)

![Post Fee Invoices Creation 2](./99-Images/post_fee_invoices_creation_2.png)

![Post Fee Invoices Creation 3](./99-Images/post_fee_invoices_creation_3.png)

---

## Settle Enrolment Deposits

1. From **Modules** ▸ **Academic Management ▸ Inquiries and reports** ▸ **Pre-admission fees**.
2. Click **Pre-admission deposits**.
3. Click **OK** in the dialog.
4. Click on the enrolment deposit **Sales order** you want to review.
5. Review deposits with status **received** (indicating payment).
6. After posting, the system automatically matches these deposits to invoices.
7. Confirm the deposit status changes from received to **settled**.

![Settle Enrolment Deposits Creation 1](./99-Images/settle_enrolment_deposits_creation_1.png)

![Settle Enrolment Deposits Creation 2](./99-Images/settle_enrolment_deposits_creation_2.png)

![Settle Enrolment Deposits Creation 3](./99-Images/settle_enrolment_deposits_creation_3.png)

---
