# Iteration 2 Review

## Project
Course Confusion Radar Application

## Iteration 2 Goal
Iteration 2 focused on the lecturer-side review features: seeing report status,
a dashboard of the most confusing topics, sorting by votes, marking a report
resolved, and filtering by topic.

## Completed User Stories in Iteration 2

| ID | User Story | Effort | Status | Evidence |
|---|---|---:|---|---|
| US5 | View report status | 1 day | Done | Status badge (`statusBadgeClass()`) shown on every report card. |
| US6 | Lecturer dashboard | 3 days | Done | `summarizeTopics()` powers the "Most Confusing Topics" table. |
| US7 | Sort reports by votes | 1 day | Done | `sortReports()` reorders the list from the "Sort by" control. |
| US8 | Mark report as resolved | 1 day | Done | `updateReportStatus()` writes the lecturer's status change to Firestore. |
| US10 | Filter reports by topic | 1 day | Done | `filterReports()` narrows the list from the "Filter by topic" control. |

## Unfinished User Stories in Iteration 2
None. All five Iteration 2 user stories were completed.

## Current Backlog After Iteration 2

| ID | Status |
|---|---|
| US1-US5 | Done in Iteration 1 / Iteration 2 |
| US6, US7, US8, US10 | Done in Iteration 2 |
| US9 | Todo (Iteration 3) |

## Actual Velocity

The velocity metric and its known limitation are defined once, in
[Iteration 1 Review](iteration-1-review.md), and applied here rather than
restated.

The Iteration 2 completed effort was:

- US5: 1 day
- US6: 3 days
- US7: 1 day
- US8: 1 day
- US10: 1 day

Total completed effort: **7 effort days**

Actual velocity for Iteration 2, using effort-days as the metric: **7 effort
days per iteration**, exactly matching the [updated Iteration 2 backlog
target](iteration-2-backlog-update.md) of 7 effort-days that was derived from
the Iteration 1 velocity proxy.

If velocity is counted by completed user stories instead of effort-days, the
velocity is **5 completed user stories per iteration**.

## Reflection

The estimate-vs-actual match (7 planned, 7 delivered) confirms the Iteration 1
velocity proxy is a workable planning baseline for this project. However, the
work was not delivered evenly across the iteration: US5 was completed early,
then US6, US7, US8, and US10 were all implemented together in a single
concentrated session. The effort-day estimates held up in total, but they
should not be read as a prediction of a smooth day-by-day burn down; the
[Iteration 2 burn down](iteration-2-burndown.md) shows this pattern directly.

## Adjustment for Iteration 3

Iteration 3 currently contains only US9 (2 effort-days), well under the
7 effort-day velocity. There are no further backlog user stories to pull
forward, so Iteration 3's capacity is not fully used by planned feature work;
the remaining time is used for the TDD and Mock Object work required by
Practical 8. See [Iteration 3 Backlog Update](iteration-3-backlog-update.md)
for the full adjustment decision.
