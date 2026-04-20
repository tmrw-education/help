# Finance and Operations – User Guide

Version: v3

## About the Platform
 
Education's greatest challenge isn't a lack of technology — it's too much of it. Across most K–12 systems, finance teams work across a patchwork of tools that don't talk to each other: one platform for enrolment, another for fees, a third for general ledger, and a string of spreadsheets to reconcile what each one says. The result is duplicated effort, delayed reporting, and a finance function that spends more time stitching data together than acting on it.
 
tmrw is being built to change that. tmrw is an AI-first education intelligence platform, designed specifically for K–12 and developed in partnership with GEMS Education to ensure it is grounded in the operational reality of running schools at scale. Rather than bolting AI onto existing tools, tmrw embeds intelligence directly into the core of school operations, teaching, and learning — turning fragmented data into insight, and insight into action that improves outcomes for students, educators, leaders, and families.
 
The platform unifies the essential systems a school or school group depends on — Finance, HR, Procurement, School and Student Management, and Teaching and Learning — onto a single Microsoft-based foundation built on Dynamics 365, Microsoft 365, Azure, Copilot, and Dataverse. On top of this foundation sit three Experience layers (Parent XP, Staff XP, and Learner XP) and a network of intelligent AI agents that automate workflows and connect processes that have historically lived in isolation. Attendance, wellbeing, enrolment, fee generation, payment processing, and reporting are no longer separate systems — they are part of one connected conversation.
 
## Where Finance and Operations Fits
 
The Finance and Operations (F&O) module is the financial backbone of the tmrw platform, delivered through Microsoft Dynamics 365 Finance & Operations. Because F&O sits on the same unified data layer as Student Management, HR, and the Experience layers, financial transactions are no longer disconnected from the student and family records they relate to. When a student is enrolled, transferred, granted a scholarship, or charged for a sessional class, the financial impact flows through the same source of truth — eliminating the manual exports, re-keying, and end-of-month reconciliation that finance teams have come to accept as unavoidable.
 
For finance staff, bursars, and operations teams, this means three practical shifts. Day-to-day fee generation, payment processing, scholarship approval, and statement production are streamlined into clearer end-to-end processes rather than spread across multiple disconnected tools. Real-time, accurate financial data is available to school leaders without waiting for batch reports or manual consolidation. And complex, error-prone tasks such as pro-rata adjustments, sibling discounts, split billing, and settlement discounts are handled by the platform's built-in logic, with audit trails maintained automatically.
 
## How to Use This Guide
 
This guide provides step-by-step instructions for managing fees, payments, scholarships, discounts, and related financial processes in F&O. It is written for finance and operations staff who work in the system daily and need precise, repeatable guidance for each process. The Table of Contents below mirrors the structure of the F&O module and can be used either as a sequential onboarding path for new users or as a reference manual for specific tasks.
 
---

## Table of Contents

- [Navigating the F&O Platform](./01-Navigating-the-Platform.md)
  - [Basic Navigation in F&O](./01-Navigating-the-Platform.md#basic-navigation-in-fo)
  - [The Toolbar in F&O](./01-Navigating-the-Platform.md#the-toolbar-in-fo)
- [Setup](./02-Setup.md)
  - [Fee Schedule Parameters (GEMS)](./02-Setup.md#fee-schedule-parameters-gems)
- [Pre-Admission Fees](./03-Pre-Admission-Fees.md)
  - [Pre-Admission Type Creation](./03-Pre-Admission-Fees.md#pre-admission-type-creation)
  - [Setup Posting Logic For Each Transaction Type](./03-Pre-Admission-Fees.md#setup-posting-logic-for-each-transaction-type)
  - [Manually Adding Application Fee Records](./03-Pre-Admission-Fees.md#manually-adding-application-fee-records)
  - [Manually Adding Enrolment Fee Records](./03-Pre-Admission-Fees.md#manually-adding-enrolment-fee-records)
  - [Manually Adding Enrolment Deposit Records](./03-Pre-Admission-Fees.md#manually-adding-enrolment-deposit-records)
  - [Pre-Admission Enrolment Fee Payment Process](./03-Pre-Admission-Fees.md#pre-admission-enrolment-fee-payment-process)
  - [Forfeiting Deposits](./03-Pre-Admission-Fees.md#forfeiting-deposits)
  - [Refunding Deposits](./03-Pre-Admission-Fees.md#refunding-deposits)
  - [Reverse Enrolment Deposit or Fee](./03-Pre-Admission-Fees.md#reverse-enrolment-deposit-or-fee)
- [Generate Fees](./04-Generate-Fees.md)
  - [Check Student Details](./04-Generate-Fees.md#check-student-details)
  - [Scholarship and Discount Setup](./04-Generate-Fees.md#scholarship-and-discount-setup)
  - [Subject and Event Name Setup](./04-Generate-Fees.md#subject-and-event-name-setup)
  - [Create Fee Schedule Templates](./04-Generate-Fees.md#create-fee-schedule-templates)
  - [Event Template Setup](./04-Generate-Fees.md#event-template-setup)
  - [Run the task (Generate fee invoices)](./04-Generate-Fees.md#run-the-task-generate-fee-invoices)
  - [Reconcile the Generated Sales Orders](./04-Generate-Fees.md#reconcile-the-generated-sales-orders)
  - [Post Fee Invoices](./04-Generate-Fees.md#post-fee-invoices)
  - [Settle Enrolment Deposits](./04-Generate-Fees.md#settle-enrolment-deposits)
- [Scholarships and Discounts](./05-Scholarships-and-Discounts.md)
  - [Create a new Scholarship or Discount](./05-Scholarships-and-Discounts.md#create-a-new-scholarship-or-discount)
  - [Linking Scholarships and Discounts to Fee Items](./05-Scholarships-and-Discounts.md#linking-scholarships-and-discounts-to-fee-items)
  - [Linking Scholarships and Discounts to Students](./05-Scholarships-and-Discounts.md#linking-scholarships-and-discounts-to-students)
  - [Scholarship and Discount Approval Process](./05-Scholarships-and-Discounts.md#scholarship-and-discount-approval-process)
  - [Approving or Rejecting Scholarships and Discounts](./05-Scholarships-and-Discounts.md#approving-or-rejecting-scholarships-and-discounts)
  - [View Scholarships and Discounts for a Student](./05-Scholarships-and-Discounts.md#view-scholarships-and-discounts-for-a-student)
  - [View Approved Scholarship and Discount Fees](./05-Scholarships-and-Discounts.md#view-approved-scholarship-and-discount-fees)
- [Visa Management](./06-Visa-Management.md)
  - [Create new Visa Type](./06-Visa-Management.md#create-new-visa-type)
  - [Visa Details on Students](./06-Visa-Management.md#visa-details-on-students)
  - [View all Students' Visa Types](./06-Visa-Management.md#view-all-students-visa-types)
- [Sessional Classes & Events](./07-Sessional-Classes-and-Events.md)
  - [Create Fee Categories](./07-Sessional-Classes-and-Events.md#create-fee-categories)
  - [Create Subject and Event Codes](./07-Sessional-Classes-and-Events.md#create-subject-and-event-codes)
  - [Assign Fee Category to an Item](./07-Sessional-Classes-and-Events.md#assign-fee-category-to-an-item)
  - [Sessional Class and Event Enrolment](./07-Sessional-Classes-and-Events.md#sessional-class-and-event-enrolment)
  - [Adjust for Session-Based Invoicing](./07-Sessional-Classes-and-Events.md#adjust-for-session-based-invoicing)
  - [Update the Session Information](./07-Sessional-Classes-and-Events.md#update-the-session-information)
  - [Generate the Adjustment](./07-Sessional-Classes-and-Events.md#generate-the-adjustment)
- [Sibling Discounts](./08-Sibling-Discounts.md)
  - [Sibling Order Setup](./08-Sibling-Discounts.md#sibling-order-setup)
  - [Trade Agreement](./08-Sibling-Discounts.md#trade-agreement)
  - [Sibling Order Calculation](./08-Sibling-Discounts.md#sibling-order-calculation)
- [Split Bill Override](./09-Split-Bill-Override.md)
  - [Setup Student Financial Responsibility](./09-Split-Bill-Override.md#setup-student-financial-responsibility)
  - [Create Split Billing Fee Schedule Template](./09-Split-Bill-Override.md#create-split-billing-fee-schedule-template)
  - [Configure Split Percent by Fee Items](./09-Split-Bill-Override.md#configure-split-percent-by-fee-items)
- [Pro Rata Adjustments](./10-Pro-Rata-Adjustments.md)
  - [Enable Pro Rata Adjustments (New Students)](./10-Pro-Rata-Adjustments.md#enable-pro-rata-adjustments)
  - [Update Student Enrolment Dates](./10-Pro-Rata-Adjustments.md#update-student-enrolment-dates)
  - [Generate and Review Sales Orders](./10-Pro-Rata-Adjustments.md#generate-and-review-sales-orders)
  - [Enable Pro Rata Adjustments (Exiting Students)](./10-Pro-Rata-Adjustments.md#enable-pro-rata-adjustments-1)
  - [Fee and Charge Adjustment](./10-Pro-Rata-Adjustments.md#fee-and-charge-adjustment)
  - [Review the Sales Order Adjustment](./10-Pro-Rata-Adjustments.md#review-the-sales-order-adjustment)
- [Payment Schedule](./11-Payment-Schedule.md)
  - [Create a New Payment Schedule](./11-Payment-Schedule.md#create-a-new-payment-schedule)
  - [Apply the Payment Schedule to Payment Plans](./11-Payment-Schedule.md#apply-the-payment-schedule-to-payment-plans)
  - [Apply Payment Plan to Fee Payer](./11-Payment-Schedule.md#apply-payment-plan-to-fee-payer)
  - [Cancel or Amending Payment Plans](./11-Payment-Schedule.md#cancel-or-amending-payment-plans)
- [Customer Payments](./12-Customer-Payments.md)
  - [Over-the-Counter Processing](./12-Customer-Payments.md#over-the-counter-processing)
  - [Scheduling Credit Card Payments](./12-Customer-Payments.md#scheduling-credit-card-payments)
- [Fee Payer Statements](./13-Fee-Payer-Statements.md)
  - [Generate Fee Statements](./13-Fee-Payer-Statements.md#generate-fee-statements)
- [Settlement Discounts](./14-Settlement-Discounts.md)
  - [Configuring Discount Setup](./14-Settlement-Discounts.md#configuring-discount-setup)
  - [Assigning Discounts to Products / Fees](./14-Settlement-Discounts.md#assigning-discounts-to-products--fees)
  - [Bulk Updating Discounts on Invoices](./14-Settlement-Discounts.md#bulk-updating-discounts-on-invoices)
  - [Controlling Discount Eligibility Based on Payment](./14-Settlement-Discounts.md#controlling-discount-eligibility-based-on-payment)
  - [Processing Payments with Discounts](./14-Settlement-Discounts.md#processing-payments-with-discounts)
- [Reenrolment & Promotion — Financial Blocking](./15-Re-Enrolment-and-Promotion.md)
  - [Blocking Due to Fee Outstanding](./15-Re-Enrolment-and-Promotion.md#blocking-due-to-fee-outstanding)
  - [Overriding the Fee Check for Reenrolment](./15-Re-Enrolment-and-Promotion.md#overriding-the-fee-check-for-reenrolment)
  - [Clearing Fee Check Overrides](./15-Re-Enrolment-and-Promotion.md#clearing-fee-check-overrides)
- [FAQs](./16-FAQs.md)
- [Glossary](./17-Glossary.md)

---
