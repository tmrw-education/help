# Troubleshooting

Common problems in Procurement XP and how to resolve them. Use the contents list on the right to jump to a section, or press **Ctrl+F** to search this page.

## Navigating Procurement XP

### Sign in with Microsoft doesn't work

**Cause** — A personal or non-GEMS Microsoft account is being used, or an external vendor is trying to sign in through the internal button.

**Fix** — Sign in with your **GEMS M365** email address — the same one you use for email. External vendors must use **Vendor sign in** instead, below the main sign-in square.

### A vendor can't find where to sign in

**Cause** — Vendors have a separate entry point to the platform and cannot use the staff sign-in button.

**Fix** — Direct the vendor to the prompt below the main procurement sign-in square: **Are you a vendor? Sign in here**. Their username and password are in the invitation email sent by the school.

### A section link is missing from the navigation bar

**Cause** — Access to **Vendors**, **Prospective Vendors**, **Contracts**, **Purchase Requisitions** and **Projects** depends on the permissions attached to your account.

**Fix** — Contact your procurement administrator to confirm which sections your role should be able to see.

### An Overview tab is empty

**Cause** — There are no records that currently meet the tab's criteria — for example, no contracts are approaching their end date.

**Fix** — No action needed. The tabs only list live items, so an empty tab means nothing in that category needs attention.

### I've navigated away and can't get back to the Overview

**Cause** — The Overview is the landing page rather than a link in the section list.

**Fix** — Click **Procurement XP** at the far left of the navigation bar to return to the Overview from anywhere in the platform.

---

## Vendor Registration

### The vendor hasn't received their invitation email

**Cause** — Adding a prospective vendor and inviting them are two separate steps. Creating the record does not send the invitation.

**Fix** — Open the **Prospective Vendors** table, find the vendor, and click **Invite vendor** in the far-right column. Complete the details and click **Submit**.

### The vendor can't add their bank account

**Cause** — A system check prevents a bank account that already exists in the platform from being added against a prospective vendor.

**Fix** — Confirm the vendor is not already registered under another record. If the account is genuinely new, check the details entered against the bank letter and re-enter them.

### The bank details didn't populate after uploading the bank letter

**Cause** — The system reads the uploaded bank details letter and fills the fields automatically, but only if the document is legible.

**Fix** — Re-upload a clear copy of the bank details letter. If the fields still don't populate, enter the details manually.

### The vendor's status has changed to manual intervention

**Cause** — Bot validation could not verify the submitted form automatically.

**Fix** — The procurement team must complete the verification manually before the status moves to **Procurement review** and approval can continue.

### The completed vendor form hasn't reached procurement yet

**Cause** — Bot validation runs after the vendor submits, and the form is not released for review until it finishes.

**Fix** — Allow 3–5 minutes for the form to reach procurement. If the status changes to manual intervention instead, complete the verification manually.

### Finance has returned the vendor form

**Cause** — The finance team found an issue with the extracted values or the supporting documents.

**Fix** — The form returns to procurement with finance's comments. Review the comments, correct the record or request updated documents from the vendor, then resubmit for **Finance approval**.

### I'm not sure which documents the vendor needs to supply

**Cause** — Documentation requirements differ depending on whether the prospective vendor is local or overseas.

**Fix** — The full list of required documents for that vendor is included in the invitation email they received. Typical documents include a VAT certificate and a trade licence.

### I can't find the approved vendor's account number

**Cause** — Once approved, the record moves out of **Prospective Vendors** and becomes a full vendor.

**Fix** — Look in the **Vendors** tab, or in D365 F&O under **Accounts payable** ▸ **Vendors** ▸ **All vendors**.

---

## Contract Management

### The contract can't be submitted to the contract manager

**Cause** — One or more required fields have not been completed.

**Fix** — Missing fields are highlighted in red. Work back through **Basic information**, **Contract specifics**, **Attachment**, and **Reviewers and approvers**, complete anything highlighted, then click **Submit to Contract Manager**.

### I need to change a contract that has already moved to the next stage

**Cause** — Once submitted, the contract sits with the assigned reviewer and cannot be edited by the previous stage.

**Fix** — The current reviewer clicks **Send back…** to return the contract to the **Initiator** or **Contract manager** for updating.

### The contract is stuck waiting on the vendor

**Cause** — After business approval, the approval pathway is blocked until the vendor responds.

**Fix** — Nothing can progress until the vendor either approves the contract or uploads a counteroffer. Negotiations take place on the platform, so check the contract for a newly uploaded version.

### I can't find an earlier version of the contract

**Cause** — Each upload creates a new version, and only the latest is shown by default.

**Fix** — Click **View version history** in the top-left corner of the contract to access previous versions.

### I'm not sure which version of the contract to work from

**Cause** — Several parties upload revised documents during review and negotiation.

**Fix** — Always click **Download current version** on the right of the screen, make your changes to that file, then upload it in the **Attachment** tab under **Upload Contract**.

### The contract went straight to the vendor without legal or business review

**Cause** — The contract manager can bypass both **Legal** and **Business** and submit the contract directly to the vendor.

**Fix** — This is expected behaviour where those reviews aren't needed. If the contract should have been reviewed, use **Send back…** to return it and reassign the reviewers.

### The CPO can't submit the contract to the CEO

**Cause** — The CPO has two extra confirmations that must be completed before the contract can move on.

**Fix** — Tick both **Risk confirmation** and **Government compliance confirmation** in the CPO tab, then submit to the CEO.

### The contract status won't change to Signed

**Cause** — The final CEO steps have not all been completed.

**Fix** — The CEO must tick **Execution confirmation**, upload the signed contract, complete the **Signed date** field, and then mark the contract as signed.

### The signed contract isn't showing in D365 F&O

**Cause** — The contract only flows through to F&O once it has been marked as signed.

**Fix** — Confirm the contract shows as signed in Procurement XP, then look in F&O under **Procurement and sourcing** ▸ **Contracts** ▸ **All contracts**.

---

## eSourcing, Bidding and Auction

### The purchase requisition doesn't appear when creating a project

**Cause** — Sourcing projects are built from purchase requisitions raised in D365 Finance & Operations. If the requisition doesn't exist there, it won't be listed.

**Fix** — Raise or complete the purchase requisition in D365 F&O first, then create the project and select it from the list.

### A project was published by mistake

**Cause** — Publishing immediately sends the invitation email to every selected vendor and prospective vendor.

**Fix** — Publishing cannot be undone. Use **Project messages** and **Event communication** to contact the invited vendors and explain the position.

### No assessments are showing on the project

**Cause** — The assessments available depend on the **Company type** selected. Some company types — a service company, for example — require few assessments or none at all.

**Fix** — Check the company type selected under **Assessments**. If it is wrong, change it and the applicable assessments will update.

### A prospective vendor has been invited to bid — can they be awarded the project?

**Cause** — Prospective vendors can be included in a sourcing project and will receive the invitation email, but they are not yet fully onboarded.

**Fix** — The vendor must complete the full registration and approval process before their bid can be accepted. Start their onboarding in parallel so it doesn't hold up the award.

### A vendor says they can't submit after the deadline

**Cause** — The submission close date set under **Schedule** is the last day vendors can submit.

**Fix** — Check the close date on the project. Submissions after that date are not accepted.

### There's no clear winner among the submitted bids

**Cause** — Bids are too close to award, or more detail is needed from the vendors.

**Fix** — On the **Approve quotations** page, click **Next Round** to open an auction rather than awarding the project.

### The project was awarded to the wrong vendor

**Cause** — Awarding a project closes it. The status changes to closed and awarded.

**Fix** — This cannot be undone. Contact your procurement lead — a new sourcing project will need to be raised.

### The contract wasn't created after awarding the project

**Cause** — Awarding a project does not create the contract by itself.

**Fix** — Go to **Contracts**, click **New Contract**, search for the awarded vendor under **Supplier name**, open their **Approved bids** section, and select the awarded project. Complete the form sections and publish — the contract is then created in D365 F&O.

### A vendor can't find the project they were invited to

**Cause** — Invited projects sit in a dedicated area of the vendor portal.

**Fix** — Ask the vendor to click **RFQ/Auction** in the vendor portal navigation. Every project they have been invited to is listed there. They must click **Participate** to open it.

### A vendor's Submit button won't work

**Cause** — A bid has four parts — technical, terms and conditions, assessments, and price bid — and all must be complete before submission.

**Fix** — Ask the vendor to work back through each section, including entering a **Unit price** for every item and accepting the buyer's terms, then submit.

### A vendor wants to change or withdraw a submitted bid

**Cause** — Once submitted, a bid is visible to the buyer immediately.

**Fix** — Bids cannot be recalled. The vendor should raise the issue through the **Event communication** tab so the buyer is aware before quotations are compared.
