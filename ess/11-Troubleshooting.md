# Troubleshooting

Common problems in Employee Self-Service and how to resolve them. Use the contents list on the right to jump to a section, or press **Ctrl+F** to search this page.

## Navigating ESS

### I can't sign in to ESS

**Cause** — A personal or non-GEMS Microsoft account is being used, or the portal link is wrong.

**Fix** — Sign in with your **GEMS Microsoft 365** email address and password — the same login you use for email. There is no separate ESS password. Your IT team or HR provides the portal URL.

### Do I need to install anything?

**Cause** — ESS is sometimes assumed to be a separate app.

**Fix** — No. ESS runs in any web browser. There is nothing to install and no app to download.

### A tile is missing from my home page

**Cause** — Tiles reflect what is available to your role. Not every employee sees every area.

**Fix** — If you expect a tile that isn't there — for example a manager-only area — contact HR to confirm your role and permissions.

### I've navigated away and can't get back to the home page

**Cause** — There's no obvious home link on some pages.

**Fix** — Click **ESS System** in the navigation bar, or use your browser's back button.

### I'm not seeing alerts about expiring documents

**Cause** — Alerts appear in the notification bell rather than by email.

**Fix** — Check the **bell icon** at the top right. It flags documents approaching expiry, newly assigned questionnaires, and approval requests. Click a notification to jump straight to the record.

---

## Your Profile

### My new profile image hasn't appeared

**Cause** — Profile images go through an approval workflow.

**Fix** — The image stays pending until HR or your line manager approves it. A notification confirms your submission was received.

### I can't delete an address

**Cause** — The address you're trying to delete is marked as your primary residence, and your profile must always have one.

**Fix** — Open another address, switch on the **Primary Residence** toggle, then delete the original. The primary address pins to the top of the list.

### My address change hasn't gone for approval

**Cause** — Address and contact information changes apply immediately.

**Fix** — No action needed. Unlike identification, education, skills and payment details, these two areas have no approval workflow.

### The Submit button is greyed out when adding an identification document

**Cause** — That document type requires a supporting file and none has been uploaded.

**Fix** — Click **Choose file**, attach a copy of the document, and the Submit button becomes available.

### I can't edit an identification record I've submitted

**Cause** — Records are locked once submitted and stay **Pending** until HR processes them.

**Fix** — Wait for HR to review it. If something is wrong, contact HR directly rather than trying to resubmit.

### I can only see one identification document on my profile

**Cause** — The Identification tab shows only your current active document by default.

**Fix** — This is expected. Superseded records aren't displayed in the main view.

### Where do I record my DEWA or Ejari details?

**Cause** — These aren't a separate section.

**Fix** — They're identification types. Go to **Full Profile ▸ Identification**, click **Add new identification +**, and select **DEWA** or **Ejari** from the Identification type dropdown.

### My bank account change hasn't taken effect

**Cause** — Payment information changes go through an approval workflow, and only one account can be active at a time.

**Fix** — The previous account is marked inactive once the new one is approved. Note that the system also runs a duplicate IBAN check on submission, so a rejected submission may be a duplicate.

### I can't see my old bank account

**Cause** — Only the active account is shown in ESS. Inactive accounts are filtered out.

**Fix** — This is expected behaviour.

### I can't add or change a screening record

**Cause** — Most screening records are read-only. Only items explicitly enabled for employee action can be updated, and not all employees have permission.

**Fix** — Contact HR if a screening record needs correcting.

### My qualification isn't showing on my profile

**Cause** — Education records show as **In Review** until HR approves them.

**Fix** — Once approved, the qualification appears on your profile immediately. Make sure you attached your certificate and transcripts, as a missing attachment can hold up review.

### My skill or subject is still pending

**Cause** — Skills and subjects are routed through an approval workflow with your manager or HR.

**Fix** — The record stays pending until approved. Your manager sees it in their **Tasks ▸ Approvals** tab.

### The org chart is slow to load

**Cause** — The chart pulls live structure data from Dynamics 365 on first load.

**Fix** — The initial load takes a few seconds. After that, navigating between levels is instant.

### I can't find a colleague in the company directory

**Cause** — The search matches on names.

**Fix** — Try searching their **reporting manager's name** instead of theirs. Both work as search terms.

### A certificate shows as Expiring or Expired

**Cause** — Certificates are tracked against their expiry date and labelled Valid, Expiring, Expired, or Invalid.

**Fix** — Add a renewed certificate via **Skills & performance ▸ View All Certificates ▸ Add new certificate +**, complete the details, and upload the file. Expiry notifications also appear in the notification bell.

---

## Questionnaires

### I can't find a questionnaire I was told to complete

**Cause** — Questionnaires sit under a specific tab and only appear within their active date window.

**Fix** — Go to **My work ▸ Questionnaires**. If it isn't listed, the schedule may not have started yet or may have closed — check with HR.

### I lost my progress on a long questionnaire

**Cause** — Progress is only kept if you save it deliberately.

**Fix** — Use **Save as Draft** before leaving. The status changes to **In Progress** and you can pick it up with **Continue**.

### The questions changed as I answered them

**Cause** — Questionnaires can branch based on your responses.

**Fix** — This is by design. Answer each question in sequence.

### A questionnaire disappeared after I submitted it

**Cause** — Submitted questionnaires drop out of your active list.

**Fix** — A full history of everything you've completed remains available in the same tab.

### I finished the offboarding survey but my checklist still shows it as outstanding

**Cause** — Submitting the survey and completing the checklist task are two separate actions.

**Fix** — Return to your task list and mark the associated task as complete so HR sees the updated status.

---

## Approvals and Tasks

### A request from my team member hasn't reached me

**Cause** — Only certain profile changes require approval, and they land in a specific tab.

**Fix** — Check **Tasks ▸ Approvals**. Identification, education, subject, professional experience and skill submissions appear there. Address and contact changes never require approval.

### I'm going on leave — how do I stop approvals piling up?

**Cause** — Approvals continue to route to you unless a delegation is in place.

**Fix** — Go to **Approval delegations**, click **Add delegation**, name the delegate, set a start and end date, choose the scope, tick **Enable delegation**, and submit. It expires automatically at the end date.

### My delegate isn't receiving anything

**Cause** — The delegation was created but not enabled, or the date range hasn't started.

**Fix** — Reopen the delegation and confirm **Enable delegation** is ticked and today's date falls inside the start and end dates.

---

## Onboarding

### A task in my list is locked

**Cause** — The task has a dependency on another task that hasn't been completed yet.

**Fix** — Open the task. Its detail view lists each dependency, its status, who it's assigned to, and its target date. If a dependency is overdue, contact the person responsible.

### I completed a task but it's still showing

**Cause** — Updating the status alone doesn't record the change.

**Fix** — After setting the status, click **Confirm**. The task is then marked complete and drops off your active list.

---

## HR Requests

### The request type I need isn't listed

**Cause** — Only request types HR has enabled for ESS are shown. Some types are initiated internally by HR.

**Fix** — Contact HR to ask whether the request should be raised through another route.

### I can't submit my request

**Cause** — One or more mandatory fields haven't been completed.

**Fix** — Fields vary by request type — an Early Exit request, for example, asks for a covering person, effective date, time, handover notes and reason. Complete everything marked mandatory, then submit.

### The Tuition Fee button is greyed out

**Cause** — Eligibility isn't met, or a request already exists for that dependent.

**Fix** — Check that the dependent has been approved through the workflow and is flagged as a **Full-Time Student** at a GEMS school on their **Dependent Details** sub-tab. If you have already submitted a tuition fee request for that dependent, it cannot be resubmitted.

### My transport request won't submit

**Cause** — The transport request runs as an integration with the external Phoenix system, which validates the student before the request can proceed.

**Fix** — Confirm the dependent is approved and has a valid **student ID** and **school** recorded. Without these, validation fails and the request cannot be submitted.

### My request status hasn't changed even though HR says it's done

**Cause** — The ESS cache refreshes on a five-minute cycle.

**Fix** — Allow 3–5 minutes for the updated status to appear. This delay is by design.

### I've changed my mind about a request I submitted

**Cause** — Requests can be withdrawn, but only while still pending.

**Fix** — Open the request and click **Cancel**.

### I can't find HR's response

**Cause** — Feedback and documents sit inside the request record rather than being emailed.

**Fix** — Open the **Submit request** tile, click **My requests →**, and open the request. You'll see the status, the **HR Feedback** notes, and a **Download** link for any document HR attached.

---

## Probation

### I'm a manager and can't find my team's probation review

**Cause** — Reviews are routed to a specific queue when generated.

**Fix** — Go to **Skills & performance ▸ Performance Management ▸ Team Probation Review Requests**. Reviews also appear in your **Manager View** or **My Team** section. If nothing is listed, the review may not have been generated yet — check with HR.

### I can't type in the employee comment field

**Cause** — At the manager stage, the employee's comment field is read-only.

**Fix** — This is expected. Use the **Manager Comments** field per competency and **Overall Manager Comments** for your summary. The employee completes their own fields after you submit.

### The Stage 2 form is asking for a Review Outcome

**Cause** — Stage 2 reviews carry an outcome that determines what happens next.

**Fix** — Select **Meets Expectations** to pass the review to the employee for feedback with HR notified at the same time, or **Performance Concerns** to route it directly to HR only — in that case the employee is not informed of the outcome at this stage.

### I'm an employee and haven't received my probation review

**Cause** — The review only reaches you after your manager submits their part — and, for Stage 2, only where the outcome is Meets Expectations.

**Fix** — You'll get a notification when your feedback is due. Find it under **Employment ▸ Probation Review**.

### I want to see how Stage 1 compared with Stage 2

**Cause** — The two stages are separate records.

**Fix** — Stage 2 forms display Stage 1 ratings and comments side by side with the Stage 2 fields, so the progression is visible on one screen.

---

## Benefits

### A benefit or allowance is missing from my rewards statement

**Cause** — Only components HR has classified with a reward type appear on the statement.

**Fix** — The statement is read-only and maintained by HR and Finance. Contact your HR team if something looks wrong or missing.

### My airfare figure doesn't match what I expected

**Cause** — The airfare amount shown reflects actuals integrated from the payroll system rather than an entitlement value.

**Fix** — Contact your HR team if the figure looks incorrect.

### I can't find my gratuity figure

**Cause** — Gratuity sits on the Benefits tab rather than in the main rewards statement.

**Fix** — Go to **Rewards & Benefits** and select the **Benefits** tab. Gratuity is calculated from your payroll disbursement record and shown alongside your enrolled benefit plans and entitlement amounts.

### My child's concession isn't listed

**Cause** — Children's concessions appear on the statement per child once processed, including the student ID.

**Fix** — Confirm the tuition fee or transport request has been submitted and approved. If it has and the concession still isn't showing, contact HR.

---

## Learning

### I can't find my GEMSU courses

**Cause** — GEMSU courses are surfaced through a tile on the ESS home page rather than a menu.

**Fix** — Click the **Learning and Professional Development** tile on the home page. If the tile isn't there, contact HR to confirm your role and permissions.

### A course I've completed in GEMSU still shows as in progress

**Cause** — Course status reaches ESS through the integration with GEMSU, so there is a delay between finishing a course and the status updating.

**Fix** — Allow time for the integration to run, then check again. If the status still hasn't changed, contact your HR team.

### A course I've been assigned isn't showing in ESS

**Cause** — The course hasn't come through from GEMSU.

**Fix** — Confirm in GEMSU that the course is assigned to you. If it is and it still isn't in ESS, contact your HR team — they can check the integration log.

### I don't know which courses I have to complete

**Cause** — Not every assigned course is compulsory.

**Fix** — Check the tag on each course. **Mandatory** courses are required; **Recommended** courses are optional. Anything flagged **Overdue** has passed its start date and should be picked up first.

### I can't update or complete a course from ESS

**Cause** — The ESS course list is a read-only view of your GEMSU record.

**Fix** — Complete the course itself in GEMSU. Your progress flows back into ESS through the integration.

---

## Leave

### The leave plan or leave type I want isn't in the list

**Cause** — HR controls which plans and types are visible in ESS, and you only see the plans you are enrolled in.

**Fix** — Your enrolment comes from your position, so it updates when you move roles. If a plan or type you expect is missing, contact your HR team.

### I can't change the end date on my maternity leave request

**Cause** — Grant-based leave types must be taken as one full block.

**Fix** — Select your start date and let the system calculate the end date from the full grant. The block can't be shortened in ESS — speak to HR if you need a different arrangement.

### My leave is longer than the days I requested

**Cause** — Weekends and public holidays already in your calendar are skipped rather than deducted.

**Fix** — No action needed. The greyed-out days on the request are the ones not being taken from your balance.

### My request was rejected for advance notice

**Cause** — Longer periods of some leave types have to be requested a set number of days ahead.

**Fix** — The message names both figures — for example, requests of 14 days or more needing 40 days' notice. Either move your dates further out or shorten the request.

### I see 'Please record at least one document' when submitting sick leave

**Cause** — A medical certificate is required for this request.

**Fix** — Attach the certificate and submit again. During probation a certificate is needed for any sick leave; once you're confirmed, it's only needed beyond the number of days set for your school.

### I can't cancel an old leave request

**Cause** — There is a limit on how far back leave can be cancelled, measured from the leave's start date rather than the date you submitted it.

**Fix** — The message tells you how old the request is. Leave outside the window has to be reversed by your HR team.

### A leave request appeared that I didn't submit

**Cause** — A public holiday was announced or moved, and the system adjusted your leave for you.

**Fix** — No action needed. These requests are flagged as system generated and approve automatically. See [Understand how calendar changes affect your leave](./10-Leave/05-understand-calendar-changes.md).

### The number of days on my request changed

**Cause** — A day inside your requested period was announced as a public holiday, so it was removed from the request.

**Fix** — No action needed. The request keeps its original submission date and stays with your approver.

### My leave balance has changed unexpectedly

**Cause** — Balances update when a calendar change is applied, or when a request is approved or cancelled.

**Fix** — Check your recent time off requests for a system-generated entry. If the balance still looks wrong, contact your HR team — they can see the full history against each request.
