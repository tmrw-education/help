---
id: what-you-need-to-connect-dynamics-365
summary:
  - "A Dynamics 365 Finance and Operations environment and its URL."
  - "A Microsoft Entra app registration, registered in F&O with a least-privilege service user."
  - "Read access to the people, position, employment and course entities; write access only for the flows you use."
  - "TMRW support to approve your environment and switch on each sync."
keywords: [requirements, prerequisites, app registration, Entra, Azure AD, certificate, F&O permissions, data entities, service user, security roles, IT checklist, what entities, growthxp]
video:
  youtube:
  bunny:
---

# What you need to connect Dynamics 365

Use this checklist with your HR and IT teams before connecting. Your F&O administrator and your Microsoft Entra
administrator each have a part to play.

1. An F&O environment

   You need the URL of the Dynamics 365 Finance and Operations environment to connect, for example
   `https://oakridge.operations.dynamics.com`, and its environment ID. Connect a test (UAT) environment first if you have
   one. TMRW support approves the environment's address before the platform can call it.

2. A Microsoft Entra app registration

   In your organisation's Microsoft Entra tenant, create an app registration for the integration. Note its **Application
   client ID** and your **Microsoft Entra tenant ID**. You don't create a client secret: the platform signs in with a
   certificate it generates. You upload the public part of the certificate to the app registration when you connect. The
   private key never leaves TMRW.

3. The app registered in F&O

   In F&O, go to **System administration** > **Setup** > **Microsoft Entra applications**, add the client ID, and map it
   to a dedicated service user. Give that user only the security roles and legal-entity access the integration needs.

4. Access to the data entities

   The service user needs read access to these F&O data entities:

   | Data entity | Used for |
   |---|---|
   | `LegalEntities` | Your companies and schools |
   | `Workers` | Names and work email addresses |
   | `PositionsV2` | Occupied positions, job titles, departments and staff categories |
   | `EmploymentsV2` | Current employments, which decide each person's legal entities |
   | Worker status | Which workers are active. Your environment may use a custom entity for this |
   | Line manager relations | Who reports to whom, if you use line managers from HR |
   | `CourseTables` | Courses |
   | `CourseParticipants` | Course registrations |
   | HR learning record | Completions recorded in HR. This is usually a custom entity in your environment |

   For write-back, it also needs write access to `CourseTables` (courses to HR), `CourseParticipants` (enrolments to HR,
   once approved) and your HR learning record entity (learner status). Grant write access only for the flows you plan to
   switch on. TMRW confirms the exact entity names for your environment with your F&O team during onboarding.

5. Someone with the right role

   You need the **Organisation administrator** role in GrowthXP to connect and run the integration.

6. TMRW support

   TMRW support makes the integration available to your organisation, approves your F&O environment, switches on each
   sync, and sets the schedule. See [Switch on each HR sync](./05-switch-on-each-hr-sync.md).

   When everything is ready, [connect to Dynamics 365](./03-connect-to-dynamics-365.md).
