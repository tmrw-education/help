# Reenrolment & Promotion — Financial Blocking

This section covers the financial check blocking process that runs during pre-promotion and reenrolment activities. It includes how students are blocked when their fee balance exceeds the configured threshold, how authorised staff can apply a financial check override for students with a payment arrangement in place, and how to clear overrides in bulk at the start of a new cycle.

---

#### Financial Check Setup
 
The financial check setup defines the outstanding fee balance threshold used when the student management system polls Finance & Operations to determine whether a student is cleared for reenrolment. Thresholds are configured by fee head (dimension value), meaning the system can apply different acceptable balance limits depending on the type of fee. When a reenrolment check is triggered, the student's outstanding balance for each fee head is compared against the configured threshold. If the balance exceeds the threshold for any configured fee head, the student does not receive financial clearance.
 
---
 
## Financial Check Setup
 
1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Setup** and click **Fee schedule parameters**.
3. In the **General** tab.
4. Expand the **Financial dimension** section.
5. Click **+ New** in the threshold table.
6. Enter the **Threshold limit**.
> **Note:** *The threshold limit is a monetary amount. If a student's outstanding balance for a given fee head meets or exceeds this amount, the student will not receive financial clearance for reenrolment.*
 
7. Select the **Dimension value** from the dropdown.
> **Note:** *The dimension value represents the fee head (fee type) against which the outstanding balance will be evaluated. The Description field defaults from the selected fee head.*
 
8. Repeat steps 5–7 for each fee head that requires a threshold.
9. Click **Save**.
> **Note:** *When the student management system requests reenrolment clearance, it checks the student's outstanding balance by fee head against each configured threshold. A student is only financially cleared if their balance for every configured fee head is below the threshold.*
 
![Financial Check Setup 1](./99-Images/financial_check_setup_1.png)

---

#### Reenrolment & Promotion — Financial Blocking

During pre-promotion activities, the student management system polls Finance & Operations to check each student's outstanding fee balance before sending reenrolment invitations. This check runs automatically, typically in Term 2 and Term 3, and is driven by a threshold amount configured in the fee parameters. If a student's balance exceeds the threshold, the system blocks them from reenrolment and returns a status to the student management system indicating that the invitation should not be sent. A school staff member then contacts the family to arrange payment. Once the balance is cleared and the system polls again, the student's status updates to reenrolment open.

---

## Blocking Due to Fee Outstanding

> **Note:** *The fee balance threshold that triggers a block is configured in the fee schedule parameters. Ensure this has been set before the reenrolment polling period begins.*

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Students** and click **All students**.
3. Open the relevant **student** record.
4. Confirm the student's status shows as **Blocked**.

> **Note:** *Students with a balance exceeding the configured threshold are automatically assigned a status of Blocked. A notification is sent to the student management system to prevent reenrolment progression.*

5. Contact the family to arrange payment of the outstanding balance.
6. Once payment is received and the system polls again, confirm the student's status updates to **Reenrolment open**.

![Blocking Due to Fee Outstanding 1](./99-Images/blocking_due_to_fee_outstanding_1.png)

---

#### Overriding the Financial Check

Where a payment arrangement is in place and the school does not want to block a student's reenrolment, an authorised user can apply a financial check override directly on the student's record. When the override is active, the system bypasses the financial check for that student on the next poll and their status updates to reenrolment open. A reason code is required to create an audit record for the override.

---

## Overriding the Fee Check for Reenrolment

> **Note:** *This action requires appropriate user permissions. The override applies to the next system poll — it does not permanently exempt the student from the financial check.*

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Students** and click **All students**.
3. Open the relevant **student** record.
4. Set the **Financial check override** toggle to **Yes**.
5. Select a **Reason code** from the dropdown.

> **Note:** *Reason codes are configured by the school (e.g., Fee check — payment plan in place). The reason code creates an audit record for the override.*

6. Click **Save**.

> **Note:** *On the next system poll, the student will be excluded from the financial check and their status will update to Reenrolment open.*

![Overriding the Fee Check for Reenrolment 1](./99-Images/overriding_the_fee_check_for_reenrolment_1.png)

---

#### Clearing Overrides in Bulk

At the start of a new year or after a promotion process, overrides set in the previous cycle need to be cleared. Staff can add the **Financial check override** column to the **All Students** list view to identify all students with an active override. From there, overrides can be cleared individually by unchecking the checkbox, or in bulk by exporting the list to Excel, clearing the values in the file, and importing it back into the system.

---

## Clearing Fee Check Overrides

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Students** and click **All students**.
3. Right-click any column header and select **Insert field**.
4. Search for and add the **Financial check override** field.
5. Click **Update**.

> **Note:** *The Financial check override column displays as a checkbox. Once added, the column persists in the view for future use.*

6. Filter or sort the list by the **Financial check override** column to display only students with an active override.
7. Clear overrides using one of the following methods:
   - *Individual* — uncheck the **Financial check override** checkbox directly in the list for each student.
   - *Bulk via Excel* — click **Export to Excel**, clear the override values in the exported file, then import the file back into the system.

![Clearing Fee Check Overrides 1](./99-Images/clearing_fee_check_overrides_1.png)

![Clearing Fee Check Overrides 2](./99-Images/clearing_fee_check_overrides_2.png)

![Clearing Fee Check Overrides 3](./99-Images/clearing_fee_check_overrides_3.png)

---
