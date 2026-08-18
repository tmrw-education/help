---
draft: true
id: initiate-emergency
summary:
  - "Create a case and set the **Case type** to Emergency."
  - "Set the **School**, **Emergency type**, **Declared date** and **Start time**."
  - "Save — emergency attendance records are generated for students on site."
keywords: [initiate an emergency, declare emergency school, emergency case CE, emergency protocol activated, fire drill attendance, emergency start time]
video:
  youtube:
  bunny:
---

<!-- SOURCE ROW — delete before publishing
Epic:    Attendance (CE)
Feature: Emergency Attendance
Area:    CE
Role:    Attendance Officer, Principal / School Leader, School Admin, Teacher
-->

# Initiate Emergency

Declaring an emergency switches the school into emergency mode and generates the
roll that staff use to account for every student. It is normally the emergency
coordinator who does this.

1. Create the emergency case

   Create a new case and set the **Case type** to Emergency.

2. Set the emergency detail

   Complete:

   - **School** — the school the emergency applies to
   - **Emergency type**
   - **Emergency declared date**
   - **Emergency start time**

   ![An emergency case with school, emergency type, declared date and start time](./images/initiate-emergency-1.png)

3. Save

   Save the case. CE pulls every attendance record for that school where the end
   time is later than the emergency start time, and creates emergency attendance
   records from them.

   > **Note:** The start time matters. Only classes still running at that moment
   > are pulled in — anyone whose class had already finished is not treated as
   > being on site.

4. Confirm emergency mode is active

   The Staff Experience Platform shows **Emergency protocol activated** and
   attendance switches to emergency mode for teachers.

5. Stand down

   Once every student is accounted for, resolve the case. The school returns to
   normal attendance.
