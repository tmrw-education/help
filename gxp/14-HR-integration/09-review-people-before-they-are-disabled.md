---
id: gxp-review-people-before-they-are-disabled
summary:
  - "A sync that would disable more than 5% of HR-linked people, or more than 200, stops before disabling anyone."
  - "**User sync is paused** appears, and all user syncs wait."
  - "Click **Review people to disable**, check the list, then **Disable people** or **Keep everyone**."
  - "A run you started can only be reviewed by you; a scheduled run by any organisation administrator."
keywords: [user sync is paused, review people to disable, mass deactivation, sync paused, disable people, keep everyone, awaiting review, deactivation limit, review limit, sync on hold]
video:
  youtube:
  bunny:
---

# Review people before they're disabled

If a user sync would disable an unusually large number of people, it stops before disabling anyone and waits for an
administrator to check. This protects you from a wrong filter or an incomplete read in HR.

You need the **Organisation administrator** role. A sync you started by hand can only be reviewed by you. A scheduled
sync can be reviewed by any organisation administrator.

1. Know when a sync is held

   A sync is held when it would disable more than **5%** of the people linked to HR, or more than **200** people,
   whichever is reached first. TMRW support can change these limits for your organisation. While it's held, nobody has
   been disabled.

2. Notice the banner

   **User sync is paused** appears on the **Manage** overview and on **Settings** → **Synchronisation**. It says how
   many people are waiting to be reviewed, and that scheduled and manual user syncs are on hold until then. No other user
   sync starts, scheduled or manual, until the held sync is decided. If you can't review it, the banner says who can.

   ![The User sync is paused banner with the Review people to disable action](./images/gxp-review-people-before-they-are-disabled-1.png)

3. Open the review

   Click **Review people to disable**. The dialog says how many of your HR-linked people would be disabled, and lists them
   with the **Reason**, such as **No longer in HR**, **Inactive in HR** or **No current employment in HR**.

   ![The Review people to disable dialog listing people with their reasons](./images/gxp-review-people-before-they-are-disabled-2.png)

4. Check the list

   Search the list and look for anything unexpected, such as a whole school, or people you know are still working. If
   it looks wrong, choose **Keep everyone** and ask your HR team to check the data before the next sync.

5. Decide

   To go ahead, tick **I have checked the people listed and approve disabling their accounts** and click **Disable
   people**. To complete the sync without disabling anyone, click **Keep everyone**.

   > **Note:** Disabled people can't sign in until a later sync finds them in HR again or an administrator re-enables
   > them. Their learning records are kept.

   Either way, the sync completes and user syncs carry on as normal. **Sync history** records the decision and who made
   it.
