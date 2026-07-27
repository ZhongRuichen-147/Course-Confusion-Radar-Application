# System Testing Plan (Week 10 Demo)

## Project
Course Confusion Radar Application

## Purpose
This is a system-level testing plan for the Week 10 demo, distinct from
`docs/test-plan.md` (automated unit tests for the pure logic functions and
the Mock Object tests for orchestration logic). It exercises the whole
running application — UI, Firestore, and the deployed GitHub Pages site — the
way the demo audience will actually see it.

## Pre-Demo Checklist

- [ ] Load the live site and confirm it renders with no browser console errors: https://zhongruichen-147.github.io/Course-Confusion-Radar-Application/
- [ ] Run `npm test` on a clean checkout as a fallback source of evidence (expect 47/47 passing)
- [ ] Decide on demo data state beforehand: either keep the current 2 seed reports and 5 topics, or use "Clear Demo Data" and re-submit a clean, scripted set of reports just before presenting
- [ ] Confirm the instructor has accepted the GitHub collaborator invite (Practical 9 task 5) and can open the repository
- [ ] Confirm Firestore security rules still allow read/write on both the `reports` and `topics` collections — these are managed manually in the Firebase Console and are not version-controlled with the code, so a rule change would not show up in `git log` but could break the live demo

## Demo Walkthrough Script

Each step maps to the user story it demonstrates, in a sensible demo order:

1. **US1/US2 — Submit a report.** Pick a topic from the "Course Topic" dropdown, type a description, click "Submit Anonymously". Confirm the success message and that the new report appears at the top of the report list.
2. **US3 — View reports.** Point out the report list, newest first.
3. **US4 — Vote.** Click "I'm confused too" on an existing report. Confirm the vote count increments immediately.
4. **US5 — Status.** Point out the colour-coded status badge (Pending / Explained / Resolved) on a report card.
5. **US6 — Lecturer dashboard.** Point out the "Most Confusing Topics" table, ordered by total votes.
6. **US7 — Sort.** Switch "Sort by" to "Most votes". Confirm the list reorders.
7. **US8 — Mark resolved.** Use a report's "Lecturer: set status" control to change it to "Explained" or "Resolved". Confirm the badge updates and, if time allows, reload the page to show the change persisted.
8. **US10 — Filter.** Use "Filter by topic" to narrow the list to a single topic. Confirm only matching reports are shown and the dashboard still summarises all reports.
9. **US9 — Manage topics.** In "Manage Course Topics", add a new topic (e.g. "Demo Topic"). Confirm it appears in both the report-form dropdown and the filter dropdown. Remove it. Confirm it disappears from both.
10. **Automated tests (optional, if there's time or the live demo has issues).** Run `npm test` in a terminal to show the 47 automated tests passing — this is the evidence for the parts that aren't visible in a live click-through: the pure-logic tests and the Mock Object tests for Firestore orchestration and the mock-login example.

## Known Limitations to Mention

- The Firestore security rules are public read/write (`allow read, write: if true`) on both collections — a deliberate trade-off for an anonymous, no-login student demo (see README section 5), not a bug.
- Removing a course topic does not retroactively change the topic field already stored on existing reports; a report can still display a topic that is no longer in the admin list.
- `auth.js` is a standalone Mock Object demonstration of mocking a login process (see `docs/mock-object-notes.md`); it is not wired into the application, because the app has no real login by design.

## Fallback Plan

If the live site or the network is unavailable during the demo:
- Show the `npm test` output (47/47 passing) as evidence the logic is correct independent of Firestore.
- Walk through the code (`logic.js`, `reportActions.js`, `topicActions.js`) and the test files directly instead of the live UI.

## Bug Reporting During This Testing

Any defect found while running this plan is opened as a GitHub Issue with
the `bug` label, following the process in `docs/bug-tracking.md`.
