# Sibling Discounts

This section explains how to configure and apply discounts based on a student's position within their family. It covers setting up sibling order numbers, creating customer price and discount groups, building trade agreements that define the discount percentage for each sibling position, linking those agreements to tuition fee items, and running the batch process to generate sales orders with sibling discounts applied.

---





---

## Trade Agreement

1. From the **FNO dashboard**, open **Modules** ▸ **Sales and marketing**.
2. Expand **Prices and discounts** and click **Trade agreement journals**.
3. Click **New**.
4. In the **Name** column, select Sibling discount.
5. Change view to **Lines**.
6. Click **New** and complete the following columns:
   - Change **Party code type** to Group.
   - Set **Account selection** to the number of siblings (e.g., First child).
   - Change **Product code** type to Group.
   - Set **Item relation** to Sibling discount.
7.  In Details, set the policy **start and end date**.
     > **Note:** *Leave the end date blank to run the discount indefinitely.*
8. Enter the discount amount in **Discount percentage 1** (e.g., 10.00 for 10%).
9. Click **New** to add the second child discount; repeat these steps as needed.
10. Click **Save**.
11. Click **Post** to activate the trade agreement policy.
12. Go back to **Modules** ▸ **Product information management**.
13. Expand **Products** and click **Released products**.
14. Open each **line** related to tuition.
15. On the next screen, expand the **Sell** section.
16. Scroll down to the **Line discount group** dropdown and choose the Sibling discount trade agreement.
17. Click **Save**.
18. Repeat for other tuition fee items.

![Trade Agreement Creation 1](./99-Images/trade_agreement_creation_1.png)

![Trade Agreement Creation 2](./99-Images/trade_agreement_creation_2.png)

![Trade Agreement Creation 3](./99-Images/trade_agreement_creation_3.png)

![Trade Agreement Creation 4](./99-Images/trade_agreement_creation_4.png)

---

## Sibling Order Calculation

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Fee schedules** and click **All fee schedules**.
3. Open the relevant **template(s)** and ensure all tuition fee items are correctly listed.
4. Go back to **Modules** ▸ **Academic Management**.
5. Expand **Periodic tasks** and click **Generate sales order batch processing**.
6. In the dialog, enter a **batch description** (e.g., School Fee Invoice Term 1).
7. Expand **Records to Include (Customers)** and select the **customer group** (e.g., all students in Academic Year 1).
8. Expand **Records to Include (Fee schedule templates)** and choose the correct **fee schedule template**.
9. Click **OK** to run the task in the background and generate sales orders for all selected students.
10. When the task completes, go back to **Modules** ▸ **Academic Management**.
11. Expand **Fee schedule batches** and click **All fee schedule batches**.
12. Open the latest batch and review the sales orders.
    
![Sibling Order Calculation Creation 1](./99-Images/sibling_order_calculation_creation_1.png)

---
