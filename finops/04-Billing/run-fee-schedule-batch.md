---
id: run-fee-schedule-batch
summary:
  - "Run **Academic Management ▸ Periodic tasks ▸ Generate sale order batch processing**, set dates, posting option, fee and charge interval, and template, then click OK."
  - "Review the resulting batch in **Fee schedule batches ▸ All fee schedule batches**."
  - "Before running, confirm every student has an academic enrolment record with the correct fee and charge interval, and that at least one active fee schedule template exists."
keywords: [fee schedule batch, generate sales order batch, billing batch, fee generation, batch processing, fee schedule run]
video:
  youtube:
  bunny:
---

# Run the Fee Schedule Batch

With student data confirmed and fee schedule templates in place, run the fee generation batch to create sales orders across the student cohort. Configure the run by setting dates, posting option, fee interval, and template, then filter for the relevant students.

> **Note:** Before running this batch, confirm that each student has an academic enrolment record with the correct fee and charge interval, and that at least one active fee schedule template exists for the target academic year. The fee and charge interval is the key field linking students, templates, and the batch job.

1. Open Generate sale order batch processing

   From the **FNO dashboard**, open **Modules ▸ Academic Management**, expand **Periodic tasks**, and click **Generate sale order batch processing**.

2. Set the batch parameters

   Complete the following:

   - **Fee generation date** — set to the start date of the academic year or the start date of the fee charge interval.
   - **Posting date** — required only if using Post invoice automatically; leave blank to create open sales orders for manual review.
   - **Posting option** — select *Create sale orders* to generate open orders for review, or *Post invoice automatically* to create and post invoices in a single step.
   - **Fee and charge interval** — select the interval to filter which students are included.
   - **Batch description** — enter a description.
   - **Fee schedule template number** — select a specific template, or leave blank to include all active templates.

   In **Records to include**, add filters for a specific cohort, academic year, or student if needed. Leave blank to run across all eligible students.

3. Submit and review

   Click **OK** to submit the batch job. Once complete, navigate to **Fee schedule batches ▸ All fee schedule batches** and click the batch number to review all generated sales orders.

   The system reuses an existing deposit sales order if the student has already paid an enrolment deposit; otherwise it creates a new sales order.

![Run the Fee Schedule Batch — the Generate sale order batch processing dialog with Fee generation date, Posting option, Fee and charge interval, and Batch description fields](./images/run-fee-schedule-batch-1.png)

![Run the Fee Schedule Batch — the Records to include filter section](./images/run-fee-schedule-batch-2.png)

![Run the Fee Schedule Batch — the All fee schedule batches list with the newly created batch and the batch detail view](./images/run-fee-schedule-batch-3.png)
