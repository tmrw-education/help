---
id: gxp-troubleshooting
keywords: [troubleshooting, problems, not working, error, help, cannot see, missing, why]
---

# Troubleshooting

Common problems in Growth Experience Platform and how to resolve them. Use the contents list on the right to jump to a section, or press **Ctrl+F** to search this page.

## Signing in and finding your way

### I can't sign in: "Your organisation isn't licensed"

**Cause** — Growth Experience Platform isn't available for the organisation your Microsoft account belongs to, or you signed in with a personal or different work account.

**Fix** — Sign in with your work Microsoft account. If the message stays, ask your administrator to contact TMRW support to check your organisation's access.

### I can't sign in: "Your account has been disabled"

**Cause** — An administrator disabled your account, or the HR sync disabled it because HR no longer lists you as active in a current position.

**Fix** — Your learning records are kept. Ask your administrator to check. If HR has you wrong, it's fixed in HR, and the next HR sync re-enables you automatically. If an administrator disabled you, they re-enable you in **People**.

### I don't see Manage in the header

**Cause** — **Manage** only appears if you have a role beyond learner, or people report to you. Everyone else is a learner.

**Fix** — Expected for most staff. If you should have a role, ask your organisation administrator. See [Understand the roles](./12-Access-and-permissions/01-understand-the-roles.md).

### A page I expect is missing from Manage

**Cause** — Each page under **Manage** belongs to particular roles. For example, **Notifications**, **Settings** and **Audit log** are for organisation administrators, and **Learning rules** for HR managers, course managers and administrators.

**Fix** — Check what your role includes on **Access and permissions** → **Roles explained**, or ask your organisation administrator.

### My new role isn't showing

**Cause** — The page was loaded before the role was given.

**Fix** — Reload the page. If it still doesn't show, ask the administrator to check **Who has access**, including **Where** the role applies.

---

## Courses and learning

### I can't see a course

**Cause** — Each course has an audience, and you only see courses whose audience includes your school or organisation, or that are assigned to you. Some courses are only visible to people they're assigned to. Unpublished (draft) courses aren't visible to learners.

**Fix** — Ask your learning manager or course manager to assign it to you, or to check the course's audience and that it's published.

### My course has no due date

**Cause** — Recommended learning usually has no due date. Learning rules give recommended learning a due date only if **Give recommended learning a due date** is on, and an administrator can assign learning without one.

**Fix** — Expected. Recommended learning is never overdue, with or without a due date. If the learning should be mandatory, ask your learning manager or HR manager.

### A course says "Recorded in HR" and has no certificate

**Cause** — The course was completed outside the platform and recorded in your HR system, so the platform has no evidence or certificate for it.

**Fix** — Expected. The completion still counts. If you need a certificate, complete the course in the platform; that completion replaces the HR record.

### My certificate hasn't been issued

**Cause** — Your organisation, or the course, needs your course feedback before the certificate is issued. Or the course has no certificate.

**Fix** — Open the course and give your feedback. The certificate is issued as soon as valid feedback is submitted.

### I can't remove an assignment

**Cause** — Learning registered in HR, or assigned by a learning rule, can't be removed in Learning assignments, because HR or the rule would assign it again. The message says which: "Managed by HR — cancel the registration in HR" or "Assigned by rule … — change the rule or the person's details".

**Fix** — Cancel the registration in HR, or change the learning rule or the person's details.

### I can't change a due date or export a report

**Cause** — Changing due dates is for HR managers and organisation administrators. Learning managers and report viewers can't export reports.

**Fix** — Ask an HR manager or administrator. See [Understand the roles](./12-Access-and-permissions/01-understand-the-roles.md).

---

## Calendars, teams and reports

### The deadlines calendar or learning report is empty

**Cause** — If you're a learning manager or report viewer, you choose which organisation to look at, and nothing is shown until you choose one. The calendar says **No organisation chosen**, and the report says **Choose an organisation**.

**Fix** — Choose your school or unit in **Organisation**, and tick **Include child organisations** if you want the units below it. In the calendar, also check at least one event type is chosen.

### Someone is missing from My team

**Cause** — My team shows the people who report to you in the manager hierarchy, and everyone below them. Disabled people are left out.

**Fix** — Ask your administrator to check the person's line manager in **People**, or ask HR if line managers come from HR. See [Set a line manager](./12-Access-and-permissions/07-set-a-line-manager.md).

### I can't change someone's line manager

**Cause** — The form says **Line manager maintained by your HR integration**. The manager comes from HR and updates with each sync.

**Fix** — Change the manager in HR. It's updated at the next HR sync.

---

## Access and permissions

### A role isn't offered in Give access

**Cause** — You can only give roles whose permissions you hold yourself. The form lists the hidden roles under **Not shown** with the reason.

**Fix** — Ask another organisation administrator to give it.

### "Access changes are not enabled"

**Cause** — Giving access is switched off for your organisation.

**Fix** — Contact TMRW support.

### I can't find someone in Give access

**Cause** — The person hasn't been imported from HR yet, or your directory couldn't be searched. In that case the form says **Directory not searched**.

**Fix** — Search by their work email. If they're a new starter, import them with **Individual HR lookup** first. See [Look up a person in HR](./14-HR-integration/10-look-up-a-person-in-hr.md).

### Someone has "Old report viewer (no effect)"

**Cause** — An older role that gives nothing beyond a learner.

**Fix** — See [Replace an old report viewer grant](./12-Access-and-permissions/10-replace-an-old-report-viewer-grant.md).

---

## Emails and notifications

### No emails are being sent

**Cause** — The **Delivery and branding** section shows why: **Emails are switched off for your organisation**, or a delivery tag of **Not sent** or **Not set up**.

**Fix** — Contact TMRW support to switch emails on for your organisation.

### Reminders aren't being sent

**Cause** — **Scheduled emails are not switched on** for your organisation, or **Upcoming deadline reminders** or **Overdue reminders** are off. Overdue reminders are only for mandatory learning, and recommended or self-enrolled learning is only reminded if it's ticked.

**Fix** — Check the reminder schedule on **Notifications**. Contact TMRW support to switch on scheduled emails. See [Set up learning reminders](./13-Organisation-settings/03-set-up-learning-reminders.md).

### A manager escalation wasn't sent

**Cause** — Escalation is off by default, or the person has no line manager who can be emailed. **Last daily check** shows the reasons, such as **No line manager recorded** or **Manager has no email address**.

**Fix** — Turn escalation on and fix the line manager. It's tried again at the next daily check. See [Turn on manager escalation](./13-Organisation-settings/04-turn-on-manager-escalation.md).

### Feedback reminders aren't being sent

**Cause** — There's no feedback deadline, so no feedback reminders are sent.

**Fix** — Set a deadline in **Settings** → **Course feedback**. See [Set course feedback rules](./13-Organisation-settings/08-set-course-feedback-rules.md).

---

## HR integration

### "User sync is paused"

**Cause** — A user sync would disable more people than your review limit, so it stopped before disabling anyone. All user syncs, scheduled and manual, wait until it's decided.

**Fix** — Click **Review people to disable**, check the list, and choose **Disable people** or **Keep everyone**. If the banner says only another administrator can review it, ask them. They started the sync. See [Review people before they're disabled](./14-HR-integration/09-review-people-before-they-are-disabled.md).

### A sync says "Not activated" or "Unavailable"

**Cause** — TMRW support hasn't switched that sync on for your organisation, or the connection isn't connected.

**Fix** — Expand the row to see the reason. Contact TMRW support to switch the sync on. See [Switch on each HR sync](./14-HR-integration/05-switch-on-each-hr-sync.md).

### Test connection fails

**Cause** — The certificate isn't uploaded to the Microsoft Entra app registration, the app isn't registered in F&O, or the F&O service user can't read a data entity. Each **Failed** row names what failed.

**Fix** — Upload the downloaded certificate to the app registration, check the app is registered in F&O under **Microsoft Entra applications**, and check the service user's access. See [What you need to connect Dynamics 365](./14-HR-integration/02-what-you-need-to-connect-dynamics-365.md).

### Syncing stopped after I changed the connection

**Cause** — Changing the environment, tenant, client ID or certificate stops syncing until the connection is tested again.

**Fix** — Click **Test connection** and check every row passes.

### Someone wasn't imported

**Cause** — The import rules left them out. Common reasons are **Inactive in HR**, **Only temporary (excluded) positions, such as T- positions**, **No current employment in HR**, or no occupied position on the day of the sync.

**Fix** — Check the person with **Individual HR lookup**, which shows the reason. Fix the record in HR, then run a sync. See [Who the user sync imports](./14-HR-integration/08-who-the-user-sync-imports.md).

### Someone was disabled but still works for us

**Cause** — In HR, they're inactive, have only temporary positions, or have no current employment.

**Fix** — Correct the record in HR. The next sync re-enables them automatically. To restore access straight away, re-enable the account in **People**. The next complete sync disables it again unless HR lists them by then.

### Someone is in the wrong school

**Cause** — Their legal entity in HR isn't linked to the right unit in **Organisation structure**, or HR has them in a different legal entity.

**Fix** — Link the legal entity in **Organisation structure**, or correct the employment in HR. See [Link legal entities to an organisation](./13-Organisation-settings/11-link-legal-entities-to-an-organisation.md).

### Someone shows "Pending: missing email"

**Cause** — HR has no work email for them.

**Fix** — They're still imported. Add the work email in HR, and the next sync updates them.

### Staff are in "People needing review"

**Cause** — Their staff category isn't defined, or HR sends conflicting categories.

**Fix** — Add the category in **Staff categories**, or fix the value in HR. See [Manage staff categories](./12-Access-and-permissions/09-manage-staff-categories.md).

### A course wasn't sent to HR

**Cause** — It has no start and end offering dates, and HR needs them, so it was skipped.

**Fix** — Add **Offering dates** to the course. It's sent at the next sync.

### Learner status updates are skipped

**Cause** — The learner has no HR identity, or the course has no HR course title in their legal entity. Titles must match exactly, including capitalisation.

**Fix** — Add or correct the mapping. See [Map HR course titles](./14-HR-integration/15-map-hr-course-titles.md).

### A completion from HR wasn't imported

**Cause** — The HR course title isn't mapped, the person has no verified HR identity, or the course is still a draft.

**Fix** — Check the reason in the preview, then map the title or publish the course.

### Enrolments aren't going to HR

**Cause** — Writes to the HR participant record are held until your F&O team approves them. The row shows **To HR** as **Held**.

**Fix** — Nothing is lost while writes are held. Contact TMRW support when your F&O team is ready to approve them.

### A sync run says "Details removed after 7 days"

**Cause** — To save space, the people in each user sync are kept for 7 days, or while it's one of your latest 7 syncs.

**Fix** — Expected. The run's counts stay in **Sync history**.

### A sync failed

**Cause** — The reason is shown on the run, for example "The HR service could not be reached or is temporarily unavailable" or "The HR service rejected access".

**Fix** — For a temporary problem, run the sync again later. If the HR service rejected access, check the connection with **Test connection**. If it keeps failing, contact TMRW support with the run's details from **Sync history**.
