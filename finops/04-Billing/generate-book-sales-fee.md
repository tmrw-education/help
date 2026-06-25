---
id: generate-book-sales-fee
summary:
  - "Verify book fee prices in **Product information management ▸ Released products ▸ Sell ▸ Sales price**, create a fee schedule template for book sales in **All fee schedules**, then run **Generate sales order batch processing** filtering by the student account."
  - "Before starting, ensure a book fee item has already been created."
keywords: [book sales fee, book fee, flat fee book, fee schedule book, sales order book fee, book fee generation]
video:
  youtube:
  bunny:
---

# Generate Flat Fee for Book Sales

Before starting, ensure a book fee item has already been created.

1. Verify book fee prices

   From the **FNO dashboard**, navigate to **Modules ▸ Product information management ▸ Products ▸ Released products**. Filter the **Product name** column for *Book fees*. Click **Sell** on the Action Pane and under **View** select **Sales price**. Confirm prices are set up for all required grades, curricula, and streams.

2. Create a fee schedule template for book sales

   Navigate to **Modules ▸ Academic management ▸ Fee schedules ▸ All fee schedules** and click **New**. Set **Customer type** to *Student*, enter a **Description**, and select a **Fee and charge interval**. In **Fee schedule lines**, click **+ Add line** and choose the book fee item. Click **Save and close**.

3. Generate the sales order and send the proforma invoice

   Navigate to **Modules ▸ Academic management ▸ Periodic tasks ▸ Generate sales order batch processing**. Set a **Fee generation date** within the fee and charge interval, select the **Fee and charge interval**, set **Posting option** to *Create sales order*, enter a **Batch description**, and select the **book sales fee schedule template**. In **Records to include**, filter by the **Student account number**. Click **OK**.

   Return to **Modules ▸ Academic management ▸ Students ▸ All students**, open the student record, click **Sell ▸ Orders ▸ All sales orders**, and select the generated sales order. Click **Confirm sales order**, enable **Print confirmation** and **Use print management destination**, then click **OK** to send the proforma invoice.

![Generate Flat Fee for Book Sales — the Released products Sales price view for book fee items showing prices by grade, curriculum, and stream](./images/generate-book-sales-fee-1.png)

![Generate Flat Fee for Book Sales — the new fee schedule template with the book fee item in the fee schedule lines](./images/generate-book-sales-fee-2.png)

![Generate Flat Fee for Book Sales — the Generate sales order batch processing dialog with the book sales template and student account filter](./images/generate-book-sales-fee-3.png)

![Generate Flat Fee for Book Sales — the Confirm sales order dialog with Print confirmation and Use print management destination enabled](./images/generate-book-sales-fee-4.png)
