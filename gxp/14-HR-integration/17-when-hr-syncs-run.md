---
id: when-hr-syncs-run
summary:
  - "TMRW support sets the schedule: hourly, every 6 hours, daily or weekly, at your local time."
  - "Course changes go to HR as you save them; learner status is sent continuously."
  - "Administrators can run any available sync by hand."
  - "A user sync held for review stops the next user syncs until it's decided."
keywords: [sync schedule, when does sync run, nightly sync, how often, frequency, change schedule, manual sync, scheduled sync, cadence]
video:
  youtube:
  bunny:
---

# When HR syncs run

Each HR sync runs on a schedule that TMRW support sets with you. **Settings** → **Synchronisation** shows the
**Synchronisation policy** as **Read only**, because cadence and activation are managed by TMRW.

You need the **Organisation administrator** role to run syncs by hand.

1. Know the schedule

   | Sync | When it runs |
   |---|---|
   | **Users** | On your schedule: hourly, every 6 hours, daily or weekly, at a local time you choose with TMRW support |
   | **Legal entities** | On your schedule, as above |
   | Course sync: courses from and to HR, course participants and completions from HR | On your schedule, as one run. Completions are imported after courses and participants |
   | **Courses** to HR | Also each time a course is saved. Failed writes are retried once a day |
   | **Learner status to HR** | Continuously, shortly after each change |

   A daily user sync before the working day means changes made in HR the day before are in place when staff start work.
   To change your schedule, contact TMRW support.

2. Run a sync by hand

   Go to **Manage** → **Settings** → **Synchronisation** and click **Sync now** on any available row. Manual and scheduled
   runs are recorded the same way in **Sync history**.

3. Know what makes a sync wait

   Only one user sync runs at a time. While a user sync is running, paused or held for review, the next scheduled user sync
   doesn't start. A sync held for review stops all user syncs until an administrator decides. See
   [Review people before they're disabled](./09-review-people-before-they-are-disabled.md).
