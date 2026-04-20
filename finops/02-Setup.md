# Setup

Before fees can be generated, processed, or settled across the platform, the fee schedule parameters must be configured correctly. These settings control how transactions are posted, which journals are used for different payment types, how financial dimensions are applied, how pro rata adjustments behave, and how the system integrates with related modules. This setup is typically completed once during initial configuration and revisited when new functionality is enabled or organisational settings change.

---

## Fee Schedule Parameters (GEMS)

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Setup** and click **Fee schedule parameters**.
3. On the **General** tab, expand each section and complete the fields based on your school's requirements.
4. Click the **Integrations** tab.
5. Select the **Relationship type**.
   > **Note:** *Relationship type = Sibling is used for brother/sister relationships and for calculating sibling order.*
6. Select the **ID**.
7. Click the **Pro rata adjustment** tab.
8. Select the **Pro rata adjustment joining** option.
9. Select the **Pro rata adjustment leaving** option.
10. Select the **Leaving date** option:
    - *Last day attended* — use when the school manages the leaving date as LDA.
    - *Expiration date* — use when the school manages the leaving date as the expiration date in the Academic enrolment table.
11. Click the **Number sequences** tab and confirm all number sequences are set up for all references.
12. Click **Save**.

![Fee Schedule Parameters GEMS 1](./99-Images/fee_schedule_parameters_gems_1.png)

![Fee Schedule Parameters GEMS 2](./99-Images/fee_schedule_parameters_gems_2.png)

![Fee Schedule Parameters GEMS 3](./99-Images/fee_schedule_parameters_gems_3.png)

![Fee Schedule Parameters GEMS 4](./99-Images/fee_schedule_parameters_gems_4.png)

---

#### Fee Structure Setup

Fee structure setup defines the price applied to tuition fee items and other school fee items using trade agreements. Schools may have one or two tuition fee items depending on whether they apply different fee structures for new and existing students. Each tuition fee item requires two prices per academic attribute combination — a monthly price used when generating fee invoices, and an annual price used when calculating enrolment deposits. Once prices are configured, tuition fee items must be linked to the relevant academic year so the system knows which item and price to use during deposit calculations. Non-tuition items such as ID cards use a standard trade agreement without academic attributes.

---

## Fee Structure Setup

> **Note:** *Each academic attribute combination (academic year + curriculum + stream) requires two trade agreement lines: one with a monthly unit and one with an annual unit. The monthly price drives fee invoice generation; the annual price drives deposit calculations.*

1. From the **FNO dashboard**, open **Modules** ▸ **Product information management**.
2. Search for and open the **tuition fee item** to review before setting up the price.

> **Note:** *Service items are used to manage academic and school fee items in GEMS. A school may have one tuition fee item if a single fee structure applies to all students, or two items if separate structures apply to new and existing students.*

3. Open **Modules** ▸ **Sales and marketing**.
4. Expand **Prices and discounts** and click **Trade agreement journals**.
5. Click **New** to create a new trade agreement journal.
6. In the **Name** field, select the **academic journal name**.

> **Note:** *Selecting the academic journal name enables the Academic attributes flag. This differentiates academic pricing from standard pricing and allows prices to be set by academic year, curriculum, and stream.*

7. Click **Lines** to open the journal lines.
8. In the **Academic year** field, select the relevant **academic year**.
9. Select the **Curriculum**.
10. Select the **Stream**.
11. In the **Item** field, select the **tuition fee item**.
12. Enter the **Start date** and **End date**.

> **Note:** *The start and end dates should align with the academic year or fee interval dates — for example, the start of the academic year through to the end of June.*

13. In the **Unit** field, select *Monthly*.
14. Enter the **monthly price** in the currency field.

> **Note:** *The monthly unit price is used by the system when generating tuition fee invoices via batch jobs.*

15. Add a new line for the same academic attribute combination.
16. In the **Unit** field, select *Annual*.
17. Enter the **annual price** in the currency field.

> **Note:** *The annual price is calculated by multiplying the monthly fee by the number of chargeable months in the academic year (e.g., 10 months × monthly fee). This price is used when calculating enrolment and re-enrolment deposits.*

> **Note:** *For each academic attribute combination, the system automatically generates a unique price group ID. This is a customisation — in standard D365 behaviour, price groups are defined manually.*

18. Repeat steps 8–17 for each additional academic attribute combination (academic year, curriculum, and stream).

> **Note:** *All attribute combinations used in fee generation must have a trade agreement line. If any combination is missing a price, the system will not generate a price for that combination.*

19. Click **Post** to complete the trade agreement setup.

![Fee Structure Setup Trade Agreement 1](./99-Images/fee_structure_setup_trade_agreement_1.png)

---

## Non-Tuition Item Price Setup

1. From the **FNO dashboard**, open **Modules** ▸ **Sales and marketing**.
2. Expand **Prices and discounts** and click **Trade agreement journals**.
3. Click **New** to create a new trade agreement journal.
4. In the **Name** field, select the **standard journal name** (without academic attributes enabled).
5. Click **Lines**.
6. In the **Item** field, select the **non-tuition fee item** (e.g., ID card).
7. Enter the **Start date** and **End date**.
8. Enter the **price** in the currency field.
9. Click **Post**.

> **Note:** *Non-tuition items such as ID cards use a standard trade agreement. Academic attributes are not required and should not be selected for these items.*

![Fee Structure Setup Non-Tuition Item 1](./99-Images/fee_structure_setup_non_tuition_item_1.png)

---

## Link Tuition Fee Item to Academic Year

> **Note:** *This step is required for enrolment deposit calculations. The system uses this link to identify which item is the tuition fee item and look up the correct annual price from the trade agreement.*

1. From the **FNO dashboard**, open **Modules** ▸ **Academic Management**.
2. Expand **Setup** and click **Academic year**.
3. Open the relevant **academic year** record.
4. Click **New** in the tuition fee items section.
5. In the **Item number** field, select the **tuition fee item**.
6. In the **Unit** field, select *Annual*.

> **Note:** *Annual must be selected here because enrolment and re-enrolment deposit calculations are based on the annual price, not the monthly price.*

7. Select the **fee structure type**:
    - *New student* — enable this option if the fee structure applies to new students only.
    - *Existing student* — enable this option if the fee structure applies to existing (returning) students only.

> **Note:** *If the school uses only one tuition fee structure for all students, link a single item without enabling either flag.*

8. If a second tuition fee item exists for the other student type, click **New** and repeat steps 5–7 for that item.

> **Note:** *A maximum of two tuition fee items can be linked per academic year — one for new students and one for existing students.*

9. Repeat steps 3–8 for each additional academic year.

![Fee Structure Setup Academic Year Link 1](./99-Images/fee_structure_setup_academic_year_link_1.png)
