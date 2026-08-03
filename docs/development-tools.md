# Development and Build Tools

## Project
Course Confusion Radar Application

## Purpose
Rubric criterion 6 (Building and development tools) asks for a page
explaining what software development tools, build tools, and external
libraries were used on this project, and how.

## Tools and Libraries

| Tool / Library | Category | How it was used |
|---|---|---|
| [Firebase Firestore](https://firebase.google.com/docs/firestore) (JS SDK 10.12.2, loaded from `gstatic.com` in `index.html`) | External library / database | The only external dependency. Provides the `reports` and `topics` collections that back every user story; accessed through `firestoreRepository.js`. |
| [Node.js built-in test runner](https://nodejs.org/api/test.html) (`node:test`, `node:assert`) | Build/test tool | Runs the 47-case automated suite (`npm test`, `tests/*.test.js`) with zero npm dependencies — `package.json` declares only the `test` script, no `dependencies` block. |
| [draw.io](https://app.diagrams.net/) (diagrams.net) | Design tool | Online tool used to produce the architecture (class) diagram, database design diagram, and interface wireframe, per the rubric's requirement to use an online design tool. Source `.drawio` files are kept alongside the exported `.png` files in `docs/`. |
| [Git](https://git-scm.com/) / [GitHub](https://github.com/) | Version control | Full commit history for the project; branching used once for a feature-branch + pull-request exercise (US5, Practical 4). |
| GitHub Issues + labels | Task/bug tracking | Every user story and bug tracked through `todo` / `in-progress` / `done` labels, with a dedicated `bug` label for defects (see `bug-tracking.md`). |
| GitHub Pages (Cayman theme, `_config.yml`) | Deployment / hosting | Serves the live application from the repository root and renders the Markdown files under `docs/` as browsable pages. |
| [GitHub CLI](https://cli.github.com/) (`gh`) | Command-line tool | Used to create/query/close Issues and inspect repository collaborators from the terminal instead of the GitHub web UI. |

## Conclusion
The project intentionally keeps its toolchain small: one external library
(the Firebase Firestore SDK, loaded via CDN rather than npm), the test
runner built into Node.js, and standard Git/GitHub tooling for version
control, task tracking, and hosting. draw.io was adopted specifically to
satisfy the rubric's online-design-tool requirement for the architecture,
database, and interface diagrams.
