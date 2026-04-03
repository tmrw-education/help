# Sibling Discounts

This section explains how to configure and apply discounts based on a student's position within their family. It covers setting up sibling order numbers, creating customer price and discount groups, building trade agreements that define the discount percentage for each sibling position, linking those agreements to tuition fee items, and running the batch process to generate sales orders with sibling discounts applied.

---


#### Sibling Order
The sibling discount feature allows the school to automatically apply fee reductions based on how many children from the same family are currently enrolled. To make this work, each student needs to be assigned a sibling order number that reflects their position within the family, with the eldest being 1, the second child being 2, and so on. These numbers are then mapped to customer price and discount groups, which are in turn linked to trade agreements that define the discount percentage for each sibling position. Once this configuration is complete and the trade agreement is posted, the system applies the correct discount automatically when fee invoices are generated.


---

## Sibling Order Setup

> **Note:** *For each possible child in a family, assign a sibling order number (e.g., 1 for first child, 2 for second, up to your maximum, such as 9). Use 0 for students who are not yet current (e.g., future students or those transitioning between programs).*

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Setup** and click **Sibling order**.
3. Click **New** to create sibling order entries.
4. In the first column enter the **sibling order number** and in the second column, enter the **description**.
5. Click **Save**.
6. Go back to **Modules** ▸ **Sales and marketing**.
7. Expand **Prices and discounts** and click **Customer price/discount groups**.
8. In the Show field, change the value to **Line discount group**.
9. Click **New** to assign the correct sibling order and complete the following columns:
   - Enter the sibling order number in the Price groups column (e.g., 1, 2, 3).
   - Name the entry in the next column (e.g., First Child, Second Child).
   - In the Sibling column, use the dropdown and match this with the sibling order.
10. Repeat as many times as required.
11. Click **Save**.

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

---
