---
id: review-calculated-airfare
summary:
  - "Open the calculated airfare form to see a line per employee and per dependent for the period."
  - "Full-period entitlements carry the full fare; part-period entitlements are the fare divided by the days in the year and multiplied by the days covered."
  - "Where a dependent crosses an age boundary during the period, the line is split across both fares."
keywords: [calculated airfare, calculated disbursement, pro rata, full year of service, part year, age bracket change, bracket creep, mid-year dependent, newborn, valid from, recalculation, D365]
video:
  youtube:
  bunny:
---

# Review calculated airfare

The calculated airfare form — the disbursement form — holds the output of the calculation: one line for the employee and one for each dependent, for the period the batch was run for. Work through it in this order to understand why an amount is the value it is.

1. Open the calculated airfare form

   Filter to the employee. There is one line for the employee and one for each dependent covered by their entitlement.

   ![The calculated airfare form showing lines for the employee and each dependent](./images/review-calculated-airfare-1.png)

2. Understand how an amount is worked out

   Every line starts from the full fare held in the airfare setup for that route, ticket class, ticket type and age group. Where the entitlement covers the whole airfare period, the line carries that full fare. Where it covers part of the period, the fare is reduced by days — the full fare divided by the days in the year, multiplied by the days covered. Nothing else is applied: no rounding to months and no minimum, which is why amounts rarely come out as round numbers.

   What counts as days covered differs between the employee and their dependents:

   | Record | Days are counted from |
   |---|---|
   | **Employee** | Their employment start date, or the start of the airfare period if they were already employed |
   | **Dependent** | Their **valid from** date on the personal contact record |

3. Read a full-period entitlement

   An employee whose employment covers the whole airfare period, with no end date, is entitled to the full amount. On a route with a return adult fare of 3,000, their line reads 3,000, and a spouse on the same class and type reads 3,000 as well. Dependents whose valid from date sits before the start of the period take their full category fare — 1,500 for a child, 1,000 for an infant.

   ![Calculated lines showing full fares for the employee, spouse and dependents](./images/review-calculated-airfare-2.png)

4. Read a part-period entitlement

   An employee joining part-way through the period is reduced from their start date, and dependents are reduced from their own valid from date. The two are independent of each other.

   A dependent valid from 6 October, against a period starting 1 September, is covered for 330 of the 365 days, so an infant fare of 1,000 calculates as 1,000 ÷ 365 × 330 = 904. The employee and every dependent are calculated in the same run, so a part-period employee with part-period dependents produces a reduced line for each of them at once.

5. Read a line where the age group changed

   A dependent's age group is not fixed for the whole period. Where a birth date means they cross a boundary part-way through — an infant turning two, for example — the line is split: the days before the birthday are paid at the infant fare, the days after at the child fare, each reduced by the same formula. The result is a single amount combining both.

   This is worth watching at the start of an airfare year. A dependent whose birthday falls just inside the period attracts more than the infant fare alone; one whose birthday falls just outside it stays on the lower fare for the whole period.

   ![A calculated line for a dependent whose age group changed during the period](./images/review-calculated-airfare-3.png)

6. Read a dependent added part-way through the year

   A dependent added during the year — most often a newborn — is covered from their **valid from** date to the end of the period. An infant added with a valid from date of 5 November, against a period ending 31 August, is covered for 300 days: 1,000 ÷ 365 × 300 = 821.

   The valid from date is the date the dependent record became valid, not the date of birth. Where an employee submitted the details late, correct the valid from date first, then recalculate — see [Run the airfare calculation](./04-run-the-airfare-calculation.md).

7. Work back through the inputs when a figure looks wrong

   Check in this order:

   - **The fare** — the airfare setup record for the employee's legal entity, route, class and ticket type, and whether its from and to dates match the period the batch was run for.
   - **The dates** — the employee's employment start date, and the dependent's valid from date.
   - **The birth date** — this decides the age group, and a wrong one moves a dependent between fares.
   - **The enrolment** — the confirmed worker benefit enrolment sets how many tickets and which class.

   Correct the input, delete the employee's existing calculated lines, and run the batch again for that employee.
