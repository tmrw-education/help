# Settlement Discounts

This section covers the configuration and application of early payment or cash discounts within the fee management system. It includes setting up discount codes, assigning discounts to individual fee items, bulk updating discounts across invoices, controlling eligibility rules to determine when discounts apply, and processing payments that include an active discount.

---


#### Discounts
Settlement discounts, also known as early payment or cash discounts, incentivise fee payers to pay their invoices ahead of the due date by offering a reduction on the amount owed. Configuring this feature involves creating the discount codes, assigning them to the relevant fee items, and setting the eligibility rules that determine when the discount applies. Discounts can be applied to invoices individually or updated in bulk across a date range. When a payment is processed before the discount due date, the system automatically calculates and applies the reduction, posting the discount amount to the designated ledger account and reducing the payable balance accordingly.


---

## Configuring Discount Setup

1. From the **FNO dashboard**, open **Modules** ▸ **Accounts receivable**.
2. Expand **Payment setup** and click **Cash discounts**.
3. Click **New** to add a discount.
4. Enter the **Cash Discount** code.
5. Enter a **Description**.
6. Specify either a **Discount Percentage or a Fixed Discount Amount**.
7. Assign the **Main Account** where the discount will be posted.
8. Click **Save**.

![Configuring Discount Setup](../99-Images/configuring_discount_setup_1.png)

---

## Assigning Discounts to Products / Fees

1. From the **FNO dashboard**, open **Modules** ▸ **Product information management**.
2. Expand **Products** and click **Released products**.
3. Select a relevant **fee item** (e.g., tuition, music lesson, sport class).
4. Under the **Sell** section, assign the relevant discount code and percentage or amount using the **Early payment discount** dropdown.
5. Click **Save**.

![Assiging Discounts to Products / Fees](../99-Images/assiging_discounts_to_products_1.png)

---

## Bulk Updating Discounts on Invoices

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Periodic tasks** and click **Update early payment discount**.
3. Enter the **date range** for invoices to include, or **filter for a single fee payer** or run for all.
4. Set the **Early payment date** for the selected invoices.
5. Click **OK** to run the process.
6. Go to **Accounts receivable** ▸ **Invoices** ▸ **Open Customer Invoices**.
7. Filter by **fee payer and/or date range** to confirm discounts and due dates are updated on invoices.

![Bulk Updating Discounts on Invoices 1](../99-Images/bulk_update_discounts_on_invoices_1.png)

![Bulk Updating Discounts on Invoices 2](../99-Images/bulk_update_discounts_on_invoices_2.png)

---

## Controlling Discount Eligibility Based on Payment

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Setup** and click **Fee schedule parameter**.
3. Choose whether to enable or disable **Early payment discount eligibility**.
4. Click **Save**.
   > Note: *If unchecked, the discount applies even if only one invoice is paid. If checked, the discount applies only if all due invoices are paid together.*

![Controlling Discount Eligibility Based on Payment](../99-Images/controlling_discount_eligibility_based_on_payment_1.png)

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

![Processing Payments with Discounts 1](../99-Images/processing_payments_with_discounts_1.png)

![Processing Payments with Discounts 2](../99-Images/processing_payments_with_discounts_2.png)

![Processing Payments with Discounts 3](../99-Images/processing_payments_with_discounts_3.png)

![Processing Payments with Discounts 4](../99-Images/processing_payments_with_discounts_4.png)

---
