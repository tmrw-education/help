# Settlement Discounts

This section covers the configuration and application of early payment or cash discounts within the fee management system. It includes setting up discount codes, assigning discounts to individual fee items, bulk updating discounts across invoices, controlling eligibility rules to determine when discounts apply, and processing payments that include an active discount.

---


#### Discounts
Settlement discounts, also known as early payment or cash discounts, incentivise fee payers to pay their invoices ahead of the due date by offering a reduction on the amount owed. Configuring this feature involves creating the discount codes, assigning them to the relevant fee items, and setting the eligibility rules that determine when the discount applies. Discounts can be applied to invoices individually or updated in bulk across a date range. When a payment is processed before the discount due date, the system automatically calculates and applies the reduction, posting the discount amount to the designated ledger account and reducing the payable balance accordingly.


---


---



---



---

## Controlling Discount Eligibility Based on Payment

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Setup** and click **Fee schedule parameter**.
3. Choose whether to enable or disable **Early payment discount eligibility**.
4. Click **Save**.
   > Note: *If unchecked, the discount applies even if only one invoice is paid. If checked, the discount applies only if all due invoices are paid together.*

![Controlling Discount Eligibility Based on Payment](./99-Images/controlling_discount_eligibility_based_on_payment_1.png)

---

## Processing Payments with Discounts

1. From the **FNO dashboard**, open **Modules** ▸ **Accounts receivable**.
2. Expand **Payments** and click **Customer payment journal**.
3. Click **New** to create a payment journal.
4. Select the **Name**.
5. Click **Lines** in the toolbar.
6. Select the **fee payer**.
7. Click **Settle transactions**.
8. Set the **payment date before the discount due date**.
9. Settle the invoice(s) by clicking **OK**.
   > Note: *The system automatically applies the discount, reducing the payable amount.*
10. Enter **Payment reference**.
11. **Post** the journal.
12. Check the **voucher** to confirm the discount was posted.
    > Note: *Click the three dots in the toolbar and choose All related vouchers to see the discount amount.*

![Processing Payments with Discounts 1](./99-Images/processing_payments_with_discounts_1.png)

![Processing Payments with Discounts 2](./99-Images/processing_payments_with_discounts_2.png)

![Processing Payments with Discounts 3](./99-Images/processing_payments_with_discounts_3.png)

![Processing Payments with Discounts 4](./99-Images/processing_payments_with_discounts_4.png)

---
