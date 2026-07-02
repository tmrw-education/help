---
gems: true
id: transfer-gems-reward-points
summary:
  - "Process the GEMS reward payment in **Cashier receipt** using the GEMSPR method of payment, click **Get GEMS reward points**, mark the invoice, and Post."
  - "Check the trial balance to determine the transfer amount, then run **Academic management â–¸ Periodic tasks â–¸ Transfer GEMS reward balances**."
  - "Validate and post the generated journal in General ledger â€” after posting, the GEMS reward balance clears to zero."
keywords: [GEMS reward points, transfer reward balance, GRL, GEMSPR, intercompany reward, GEMS rewards]
video:
  youtube:
  bunny:
---


# Transfer GEMS Reward Points

At day-end, the balance of GEMS reward payments collected at the school must be transferred to the GEMS rewards company (GRL). This involves processing the GEMS reward payment in the cashier form, checking the transfer amount on the trial balance, and running the periodic transfer task to move the balance.

1. Process the GEMS reward payment

   From the **FNO dashboard**, open **Modules â–¸ Accounts receivable â–¸ Payments â–¸ Cashier receipt** and click **+ Cashier receipt**. Identify the student by their account number, then complete the payment line:

   - Click **New**.
   - Set **Method of payment** to *GEMSPR*.
   - Enter the **Amount** and **Payment reference**.
   - Click **Get GEMS reward points**, then mark the desired invoice.

   Click **Post**, then **OK**. The system automatically updates the reward points for the GEMS system.

2. Determine the transfer amount from the trial balance

   Go to **Modules â–¸ General ledger â–¸ Inquiries and reports â–¸ Trial balance**. Enter today's date as both the **From date** and **To date**, then filter by **Main account** â€” select the ledger account used as the GEMSPR method of payment. The transfer balance amount = debit âˆ’ credit.

3. Run the transfer

   Go to **Modules â–¸ Academic management â–¸ Periodic tasks â–¸ Transfer GEMS reward balances**. Complete the following:

   - **Posting date** â€” enter the posting date.
   - **From date / To date** â€” enter the same dates used in the trial balance.
   - **Preview** â€” select *Yes* to review the journal before posting, or *No* to auto-create and post.

   Click **OK**. The system generates a journal number.

4. Validate and post the journal

   Go to **Modules â–¸ General ledger â–¸ Journal entries â–¸ General journals** and open the generated journal. Click **Lines** and validate:

   - **Account** â€” the system defaults the General ledger based on the Method of payment setup.
   - **Offset account** â€” the system populates the offset company and General ledger from the Receipt intercompany mapping setup.
   - Confirm the credit amount equals debit âˆ’ credit from the trial balance.

   Click **Post**. After posting, the GEMS reward balance clears to zero and the General ledger account in the GRL company increases. Running this process again on the same date will produce no data if there is no remaining balance.

![Transfer GEMS Reward Points â€” the Cashier receipt form with GEMSPR selected and Get GEMS reward points button](./images/transfer-gems-reward-points-1.png)

![Transfer GEMS Reward Points â€” the Trial balance filtered by the GEMSPR main account showing debit and credit amounts](./images/transfer-gems-reward-points-2.png)

![Transfer GEMS Reward Points â€” the journal lines in General journals showing the offset account and credit amount](./images/transfer-gems-reward-points-3.png)
