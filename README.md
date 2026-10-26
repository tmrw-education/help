# Help — content

The documentation content for the tmrw education help site.

**Live site:** https://help.tmrw.education

This is the repo **trainers write in**. It holds only the doc content. The
website machinery (Docusaurus, theme, dependencies) lives separately in
[`tmrw-education/help-site`](https://github.com/tmrw-education/help-site), so
you never have to touch — or accidentally delete — any of it.

---

## Apps covered

| Folder | Section | App | Audience |
|---|---|---|---|
| `sxp/` | `/sxp` | StaffXP | Teachers, admin, school leaders |
| `ess/` | `/ess` | EmployeeXP | All staff |
| `gxp/` | `/gxp` | GrowthXP | All staff (learning and training) |
| `pxp/` | `/pxp` | ParentXP | Parents and guardians |
| `finops/` | `/fo` | Finance & Operations (Dynamics 365) | Bursars, accountants |
| `hr/` | `/hr` | Human Resources (Dynamics 365) | HR administrators |
| `scm/` | `/scm` | Supply Chain Management (Dynamics 365) | Procurement and vendor administrators |

`lxp/` (LearnerXP) and `ce/` are here but not on the site yet: they go live once
they have real, checked articles.

**StaffXP (`sxp/`) is the built-out reference** — lean, one-task-per-page
articles with role-accurate screenshots. Use it as the model when filling out
the other apps. GrowthXP shows the troubleshooting and glossary formats.

## How to write docs

**Read [CONTRIBUTING.md](./CONTRIBUTING.md) first: everyone follows it.** It covers
page structure, the front matter Felix reads, steps, screenshots, troubleshooting
and glossary pages, and what may be published. The research behind it is in
[DOC_FORMAT_RATIONALE.md](./DOC_FORMAT_RATIONALE.md).

1. Edit or add Markdown files inside your app's folder (e.g. `sxp/`).
2. Put images in an `images/` folder beside your articles (one per topic, e.g.
   `sxp/03-Attendance/images/`).
3. Commit and push (GitHub Desktop or the web editor).

Every push to `main` rebuilds the site and publishes it within a couple of
minutes, but only if the build passes. A broken link, or a published page that
still says **VERIFY BEFORE PUBLISHING**, stops it: the live site keeps its last
good version and GitHub emails you. The failed run in the **Actions** tab names
the file and line to fix. See CONTRIBUTING.md §10.

## What happened to all the other files?

The Docusaurus config, `package.json`, `src/`, `static/`, etc. moved to the
[`help-site`](https://github.com/tmrw-education/help-site) repo. They're not
needed for writing docs and were easy to delete by mistake, so they're out of
your way now.
