---
id: configure-mandatory-attachments
summary:
  - "Go to **Identification Types** setup in D365."
  - "Select a document type and configure its **mandatory fields** and **attachment requirement**."
  - "Scope rules by company and worker country/region as needed, then **Save**."
keywords: [mandatory attachment, mandatory fields, identification types, document type, passport, Emirates ID, attachment required, identification setup]
video:
  youtube:
  bunny:
---

# Configure mandatory attachments and fields for identification

Each identification document type can have its own set of required fields and attachment rules. When an attachment is made mandatory, the Submit button in ESS is disabled until the employee uploads a file — preventing incomplete submissions.

1. Navigate to Identification Types setup

   In D365, go to the **Identification Types** setup form within the Human Resources configuration area.

   ![The D365 navigation showing the Identification Types setup form within the Human Resources configuration area](./images/configure-mandatory-attachments-1.png)

2. Select a document type

   Choose the identification type to configure — for example, Passport, Emirates ID, Labour Card, or Medical Insurance.

3. Configure mandatory fields

   For each document type, specify which fields must be completed before submission. Different document types display different field sets — for example:
   - **Passport**: issue date, end date, place of issue
   - **Khamra**: agency field instead of country
   - **Medical Insurance**: no issuing agency required

   ![The Identification Type detail form showing the field list with mandatory toggles and the document type selected in the header](./images/configure-mandatory-attachments-2.png)

4. Set the attachment requirement

   Toggle the **Attachment Required** flag on or off for this document type. When enabled, employees cannot submit the identification record without uploading a supporting file.

5. Scope by company and worker country/region

   Rules can be scoped per **legal entity (company)** and per **worker country/region**, allowing different requirements for employees across different schools or locations.

6. Save

   Click **Save** to apply the configuration. The rules take effect immediately for all new identification submissions in ESS.
