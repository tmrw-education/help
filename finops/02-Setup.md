# Setup

Before fees can be generated, processed, or settled across the platform, a range of foundational settings must be configured correctly. This section covers the full scope of that setup work, including fee schedule parameters, fee and charge intervals, gender and academic year configuration, visa types, split billing percentages, fee categories, payment option setup, curriculum and stream configuration, advanced discount policies, deposit policies, sibling order and trade agreement setup, non-tuition item pricing, and the linkage of tuition fee items to academic years. Most of this configuration is completed once during initial implementation and revisited when new functionality is enabled or organisational settings change.

---

## Fee Schedule Parameters (Product)

1. From the **FNO dashboard**, open **Modules** ▸ **Academic management**.​
2. Expand **Setup** and click **Fee schedule parameters**.​
3. On the **General** tab, expand each section and complete the fields based on your school’s requirements. This includes:​
    - Deposit handling journals for refund and forfeit​
    - Payment journals for online, over-the-counter, miscellaneous​
    - User group permissions for generated sales orders​
    - Staff concession cancellation and adjustment setup​

> **Note:** *All journals used in this setup must already exist in the system. The selected user group controls who can edit generated sales orders. Staff concession settings apply when a staff contract ends.​*

4. In **Financial activities to Student**:​
    - Select **No** when posting financial transactions to the **Fee payer account**​
    - Select **Yes** when posting financial transactions directly to the **student account**​
5. Click the **Integrations** tab.​
6. Select the **Relationship type** field, select **Financial responsibility**, then **Sibling**.​

> **Note:** *Financial responsibility is used for parents or guardians who pay fee invoices. Sibling is used for brother/sister relationships and for calculating sibling order in fee calculations.* ​

8. Select the **ID value** that matches the configured relationship type.​
9. Click the **Pro rata adjustment** tab.​
10. Select the **Pro rata adjustment joining** option.​
11. Select the **Pro rata adjustment leaving** option.​
12. Select the **Leaving date** option:​
    - *Last day attended* — use when the school manages the leaving date as LDA.​
    - *Expiration date* — use when the school manages the leaving date as the expiration date in the Academic enrolment table.​
13. Click the **Number sequences** tab and confirm all number sequences are set up for all references.​
14. Click **Save**.

![Fee_Schedule_Parameters_1](./99-Images/fee_schedule_parameters_(product)_1.png)

![Fee_Schedule_Parameters_2](./99-Images/fee_schedule_parameters_(product)_2.png)

---

## Fee Schedule Parameters (GEMS)

1. From the **FNO dashboard**, open **Modules** ▸ **Academic management**.
2. Expand **Setup** and click **Fee schedule parameters**.
3. On the **General** tab, expand each section and complete the fields based on your school's requirements.
4. Click the **Integrations** tab.
5. Select the **Relationship type**.

> **Note:** *Relationship type = Sibling is used for brother/sister relationships and for calculating sibling order.*

7. Select the **ID**.
8. Click the **Pro rata adjustment** tab.
9. Select the **Pro rata adjustment joining** option.
10. Select the **Pro rata adjustment leaving** option.
11. Select the **Leaving date** option:
    - *Last day attended* — use when the school manages the leaving date as LDA.
    - *Expiration date* — use when the school manages the leaving date as the expiration date in the Academic enrolment table.
12. Click the **Number sequences** tab and confirm all number sequences are set up for all references.
13. Click **Save**.

![Fee Schedule Parameters GEMS 1](./99-Images/fee_schedule_parameters_gems_1.png)

![Fee Schedule Parameters GEMS 2](./99-Images/fee_schedule_parameters_gems_2.png)

![Fee Schedule Parameters GEMS 3](./99-Images/fee_schedule_parameters_gems_3.png)

![Fee Schedule Parameters GEMS 4](./99-Images/fee_schedule_parameters_gems_4.png)

---

## Fee & Charge Interval Setup

1. From the **FNO dashboard**, open **Modules** ▸ **Academic management**.
2. Expand **Setup** and click on **Fee and Charge Interval**.
3. Click **New** in the toolbar to create a new interval.
4. Enter details in **Fee generation interval ID** (e.g., 2025-2026).
5. Enter details in the **Description** field.
6. Enter the **Start date** and **End date** for the school academic year (billing cycle).
7. **Choose the Period option** from the dropdown (e.g., Month, Week) based on the school’s pricing method.
8. Enter the **Number of intervals** to specify how many invoices will be generated in the academic year (e.g. 3 for termly fees, or 10 for monthly). This should match the school’s billing frequency.
9. Click **Generate** in the toolbar to create the periods.
10. For each period:
    - Enter details in **Period description**.
    - Enter the **Start date** and **End date**.
    - Click **Update unit quantity** so the system calculates the number of months or weeks within the period.
    - Enter the **Due date** to define when payment is expected.
    - Enter the **Revenue recognition date** if required for deferral.
11. Click **Weeks** in the Periods toolbar, then click the **Generate** button to automatically populate the weeks’ start and end dates for each period. This is only required for pro-rata joining and leaving policies.
12. Click **Months** in the Periods toolbar, then click the **Generate** button to automatically populate the months’ start and end dates for each period.
13. Validate entered data for accuracy, then click **Save**.

![Fee_and_Charge_Interval_Setup_1](./99-Images/fee_and_charge_interval_setup_1.png)

![Fee_and_Charge_Interval_Setup_2](./99-Images/fee_and_charge_interval_setup_2.png)

---

## Gender Setup

1. Navigate to **Modules ▸ Academic management ▸ Setup ▸ Gender setup**.
2. Click **New**.
3. Enter a value in the **Gender** field.
4. Enter the name in the **Name** field.

![Gender_Setup_1](./99-Images/gender_setup_1.png)

---

#### Academic Year
 
Academic year setup defines the academic calendar structure used across the platform and must align with the configuration in the student management system, as finance is downstream from both. Each academic year record is assigned a sequence number, a shared academic year ID, and an optional school-specific description. Year group financial dimensions are linked to each record to automate accounting transactions. Once the academic year is created, tuition fees for re-enrolment and enrolment deposits are attached so the system can look up the correct fees during the deposit process. Where a school has students eligible for a different fee structure — such as foundation students — both fee structures are added at this stage.

---

## Academic Year (Product)

1. Navigate to **Modules ▸ Academic management ▸ Setup ▸ Academic year**.
2. Click **New**.

> **Note:** *The **Sequence order** will be automatically filled in.*

4. Add a **Description** (grade level), **School level dimension**, and **Yeargroup dimension**.
5. Click **Save**.
6. Select **Tuition fee items** from the Action Pane.
7. Click **New**.
8. Select **Tuition fee** from the **Item number** field.
9. Enter **Year** in the **Unit** field.
10. Close the page.

> **Note:** *If you select **Academic** from the Action Pane ▸ **Academic enrolments**, you can view all the years or grades the student has been enrolled in at the school.* 

![Academic_Year_1](./99-Images/academic_year_(product)_1.png)

![Academic_Year_2](./99-Images/academic_year_(product)_2.png)

---

## Academic Year (GEMS)
 
> **Note:** *Academic year IDs must match the setup in the student management system. The sequence number controls the order used for future billing calculations.*
 
1. From the **FNO dashboard**, open **Modules** ▸ **Academic management**.
2. Expand **Setup** and click **Academic year**.
3. Click **New** in the toolbar.
4. Enter the next **sequence number** in order.
5. Complete the remainder of the fields in the row.
6. Click **Save**.
7. Highlight the **academic year** record.
8. Click **Tuition fees** in the toolbar.
9. Add the **re-enrolment deposit fee** and **enrolment deposit fee** items.
10. If the school has students eligible for an alternative fee structure (e.g., foundation students), add the **additional tuition fee** item.
11. Click **Save**.

![Academic Year GEMS Setup 1](./99-Images/academic_year_gems_setup_1.png)

![Academic Year GEMS Setup 2](./99-Images/academic_year_gems_setup_2.png)

![Academic Year GEMS Setup 3](./99-Images/academic_year_gems_setup_3.png)

---

## Visa Types

1. From the **FNO dashboard**, open **Modules** ▸ **Academic management**.
2. Expand **Setup** and click **Visa types**.
3. Click **New** in the toolbar.
4. Complete the columns to create a new Visa type.
5. Select **Full fee paying** if the student is not subsidised and must pay the full tuition fee.
6. Clear the **Active** box if the visa is no longer valid. 
7. Click **Save**.

![Visa_Types_1](./99-Images/visa_types_1.png)

---

## Split Percent by Fee Item

>**Note:** *Split configuration applies only when sales order generation occurs after split setup; otherwise, older invoices unaffected.*

1. From the **FNO dashboard**, open **Modules** ▸ **Academic management**.
2. Expand **Setup** and click **Split percent by fee items**.
3. Click **New**.
4. Complete the following columns to configure the split payment per payee:
    - Search and select a **Student**.
    - Select the specific **fee item to override** (e.g., Building Fund Fee)
    - Assign the **custom split percentages** for each payer (e.g., Dad 60%, Mum 40%)
    - Specify the **effective and expiration dates** for this split configuration.
5. Repeat these steps for the other payer.
6. Click **Save**.

![Split Percent by Fee Item_1](./99-Images/configure_split_percent_by_fee_items_1.png)

---

## Fee Categories

1. From the **FNO dashboard**, open **Modules** ▸ **Academic management**.
2. Expand **Setup** and click **Fee categories**.
3. Click **New** in the top toolbar.
4. Complete the columns to create new fee categories.
5. Click **Save**.
6. Link these fees to the product master by navigating to **Modules ▸ Product information management ▸ Products ▸ Released products**.
7. Use the **Item number** filter to search for the added fee categories.

> **Note:** *Categories related to Academic management start with the letters AM.*

8. Select the category, then scroll down and expand the **Sell** tab.
9. Locate **Activity ▸ Fee category**.
10. Ensure the fee aligns with the category it will be billed as.

![Create Fee Categories Creation 1](./99-Images/create_fee_categories_creation_1.png)

![Create Fee Categories Creation 2](./99-Images/create_fee_categories_creation_2.png)

![Create Fee Categories Creation 3](./99-Images/create_fee_categories_creation_3.png)

---

## Payment Option Setup

1. Navigate to **Modules ▸ Academic management ▸ Setup ▸ Payment option setup**.
2. Click **New**.
3. Select the **Payment plan** from the dropdown.
4. Fill in the **Payment option** and **Description** fields.

>**Note:** *Once saved, there will be a copy on the Customer master or the Student master*

6. Click **Save**.

![Payment_Option_Setup_1](./99-Images/payment_option_setup_1.png)

---

## Curriculum (GEMS)

> **Note:** *Curriculum codes must be as per student management system.*

1. From the **FNO dashboard**, open **Modules** ▸ **Academic management**.
2. Expand **Setup** and click on **Curriculum**.
3. Click **New** in the toolbar to create a new curriculum.
4. Choose the **Curriculum** option from the dropdown (e.g., AM).
5. Enter details in the **Description** field.
6. Select the **Curriculum dimension** from the dropdown.
7. Click **Save**.

![Curriculum_1](./99-Images/curriculum_1.png)

---

## Intercompany Journal (GEMS)

1. Navigate to **Academic management ▸ Setup ▸ Cashier Receipt ▸ Receipt intercompany mapping**.
2. Click **New**.
3. Select the **Method of payment** from the dropdown.

> **Note:** *Choose the method of payment that has an Intercompany journal with the other schools.*

5. Select the **Destination school** from the dropdown.

> **Note:** *The selected school will have an Intercompany journal when the cashier journal is posted.*

6. Set the **Account type** and the **Account** fields based on the entry posting in the original cashier receipt:
   - If the **Account type** is Ledger, select Main in the **Account** field
   - If the **Account type** is Bank, select Bank account in the **Account** field
7. Select a value in the **Intercompany journal** field.
8. Click **Save**.
    
> **Note:** *When the cashier journal is posted, the selected Destination school will have the intercompany journal created according to the configured Method of payment, Account type/Account, and Intercompany journal selection.*

![Intercompany_Journal_(GEMS)_1](./99-Images/intercompany_journal_(gems)_1.png)

---

## Advance Discount Policy (GEMS)

1. Navigate to **Academic management ▸ Setup ▸ Advance discount policy**.
2. Click **New**.
3. Type a value in the **Policy code** field.
4. Enter or select a value from the **Fee and charges interval** dropdown.

> **Note:** *Select the billing cycle that applies to this policy.*

5. Click the **General** tab.
6. In the **Period name** field, select the relevant time period.

> **Note:** *More than one time period may be selected in this field.*

8. Click **Select**.
9. Return to the **Overview** tab.
10. In the **Charges code** field, select **Advance Discount**.
11. Enter the discount value into the **Discount** field.
12. In the **From date** and **To date** fields, enter the time period that the advance discount will be applied.
13. Complete the **Description** field for reporting reference.
14. Click **Save**.

![Advance_Discount_Policy_(GEMS)_1](./99-Images/advance_discount_policy_(gems)_1.png)

![Advance_Discount_Policy_(GEMS)_2](./99-Images/advance_discount_policy_(gems)_2.png)

![Advance_Discount_Policy_(GEMS)_3](./99-Images/advance_discount_policy_(gems)_3.png)

---

## Stream

1. From the **FNO dashboard**, open **Modules** ▸ **Academic management**.
2. Expand **Setup** and click on **Stream**.
3. Click **New**.
4. Enter details in the **Stream** column.
5. Enter details in the **Description** column.
6. Click **Save**.

![Stream_1](./99-Images/stream_1.png)

---

## Deposit Policy

1. From the **FNO dashboard**, open **Modules** ▸ **Academic management**.
2. Expand **Setup** and click on **Deposit policy**.
3. Click **New** in the toolbar to create a deposit policy record.
4. In **Pre-admission type** select the appropriate deposit from the dropdown.
5. Select the **Deposit type** from the dropdown (e.g., Percent or Fixed).
6. Enter the **Value** amount in the column section for the selected deposit type.
7. Repeat steps 3-6 for each deposit type you need to set up.
8. Click **Save**.

> **Note:** *If using the percentage deposit type, the percentage is calculated from the tuition fee linked to the selected academic year.*

![Deposit_Policy_1](./99-Images/deposit_policy_1.png)

---

#### Sibling Order
The sibling discount feature allows the school to automatically apply fee reductions based on how many children from the same family are currently enrolled. To make this work, each student needs to be assigned a sibling order number that reflects their position within the family, with the eldest being 1, the second child being 2, and so on. These numbers are then mapped to customer price and discount groups, which are in turn linked to trade agreements that define the discount percentage for each sibling position. Once this configuration is complete and the trade agreement is posted, the system applies the correct discount automatically when fee invoices are generated.

---

## Sibling Order Setup

> **Note:** *For each possible child in a family, assign a sibling order number (e.g., 1 for first child, 2 for second, up to your maximum, such as 9). Use 0 for students who are not yet current (e.g., future students or those transitioning between programs).*

1. From the **FNO dashboard**, open **Modules** ▸ **Academic management**.
2. Expand **Setup and Sibling setup**, then click **Sibling order**.
3. Click **New** to create sibling order entries.

> **Note:** *Add a new record only if your school needs more sibling positions than the ones already listed.*

4. Enter a unique number in **Sibling discount order** column (e.g, 11). Follow your school's sequencing convention. 
5. Enter the **Sibling order** description (e.g., 11th Child). Use the same pattern as existing records.
6. Click **Save**.

![Sibling_Order_setup_1](./99-Images/sibling_order_setup_1.png)    

---

## Trade Agreement

1. From the **FNO dashboard**, open **Modules** ▸ **Sales and marketing**.
2. Expand **Prices and discounts** and click **Trade agreement journals**.
3. Click **New**.
4. In the **Name** column, select Sibling discount.
5. Change view to **Lines**.
6. Click **New** and complete the following columns:
   - Change **Party code type** to Group.
   - Set **Account selection** to the number of siblings (e.g., First child).
   - Change **Product code** type to Group.
   - Set **Item relation** to Sibling discount.
7.  In Details, set the policy **start and end date**.

>**Note:** *Leave the end date blank to run the discount indefinitely.*

9. Enter the discount amount in **Discount percentage 1** (e.g., 10.00 for 10%).
10. Click **New** to add the second child discount; repeat these steps as needed.
11. Click **Save**.
12. Click **Post** to activate the trade agreement policy.
13. Go back to **Modules** ▸ **Product information management**.
14. Expand **Products** and click **Released products**.
15. Open each **line** related to tuition.
16. On the next screen, expand the **Sell** section.
17. Scroll down to the **Line discount group** dropdown and choose the Sibling discount trade agreement.
18. Click **Save**.
19. Repeat for other tuition fee items.

![Trade Agreement Creation 1](./99-Images/trade_agreement_creation_1.png)

![Trade Agreement Creation 2](./99-Images/trade_agreement_creation_2.png)

![Trade Agreement Creation 3](./99-Images/trade_agreement_creation_3.png)

![Trade Agreement Creation 4](./99-Images/trade_agreement_creation_4.png)

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

14. Click **Save**.

![Pre-admission_Posting_Setup_1](./99-Images/pre-admission_posting_setup_1.png)

---

## Customer Integration Mapping

1. Navigate to **Modules ▸ Academic management ▸ Setup ▸ Integration ▸ Report type**. 
2. Click **New**. 
3. Fill in the **Record type** and **Description fields**. 
4. Click **Save** and close the page. 
5. Navigate to **Modules Academic management ▸ Setup ▸ Integration ▸ Customer integration mapping**. 
6. Click **New**. 
7. Select the **Record type** from the dropdown. 

> **Note:** *The Record type description should fill in automatically.*

9. In the **Customer type** field, select between Student and Fee payer. 
10. Select the appropriate **Customer group** from the dropdown. 
11. Click **Save**.

![Customer_Integration_Mapping_1](./99-Images/customer_integration_mapping_1.png)

![Customer_Integration_Mapping_2](./99-Images/customer_integration_mapping_2.png)

---

## Fee Type

1. From the **FNO dashboard**, open **Modules** ▸ **Academic management**.
2. Expand **Setup**, then expand **Cashier receipt**.
3. Click **Fee type**. Review the list of existing fee types to avoid creating duplicates.
4. Click **New** in the toolbar.
> **Condition:** *Perform this step only if the required fee type does not exist.*
5. Enter a value in **Fee type** field (e.g., Security deposit, Transport).
6. Select a value in **Account** field (e.g., Transport fee).
7. Select a value in **Tax Group** field.
8. Select a value in **Tax Item Group** field.
9. Click **Save**.

> **Note:** *The fee type is configured in advance and can be selected when creating cashier receipts and miscellaneous receipts. The system then automatically populates the payment type, financial dimensions, and accounting postings related to that fee category.*

![Fee_Type_1](./99-Images/fee_type_1.png)

---

## Receipt Intercompany Mapping

1. From the **FNO dashboard**, open **Modules** ▸ **Academic management**.
2. Expand **Setup**, then expand **Cashier receipt**.
3. Click **Receipt intercompany mapping**.
4. Click **New** in the toolbar.
5. Select the **Method of payment** from the dropdown (e.g., CobOn).

> **Note:** *Choose the method of payment that has an intercompany journal with the destination school.*

7. Select the **Destination school** from the dropdown.
8. Set the **Account type** and the **Account** fields based on the entry posting in the original cashier receipt:
   - If the **Account type** is Ledger, the **Account** is Main
   - If the **Account type** is Bank, the **Account** is Bank account
9. Select a value in the **Intercompany journal** field.
10. Click **Save**.
    
> **Note:** *When the cashier journal is posted, the selected Destination school will have the intercompany journal created according to the configured Method of payment, Account type/Account, and Intercompany journal selection.*

![Receipt_Intercompany_Mapping_1](./99-Images/receipt_intercompany_mapping_1.png)

---

## Fee Master Template to Sync Items to CE

> **Note:** *This setup creates a fee master list template that determines the fee items synced from D365 F&O to CE for inclusion in student offer letters.*

1. From the **FNO dashboard**, open **Modules** ▸ **Academic management**.
2. Expand **Setup**, then click **Fee master list template**.
3. Click **New** in the toolbar.
4. Enter values in the **Code** and **Name** fields.
5. Enter the date in the **Effective date** field.
6. In Products section, click **+ Add** in the toolbar.
7. Select an **Item number** from the dropdown to sync the selected fee item to D365 CE.
8. Set Quantity to 1 in the **Quantity** field.
9. Select annual option in the **Unit** field.
10. In the **Switch view** field, select **All**, then select your template row.
11. Click **Save**.

> **Note:** *Next steps show how to assign to the Academic year.*

13. Go back to **Modules** ▸ **Academic management**.
14. Expand **Setup**, then click **Academic year**.
15. Select the **Academic year** row. Then select the **Fee master list** code from the dropdown.
16. Repeat step 14 for each academic year.
17. Click **Save**.

![Fee_Master_Template_to_Sync_Items_to_CE_1](./99-Images/fee_master_template_to_sync_items_to_ce_1.png)

![Fee_Master_Template_to_Sync_Items_to_CE_2](./99-Images/fee_master_template_to_sync_items_to_ce_2.png)

---

## Non-Tuition Item Price Setup 

1. From the **FNO dashboard**, open **Modules** ▸ **Sales and marketing**.
2. Expand **Prices and discounts** and click **Trade agreement journals**.
3. Click **New** to create a new trade agreement journal.
4. In the **Name** field, select the **standard journal name** (without academic attributes enabled).
5. Click **Lines**.
6. Complete the required fields.
7. Click **Add products** and repeat step 6 for each item.
8. Click **Post**.

> **Note:** *Non-tuition items such as ID cards use a standard trade agreement. Academic attributes are not required and should not be selected for these items.*

![Fee Structure Setup Non-Tuition Item 1](./99-Images/fee_structure_setup_non_tuition_item_1.png)

![Fee Structure Setup Non-Tuition Item 2](./99-Images/fee_structure_setup_non_tuition_item_2.png)

---

## Link Tuition Fee Item to Academic Year

> **Note:** *This step is required for enrolment deposit calculations. The system uses this link to identify which item is the tuition fee item and look up the correct annual price from the trade agreement.*

1. From the **FNO dashboard**, open **Modules** ▸ **Academic management**.
2. Expand **Setup** and click **Academic year**.
3. Select the relevant **academic year** record.
4. Click **Tuition fee items**.
5. Click **New** in the tuition fee items section.
6. Complete the columns to link Tuition Fees to an Academic Year.
7. If a second tuition fee item exists for the other student type, click **New** and repeat that item.
8. Repeat steps 3–8 for each additional academic year.
9. Click **Save**.

![Fee Structure Setup Academic Year Link 1](./99-Images/fee_structure_setup_academic_year_link_1.png)

![Fee Structure Setup Academic Year Link 2](./99-Images/fee_structure_setup_academic_year_link_2.png)

---
