# Pro Rata Adjustments

This section covers fee adjustments for students who start after the official term date or leave before the term ends. For new students, it explains how to enable pro rata on fee items and update enrolment dates so the system calculates fees based on actual study days. For exiting students, it covers running the fee and charge adjustment task and reviewing the resulting sales order to confirm the correct refund amount.

---


#### New Students
When a student begins their enrolment after the official term start date, it would be inequitable to charge them the full term fee. The pro rata adjustment feature addresses this by calculating the fee based on the actual number of school days the student will attend within the term. To enable this, the Pro rata field on the relevant tuition fee item must be activated, and the student's enrolment effective date must be updated to reflect their actual start date. When the fee generation batch is run, the system uses these dates to automatically calculate and apply a reduced fee, ensuring the student is only charged for the days they are present.


---

## Enable Pro Rata Adjustments

1. From the **FNO dashboard**, open **Modules** ▸ **Product information management**.
2. Expand **Products** and click **Released products**.
3. Locate and select the **tuition fee item** (e.g., FS1) that will be subject to pro rata adjustment.
4. Open the **Sell** section and locate the field called **Pro rata**.
5. Set this field to **any option except None** to activate pro rata adjustment for new students.
    > Note: *This ensures the system calculates fees based on the actual number of study days for students who start after the official term start date.*
6. Click **Save**.

![Enable Pro Rata Adjustments](./99-Images/enable_pro_rata_adjustments_1.png)

---

## Update Student Enrolment Dates

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Students** and click **All Students**.
3. Select **students** who will begin **after the term start**.
4. Select the Academic tab (if it is not visible, click on the ellipsis), click **Academic enrolments**.
5. Edit each student's enrolment record to set their **Effective date to the actual start date**.
6. Click **Save**.

![Update Student Enrolment Dates 1](./99-Images/update_student_enrolment_dates_1.png)

![Update Student Enrolment Dates 2](./99-Images/update_student_enrolment_dates_2.png)

![Update Student Enrolment Dates 3](./99-Images/update_student_enrolment_dates_3.png)

---

## Generate and Review Sales Orders

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Periodic tasks** and click **Generate sales order batch processing**.
3. In the dialog box, enter a **batch description** (e.g., Fee invoice for Term 1 2025).
4. Open the **Records to include (customers)** section and choose the appropriate **customer academic year**.
5. Open the **Records to include (fee schedule templates)** section and choose the appropriate **billing schedule**.
6. Click **OK** to run the task and generate sales orders for all students in the selected group.
7. Go back to **Modules** ▸ **Academic Management**.
8. Expand **Fee schedule batches** and click **All fee schedule batches**.
9. Open the **fee schedule batch form**.
10. Review the sales orders for each student. Confirm that students with late start dates have a reduced tuition fee amount, reflecting the pro rata calculation based on their actual study days.

![Generate and Review Sales Orders](./99-Images/generate_and_review_sales_orders_1.png)

---


## Pro Rata Adjustment for Joiners

When a student joins after the start of a term and a fee invoice has already been posted, the system cannot automatically reduce the invoice during the initial fee generation run. Instead, staff run the Generate Pro Rata Adjustment for Joiners periodic task, which creates a new sales order with a negative quantity to represent the adjustment. The task uses the student's effective start date from the student master to calculate the adjustment amount. If the student's start date changes after the first adjustment is run, the task can be rerun with the Recalculate option, which updates the quantity on the existing sales order without creating a new one.

---

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Students** and click **All Students**.
3. Search for and open the **student record**.
4. Locate the **Start date** field and enter the student's actual start date (e.g., *15 October 2025*).

> **Note:** *In a live environment, this date is updated automatically via integration from CE. Manual entry is used for testing or correction purposes only.*

5. Locate the **Effective date** field and enter the **same date** as the start date.

> **Note:** *The Effective date is the date the system uses to calculate the pro rata adjustment. Both the Start date and Effective date must match.*

6. Click **Save**.
7. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
8. Expand **Setup** and click **Fee and charge interval**.
9. Open the relevant **billing cycle** (e.g., *2526*).
10. Confirm that **weeks and months** are generated for all terms in the billing cycle.

> **Note:** *If dates are missing for a term, click **Generate** to create them. The system requires date intervals to be present for all terms before the adjustment task will calculate correctly.*

11. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
12. Expand **Setup** and click **Fee schedule parameters**.
13. Locate the **Pro rata joining** field under the **Pro rata adjustment** section.
14. Confirm the **Pro rata joining** option is set to the correct policy (e.g., *Month*).

> **Note:** *The Pro rata joining policy determines how the adjustment is calculated — for example, Month means the system adjusts based on the number of months remaining in the term.*

15. Confirm that the relevant fee items have the **Pro rata joining** field enabled. See [Enable Pro Rata Adjustments](#enable-pro-rata-adjustments) for steps to check and update this setting.
16. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
17. Expand **Periodic tasks** and click **Generate pro rata adjustment for joiners**.
18. Select the **posting date**.
19. Select the **Fee and charge interval** (billing cycle).
20. Set the **Post** option to *Open sales orders only*.

> **Note:** *This option ensures the task only processes students with open (unposted) sales orders, avoiding duplicate adjustments where a start date has changed.*

21. Under **Filter**, select the **student account** to process.
22. Turn off **Batch job** to run the task immediately.
23. Click **OK**.
24. Note the **fee schedule batch number** in the system confirmation message.
25. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
26. Expand **Fee schedule batches** and click **All fee schedule batches**.
27. Filter by the **batch number** from step 24.
28. Review the generated sales order.

> **Note:** *The sales order type displays as **Pro rata joining**. The quantity will be **-1** based on the policy setup, reflecting the adjustment amount for the joining period.*

29. If the student's start date changes after the adjustment has been run, return to the student master and update both the **Start date** and **Effective date** fields.
30. Return to **Periodic tasks** and rerun **Generate pro rata adjustment for joiners** with the **Recalculate** option selected.

> **Note:** *The Recalculate option updates the quantity on the existing sales order rather than creating a new batch. The batch number remains the same; only the quantity changes to reflect the updated start date.*

![Pro Rata Adjustment for Joiners 1](./99-Images/pro_rata_adjustment_for_joiners_1.png)

![Pro Rata Adjustment for Joiners 2](./99-Images/pro_rata_adjustment_for_joiners_2.png)

---

#### Exiting Students
When a student leaves the school before the end of a term, any fees already invoiced for the remaining days need to be adjusted and refunded. The system handles this through the Calculate fee and charge adjustment task, where staff enter the student's last day at school. The system then calculates the number of remaining school days and generates an adjustment sales order with a negative quantity representing the days to be refunded. Staff review the adjustment to confirm the quantity and net refund amount are correct before the refund is processed, ensuring the student's account is accurately reconciled upon departure.


---

## Enable Pro Rata Adjustments

1. From the **FNO dashboard**, open **Modules** ▸ **Product information management**.
2. Expand **Products** and click **Released products**.
3. Locate and select the **tuition fee item** (e.g., FS1) that will be subject to pro rata adjustment.
4. Open the **Sell** section and locate the field called **Pro rata**.
5. Set this field to **any option except None** to activate pro rata adjustment for new students.
   > Note: *This ensures the system will calculate fees based on the actual number of study days for students who start after the official term start date.*
6. Click **Save**.

![Enable Pro Rata Adjustments](./99-Images/enable_pro_rata_adjustments_1.png)

---

## Fee and Charge Adjustment

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Periodic tasks** and click **Calculate fee and charge adjustment**.
   Note: *This function is used to process adjustments for students leaving mid‑term.*
3. In the dialog box, enter the **student's last day at school**.
4. Click **OK** to allow the system to process the adjustment.
5. The system calculates the refund based on the remaining school days after the leaving date.

![Fee and Charge Adjustments](./99-Images/fee_charge_adjustment_1.png)

---

## Review the Sales Order Adjustment

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Fee schedule batches** and click **All fee schedule batches**.
3. Locate and **open the newly generated sales order** for the student.
4. Review the sales order adjustment.
5. The Quantity column shows a negative value representing the number of remaining school days to be refunded.
6. The Net amount column displays the total refund due to the student.

![Review the Sales Order Adjustment 1](./99-Images/review_the_sales_order_adjustment_1.png)

![Review the Sales Order Adjustment 2](./99-Images/review_the_sales_order_adjustment_2.png)

---
