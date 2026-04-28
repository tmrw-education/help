## Post Fee Invoices

1. Navigate to **Modules ▸ Academic Management ▸ Students ▸ All students**.
2. Open the **Account** column filter.
3. Enter the student’s account number in the **Account** field using the *contains* filter operator, then click **Apply**.

![Post Fee Invoices 1](./99-Images/post_fee_invoices_1.png)
   
4. Click **Sell** in the toolbar.
5. Expand **Orders** in the **Action Pane** and click **All sales orders** to locate the open proforma invoice.

![Post Fee Invoices 2](./99-Images/post_fee_invoices_2.png)

6. Click on the link in the **Sales** column for sales order details.
   > **Note:** *The status of the sales order must be **open** to complete the next steps.*

![Post Fee Invoices 3](./99-Images/post_fee_invoices_3.png)

7. Copy the sales order number from the header.

![Post Fee Invoices 4](./99-Images/post_fee_invoices_4.png)

8. Close the page.
9. Navigate to **Modules ▸ Academic Management ▸ Periodic Tasks ▸ Post sales order invoice**.
10. Expand **Records to include**.
11. Click **Filter**.

![Post Fee Invoices 5](./99-Images/post_fee_invoices_5.png)

12. Click the empty **Criteria** cell in the column to the right of **Sales order**.
13. Enter the sales order number copied earlier into the **Sales order** field using the *begins with* filter operator.

![Post Fee Invoices 6](./99-Images/post_fee_invoices_6.png)

14. In **Period name**, select the term you want to invoice for and click **OK**.

![Post Fee Invoices 7](./99-Images/post_fee_invoices_7.png)

15. To separate into an itemised invoice, select **Yes** in the **Split invoice by item** field.
16. Enter a date in the **Posting date** field, then click **OK**.

![Post Fee Invoices 8](./99-Images/post_fee_invoices_8.png)

17. Return to **Modules ▸ Academic Management ▸ Students ▸ All students**.
18. Open the **Account** column filter.
19. Enter the student’s account number in the **Account** field using the *contains* filter operator.
20. Click **Orders ▸ All sales orders**.
21. Click on the link in the **Sales** column of the selected row.
22. On the **Action Pane**, select **Invoice**.
23. Under **Journals**, click **Invoice**.

![Post Fee Invoices 9](./99-Images/post_fee_invoices_9.png)

24. Find and select the desired invoice.
25. Expand **View**, then select **GEMS VAT invoice**.

![Post Fee Invoices 10](./99-Images/post_fee_invoices_10.png)

---

## View Approved Scholarship and Discount Fees

1. Navigate to **Modules ▸ Academic Management ▸ Inquiries and reports ▸ Fee schedules ▸ Scholarship and discount details**.
2. Select the student to apply the scholarship or discount.
3. In the Action Pane, open the **General** tab and click **Generate concession**.

![View_Approved_Scholarship_and_Discount_Fees_1](./99-Images/view_approved_scholarships_and_discount_fees_1.png)

4. Select the **Fee and Charge Interval** from the dropdown and click **OK**.
5. Open the **Concession** tab to view the estimated discount.
6. Navigate to **Academic Management ▸ Periodic Tasks ▸ Generate Sales Order Batch Processing**.
7. Enter the **Fee Generation Date**, **Posting Date**, **Fees and Charge Interval**, and **Batch Description**.
8. Select the required **Fee Schedule Template**.
9. In the **Records to include** section, select **Filter**.

![View_Approved_Scholarship_and_Discount_Fees_2](./99-Images/view_approved_scholarships_and_discount_fees_2.png)

10. In the **Student account** field, enter the **Student ID** and select **OK**.
11. Select **OK** to generate the Fee Schedule Batch.
12. Navigate to **Academic Management ▸ Fee Schedule Batches ▸ All Fee Schedule Batches**.
13. In the **Fee Schedule Batch Number** field, select the batch just created.
14. Select the **Sales Order** hyperlink to open the sales order.
15. At line level, expand **Financials** and select **Maintain Charges**.

![View_Approved_Scholarship_and_Discount_Fees_3](./99-Images/view_approved_scholarships_and_discount_fees_3.png)

16. Confirm that the discount is displayed on the charges page.
17. In the Sales Order Action Pane, select **Totals** to verify that the total charges reflect the applied discount.

