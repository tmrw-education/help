# Pre‑Admission Fees

Pre-Admission Fees manages the financial side of the enrolment journey before a student is formally admitted. It covers the configuration of transaction types and posting logic for application fees, enrolment fees, and deposits, as well as manual fee entry for schools where the CE integration is not yet active. Counter payment processing, deposit refunds and forfeits, fee reversals, and the approval workflow for concession types are all handled here. Bulk scholarship and discount data can also be imported using the Excel add-in when large volumes of records need to be set up at once.

---

#### Setup
Before any pre-admission fees can be processed, the system needs to be configured with the correct transaction types and posting logic. This involves defining the categories of fees that will be charged prior to enrolment, such as application fees, enrolment fees, and enrolment deposits, and mapping each of these to the appropriate general ledger accounts. Without this setup in place, the system will not know how to record or post these transactions correctly. Fee schedule parameters also need to be updated to enable pre-admission processing across the platform.

---

## Pre-Admission Type Setup

1. From the FNO dashboard, open **Modules** ▸ **Academic Management**.
2. Expand **Setup**, then expand **Pre‑admission fees**.
3. Click **Pre‑admission types**.

>**Note:** *Review the existing types to avoid creating duplicates*.

5. Click **New** in the toolbar.
6. In **Pre-admission type**, enter a value (e.g, *Application fee*, *Enrolment fee*).
7. In **Description**, enter a value (e.g, *Application fee*, *Enrolment fee*).
8. To create an Enrolment deposit:
      - Enter Enrolment deposit in both **Pre-admission type** and **Description**.
      - Select the **Deposit** check box.

> **Note:** *The deposit check box is only selected when the pre-admission type represents a deposit.*

8. Click **Save**.

![Pre-Admission Type Setup 1](./99-Images/pre_admission_type_setup_1.png)

---

## Pre-Admission Posting Setup

1. From the FNO dashboard, open **Modules** ▸ **Academic management**.
2. Expand **Setup**, then expand **Pre‑admission fees**.
3. Click **Pre‑admission posting**.
4. Click **New** in the toolbar to create a pre-admission posting entry.
5. Select a value in **Pre-admission type** (e.g., Application fee, Enrolment fee).
6. Select a value in **Account entry** (e.g., Sales order, Free text invoice, General journal).
7. Select a value in **Posting profile**. 
8. Select a value in **Receipt journal name** that applies to online payments for this admission type.
9. Select a unique value in **Sales category**. Do not use the same sales category for multiple pre-admission types.
10. Select a value in **Item number**. This is required only for application or registration fees.
11. Click **New** to add another pre-admission type, such as Enrolment Deposit or Re-enrolment Deposit.
12. Enter the required values for each column in the table.

> **Note:** *For Enrolment Deposit and Re-enrolment Deposit types, do not select an item number. The system generates an open sales order header for fee generation.*

13. Click **Save**.

![Pre-admission_Posting_Setup_1](./99-Images/pre-admission_posting_setup_1.png)

---

## Setup Posting Logic For Each Transaction Type

1. From the FNO dashboard, open **Modules** ▸ **Academic Management**.
2. Expand **Setup**, then expand **Pre‑admission fees**.
3. Click **Pre‑admission posting**.
4. Click **New** in the toolbar to create the Application Fee entry.
5. Enter the required information for each column in the table.
6. Click **New** in the toolbar to create the Enrolment Fee entry.
7. Set values for each of the columns in the table.
8. Click **New** in the toolbar to create the Enrolment Deposit entry.
9. Set values for each of the columns in the table.
10. Click **Save**.

![Setup Posting Logic For Each Transaction Type Creation 1](./99-Images/setup_posting_logic_for_each_transaction_type_creation_1.png)

![Setup Posting Logic For Each Transaction Type Creation 2](./99-Images/setup_posting_logic_for_each_transaction_type_creation_2.png)

![Setup Posting Logic For Each Transaction Type Creation 3](./99-Images/setup_posting_logic_for_each_transaction_type_creation_3.png)

---

## All Pre-Admission Fee Tables

---

## Pre-Admission Deposits Table

---

## Pre-Admission Deposits Held

---

## Application Fee Waiver

> **Note:** *This process explains how to waive or cancel an application fee at any pre-admission stage, before or after the payment is posted.*

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Inquiries and reports**, then expand **Pre‑admission fees**.
3. Click **All pre‑admission fees**.
4. Search for or filter **student account**.
5. **Select** the row of the application to waive.
6. Click **Edit** in the toolbar.
7. Check the “waive” box in the **Waive** column.
8. Click **Save**.
9. Click **Cancel** in the toolbar.
10. Select a **Reversing posting date**.
11. Click **Ok**, then refresh the page to see the updated status.

> **Note:** *System auto-handles cancellation based on fee status:*
> - *Application fee created (no sales order) ▸ status cancelled*
> - *Application fee created (sales order and prepayment invoice created) ▸ cancels sales order*
> - *Application fee paid (customer payment posted) ▸ reverses prepayment invoice and cancels sales order*
> - *Application fee posted (sales order invoice posted) ▸ system creates and posts sales order credit note*

![Application Fee Waiver 1](./99-Images/application_fee_waiver_1.png)

![Application Fee Waiver 2](./99-Images/application_fee_waiver_2.png)

---

## Application / Registration Fee Process via Online

When a student record arrives from the student management system with an enrolment status of *Prospective* and an enrolment application status of *Registered*, the system automatically generates a registration fee request. No manual intervention is required to create the fee or the receipt — both are triggered by the student management system sending a payment link to the fee payer. Once payment is received, D365 automatically posts the receipt. This process covers how to verify the fee was created and confirm the receipt has been posted.

> **Note:** *The registration fee is automatically created when the student record syncs from the student management system with an enrolment status of Prospective and application status of Registered.*

1. From the **FNO dashboard**, open **Modules** ▸ **Academic management**.
2. Expand **Inquiries and reports**, then expand **Pre-admission fees**.
3. Click **All pre-admission fees**.
4. Search for the student by name or account number.
5. Click the **General** tab.
6. Click the link in the **Document number** field to open the sales order for the registration fee.
7. Locate the student's registration fee record.
8. Click **Back**.
9. Click the **Payment** tab.
10. Click the link in the **Receipt journal** field.
11. Locate the student's receipt journal record.

> **Note:** *The receipt is created automatically once the fee payer completes payment via the payment link sent by the student management system. No manual posting is required.*

12. Verify the receipt status shows as **Posted**.
13. Click **Lines** in the toolbar to view the posting detail for the registration fee.

![Application Registration Fee Process Online 1](./99-Images/application_registration_fee_process_online_1.png)

![Application Registration Fee Process Online 2](./99-Images/application_registration_fee_process_online_2.png)

![Application Registration Fee Process Online 3](./99-Images/application_registration_fee_process_online_3.png)

![Application Registration Fee Process Online 4](./99-Images/application_registration_fee_process_online_4.png)

![Application Registration Fee Process Online 5](./99-Images/application_registration_fee_process_online_5.png)

---

#### Cashier Receipting

Registration fees can be receipted over the counter when a fee payer makes payment in person at the school. When a student record syncs from the student management system with a status of Prospective and Registered, the system automatically creates a registration fee document ready for payment. Before processing the cashier receipt, the enrolment officer must manually push the record through to Registered status in the student management system. Staff then access the Cashier Receipt form under Accounts Receivable to process and post the payment.

## Application / Registration Fee Process via Cashier

> **Note:** *The enrolment officer must manually push the student record to Registered status in the student management system before the fee can be receipted over the counter. Then, create the Sales order invoice. This step is automated when the payment is made online.*

1. Navigate to **Academic management** ▸ **Inquiries and reports** ▸ **Pre-admission fees** ▸ **All admission fees**.
2. Use the **Pre-admission** filter to search for **Application fee**.
3. Find and select the correct student record.
4. Select **Post receipt** from the Action Pane.
5. Ensure **Preview** is toggled on.
6. View the sales order by clicking **General**.

> **Note:** *The sales order will be available in cashier receipt for payment.*

7. From the **FNO dashboard**, open **Modules** ▸ **Accounts receivable**.
8. Expand **Payments** and click **Cashier receipt**.
9. Click **New cashier receipt** in the toolbar.
10. Select the **student name** from the fee payer list.
11. Click the **Pre-admissions** tab.
12. Locate the registration fee entry and tick the **Mark** checkbox.

> **Note:** *The registration fee document is created automatically when the student record syncs from the student management system.*

13. Select the **Method of payment** from the dropdown.
14. Enter the amount in the **Amount** field.
15. Select the deposit account in the **Payment account** field.
16. Enter a value in the **Payment reference** field.
17. Verify the fee is fully allocated in the allocations summary.
18. Click **Post** in the toolbar.
19. Select your receipt delivery option:
    - *Print receipt* — prints a physical copy for the fee payer.
    - *Email receipt* — sends the receipt to the fee payer's email address on file.
20. Click **OK**.

> **Note:** *Once posted, the receipt journal flows back to the student management system, allowing the enrolment record to proceed to the next stage.*

![Application Registration Fee Cashier 1](./99-Images/application_registration_fee_cashier_1.png)

![Application Registration Fee Cashier 2](./99-Images/application_registration_fee_cashier_2.png)

![Application Registration Fee Cashier 3](./99-Images/application_registration_fee_cashier_3.png)

---

## Adhoc Forfeiting Deposits

---

#### Refunding Deposits
Enrolment deposits are designed to be refundable under certain circumstances, but they can also be forfeited if a student does not proceed with enrolment. This section covers both scenarios. When a refund is required, staff select the deposit, choose the refund bank account, and process the transaction through the journal. When a deposit is to be forfeited, the same selection process applies, but the forfeit action is used instead. In both cases, only deposits with a status of Received or Partial are eligible for processing, ensuring that incomplete or unsettled deposits are not actioned prematurely.

---

## Forfeiting Deposits

> **Note:** *Only deposits with Status = Received or Partial is eligible to be forfeited.*

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Inquiries and reports**, then expand **Pre-admission fees**.
3. Click **Pre-admission deposits**.
4. When the deposit criteria window opens, click **OK** to view all deposits.
5. **Check** the deposit to be forfeited from the far-left column.
6. Click **Forfeit** in the toolbar.
7. In the dialog box on the right, choose whether to **Preview** or **disable** the toggle to post automatically.
8. Click **OK**.
9. To preview, click the **Forfeit journal number**.
10. Open the journal by clicking **Lines** in the toolbar.
11. Select the credit line using the **checkbox**, review or edit the VAT as required, and click **Post**.
12. Click **Save** in the toolbar.                                                           
13. Review the transaction.
14. Select the credit line using the **checkbox** and click **Post**.
15. Click **Save** in the toolbar.

![Forfeiting Deposits Creation 1](./99-Images/forfeiting_deposits_creation_1.png)

![Forfeiting Deposits Creation 2](./99-Images/forfeiting_deposits_creation_2.png)

![Forfeiting Deposits Creation 3](./99-Images/forfeiting_deposits_creation_3.png)

![Forfeiting Deposits Creation 4](./99-Images/forfeiting_deposits_creation_4.png)

![Forfeiting Deposits Creation 5](./99-Images/forfeiting_deposits_creation_5.png)

![Forfeiting Deposits Creation 6](./99-Images/forfeiting_deposits_creation_6.png)

---

## Refunding Deposits

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Inquiries and reports**, then expand **Pre-admission fees**.
3. Click **Pre-admission deposits**.
4. When the deposit criteria window opens, click **OK** to view all deposits.
5. **Check** the deposit to be refunded from the far-left column.
6. Click **Refund** in the toolbar.
7. In the dialog box on the right, choose the **Bank account** for the refund.
8. Choose whether to **Preview** or disable the toggle to post automatically. Click **OK**.
9. To preview, click the **Refund journal number**.
10. Open the journal by selecting the refund journal and clicking **Lines** in the toolbar. 
11. Review the refund, select the credit line using the **checkbox**, and click **Post**.
12. Review the transaction.
13. Select the credit line using the **checkbox**, and click **Post**.
14. Click **Save** in the toolbar.

![Refunding Deposits Creation 1](./99-Images/refunding_deposits_creation_1.png)

![Refunding Deposits Creation 2](./99-Images/refunding_deposits_creation_2.png)

![Refunding Deposits Creation 3](./99-Images/refunding_deposits_creation_3.png)

![Refunding Deposits Creation 4](./99-Images/refunding_deposits_creation_4.png)

![Refunding Deposits Creation 5](./99-Images/refunding_deposits_creation_5.png)

![Refunding Deposits Creation 6](./99-Images/refunding_deposits_creation_6.png)

![Refunding Deposits Creation 7](./99-Images/refunding_deposits_creation_7.png)

---

## Cancel Enrolment Deposit or Fee

#### Reversing Unpaid Fees
There are situations where a posted enrolment fee or deposit needs to be reversed, such as when a fee was created in error or circumstances have changed before payment was received. This process allows staff to cancel a posted record by selecting it from the pre-admission fees list and applying a reverse posting date. The reversal creates an offsetting entry in the system, effectively cancelling the original transaction and restoring the record to a neutral state without permanently deleting any audit history.


---

## Reverse Enrolment Deposit or Fee

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Inquiries and reports**, then expand **Pre-admission fees**.
3. Click **All pre-admission fees**.
4. To filter the view by Posted entries, click the **Status column**.
5. Select **Posted**.
6. Select the **enrolment deposit or fee** using the checkbox on the far-left column.
7. Click **Cancel** in the toolbar.
8. In the dialog box on the right, choose the **Reverse posting date.**
9. Click OK. 

![Reverse Enrolment Deposit Or Fee Creation 1](./99-Images/reverse_enrolment_deposit_or_fee_creation_1.png)

![Reverse Enrolment Deposit Or Fee Creation 2](./99-Images/reverse_enrolment_deposit_or_fee_creation_2.png)

---


#### Enrolment Transactions
When the integration between the F&O and CE systems is not yet active, pre-admission fee records need to be created manually. This involves navigating to the pre-admission fees area and entering the relevant details for each transaction type, including application fees, enrolment fees, and enrolment deposits. Each record must then be posted to update its status and ensure it is correctly reflected in the system. This process is a temporary measure until the CE integration is fully operational and transactions can flow through automatically.


---

## Manually Adding Application Fee Records

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Inquiries and reports**, then expand **Pre-admission fees**.
3. Click **All pre-admission fees**.
4. Click **New** in the toolbar.
5. Enter the required information for each column in the table.
6. Click **Post** in the toolbar.

>**Note:** *The status updates from Created to Paid once the payment is successful.*

7. Click **Save**.

> **Note:** *Under any date and time value, user can type letter "t" then hit Enter to input today date value.*

![Manually Adding Application Fee Records](./99-Images/manually_adding_application_fee_records_creation_1.png)

---

## Manually Adding Enrolment Fee Records

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Inquiries and reports**, then expand **Pre-admission fees**.
3. Click **All pre-admission fees**.
4. Click **New** in the toolbar.
5. Enter the required information for each column in the table.
6. Click **Post** in the toolbar.

>**Note:** *The status updates from Created to Posted.*

7. Click **Save**.

![Manually Adding Enrolment Fee Records](./99-Images/manually_adding_enrolment_fee_records_creation_2.png)

---


#### Payments
Once enrolment fees and deposits have been created and posted, payments can be processed directly from the Pre-Admission Fees table. This process is used when a fee payer makes a payment in person at the school's counter, rather than through the Parent Portal (PXP). Staff select the relevant fee or deposit, choose the appropriate bank account, and confirm the payment. The system then updates the record status to reflect that payment has been received, providing an accurate and up-to-date view of each student's financial position prior to enrolment.


---
