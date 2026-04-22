# Concessions

This section covers the configuration and application of staff concessions and other concession types within the fee management system. It includes setting up charge codes in the auto charges table, creating discount codes linked to those charge codes, recording concession entitlements against students in the dedicated concession tables, generating estimated concession amounts, and applying those concessions to new and existing sale orders.

---

#### Staff Concession

Staff concessions allow the school to apply fee reductions to students who are dependants of staff members. The system manages staff concessions through two dedicated tables: the Staff Tuition Fee Concession table for staff-related reductions, and the Scholarship and Discount table for other concession types such as corporate or commercial concessions. Before a concession record can be added to either table, a discount code and a linked charge code must be configured. Once set up and approved, the system calculates an estimated concession amount and inserts a charge record into the auto charge table, which is then applied to new or existing sale orders when fees are generated.

---

## Setup Charge Code

1. From the **FNO dashboard**, open **Modules** ▸ **Accounts receivable**.
2. Expand **Charges setup** and click **Auto charges**.
3. Change the **Level** to **Line**.
4. Click **New** in the toolbar.
5. Enter the **Charge description**.

> **Note:** *Create one charge code per concession type — for example, a separate code for commercial concessions and for staff concessions.*

6. Configure the required charge settings for the concession type.
7. Click **Save**.

![Setup Charge Code 1](./99-Images/setup_charge_code_1.png)

---

## Set Up Staff Concession Code

> **Note:** *A charge code must be created and linked before completing this setup. See [Setup Charge Code](#setup-charge-code).*

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Setup** and click **Scholarship and discount**.
3. Click **New** in the toolbar.
4. Enter the **name** of the concession.
5. Select the **Type**:
   - *Staff concession* — use for staff tuition fee reductions. The record is captured in the Staff Tuition Fee Concession table.
   - *Scholarship and discount* — use for other concession types such as corporate or commercial concessions. The record is captured in the Scholarship and Discount table.
6. Select the **Charge code** to link to this discount code.
7. Click **Activate** in the toolbar to make the code available for use.
8. In the **Approval** section, configure the approval workflow:
   - Enable **Approval** if concession records in the Scholarship and Discount table require an approver.
   - Identify the **user** authorised to approve concession records.

> **Note:** *The approval function is not available for records in the Staff Tuition Fee Concession table. Those records are automatically set to Approved status.*

9. Click **Save**.

![Set Up Staff Concession Code 1](./99-Images/set_up_staff_concession_code_1.png)

---
