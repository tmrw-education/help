---
id: configure-leave-approval-workflow
summary:
  - "Configure the **Leave and absence request** workflow for each legal entity."
  - "Add a condition on the **system generated leave** flag so system-raised requests are approved automatically."
  - "Route employee-submitted requests to a participant or user group, adding further levels where required."
keywords: [leave workflow, leave and absence request workflow, auto approval, system generated leave, workflow condition, participant, user group, approval levels, legal entity, D365]
video:
  youtube:
  bunny:
---

# Configure the leave approval workflow

The leave and absence request workflow decides what happens to a leave request once it is submitted. It is configured per legal entity, and its most important job is to separate the requests a person raised from the requests the system raised on their behalf.

1. Open the workflow

   In D365, open the **Leave and absence request** workflow for the legal entity you are configuring.

   ![The Leave and absence request workflow in the D365 workflow editor](./images/configure-leave-approval-workflow-1.png)

2. Add the auto-approval condition

   Right-click the condition and open its **Properties**. Set it to check the **system generated leave** flag: where the flag is **Yes**, the request is approved automatically.

   This is what allows calendar changes and bulk submissions to complete without anyone intervening. When a public holiday moves, the system cancels or extends the affected leave itself and the resulting requests approve straight through.

   ![The workflow condition properties showing the check on the system generated leave flag](./images/configure-leave-approval-workflow-2.png)

3. Route employee-submitted requests

   For requests where the flag is not set — a request an employee raised in ESS — configure the assignment as you would any other approval. Assignment can be by participant, and the participant can belong to a user group.

4. Add further approval levels

   Additional levels can be added to the leave request workflow where your policy requires more than one approver.

5. Activate the workflow

   Save and activate the workflow. Requests submitted from that point follow the new configuration; requests already in review continue on the version they were submitted against.
