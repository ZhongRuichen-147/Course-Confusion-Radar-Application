# Iteration 1 Review

## Project
Course Confusion Radar Application

## Iteration 1 Goal
Iteration 1 focused on the core student workflow: submitting, categorizing, viewing, and voting on confusion reports.

## Completed User Stories in Iteration 1

| ID | User Story | Effort | Status | Evidence |
|---|---|---:|---|---|
| US1 | Submit anonymous confusion report | 2 days | Done | `submitReport()` saves reports to Firestore. |
| US2 | Select course topic | 1 day | Done | `index.html` includes the topic dropdown. |
| US3 | View existing confusion reports | 2 days | Done | `renderReports()` displays reports from Firestore. |
| US4 | Vote "I'm confused too" | 2 days | Done | `voteForReport()` increments votes in Firestore. |

## Unfinished User Stories in Iteration 1
No Iteration 1 user stories were left unfinished. All planned Iteration 1 work was completed by the end of the iteration.

## Current Backlog After Iteration 1 and US5

| ID | Status |
|---|---|
| US1-US4 | Done in Iteration 1 |
| US5 | Done in Iteration 2 / Practical 4 |
| US6-US10 | Todo |

Note: During Practical 6, US10 was moved from Iteration 3 into Iteration 2 based on the Iteration 1 velocity proxy. See `docs/iteration-2-backlog-update.md` for details.

## Actual Velocity

The provided course material used for this review did not explicitly define a velocity unit or formula. Therefore, this calculation treats the existing estimated effort-days as a velocity proxy.

The Iteration 1 completed effort was:

- US1: 2 days
- US2: 1 day
- US3: 2 days
- US4: 2 days

Total completed effort: **7 effort days**

Actual velocity for Iteration 1, using effort-days as the metric: **7 effort days per iteration**

If velocity is counted by completed user stories instead of effort-days, the velocity is **4 completed user stories per iteration**.