---
id: gxp-import-completions-from-hr
summary:
  - "Completions recorded in HR are imported as completed learning, tagged **Recorded in HR**."
  - "Go to **Settings** → **Synchronisation** → **Courses**, row **Completions from HR**."
  - "Click **Preview sync** or **Sync now**."
  - "They need an HR course title mapping for the course."
keywords: [completions from HR, recorded in HR, external completions, training completed outside, import completions, HR learning record, prior learning]
video:
  youtube:
  bunny:
---

# Import completions from HR

Some learning is completed outside the platform and recorded in HR. Importing these completions means HR and the
platform agree about who has completed what.

You need the **Organisation administrator** role.

1. Know what's imported

   Each course HR records as completed is marked completed in the platform. Open learning is completed, and a completed
   record is added if the person didn't have the course. The completion date is the end date in HR. The completion counts
   for validity, expiry and renewals like any other.

   Each one is tagged **Recorded in HR**, which means it was completed outside the platform, with no certificate and no
   evidence in the platform. No feedback is asked for and no email is sent. Learning already completed in the platform is
   never changed, and nothing is ever marked as not completed. If the learner later completes the course in the
   platform, that completion replaces the HR record.

2. Map the course titles

   HR names courses by title. Each course needs an HR course title mapping in each legal entity. See
   [Map HR course titles](./15-map-hr-course-titles.md). Completions for unmapped titles are skipped, with the reason.

3. Run the import

   Go to **Manage** → **Settings** → **Synchronisation** → **Courses**. On **Completions from HR**, click **Preview sync:
   completions from HR** to see what would change, then **Sync now: completions from HR**. It also runs with the
   scheduled course sync, after courses and participants.

   ![The Completions from HR results with Mark completed, Record completion and Not imported rows](./images/gxp-import-completions-from-hr-1.png)

4. Check the results

   Each row says what happened: **Mark completed**, **Record completion**, **Already completed** or **Not imported**,
   with a reason, such as **No verified HR identity matches this person**.
