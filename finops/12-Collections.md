# Collections

## Customer Payments

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

![Over-the-Counter Processing](./99-Images/over_the_counter_processing_1.png)

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

![Schuedling Credit Card Payments 1](./99-Images/scheduling_credit_card_payments_1.png)

![Schuedling Credit Card Payments 2](./99-Images/scheduling_credit_card_payments_2.png)

![Schuedling Credit Card Payments 3](./99-Images/scheduling_credit_card_payments_3.png)

![Schuedling Credit Card Payments 4](./99-Images/scheduling_credit_card_payments_4.png)

![Schuedling Credit Card Payments 5](./99-Images/scheduling_credit_card_payments_5.png)

---

#### Advance Payment

Advance payment allows a school to collect fees for future term invoices before they are due, with the system automatically calculating and applying any applicable advance discounts based on configured discount policies. Staff process advance payments through the Cashier Receipt form, selecting the co-branded payment method to trigger the discount calculation. Once posted, the system generates a prepayment invoice for each term covered by the payment, alongside the receipt journal. A simulation tool is also available for staff to calculate the projected discount for a given amount without completing a payment transaction — this is useful when a fee payer wants to understand their discount entitlement before committing to payment.

---

## Advance Payment

> **Note:** *Before processing an advance payment, confirm that the Advanced Discount Policy is configured for the relevant fee and charge interval, and that a proforma invoice has already been generated for the student.*

1. From the **FNO dashboard**, open **Modules** ▸ **Accounts Receivable**.
2. Expand **Payments** and click **Cashier Receipt**.
3. Click **+ Cashier reciept** to create a new cashier receipt.
4. Enter the **student account** in the **Customer** field.
5. Under **Method of Payment**, enable the **Co-branded** option.
6. Select the **co-branded method of payment** from the dropdown.

> **Note:** *Enabling the Co-branded option activates the Calculate Discount button. Advance discounts can only be applied when this option is selected.*

7. Enter the **total amount** to be paid.

> **Note:** *To pay 3 terms, enter the combined total of all 3 term invoice amounts. To pay 2 terms, enter the combined total of 2 term invoice amounts. The discount rate applied is determined by the number of terms the entered amount covers.*

8. Enter the **sale order number** in the **Payment Reference** field.
9. Click **Calculate Discount**.

> **Note:** *The system automatically populates the discount rate and discount amount based on the Advanced Discount Policy configuration for the number of terms being paid.*

10. Click **Post**.
11. Select your **receipt options** and click **OK**.

> **Note:** *The system generates and posts one prepayment invoice per term covered by the payment. For example, paying 3 terms generates 3 prepayment invoices. Posted transactions include 1 receipt/payment transaction and one prepayment invoice per term paid.*

![Advance Payment Cashier Receipt 1](./99-Images/advance_payment_cashier_receipt_1.png)

![Advance Payment Cashier Receipt 2](./99-Images/advance_payment_cashier_receipt_2.png)

![Advance Payment Cashier Receipt 3](./99-Images/advance_payment_cashier_receipt_3.png)

---

## Advance Discount Simulation

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Inquiry and Report**, **Co-branded transactions** and click **Advanced Discount Policy**.
3. Enter the **student account** in the **Customer** field.
4. Select the **co-branded method of payment** from the **Method of Payment** dropdown.
5. Enter the **amount** to simulate.

> **Note:** *Enter the actual proforma invoice amount, or a dummy amount large enough to cover the proforma invoice, to see the applicable discount. Enter a single term amount, a two-term total, or the full period total to compare discount rates.*

6. Click **Simulate**.

> **Note:** *The system displays the discount rate and amount that would apply if the fee payer made an advance payment for the entered amount. This tool does not create a transaction — it is for calculation and agreement purposes only.*

![Advance Discount Simulation](./99-Images/advance_discount_simulation_1.png)

---

#### Fee Refunds

Fee refunds of credit balances are processed when a student's account holds an excess credit that needs to be returned to the fee payer. Staff create a customer payment journal using the refund journal type, select the student account, identify the credit invoice through the settle transactions function, and configure the financial dimensions for both the fee head and the offset bank account. Once the journal is posted — or approved through workflow if applicable — the refund is recorded against the student's account and the credit balance is cleared.

---

## Fee Refunds of Credit Balances

1. From the **FNO dashboard**, open **Modules** ▸ **Accounts receivable**.
2. Expand **Payments** and click **Customer payment journal**.
3. Click **New**.
4. In the **Name** field, select *Customer refund journal*.
5. Click **Lines**.
6. Complete the required fields.
7. Click **Settle transactions**.
8. Locate and select the credit invoice to be refunded.
9. Select the **Mark** checkbox.
10. Click **OK**.
11. Open **Financial dimensions**, click **Account**
12. In the **Fee head** value field, select the fee head to refund.
13. Click **OK**.
14. Open **Financial dimensions**, click **Offset account**.

> **Note:** *The offset account represents the bank account side of the refund transaction and should reflect the CashFlow refund account configured for your school.*

15. Click **OK**.
16. Click **Post**.
    - If a workflow is active, submit the journal for approval and follow the workflow process until the journal is approved before posting.

![Fee Refunds of Credit Balances 1](./99-Images/fee_refunds_of_credit_balances_1.png)

![Fee Refunds of Credit Balances 2](./99-Images/fee_refunds_of_credit_balances_2.png)

![Fee Refunds of Credit Balances 3](./99-Images/fee_refunds_of_credit_balances_3.png)

![Fee Refunds of Credit Balances 4](./99-Images/fee_refunds_of_credit_balances_4.png)

![Fee Refunds of Credit Balances 5](./99-Images/fee_refunds_of_credit_balances_5.png)

---

#### Tax Invoices
 
The advance tax invoice feature allows staff to generate a tax invoice against a fee payer's open proforma invoice before full payment is received. This is typically used when a family requests a formal tax invoice ahead of settlement, for example for employer reimbursement or government funding purposes. Staff locate the student account, access the relevant sales order, apply the prepayment invoice against the open term invoice, assign the advance tax invoice request category, and post the record. The system then generates the invoice, which can be printed and provided to the fee payer.
 
---
 
## Advance Tax Invoice upon Request
 
1. Navigate to **Modules** ▸ **Academic Management** ▸ **Students** ▸ **All students**.
2. Open the **Account** column filter.
3. Enter the student's account number in the **Account** field using the *contains* filter operator.
4. Open **Sell** and click **Orders** in the Action Pane.
5. Click **All sales orders** to locate the open proforma invoice.
6. Click **Invoice** in the Action Pane.
7. Click **Add prepayment invoice**.
8. Select the **Mark** checkbox to confirm the selection.

> **Note:** *If you are invoicing for a partial amount only, enter the amount in the Amount to invoice field before proceeding.*
 
9. In the **Sales category** field, enter or select *Advance tax invoice request category*.
10. Click **Post**.
11. Click **Prepayment invoice**.
12. Click **Show or hide controls** if necessary.
13. Click **Print**.

![Advance Tax Invoice upon Request 1](./99-Images/advance_tax_invoice_upon_request_1.png)

![Advance Tax Invoice upon Request 2](./99-Images/advance_tax_invoice_upon_request_2.png)

![Advance Tax Invoice upon Request 3](./99-Images/advance_tax_invoice_upon_request_3.png)

![Advance Tax Invoice upon Request 4](./99-Images/advance_tax_invoice_upon_request_4.png)

![Advance Tax Invoice upon Request 5](./99-Images/advance_tax_invoice_upon_request_5.png)

---

#### Miscellaneous Receipts

The miscellaneous receipt function allows cashiers to record incoming payments that are not linked to a specific student invoice or customer account. This is used when funds are received for ad hoc items such as event fees, lost property charges, or sundry income. The cashier enters the payment details, selects a fee type to determine the correct general ledger coding, and posts the transaction. An optional receipt can be printed at the time of posting.

---

## Cashier Receipt — Miscellaneous Receipt

1. From the **FNO dashboard**, open **Modules** ▸ **Accounts Receivable**.
2. Expand **Payments** and click **Miscellaneous receipt**.
3. Click **+ Miscellaneous receipt**.
4. Enter the cashier name in the **Received From** field.
5. Select the **Method of payment**.
6. Enter the **Amount**.

> **Note:** *The **Payment account** populates automatically based on the selected method of payment.*

7. Enter the **Payment reference**.
8. Select a **Fee type** from the dropdown.

> **Note:** *The **Account**, **Description**, and **Sales tax group** fields populate automatically based on the selected fee type.*

9. Enter the amount in the **Credit** field.
10. Click **Post**.
11. Enable the **Print receipt** toggle if a printed receipt is required.
12. Click **OK** to complete the transaction.

![Cashier Receipt Miscellaneous Receipt 1](./99-Images/cashier_receipt_miscellaneous_receipt_1.png)

---
