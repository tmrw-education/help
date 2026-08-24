---
id: set-employee-and-dependent-airfare-details
summary:
  - "On the employee's profile, set the air ticket location **from** and **to** fields so they match a route in the airfare setup."
  - "On each dependent under **Personal contacts**, check the **birth date**, the **valid from** date, and the **ticket class**."
  - "Confirm the worker's benefit enrolment — the confirmed enrolment is what drives how many tickets and which class they are entitled to."
keywords: [air ticket location, from city, to city, employee profile, personal information, personal contacts, dependent, birth date, valid from, ticket class, worker benefit enrolment, eligibility, self plus three, D365]
video:
  youtube:
  bunny:
---

# Set employee and dependent airfare details

The calculation reads three things off the employee: where they travel, who travels with them, and what they are entitled to. All three sit on records HR already maintain — this page is about making sure they are right before the calculation runs, because a missing route or a blank valid-from date is what produces a wrong or missing figure later.

1. Set the employee's air ticket location

   Open the employee record and go to **Personal information** on their profile. Set the air ticket location **from** and **to** fields.

   These are the values matched against **From city** and **To city** in the airfare setup. If the pair does not match a fare record for the employee's legal entity, no fare is found and nothing is calculated for them.

   ![The employee profile showing the air ticket location from and to fields under personal information](./images/set-employee-and-dependent-airfare-details-1.png)

2. Check the employment start date

   The employee's start date in **Employment history** determines whether they get the full fare or a reduced one. An employee whose employment covers the whole airfare period is entitled to the full amount; one who joins part-way through is pro-rated from their start date.

   The same start date is also the reference point used for their dependents.

3. Review the dependents

   Open **Personal contacts** on the employee record. For each dependent, check:

   | Field | Why it matters |
   |---|---|
   | **Birth date** | Matched against the age groups to decide whether the dependent attracts the infant, child or adult fare |
   | **Valid from** | The date the dependent becomes valid against the employee. The calculation runs from this date, so a late-entered dependent is pro-rated from it |
   | **Ticket class** | The class the dependent travels in, on the last tab of the dependent details |

   ![A dependent record under Personal contacts showing the birth date and valid from date](./images/set-employee-and-dependent-airfare-details-2.png)

4. Correct the valid from date where it is late

   The **valid from** date is set when the dependent record is created, which is often later than the date the dependent actually joined the family — an employee may only add a newborn once the birth certificate is through. The calculation takes the date at face value, so a dependent added a month late is paid a month short.

   Where the entitlement should run from an earlier date, correct the **valid from** date before running the calculation. If the calculation has already run, correct it and rerun — see [Run the airfare calculation](./04-run-the-airfare-calculation.md).

5. Adjust the dependent's ticket class where it differs

   The **Ticket class** field on the dependent defaults from the employee's own entitlement, and can be changed. Use it where the employee travels in a higher class than their family — an employee eligible for business whose dependents travel economy is set here.

   ![The ticket class field on the dependent details tab](./images/set-employee-and-dependent-airfare-details-3.png)

6. Confirm the benefit enrolment

   Open **Worker benefit enrolment** for the employee. The **confirmed** enrolment is what the eligibility is derived from — how many tickets the employee is entitled to, the class, and whether the entitlement is return or one way. An entitlement reading *self + 3, economy, return* covers the employee and three dependents on economy return tickets.

   Where the enrolment is not confirmed, the eligibility cannot be derived and the employee is skipped by the calculation.

   ![The worker benefit enrolment showing the confirmed airfare entitlement](./images/set-employee-and-dependent-airfare-details-4.png)
