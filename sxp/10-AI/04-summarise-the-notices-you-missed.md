---
id: summarise-the-notices-you-missed
summary:
  - "Ask Felix **what notices did I miss?**"
  - "Pick the **interests** you want covered if you have not set any."
  - "Click a **footnote** to open the notice on the Notices canvas."
keywords: [notice summary, what notices did I miss, summarise notices, catch up on notices, Felix notice summary, notices from the last 24 hours, notice interests]
video:
  youtube:
  bunny:
---

{/* SOURCE — 21 Apr 2026 AI Agents Sprint Demo (9:50–12:10);
9 Apr 2026 (30:28, attempt failed on connectivity).
TO RE-VERIFY BEFORE PUBLISHING: "missed" currently means the past 24 hours only,
because the read/unread flag had not been developed for notices. Once that flag
ships, "missed" is intended to mean unread — rewrite step 1 then.
No screenshots available — add to ./images/ from a UAT build. */}

# Summarise the notices you missed

Rather than scrolling the noticeboard, ask Felix what you have missed. It reads
the recent notices for the categories you follow and gives you a short summary of
each, grouped by interest.

1. Ask for the summary

   Open **Felix** and prompt *what notices did I miss?* or *summarise my notices*.

   > **Note:** "Missed" currently means notices created in the **past 24 hours**.
   > It does not yet mean unread — read and unread are not tracked for notices at
   > this release.

2. Choose your interests if you are asked

   If you have not saved any notice interests, Felix shows an interest picker.
   Select the categories you want — for example **General**, **Sport** and
   **Arts** — and it summarises each one separately.

   > **Note:** To set your interests permanently instead, see
   > [Follow notice categories](../04-Notices/02-follow-notice-categories.md).

3. Read the summary

   Felix returns a short summary per interest, covering the notices posted in
   each.

4. Open a notice in full

   Each summary carries a **footnote** link. Click it to open the **Notices**
   canvas with that notice highlighted, where you can read the full card and view
   more details.

5. Check another category

   When you are done, Felix offers to check another category. Say yes and it
   presents the interest picker again.
