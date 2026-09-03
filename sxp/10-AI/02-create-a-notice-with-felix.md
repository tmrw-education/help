---
id: create-a-notice-with-felix
summary:
  - "Prompt Felix with **create a notice** and what it is about."
  - "Confirm the **category** and **RSVP**, then pick a **title**, **description**, **audience** and **dates**."
  - "Add an image, check the review screen, and click **Publish**."
keywords: [create a notice with Felix, notice by prompt, AI notice, publish a notice with AI, write a notice, Felix notice agent, notice title suggestions, notice description AI]
video:
  youtube:
  bunny:
---

<!-- SOURCE — 9 Apr 2026 AI Agents Sprint Demo (0:04–9:50, 10:37–19:13).
TO RE-VERIFY BEFORE PUBLISHING: the design pass with Ginno had not been applied
when this was recorded, and a templated starter prompt was under discussion.
No screenshots available — add to ./images/ from a UAT build. -->

# Create a notice with Felix

Felix can write and publish a notice for you from a plain-English prompt. It
suggests the title and description, works out the category and audience from what
you say, and checks your details against your school's data before it publishes.

You can also create a notice on the form — see
[Create a notice](../04-Notices/04-create-a-notice.md).

1. Start with a prompt

   Open **Felix** and describe the notice — for example *create a cultural event
   notice for Years 5 and 10*. A short prompt works too: Felix simply asks you
   more questions.

   > **Note:** Felix checks what you type against your school's data. If you name
   > a year group your school does not have, it tells you before going any
   > further.

2. Confirm what Felix inferred

   Felix plays back what it worked out from your prompt — the **notice category**
   and whether **RSVP** should be on. Click to confirm, cancel, or edit inline:
   change the category, or toggle **RSVP** off if attendance does not need
   confirming.

3. Choose a title

   Felix suggests a title. Accept it, ask for **alternatives**, or prompt for a
   change — for example *suggest a title with the event date, Thursday next week*.
   Anything new you mention here is picked up later in the flow.

4. Generate the description

   Felix drafts the description from what it knows so far. Prompt it to add
   anything missing — for example *add the location: the main campus yard* — and
   it regenerates.

5. Complete the audience

   The standard StaffXP audience screen appears inside the flow. Set the **year
   groups**, **houses**, **campus**, and whether **staff** and **parents** are
   included, then save. **House** is required, so Felix asks for it if your prompt
   did not cover it.

6. Check the dates and visibility

   Felix fills these in with defaults you can change:

   - **Event date** — taken from anything you mentioned in the prompt, title or description.
   - **Start time** — rounded up to the next full hour.
   - **Visible from** — now.
   - **Visible until** — three hours after the event.

   A **7-day notice** indicator shows how much warning recipients get. Adjust by
   prompting — for example *the event will start at 8am* or *the event will be
   next Thursday*.

7. Add an image

   Upload an image from your device, or use the **default category image**.

   > **Note:** Felix cannot generate or find an image for you. It describes the
   > kind of image that would suit the notice, and you supply it. If you upload
   > nothing, the standard image for that category is applied.

8. Review and publish

   The review screen lists the title, dates, visibility and audience. Edit
   anything that is wrong — Felix validates as you save, and will not accept a
   start time in the past, or a **Visible from** date later than **Visible
   until**. Then click **Publish**.

9. Find the published notice

   Go to **Notices** and open the card to see it as everyone else will. See
   [Find and read notices](../04-Notices/01-find-and-read-notices.md).
