---
id: raise-transfer-certificate-fee
summary:
  - "Open **Accounts receivable ▸ Invoices ▸ All free text invoices**, click **New from template**, and select the **TCINV** template."
  - "Set the customer account, enter the description, configure financial dimensions, then Post."
keywords: [transfer certificate, transfer certificate fee, free text invoice, TCINV template, student withdrawal, TC fee]
video:
  youtube:
  bunny:
---

# Raise a Transfer Certificate Fee

When a student withdraws and requests a transfer certificate, a free-text invoice is generated using the preconfigured TCINV template. In a live environment, this step is triggered by a request from the customer experience team.

1. Create the invoice from template

   From the **FNO dashboard**, open **Modules ▸ Accounts receivable**, expand **Invoices**, and click **All free text invoices**. Click **New from template** in the Action Pane (③), select **TCINV** in the **Template** field (④), and complete the following:

   - **Customer account** (⑤) — enter or select the fee payer.
   - **Create invoice by using the default values from** — select *Free text invoice template* (⑥).

   Click **OK**. The template pre-populates the invoice line with the transfer certificate fee configuration.

   ![Raise Transfer Certificate Fee — the All free text invoices list with New from template selected and TCINV chosen](./images/raise-transfer-certificate-fee-1.png)

2. Complete invoice details

   In the **Description** field, enter a description (⑧). Scroll down and expand the **Line details** tab (⑨), then open the **Financial dimensions line** tab (⑩). Set the financial dimensions (⑪) — select **Curriculum**, **School Levels**, and **Year Group**. The **Fee Head** field is auto-populated based on the free-text invoice template setup.

   ![Raise Transfer Certificate Fee — the invoice form with Description and the Line details Financial dimension tab open](./images/raise-transfer-certificate-fee-2.png)

3. Post the invoice

   Click **Post** (⑫), set **Batch processing** to *No* (⑬), click **OK**, and close the page.

   ![Raise Transfer Certificate Fee — the Post dialog with Batch processing set to No](./images/raise-transfer-certificate-fee-3.png)
