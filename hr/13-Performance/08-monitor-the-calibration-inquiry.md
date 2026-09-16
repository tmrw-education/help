---
id: monitor-the-calibration-inquiry
summary:
  - "In D365, open the calibration inquiry to see every review submitted for calibration in one list."
  - "A blank **calibrated rating** means the employee has not been calibrated yet."
  - "The release flags show whether ratings have been released to the manager and on to the employee."
keywords: [calibration inquiry, submitted for calibration, calibrated rating, final employee rating, released to manager, released to direct reports, performance year filter, calibration status, D365]
video:
  youtube:
  bunny:
---

# Monitor the calibration inquiry

When managers submit end of year reviews for calibration, every one of those records lands in the calibration inquiry. It is the central list HR uses to see how many records are waiting, what ratings they came in with, and how far through the release process each one has reached.

This form reports on calibration — the calibration itself is done from the HR view in ESS.

1. Open the calibration inquiry

   In D365, open the calibration inquiry under **Human Resources ▸ Performance**.

   ![The calibration inquiry in D365 listing records submitted for calibration](./images/monitor-the-calibration-inquiry-1.png)

2. Filter to the performance year

   Filter by **performance year**. Years accumulate as the system is used, so filtering keeps the list to the cycle you are working on.

3. Read the columns

   Each line is one review submitted for calibration:

   | Column | What it tells you |
   |---|---|
   | **Review ID** | The review the record came from |
   | **Employee ID** | The employee being calibrated |
   | **Final employee rating** | The rating the manager gave at the point of submission |
   | **Calibrated rating** | The rating after calibration — blank until the employee has been calibrated |
   | **Manager** | The manager who submitted the review |
   | **Released to manager** | Whether HR has released the calibrated ratings back to the manager |
   | **Released to direct reports** | Whether the manager has published the ratings to their employees |

4. Identify who still needs calibrating

   A blank **calibrated rating** means that employee has not been calibrated yet. Filtering on blanks gives you the outstanding list.

   ![Calibration inquiry records showing blank calibrated ratings against uncalibrated employees](./images/monitor-the-calibration-inquiry-2.png)

5. Track the release progress

   The two release flags let you follow the handover without chasing people. They are set in sequence:

   - HR calibrates and releases to the manager, which sets **released to manager**.
   - The manager holds their conversations and publishes, which sets **released to direct reports**.

   Records sitting released to manager but not to direct reports are the ones where a manager still has a conversation to have.

Calibration is carried out from the HR view in ESS, where the ratings are shown against the expected curve and can be adjusted — see *Calibrate performance ratings* in the ESS guide.
