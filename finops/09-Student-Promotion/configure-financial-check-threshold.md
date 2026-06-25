---
id: configure-financial-check-threshold
summary:
  - "Open **Academic Management ▸ Setup ▸ Fee schedule parameters ▸ General tab ▸ Financial dimension** section."
  - "Add a threshold limit and dimension value (fee head) for each fee type requiring a balance check, then Save."
keywords: [financial check threshold, fee balance threshold, re-enrolment check, fee schedule parameters, financial dimension, threshold limit]
video:
  youtube:
  bunny:
---

# Configure Financial Check Threshold

The financial check setup defines the outstanding fee balance threshold used when the Student Management System polls Finance & Operations to determine whether a student is cleared for re-enrolment. Thresholds are configured by fee head (dimension value), so different acceptable balance limits can apply by fee type.

1. Open Fee schedule parameters

   From the **FNO dashboard**, open **Modules ▸ Academic Management**, expand **Setup**, and click **Fee schedule parameters**. Open the **General** tab and expand the **Financial dimension** section.

2. Add thresholds by fee head

   Click **+ New** and complete the following for each fee type that requires a balance check:

   - **Threshold limit** — enter a monetary amount. If a student's outstanding balance for this fee head meets or exceeds this amount, they will not receive financial clearance.
   - **Dimension value** — select the fee head from the dropdown. The Description field defaults from the selected fee head.

   Repeat for each fee head that requires a threshold.

3. Save

   Click **Save**. When the Student Management System requests re-enrolment clearance, it checks the student's outstanding balance by fee head against each configured threshold. A student is only financially cleared if their balance for every configured fee head is below the threshold.

![Configure Financial Check Threshold — the Fee schedule parameters General tab with the Financial dimension section and threshold table](./images/configure-financial-check-threshold-1.png)
