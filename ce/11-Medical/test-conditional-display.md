---
draft: true
id: test-conditional-display
summary:
  - "Turn on a plan toggle and enter data in the fields it reveals."
  - "Turn the toggle off, then back on."
  - "Check the data you entered is still there."
keywords: [conditional display test, data preserved toggle, hide and show fields, toggle fields medical detail, check data not lost]
video:
  youtube:
  bunny:
---

<!-- SOURCE ROW — delete before publishing
Epic:    Medical Module (CE)
Feature: Medical Detail
Area:    CE
Role:    Nurse / Wellbeing Officer
-->

<!-- TODO — THIN SOURCE, UPDATE WHEN MORE INFORMATION IS AVAILABLE
Written from: Events, Excursions & Wellbeing (20 Apr), general medical
detail walkthrough.
Gap: conditional display is never tested on camera. Toggling off and back on is
not performed, so we do not know the actual behaviour — this page describes what
SHOULD be checked, not what was observed.
Needs: confirmation of the intended behaviour, then a recording. Until then this
page reads as a test instruction rather than user guidance, which may not be the
right shape for a help article — worth confirming the topic is aimed at end
users at all.
-->

# Test conditional display

The medical detail form shows and hides sections based on the plan toggles. Before
relying on those toggles, confirm that turning a section off does not discard what
was already entered.

1. Turn a toggle on and enter data

   On the medical detail record, set **Is medication required** or **Care plan
   required** to Yes, and complete some of the fields that appear.

2. Turn the toggle off

   Set the toggle back to No. The section is hidden.

3. Turn it back on

   Set the toggle to Yes again and check the data you entered is still present.

   ![A medical detail record with a plan section toggled off and back on](./images/test-conditional-display-1.png)

   > **Note:** If data is lost when a section is hidden, stop and raise it — the
   > record should preserve what was entered.
