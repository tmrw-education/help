# Customer Payments

This section covers the two main methods for processing fee payments from customers. Over-the-counter processing allows staff to manually enter and post payments made in person, allocate them to invoices, and issue receipts. Scheduled credit card processing covers generating payment proposals, selecting and authorising invoices for credit card payment, and posting completed transactions in bulk.

---


#### In-Person (Over-the-Counter)
Over-the-counter payment processing is used when a fee payer makes a payment directly at the school, rather than through an online or automated channel. Staff access the Over the Counter Payment form, select the fee payer, choose the payment method such as cash or credit card, enter the amount, and mark the invoices the payment should be applied to. If the amount paid exceeds the invoice total, the system records the excess as an advance payment. Once posted, the system generates a journal reference number and provides the option to print or email a receipt to the fee payer, completing the transaction with a full audit trail.


---

## Over-the-Counter Processing

1. From the **FNO dashboard**, open **Modules** ▸ **Accounts receivable**.
2. Expand **Payments** and click **Over the counter payment**.
3. Click **Create New Customer Payment** in the toolbar.
4. A new form will appear for entering payment details. Choose the **fee payer** from the list.
5. The system displays the fee payer's name and any open invoices.
6. Select the **payment method** (e.g., credit card or cash) from the Method of payment column.
7. Enter the **amount being paid** and select the **payment account** where the funds will be deposited.
8. **Mark the invoices** the payment should be applied to.
   > Note: *If the payment exceeds the invoice total, the extra amount is recorded as an advance.*
9. The system automatically checks the **Pay in Advance** box if there is an unallocated amount.
10. Click **Post** to finalise the entry.
11. The system generates a **unique journal number** for reference.
12. A dialog box appears asking if you want to **print and/or email** the receipt. Select your options and click **OK**.
13. The system prints the receipt and/or sends it to the fee payer's email as specified.

---


#### Scheduled Credit Card
Scheduled credit card processing is used to handle bulk fee payments via credit card for a defined period. Staff create a new customer payment journal, generate a payment proposal for the relevant date range and payment method, and review the invoices returned. Selected invoices are transferred to the payment journal, and the system then requests authorisation from the payment service provider. If authorisation is successful, the transactions are posted and marked as complete. If any lines fail authorisation, they are removed automatically and must be manually reviewed or retried. This process allows the school to efficiently manage large volumes of credit card payments in a single batch.


---

## Scheduling Credit Card Payments

1. From the **FNO dashboard**, open **Modules** ▸ **Accounts receivable**.
2. Expand **Payments** and click **Customer payment journal**.
3. Click **New** to create a new journal and **select the appropriate journal name**.
4. Click **Lines** in the toolbar.
5. Click the **Payment Proposal** button, then select **Create Payment Proposal**.
6. In the dialog box, enter the **date range** for due invoices (e.g., January 1 to January 31).
7. Set the **Method of payment** to credit card (CC).
8. Set the **Summarised payment date**.
9. Click **OK** to run the proposal.
10. The system displays all invoices due within the selected period. Select the invoices to be paid, or leave unmarked to select all.
11. Click **Create Payments** to transfer selected invoices to the payment journal.
    > Note: *Delete any lines with zero or debit amounts, as only payable invoices should remain.*
12. Enter the **Payment reference** as required.
13. Click the **Functions** button in the toolbar, then select **Generate Credit Card Payments**.
    > Note: *The system requests authorisation from the service provider. If successful, the status changes to Approved; if not, a failure message appears, unauthorised lines are deleted and must be manually retired or reviewed.*
14. Once authorisation is received, click **Post**.
    > Note: *The system confirms posting, and the Post button becomes inactive. All transactions are now posted and complete.*

---
