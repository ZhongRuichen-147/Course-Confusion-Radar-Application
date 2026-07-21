# Iteration 2 Backlog Update

## Project
Course Confusion Radar Application

## Purpose
This document explains how the Iteration 1 velocity proxy was used to adjust the Iteration 2 backlog.

## Iteration 1 Velocity Proxy

The Iteration 1 velocity, the metric it uses, and the known limitations of that metric are defined in [`docs/iteration-1-review.md`](iteration-1-review.md). This document applies that result rather than restating it.

Iteration 1 completed effort:

| User Story | Effort |
|---|---:|
| US1 | 2 days |
| US2 | 1 day |
| US3 | 2 days |
| US4 | 2 days |
| **Total** | **7 days** |

The Iteration 1 velocity proxy is therefore **7 effort-days per iteration**, and it is used here as the planning baseline for Iteration 2 capacity.

## Original Iteration 2 Backlog

| ID | User Story | Effort | Status |
|---|---|---:|---|
| US5 | View report status | 1 day | Done |
| US6 | Lecturer dashboard | 3 days | Todo |
| US7 | Sort reports by votes | 1 day | Todo |
| US8 | Mark report as resolved | 1 day | Todo |
| **Total** |  | **6 days** |  |

The original Iteration 2 backlog used 6 effort-days, which was below the Iteration 1 velocity proxy of 7 effort-days.

US5 is counted using its original 1 effort-day estimate. README section 10 documents that, during the Practical 4 task estimation review, the remaining implementation work for US5 was smaller than this estimate because the `status` field had already been written to and read from Firestore during Iteration 1. The original estimate is retained here so that the updated Iteration 2 total remains comparable with the Iteration 1 estimates used to derive the velocity proxy.

## Updated Iteration 2 Backlog

US5 remains listed because it belongs to Iteration 2 and has already been completed. US10 was moved from Iteration 3 to Iteration 2 because it is estimated as 1 effort-day and fits within the remaining Iteration 2 capacity.

| ID | User Story | Effort | Status |
|---|---|---:|---|
| US5 | View report status | 1 day | Done |
| US6 | Lecturer dashboard | 3 days | Todo |
| US7 | Sort reports by votes | 1 day | Todo |
| US8 | Mark report as resolved | 1 day | Todo |
| US10 | Filter reports by topic | 1 day | Todo |
| **Total** |  | **7 days** |  |

## Backlog Adjustment Decision

The updated Iteration 2 backlog now matches the Iteration 1 velocity proxy of 7 effort-days. US9 remains in Iteration 3 because it is a lower-priority admin feature and is estimated at 2 effort-days.