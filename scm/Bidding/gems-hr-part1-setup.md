---
id: gems-hr-part1-setup
summary:
  - "Raise a **Purchase Requisition** in **D365 Finance & Operations** with a line item for each product or service."
  - "Log in to the sourcing portal, create a new project, and select **RFQ** or **RFP**."
  - "Link the purchase requisition so its line items populate the project automatically."
keywords: [purchase requisition, PR, F&O, dynamics, sourcing project, new project, RFQ, RFP, create project, link PR, requisition, setup, procurement]
video:
  youtube:
  bunny:
---

# Part 1 — Setup: Creating a PR and Sourcing Project

Running a sourcing event requires two things in place first: a purchase requisition raised in **D365 Finance & Operations**, and a new project created in the sourcing portal. This section covers both.

1. Create a Purchase Requisition in F&O

   Log in to **D365 Finance & Operations** and open **Procurement and sourcing** ▸ **Purchase requisitions** ▸ **All purchase requisitions**. Click **New** and enter the requisition **Name** and the relevant **Department** or business unit. Add each product or service you are procuring as a separate line item, including a description, quantity, and estimated unit price. Click **Save**, then **Submit** for approval if your organisation's workflow requires it.

   > **Note:** *The requisition does not need to be fully approved before you build the sourcing project, but it must be saved and visible in the system so you can link it in the next step.*

2. Create a New Sourcing Project

   Log in to the sourcing portal and open **Projects** from the top menu. Click **New project** and select the **Process type** — **RFQ** (Request for Quotation) or **RFP** (Request for Proposal) depending on the nature of the procurement. Enter a clear **Project name** and a short **Description** summarising the scope. Enter the **Price weighting** if it applies to this procurement.

   > **Note:** *Price weighting cannot be changed after vendors have been invited.*

3. Link the Purchase Requisition

   Open the **Requisitions** screen within the new project and search for the purchase requisition by its number or description. Select it and click **Confirm**. The line items from the requisition populate into the project automatically. Review them for accuracy — check descriptions, quantities, and units of measure — before moving on to Part 2.
