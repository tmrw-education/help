## Post Fee Invoices

1. Navigate to **Modules ▸ Academic Management ▸ Students ▸ All students**.
2. Open the **Account** column filter.
3. Enter the student’s account number in the **Account** field using the *contains* filter operator, then click **Apply**. 
4. Click **Sell** in the toolbar.
5. Expand **Orders** in the **Action Pane** and click **All sales orders** to locate the open proforma invoice.
6. Click on the link in the **Sales** column for sales order details.
   > **Note:** *The status of the sales order must be **open** to complete the next steps.*
7. Copy the sales order number from the header.
8. Close the page.
9. Navigate to **Modules ▸ Academic Management ▸ Periodic Tasks ▸ Post sales order invoice**.
10. Expand **Records to include**.
11. Click **Filter**.
12. Click the empty **Criteria** cell in the column to the right of **Sales order**.
13. Enter the sales order number copied earlier into the **Sales order** field using the *begins with* filter operator.
14. In **Period name**, select the term you want to invoice for and click **OK**.
15. To separate into an itemised invoice, select **Yes** in the **Split invoice by item** field.
16. Enter a date in the **Posting date** field, then click **OK**.
17. Return to **Modules ▸ Academic Management ▸ Students ▸ All students**.
18. Open the **Account** column filter.
19. Enter the student’s account number in the **Account** field using the *contains* filter operator.
20. Click **Orders ▸ All sales orders**.
21. Click on the link in the **Sales** column of the selected row.
22. On the **Action Pane**, select **Invoice**.
23. Under **Journals**, click **Invoice**.
24. Find and select the desired invoice.
25. Expand **View**, then select **GEMS VAT invoice**.

![Post Fee Invoices 1](./99-Images/post_fee_invoices_1.png)

![Post Fee Invoices 2](./99-Images/post_fee_invoices_2.png)

![Post Fee Invoices 3](./99-Images/post_fee_invoices_3.png)

![Post Fee Invoices 4](./99-Images/post_fee_invoices_4.png)

![Post Fee Invoices 5](./99-Images/post_fee_invoices_5.png)

![Post Fee Invoices 6](./99-Images/post_fee_invoices_6.png)

![Post Fee Invoices 7](./99-Images/post_fee_invoices_7.png)

![Post Fee Invoices 8](./99-Images/post_fee_invoices_8.png)

![Post Fee Invoices 9](./99-Images/post_fee_invoices_9.png)

![Post Fee Invoices 10](./99-Images/post_fee_invoices_10.png)

---

   >**Note:** *After posting, the system will create an Advance Tax Invoice. The following steps show how to print the advance tax invoice from the customer record in D365 F&O.*
12. Navigate to **Modules** ▸ **Credit and collections** ▸ **Customers** ▸ **All customers**.
13. Open the relevant customer record.
14. Click **Collect** ▸ **Invoices** ▸ **Invoice journal**.
15. Locate the **Advance tax invoice** created for the fee head (document type = Advance/FTI).
16. Open the **invoice record**.
17. From the Action Pane, click **Print** ▸ **Tax invoice** (which uses the FTI template).
18. Select the required print options and print or preview the invoice.
