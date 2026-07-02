# convert-finops-section

Convert one `##` section from a flat finops Markdown file into a standalone task page matching the SXP/Felix authoring standard, and create the feature folder scaffold if it doesn't exist yet.

**Usage:** `/convert-finops-section <source-file-path> "<Section Heading>"`

Example: `/convert-finops-section finops/04-Billing.md "Fee Schedule Templates"`

If no section heading is given, list all `##` headings in the source file and ask the user to pick one before proceeding.

---

## Step 1 — Folder scaffold (first time per source file only)

Derive the feature folder from the source filename:
- `04-Billing.md` → `finops/04-Billing/`
- `06-Concession-Management.md` → `finops/06-Concession-Management/`

If the folder does not yet exist, create these files:

**`finops/<folder>/_category_.json`**
```json
{ "label": "<Feature name>", "position": <number prefix from filename> }
```

**`finops/<folder>/index.md`**
Take the intro paragraph(s) from the source file (everything between the `# Title` and the first `##`). Strip any marketing prose. Keep only the operational orientation — what this area is, when it runs, what the financial impact is. Format:
```markdown
---
sidebar_position: 0
---

# <Feature name>

<One or two sentences for a leader: what this area does and why it matters — no steps.>
```

Create the `finops/<folder>/images/` directory.

---

## Step 2 — Derive the page id and filename

- `id` = verb-first, flat kebab-case, one task: `create-a-fee-schedule-template`, `run-the-fee-generation-batch`, `view-visa-details-on-student`
- Filename = `<id>.md`
- Output path: `finops/<folder>/<id>.md`

**GEMS sections:** If the section heading contains `(GEMS)`, still convert it fully — do not skip or stub it. Add `gems: true` to the frontmatter. Drop `(GEMS)` from the H1 title; add a short note at the top of the body: `This page covers GEMS-specific configuration. General setup is on [the product page](./link).`

---

## Step 3 — Write the frontmatter

```yaml
---
id: <id>
summary:
  - "Short step 1 — bold the **button names**."
  - "Short step 2."
  - "Short step 3."
keywords: [phrase one, phrase two, synonym, how people actually search for it]
video:
  youtube:
  bunny:
---
```

Rules:
- `id` is required. It is the permanent key Felix uses. **Never omit it.**
- `summary`: 3–4 bullets, each one sentence, bold exact UI labels. Write the gist a user scanning for quick orientation would read — not the full steps.
- `keywords`: include the section heading words, common synonyms, and how a finance user would phrase the question (e.g. "create fee schedule", "billing template", "set up fee items", "generate fees").
- Leave `youtube:` and `bunny:` blank.

---

## Step 4 — Write the page body

**H1 title:** `# <Verb phrase>` in title case. Action-phrasing. No `(Product)` or `(GEMS)` suffix.

**Intro line (optional):** One sentence of context if it helps orient the reader. Skip if the title is self-evident.

**Steps — numbered list:**

```
N. Short step title (title case, no period, 5–8 words)

   Full body: navigation path, field names, what to select or enter.
   One or more sentences. Plain present tense.

   - Sub-bullet if the step has a list of options or fields.
   - Another option.
```

### Step writing rules (F&O thorough tier — do not thin these)

- **First line = short title only.** All detail goes in the indented body (3 spaces).
- **Bold every exact on-screen label:** `**Modules ▸ Academic Management**`, `**+ Add line**`, `**Customer type**`, `**Fee and charge interval**`. This is the most important formatting rule.
- **Keep full navigation paths in the body:** `From the **FNO dashboard**, open **Modules ▸ Academic Management**.`
- **Inline orientation facts** — field rules, limits, what a control does, system behaviour, configuration tips. Do NOT put these in Note boxes. Write them into the step sentence: *"Select **Pro rata adjustment joining** — this controls how the system calculates fees for students who join mid-term."*
- **Sub-bullets for option lists** (when a step presents 2–3 alternative values to choose between): indent as a bullet list under the step body.
- **"Repeat steps N–M" instructions**: keep as the last sentence of the relevant step body, not as a separate step.
- **Callout glyphs (①②③…)**: if the source already uses them and they match image callouts, keep them. Reference them in the step body: `Set **Customer type** to **Student** (④).`

### Note box rule — strict

Use `> **Note:**` **only** when the absence of the information causes a consequence the reader cannot easily undo:
- Data is deleted or cannot be recovered
- An irreversible choice is made (e.g. a batch posts and cannot be un-posted)
- A real person is notified or contacted
- A permission error blocks the next step

**0–1 Note per page is normal. 2 is a lot.** If the existing source has a Note that is actually an orientation fact, configuration tip, or "good to know" — move it inline into the step body instead. Call this out in your output summary so the user can review the change.

---

## Step 5 — Images

**Path update:** Change every image path from `./99-Images/old_name.png` to `./images/<id>-N.png` where N is the image's order within this page (1, 2, 3…).

**Placement:** Leave all images **at the end of the procedure**, after all steps, in order. The user will manually reposition each image under the correct step later. Do not attempt to inline them under individual steps.

**Alt text:** Keep the existing alt text if it describes the action or screen. Replace it if it is just a filename. Good alt text: `"The fee schedule header — Customer type, Description, and Fee and charge interval fields"`. Bad alt text: `"create_fee_schedule_templates_1"`.

**Copy and rename:** Copy each image from `finops/99-Images/<old_name>.png` into `finops/<folder>/images/<id>-N.png`. Do not delete the originals from `99-Images/` — other unconverted sections may still reference them.

**Image rename table:** In your output summary, confirm each image that was copied and renamed:
```
Copied: finops/99-Images/create_fee_schedule_templates_1.png
     → finops/04-Billing/images/create-a-fee-schedule-template-1.png
```

---

## Step 6 — Output summary

After writing all files, report:

1. **Files created** — list each path
2. **Image renames needed** — full table (old path → new path) so the user can move them from `finops/99-Images/` to the feature's `images/` folder
3. **Notes moved inline** — list any `> **Note:**` boxes that were converted to inline prose, with the original text, so the user can verify the change is correct
4. **GEMS sections** — list any pages flagged with `gems: true`
5. **Gaps** — anything that couldn't be auto-filled: missing steps in a stub section, unclear navigation paths, images that exist in source but have no alt text

---

## Reference: the billing draft as the format benchmark

`finops/billing/create-a-fee-schedule-template.md` is the approved format example for F&O pages. It shows the correct step label + indented body structure, use of callout glyphs, and alt text standard. When in doubt about formatting, match that file — correcting only the three known issues: add `id:`, update image paths, and move orientation Notes inline.
