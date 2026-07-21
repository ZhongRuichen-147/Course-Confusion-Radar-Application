# Milestone 1 Plan

## Project

Course Confusion Radar Application

## Milestone 1 Goal

The goal of Milestone 1 is to create the first usable version of the Course Confusion Radar Application. This milestone focuses on the main workflow of collecting student confusion reports, organizing them by topic, and preparing basic lecturer review features.

---

## User Story Allocation Across Three Iterations

The user stories are allocated into three iterations based on priority, estimated effort, and feature dependency.

---

## Iteration 1: Core Student Confusion Report Features

Iteration 1 focuses on the core student workflow. These features are required first because the application needs student confusion reports before lecturer dashboard features can be useful.

| ID  | User Story                                                                                                                    | Priority | Effort | Status |
| --- | ----------------------------------------------------------------------------------------------------------------------------- | -------: | -----: |--------|
| US1 | As a student, I want to submit a confusing topic anonymously so that I can ask for help without feeling embarrassed.          |       10 | 2 days | Done   |
| US2 | As a student, I want to select a course topic when submitting a confusion report so that my issue can be categorized clearly. |       10 |  1 day | Done   |
| US3 | As a student, I want to view existing confusion reports so that I can see whether other students have similar problems.       |       20 | 2 days | Done   |
| US4 | As a student, I want to vote "I'm confused too" on an existing report so that common learning difficulties can be identified. |       10 | 2 days | Done   |

---

## Iteration 2: Lecturer Review, Report Status, and Filtering Features

Iteration 2 focuses on lecturer-side review features, report status visibility, and basic filtering. The Iteration 1 velocity was 7 effort-days, as calculated in [`iteration-1-review.md`](iteration-1-review.md). Therefore, US10 was moved from Iteration 3 into Iteration 2 to better match the available capacity.

US5 remains listed in Iteration 2 because it belongs to this iteration and has already been completed. US10 was moved from Iteration 3 into Iteration 2 to use the remaining 1 effort-day of capacity.

| ID  | User Story                                                                                                                 | Priority | Effort | Status |
| --- | -------------------------------------------------------------------------------------------------------------------------- | -------: | -----: | ------ |
| US5 | As a student, I want to see the status of a confusion report so that I know whether it is pending, explained, or resolved. |       20 |  1 day | Done   |
| US6 | As a lecturer, I want to view the most confusing topics so that I can understand which areas need more explanation.        |       10 | 3 days | Todo   |
| US7 | As a lecturer, I want to sort confusion reports by number of votes so that I can prioritize the most common problems.      |       20 |  1 day | Todo   |
| US8 | As a lecturer, I want to mark a confusion report as resolved so that students know the issue has been addressed.           |       20 |  1 day | Todo   |
| US10 | As a user, I want to filter confusion reports by topic so that I can find relevant issues quickly.                        |       30 |  1 day | Todo   |

---

## Iteration 3: Topic Management Features

Iteration 3 focuses on lower-priority management features. US10 was moved into Iteration 2 after reviewing the Iteration 1 velocity.

| ID  | User Story                                                                                              | Priority | Effort | Status |
| --- | ------------------------------------------------------------------------------------------------------- | -------: | -----: | ------ |
| US9 | As an admin, I want to add and manage course topics so that confusion reports can be organized properly. |       30 | 2 days | Todo   |

Iteration 3 now contains only US9 (2 effort-days), which is below the Iteration 1 velocity of 7 effort-days. This is because the current backlog is exhausted after the Iteration 2 adjustment. Any additional user stories identified later would be added to this iteration.

---

## Allocation Justification

The highest-priority and most dependent user stories were placed in Iteration 1. Submitting a confusion report and selecting a course topic are necessary before the application can provide useful lecturer dashboard features.

Lecturer review features were placed in Iteration 2 because they require student report data to exist first.

Topic management was placed in Iteration 3 because it is a lower-priority admin feature that is not required for the first working version of the application.

Filtering (US10) was originally planned for Iteration 3. During Practical 6 it was moved into Iteration 2, because the Iteration 1 velocity showed that the original Iteration 2 backlog had approximately 1 effort-day of unused capacity. The reasoning for this adjustment is recorded in [`iteration-2-backlog-update.md`](iteration-2-backlog-update.md).
