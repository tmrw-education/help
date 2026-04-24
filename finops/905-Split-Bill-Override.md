# Split Bill Override

This section describes how to divide a student's fees between two or more fee payers with customised split percentages per fee item. It covers assigning default split responsibilities at the student level, creating a split billing fee schedule template, and configuring specific split percentages per fee item to override the default arrangement where needed.

---


#### Split Percentage by Items
By default, a student's fees are divided between fee payers according to the split percentages set on the student's record. However, there are cases where a specific fee item needs to be billed differently from the default arrangement, such as one parent covering the full cost of a particular fee while the other covers a different one. The split percent by fee items configuration allows staff to override the default split for individual fee items, assigning custom percentages per payer with a defined effective date range. This gives the school the flexibility to accommodate complex billing arrangements without changing the overall default setup.


---


---

## Create Split Billing Fee Schedule Template

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Fee schedules** and click **All fee schedules**.
3. Click **New** to create a new template (e.g., Split billing override template).
4. Set the **billing interval** (e.g., termly).
5. Enable the **early payment discount** option if required.
6. In the **Fee schedule lines** section, click **Add line**.
7. Choose the **Product name** (e.g., Tuition fee).
8. Enable **Conditions** and click Condition in the toolbar.
9. Set the **Criteria** for any necessary conditions (e.g., applies to current academic year students).
10. Add any other **fee items** required (e.g., Building Fund Fee item, which can be set to apply to all students without conditions).
11. Click **Save**.

![Create Split Billing Fee Schedule Template](./99-Images/create_split_billing_fee_schedule_template_1.png)

---

## Configure Split Percent by Fee Items

> **Note:** *Split configuration applies only when sales order generation occurs after split setup; otherwise, older invoices unaffected.*

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Setup** and click **Split percent by fee items**.
3. Click **New** to create a new record for a student.
4. Complete the following columns to configure split payment per payee:
   - Search and select a **student**.
   - Select the specific **fee item to override** (e.g., Building Fund Fee).
   - Assign the **custom split percentages** for each payer (e.g., Dad 60%, Mom 40%).
   - Specify the **effective and expiration dates** for this split configuration.
5. Repeat these steps for the other payer.
6. Click **Save**.

![Configure Split Percent by Fee Items](./99-Images/configure_split_percent_by_fee_items_1.png)

---
