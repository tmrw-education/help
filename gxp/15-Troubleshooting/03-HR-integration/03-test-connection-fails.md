---
id: fix-test-connection-fails
summary:
  - "Each **Failed** row names what failed: the certificate, the app registration, or the F&O service user's access."
  - "Upload the certificate to the Microsoft Entra app registration, check the app under **Microsoft Entra applications** in F&O, and check the service user's access."
keywords: [test connection fails, connection failed, certificate, entra app registration, service user, data entity, troubleshooting, growthxp]
---

# Test connection fails

**Cause** — The certificate isn't uploaded to the Microsoft Entra app registration, the app isn't registered in F&O, or the F&O service user can't read a data entity. Each **Failed** row names what failed.

**Fix** — Upload the downloaded certificate to the app registration, check the app is registered in F&O under **Microsoft Entra applications**, and check the service user's access. See [What you need to connect Dynamics 365](../../14-HR-integration/02-what-you-need-to-connect-dynamics-365.md).
