# Writing KB pages that connect to Felix

A guide for everyone who writes help pages. Your pages already become the **public Help
site**. With three small habits, the **same pages** also power **Felix** — the
in-app assistant that answers "how do I…?" right inside StaffXP. One source, two
places, no extra system.

> **The golden rule:** **one page per task**, a tiny **frontmatter block** at the
> top of each page, and **each screenshot placed right after the step it shows**.
> Get those three right and Felix just works.

You write normal Markdown in your KB repo. You don't touch the app's code, and you
don't need to know anything about how the app is built.

> **Two tiers — how much to write.** Match the depth to the app:
> - **XP apps (StaffXP, EmployeeXP, ParentXP, GrowthXP)** are intuitive and self-labelling → keep it
>   **lean**: concise steps, **1–2 clean screenshots** per task, no markers.
> - **Dynamics 365 (Finance & Operations, Human Resources, Supply Chain)** is a heavy, unfamiliar UI → be **thorough**:
>   explicit steps, a screenshot per meaningful screen, **mark the element**.
>
> Same rules below, dialled to the interface. The *why* is in [`DOC_FORMAT_RATIONALE.md`](./DOC_FORMAT_RATIONALE.md).

---

## 1. How it connects

Every page you write does double duty:

- It renders as a **public Help article** (the Docusaurus site) — exactly as today.
- Felix reads the **same page** to answer that question in-app: a short summary,
  then a guided walk-through (your steps + screenshots), then a button into the app.

The only thing Felix needs that a reader doesn't is a few lines of **frontmatter**
— metadata at the very top of the page that is **invisible on the site** but
machine-readable. That's the whole trick.

---

## 2. Page structure — one page per task

**One Markdown page = one task = one thing Felix can answer.** Group the pages for
a feature in a **folder**; the folder becomes the section in the Help nav.

```
sxp/                          ← one folder per app (= a Help nav section)
  04-Notices/                 ← one folder per feature (= a nav category)
    03-rsvp-to-a-notice.md    ← one task per page
    04-create-a-notice.md
    05-manage-your-notices.md
    images/                   ← this feature's screenshots live here (see §6)
      create-a-notice-1.png
  07-Wellbeing/
    01-create-a-wellbeing-note.md
    images/
```

The number in front of a folder or file (`04-`) sets its order in the sidebar; it
doesn't appear in the page's web address.

Each feature folder is **self-contained**: its task pages and its `images/` folder
sit together, so every screenshot path is just `./images/…` — never `../`.

**Why one-per-task, not one big page per feature?** Each task gets its own URL
(better search + linking), and — most importantly — each gets its own frontmatter
block so Felix can read it cleanly. One page, one answer.

- **File name** = the order number plus the task in `kebab-case`: `04-create-a-notice.md`.
- Keep your usual folder-per-feature layout; nothing else changes for the Help site.

**Troubleshooting works the same way: one page per problem.** A long page of
problems shows up in search as one result called "Troubleshooting", so nobody finds
their error. Instead, a `Troubleshooting/` folder holds an `index.md` that lists
every problem, plus one subfolder per audience (`For-everyone/`,
`For-managers-and-administrators/`, one for a big admin area such as
`HR-integration/`). Each problem page:

- **H1** = the problem as the reader would say it, quoting any on-screen error
  exactly: `I can't sign in: "Your account has been disabled"`.
- **Body** = **Cause** — … and **Fix** — …, nothing else.
- **`id`** = `fix-` plus the problem: `fix-account-disabled`.
- **`keywords`** = the error text plus how people ask ("locked out", "can't log in").
- **`summary`** = two lines for Felix: the cause in a sentence, then the fix,
  exact labels bolded. The site doesn't show it as a Quick answer box on pages in a
  `Troubleshooting/` folder (it would repeat the Cause and Fix), so write it for Felix.

GrowthXP's `gxp/15-Troubleshooting/` is the reference.

**Glossaries stay one page, one heading per term.** Under each letter (`## A`), give
every term its own `### Term` heading and put the definition in the paragraph below.
No tables: a heading gives each term its own link, so search and Felix land on the term.
Add `toc_max_heading_level: 2` to the front matter so the contents list shows letters
only; it is the jump bar, so no A–Z links at the top. Reference: `gxp/16-Glossary.md`.

**Pages without an `id`.** An app's or section's `index.md`, the Glossary and a
Troubleshooting `index.md` aren't tasks, so they have no `id`. Every other page does.

---

## 3. The frontmatter block (the one new habit)

At the **very top** of each page, between two `---` lines, add this. It's standard
Docusaurus frontmatter — it does **not** show on the rendered page.

```yaml
---
id: create-notice
summary:
  - "Short step 1 (bold the **button names**)."
  - "Short step 2."
  - "Short step 3."
keywords: [phrase one, phrase two, a synonym]
video:
  youtube: VIDEO_ID
  bunny:                # optional — leave blank if none yet
---
```

| Field | What it is | Tips |
|---|---|---|
| `id` | The page's **permanent name tag** Felix uses to find it | **Required** on every task page. Flat `kebab-case`, **verb-first**, one task: `create-notice`, `edit-notice`, `rsvp-to-notice`. **No app code** in it. **Pick once, never rename** (renaming breaks Felix's link and the page's address). See below. |
| `summary` | The **3–4 line gist** Felix shows first | Keep it short — point-of-need, not the manual. Bold the **exact** button names. |
| `keywords` | Phrases people might type | Add synonyms + how people actually ask ("post a notice", "make an announcement"). Helps Felix find the page. |
| `video.youtube` | The **YouTube video id** (primary) | Just the id from the URL — see §7. |
| `video.bunny` | A Bunny URL (fallback) | Optional. Leave blank; we add it later. |

If you omit `summary`, Felix falls back to your first few steps — but a hand-written
summary always reads better. Write it.

> **About `id` — the one field that must never change.** It is the stable key the
> app uses to pull this exact page (and, later, to deep-link from in-app help icons).
> Rules: **flat kebab-case, verb-first, one task, no app code** (`delete-notice`, not
> `notices.delete`, `sxp-delete-notice` or `delete-notice-pxp`).
>
> **Unique within its app, not across apps.** The folder already says which app the
> page belongs to, so Felix and other agents know a page as `<app folder>/<id>`:
> `sxp/sign-in` and `gxp/sign-in` are two different pages, and both are fine. Never add
> the app to the id to make it unique; the build rejects it. Two pages in the **same**
> app can't share an id.
>
> It is **the KB page's own id** — the docs
> are the source of truth; the app matches us. If the app **already** ships a tag for
> this task (`create-notice`, `edit-notice`, `set-notice-featured` exist today), reuse
> that **exact** string so nothing breaks. Once published, **treat it as frozen** — to
> retitle a page, change the H1, not the `id`.
>
> You do **not** put the in-app link in here — we handle "Take me there" on our
> side from the page's name. One less thing for you to track.

---

## 4. The page body

After the frontmatter, write the article as you normally would:

- **One H1 only** — the task, as a user would say it: `# Create a notice`. One page
  is one task, so you do **not** need `##` sub-headings. Don't add them. (A glossary
  and a Troubleshooting `index.md` are the exceptions; see §2.)
- A short intro line if it helps.
- A **numbered list** of steps (see §5).

---

## 5. Writing the steps — just a numbered list

Write a plain Markdown **numbered list**. The site automatically renders it as a
**stepper** (a numbered rail) — you don't write any special components.

**The shape of one step:** the **first line** is the step's short title; anything
you **indent underneath** it (detail, a `> **Note:**`, a screenshot) becomes that
step's body.

```markdown
1. Open the fee schedule form

   From the **FNO dashboard**, open **Modules ▸ Academic Management**, then click
   **All fee schedules** and **New**.

2. Complete the header

   Set **Customer type** to **Student** and select the **Fee and charge interval**.

   ![Fee schedule header …](./images/create-a-fee-schedule-1.png)
```

Rules:

- **Keep the first line short** — it's the title. Put the detail in the indented body.
- **Bold the EXACT on-screen label.** Write `**Create notice +**`, not "the create
  button". Users scan for the literal words.
- **Plain, literal, present tense.** "Click **Save changes**." Not "You'll want to go
  ahead and save."
- **Indent the body by 3 spaces** so it stays part of the step. A blank line between
  the title and the body is fine.
- **Document the behaviour the screen can't tell you.** Skip narrating obvious
  clicks, but DO explain non-obvious effects and decisions — e.g. "turning on
  **RSVP required** also adds the event to the recipient's calendar." That's the
  value docs add; the toggle is self-evident, what it *does* isn't.
- **Put those facts INLINE in the step's sentence by default.** Don't reach for a
  `> **Note:**` box for every one — a page full of callout boxes means none of them
  signal "pay attention" any more (and Felix can't render blockquotes at all, so a
  must-know fact buried in a Note never reaches a Felix user — inline is the only
  place it counts).

> **The Note test — box it only if not knowing it *hurts*.** Use a `> **Note:**`
> box ONLY when the absence of the fact causes a consequence the reader can't easily
> undo: **data lost, an irreversible choice, a real person contacted, or the action
> blocked by permissions.** If the fact just makes the current step smoother, write
> it inline. Field rules, limits, what-a-control-does, and orientation facts are
> **always inline**. Zero or one Note per page is normal; two is a lot.

---

## 6. Screenshots — under the step, cropped tight, element marked

> The rules below come straight from the learning-science + UX evidence. The full
> reasoning and citations are in **[`DOC_FORMAT_RATIONALE.md`](./DOC_FORMAT_RATIONALE.md)** — read it once and
> these will make sense.

**Put the image directly under the step it shows.** This is the single most
important rule. Indent the screenshot inside its step's body — **never** bunch
images after a block of steps or at the bottom of the page. (A step and the image
that explains it must stay together — separating them makes the reader's eye
ping-pong; *spatial contiguity*, g ≈ 0.63.)

**Crop tight to the part that matters.** Show **one focused thing** per image — the
dialog, the button, the field group you're talking about — not the whole window
with menus and chrome. (Extra detail lowers learning; *coherence*, d ≈ 0.86.)

**Mark the element only when it isn't obvious.** The test: *could the reader find it
in ~2 seconds from the bold label alone?* If **yes** (most XP-app screens are
self-labelling), leave the shot clean — a marker would just add clutter. If **no**
(a small icon, one control among many, an ambiguous button — common in F&O), put
**one** clear box/arrow on it. (Signaling helps most when the target is hard to find.)

**Don't screenshot self-evident steps.** "Click **Next**" or "Click **Save**"
usually needs no picture. Image the steps a beginner could get stuck on.

**If a screen has numbered callouts**, treat the numbers as **labels into the
picture**, not step numbers — name the glyph in the text next to the image:
`Set **Customer type** to **Student** (④).` Steps stay numbered 1, 2, 3… from the
top; don't renumber them to match the image.

**Alt text is required.** Describe the action/screen — a filename is not alt text:

```markdown
2. Click the **edit icon** on your notice.

   ![The Manage notices list with a row's edit icon highlighted](./images/edit-a-notice-2.png)
```

**Naming:** `task-name-N.png`, where N is the screenshot's order in the task, e.g.
`create-a-notice-1.png`.

**Quality bar:**
- **Cropped** to the relevant area — legible at column width without zooming.
- **PNG**, **under ~500 KB**.
- The on-screen labels also live in the **Markdown text** (not only in the image),
  so the page stays scannable and translatable.
- Lives in the feature folder's `images/`: `./images/filename.png` (always
  `./images/`, never `../`).

### How to capture (the 4-point spec)

The site does all the styling — the **gradient mat (your app's colour), frame,
rounded corners, dark-mode, and click-to-zoom are added automatically by CSS.** So
your screenshot is just a **clean, raw capture**. Get these four right and we can
restyle forever without you re-shooting:

1. **Light theme.** Capture the app in light mode (it reads on the mats in both
   page modes). Dark only if a screen is dark-by-default.
2. **2× / Retina resolution.** Check the saved PNG: a full panel should be roughly
   **2,000–2,600 px wide**. On a **Retina Mac** it's automatic; on **Windows** use a
   **QHD/4K screen at 200 % Display Scaling** (Settings → Display → Scale — *not*
   browser zoom). 1080p can't hit true 2×.
3. **Crop to the relevant panel.** Drop the browser chrome and app sidebar (unless
   the chrome *is* the thing you're pointing at). Easiest: the region snip —
   **Win + Shift + S** / **Cmd + Shift + 4** — drag-select just the panel.
4. **Clean state.** No stray validation errors or unrelated popovers — capture the
   neutral screen (unless you're documenting that error).

**Two more when they apply:**

- **Role fidelity.** If the app shows different things to different roles (teacher
  vs leader vs admin), capture the screen **as the role your article is written
  for** — a leader's view of a page often differs from a teacher's.
- **Shoot a safe build; hide dev chrome.** Where an app has a demo/showcase build
  on **mock data** (e.g. StaffXP's showcase app), capture there — consistent, and
  no real student data. Hide any developer-only chrome (role switchers, debug
  panels, assistant overlays) before you snip.

**Tall / scrolling screens** (a long form in a modal): don't try to cram it. Either
show the **entry point** (the button you click to start), **orient** with the top of
the form, or — only when the whole layout matters — do a **full-page capture**
(DevTools ▸ Command Menu ▸ *Capture full size screenshot*, or a one-click extension
like GoFullPage).

> **Using Claude?** Skip all of the above — just ask it: *"log into the app, open
> screen X, capture the panel at 2× cropped, save as `task-name-1.png` in the
> feature's `images/` folder."* It captures on-spec, every time, and can batch a
> whole feature. (A human signs into the app once; Claude does the rest.)

---

## 7. Videos — YouTube first, Bunny as fallback

A short clip is optional but lovely. Felix shows it as the **"Overview"** step at
the top of the walk-through.

1. Upload the clip to **YouTube** as **Unlisted**.
2. Copy the **video id** — the part after `v=` (or after `youtu.be/`):
   `https://www.youtube.com/watch?v=` **`dQw4w9WgXcQ`**
3. Paste **just the id** into the frontmatter: `youtube: dQw4w9WgXcQ`.

Felix plays the clip **inside the app** (no leaving for YouTube, no suggested
videos). If a school blocks YouTube, we fall back to a **Bunny** copy — leave
`bunny:` blank and we'll wire that up; you don't need to.

---

## 8. Full worked example (a complete page)

`notices/edit-a-notice.md`

````markdown
---
id: edit-notice
summary:
  - "Notices → **Manage notices**."
  - "Find your notice, click the **edit icon**."
  - "Expand the section, make changes, then **Save changes**."
keywords: [edit notice, change notice, update notice, modify notice]
video:
  youtube: dQw4w9WgXcQ
---

# Edit a notice

1. Open Manage notices

   In the **Notices** tab, click **Manage notices**, then filter with the
   **Active** / **Scheduled** tiles to find your notice.

   ![Manage notices — the Active and Scheduled filter tiles ① and the edit icon ②](./images/edit-a-notice-1.png)

2. Edit and save

   Click the **edit icon** (②), expand the section, make your changes, then click
   **Save changes**.

   > **Note:** You can only edit a notice you created.

   ![The notice editor — the expandable section ③ and the Save changes button ④](./images/edit-a-notice-2.png)
````

That single file is the public "Edit a notice" article **and** Felix's answer.

---

## 9. Do / Don't

| ✅ Do | ❌ Don't |
|---|---|
| One page per task, **one H1, no `##` headings** | One giant page; sub-headings |
| A plain numbered list (renders as the stepper) | Hand-written components or tables |
| Short step title, detail **indented** under it | Cram everything onto the title line |
| Bold the **exact** on-screen label | "click the blue button" |
| Image **directly under the step** it shows | Bunch images after a block of steps |
| **Crop tight** — one focused thing per image | Full-window shots; whole-task composites |
| **Mark the element** (box/arrow/callout) | Leave the reader hunting for what to click |
| Image the steps that **need** it | Screenshot self-evident steps ("click **Next**") |
| Real **alt text** describing the action | `![Step 1]` or a filename |
| Keep `summary` to 3–4 lines | Re-paste the full steps into `summary` |
| Add real synonyms to `keywords` | Leave `keywords` empty |
| Name images `task-name-N.png` | `Screenshot 2026-06-08 at 14.32.png` |

---

## 10. Publish only what's live and real

The help site documents what people can use **today**. Before a page goes out:

- **No "coming soon".** Don't publish a page, a section or a whole app that has no
  real content yet. Keep writing; publish when there's something to read.
- **No promises.** Don't write "this is being built" or "a fix is coming". Describe
  what happens now and what to do about it.
- **Verified, not demoed.** A page written from a demo, a walkthrough or "how it
  should work" isn't ready until someone has checked it on a real build.

**Parking a page that isn't ready.** Add `draft: true` to its front matter. It stays
in the repo, but it isn't published. If it still needs checking, say what in a note
at the top of the page that starts **TO VERIFY BEFORE PUBLISHING**:

```markdown
{/* TO VERIFY BEFORE PUBLISHING: the Send email button was never clicked in the
demo; check it opens Outlook on a UAT build. */}
```

When it's checked, delete the note and the `draft: true` line, and it goes live.

**Parking part of a published page.** Wrap it in a comment that starts with
`Hidden until`, saying what has to happen first:

```markdown
{/* Hidden until the Academic reporting pages are published.
- **[Academic reporting](./11-Academic-reporting/01-how-academic-reporting-works.md)**
*/}
```

- Pages are read as **MDX**, so comments are `{/* … */}`. The HTML kind,
  `<!-- … -->`, breaks the build.
- Don't put a comment inside another one: the first `*/}` ends both.
- A comment can't go inside a table. Move the rows you're hiding into one comment
  just below the table.
- Links to a draft page must be hidden too, or they'll break.

**What the site checks for you.** Every push to `main` rebuilds the site, and the
new version is published only if the build passes. It fails when:

- a link points to a page that doesn't exist or is a draft,
- a published page has no content (only front matter and a title),
- a published page still has a **VERIFY BEFORE PUBLISHING** note,
- a task page has no `id`, or its `id` contains its app's code (`gxp-…`, `…-pxp`), or
- two pages in the same app share an `id`.

If it fails, the live site keeps its last good version, and GitHub emails whoever
pushed. Open the failed run in the repo's **Actions** tab: the error names the file,
the problem. Fix it and push again. A pull request gets the same check
before it's merged. Step by step: §11.

**Product names.** Write the names as the site shows them: **StaffXP**,
**EmployeeXP** (not ESS or Employee Self-Service), **GrowthXP** (not GXP),
**ParentXP**. Where the app's screen still shows an old name, such as the **ESS
System** link, bold it exactly as shown: that's a label, not the product name.

---

## 11. How to publish

Everything you publish goes through this repo, **`tmrw-education/help`**. The site
itself (layout, search, the homepage) lives in `tmrw-education/help-site`: **only the
site owners change that.** If something about the site needs changing, ask them.

**Before you start.** Others edit this repo too, often in the web editor. In GitHub
Desktop, click **Fetch origin** (then **Pull origin**) before you change anything, so
you're working on the latest version.

**Option A — in the browser (GitHub web editor)**

1. Open the file on github.com and click the **pencil** (Edit). To add a page, open
   the folder and choose **Add file** ▸ **Create new file**; to add screenshots,
   open the folder's `images/` and choose **Add file** ▸ **Upload files**.
2. Make your change and click **Commit changes…**.
3. Choose one:
   - **Commit directly to the `main` branch** — publishes it.
   - **Create a new branch … and start a pull request** — runs the same checks
     without publishing. When the check is green, click **Merge pull request** to
     publish. Use this for big changes, or when you want someone to look first.

**Option B — GitHub Desktop**

1. **Fetch origin** / **Pull origin** first.
2. Edit the files in your editor, then in GitHub Desktop write a short summary and
   click **Commit to main**.
3. Click **Push origin**. That publishes it.

**After you publish.** Open the repo's **Actions** tab and find your change at the
top of **Deploy to GitHub Pages**:

- **Green tick** — it's live at <https://help.tmrw.education> within a couple of
  minutes. A brand-new page can take a minute longer to appear.
- **Red cross** — nothing was published; the live site keeps its last good version,
  and GitHub has emailed you. Open the run, click **Build**, and read the
  `[check-content]` or `Broken link` lines: each names the file and what to fix.
  Fix it and push again.

**Other things you might need**

- **Take a page down:** add `draft: true` to its front matter (§10). Don't delete it.
- **Move or rename a file:** its web address changes. Update the links that point
  to it; the build lists any you miss.
- **Republish without a change** (for example after the site owners change the
  site): **Actions** ▸ **Deploy to GitHub Pages** ▸ **Run workflow**. The site also
  rebuilds every night at 05:00 UTC.

---

## 12. Before you publish — checklist

- [ ] **One page per task**, named in `kebab-case`, in the right feature folder.
- [ ] A `--- … ---` **frontmatter** block at the very top.
- [ ] An `id` — flat **kebab-case, verb-first**, no app code, unique within the app,
      and **never** reused or renamed. Reuse the app's existing tag if one exists.
- [ ] `summary` is 3–4 short lines with the **button names bolded**.
- [ ] `keywords` include how people actually ask.
- [ ] **One H1, no `##` sub-headings.** The body is a plain numbered list.
- [ ] Steps: short title line, detail indented under it, exact labels bolded.
- [ ] Each screenshot is **directly under the step it shows**, **cropped tight**,
      with the **element marked** and real **alt text**. Skip self-evident steps.
- [ ] Video id pasted (just the id), if you have one.
- [ ] It's **live and verified**: no "coming soon", no promises, no unchecked demo
      steps. Anything not ready is `draft: true` or in a `{/* Hidden until … */}` block.
- [ ] Every link goes to a published page.

---

## What we handle (so you don't)

- Matching what a user typed to your page (typos included).
- Linking **"Take me there"** to the right screen in the app.
- The look of the answer, the chat, the walk-through, light/dark themes.
- Playing the video safely inside the app + the Bunny fallback.

Questions? Ping the dev team. Your pages are the whole product — thank you.
