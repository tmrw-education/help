# tmrw Help — content

The documentation content for the tmrw education help site.

**Live site:** https://tmrw-education.github.io/help/

This is the repo **trainers write in**. It holds only the doc content. The
website machinery (Docusaurus, theme, dependencies) lives separately in
[`tmrw-education/help-site`](https://github.com/tmrw-education/help-site), so
you never have to touch — or accidentally delete — any of it.

---

## Apps covered

| Folder | Section | App | Audience |
|---|---|---|---|
| `sxp/` | `/sxp` | StaffXP | Teachers, admin, school leaders |
| `hr/` | `/ess` | Employee Self-Service | All staff (HR) |
| `finops/` | `/fo` | Finance & Operations | Bursars, accountants |
| `pxp/` | `/pxp` | Parent Experience | Parents |
| `lxp/` | `/lxp` | Learner Experience | Students |

## How to write docs

1. Edit or add Markdown files inside your app's folder (e.g. `sxp/`).
2. Put images in that folder's `99-Images/` subfolder.
3. Commit and push (GitHub Desktop or the web editor).

That's it. Every push to `main` automatically rebuilds and publishes the live
site within a couple of minutes — you don't run anything locally.

## What happened to all the other files?

The Docusaurus config, `package.json`, `src/`, `static/`, etc. moved to the
[`help-site`](https://github.com/tmrw-education/help-site) repo. They're not
needed for writing docs and were easy to delete by mistake, so they're out of
your way now.
