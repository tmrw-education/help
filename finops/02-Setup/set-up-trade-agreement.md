---
id: set-up-trade-agreement
summary:
  - "Create a Sibling discount journal in **Sales and marketing ▸ Prices and discounts ▸ Trade agreement journals**, add lines for each sibling position with discount percentages, then Post to activate."
  - "Link tuition fee items to the sibling discount line discount group in **Released products ▸ Sell ▸ Line discount group**."
keywords: [trade agreement, sibling discount, trade agreement journal, line discount group, sibling discount journal, sibling order discount]
video:
  youtube:
  bunny:
---

# Set Up Trade Agreement (Sibling Discount)

Trade agreements define the discount percentages applied to students based on their sibling order position. A sibling discount journal is created in Sales and Marketing with a separate line for each child position and the corresponding discount rate.

1. Create the trade agreement journal

   From the **FNO dashboard**, open **Modules ▸ Sales and marketing**, expand **Prices and discounts**, and click **Trade agreement journals**. Click **New** and in the **Name** column select **Sibling discount** (④). Change view to **Lines** (⑤).

   ![Set Up Trade Agreement — the Trade agreement journals list with the new Sibling discount journal](./images/set-up-trade-agreement-1.png)

2. Add discount lines

   Click **New** and complete the following columns:

   - **Party code type** — change to **Group**.
   - **Account selection** — select the sibling position (e.g., *First child*).
   - **Product code type** — change to **Group**.
   - **Item relation** — set to **Sibling discount** (⑥).

   In Details, set the policy **start and end date** (leave end date blank to run indefinitely) (⑦). Enter the discount amount in **Discount percentage 1** (e.g., *10.00* for 10%) (⑧).

   Click **New** to add the next sibling position and repeat until all positions are configured (⑨).

   ![Set Up Trade Agreement — the Lines view with discount lines for each sibling position, Party code type, Account selection, and Discount percentage 1](./images/set-up-trade-agreement-2.png)

3. Save and Post

   Click **Save**, then click **Post** (⑮) to activate the trade agreement policy.

4. Link items to the sibling discount group

   Navigate to **Modules ▸ Product information management**, expand **Products**, and click **Released products**. Open each tuition-related item (⑭). Expand the **Sell** section, scroll to **Line discount group** (⑯), and select the Sibling discount trade agreement. Click **Save**. Repeat for all tuition fee items.

   ![Set Up Trade Agreement — the Released products Sell section with the Line discount group field set to Sibling discount](./images/set-up-trade-agreement-3.png)

   ![Set Up Trade Agreement — multiple tuition items with the Line discount group assigned](./images/set-up-trade-agreement-4.png)
