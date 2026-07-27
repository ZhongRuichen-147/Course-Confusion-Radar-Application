# Bug Tracking

## Project
Course Confusion Radar Application

## Purpose
Practical 9 asks to examine and adjust how bugs/errors found during system
testing are reported and tracked, with the required minimum being the
relevant user-story GitHub pages, and to consider better tools (GitHub
Projects, Issues, Pull Requests, or other platforms).

## What Was Examined

Every closed and open GitHub Issue was reviewed to separate genuine defects
from planned feature/documentation tasks. Exactly one was a defect:
[#51 - Fix - Firestore test-mode rules expired, blocking all reads/writes](https://github.com/ZhongRuichen-147/Course-Confusion-Radar-Application/issues/51).
It was discovered while verifying the live site (the default 30-day Firestore
test-mode rules had expired, blocking every read/write), documented with
symptom / root cause / fix / verification, and fixed the same day. But it was
only labelled `done`, the same label used for ordinary planned tasks — there
was no way to tell from the issue list that it was a bug rather than a
feature task.

GitHub Projects was also checked as a possible upgrade: `gh project list`
currently fails because the CLI token used in this project does not have the
`read:project` scope. Pull Requests have been used once (US5, Practical 4) as
a self-review exercise; every other user story since has been implemented
and committed directly, because the project has a single developer and a
second-reviewer PR step does not add value without one.

## Adjustment

1. Issue #51 was retroactively given the repository's built-in `bug` label
   (kept alongside `done`), so it is now distinguishable from feature-task
   issues in the issue list and in label filters.
2. Going forward, any defect found during system testing (something that
   used to work and broke, or a feature that does not match its acceptance
   criteria) is opened as a GitHub Issue with the `bug` label from creation,
   in addition to the `todo`/`in-progress`/`done` lifecycle label already
   used for every issue in this project. The issue body follows the format
   already used for #51: Symptom, Root cause, Fix, Verification.
3. The user-story GitHub pages (`docs/user-stories/*.md`) stay the
   definition of "done" (the acceptance criteria a bug fix or feature is
   checked against); GitHub Issues track the individual bugs and tasks
   raised against them. This satisfies the Practical 9 minimum requirement.

## Tools Considered

| Tool | Decision | Why |
|---|---|---|
| GitHub Issues + labels (current) | Kept | Already gives create/track/close, filterable by label, linked from commits (`Refs #N`); zero extra setup; adopted since Practical 4 |
| GitHub Projects (Kanban board) | Not adopted | Would give a visual board, but with a single developer and typically fewer than 10 open items at a time, the Issues list with label filters already gives equivalent visibility; would also need re-authenticating the CLI for a scope this project doesn't otherwise need |
| Pull Requests | Not adopted as the main bug-tracking mechanism | Already used once for review; a PR review step doesn't add value without a second reviewer on a solo project, so bugs are tracked as Issues and fixed directly |
| External tool (Trello, Jira, etc.) | Rejected | Would split tracking across two systems (GitHub Issues for tasks, an external tool for bugs) for no benefit at this project's scale |

## Conclusion

GitHub Issues with labels remains the bug/error tracking tool, with one
adjustment: a dedicated `bug` label now distinguishes defects from planned
feature and documentation tasks, applied retroactively to #51 and used for
any bug found from now on.
