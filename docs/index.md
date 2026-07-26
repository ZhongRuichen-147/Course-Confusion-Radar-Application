# Course Confusion Radar Application - Documentation

CP3407 Advanced Software Engineering

Student: Zhong Ruichen  
Roles: Developer, Designer, Project Manager, Tester

This page is the documentation index for the Course Confusion Radar Application.
It links to the page for each completed user story and to the iteration planning
and reflection documents.

The application itself is published from the repository root and can be opened
from the [project home page](../).

---

## Completed User Stories

Each completed user story has its own page describing the story, its priority and
effort estimate, its acceptance criteria, and the code that implements it.

| ID | User Story | Iteration | Effort | Status |
|---|---|---|---:|---|
| [US1](user-stories/us1-submit-anonymous-confusion-report.md) | Submit Anonymous Confusion Report | Iteration 1 | 2 days | Done |
| [US2](user-stories/us2-select-course-topic.md) | Select Course Topic | Iteration 1 | 1 day | Done |
| [US3](user-stories/us3-view-existing-confusion-reports.md) | View Existing Confusion Reports | Iteration 1 | 2 days | Done |
| [US4](user-stories/us4-vote-confused-too.md) | Vote "I'm Confused Too" | Iteration 1 | 2 days | Done |
| [US5](user-stories/us5-view-report-status.md) | View Report Status | Iteration 2 | 1 day | Done |
| [US6](user-stories/us6-lecturer-dashboard.md) | Lecturer Dashboard | Iteration 2 | 3 days | Done |
| [US7](user-stories/us7-sort-reports-by-votes.md) | Sort Reports by Votes | Iteration 2 | 1 day | Done |
| [US8](user-stories/us8-mark-report-resolved.md) | Mark Report as Resolved | Iteration 2 | 1 day | Done |
| [US10](user-stories/us10-filter-reports-by-topic.md) | Filter Reports by Topic | Iteration 2 | 1 day | Done |

## Unfinished User Stories

| ID | User Story | Iteration | Effort | Status |
|---|---|---|---:|---|
| [US9](user-stories/us9-manage-course-topics.md) | Manage Course Topics | Iteration 3 | 2 days | In Progress |

---

## Iteration Planning and Tracking

| Document | Purpose |
|---|---|
| [Milestone 1 Plan](milestone-1-plan.md) | Allocation of all ten user stories across three iterations |
| [Iteration 1 Board](iteration-1-board.md) | Iteration 1 user stories tracked with Todo / In Progress / Done labels |
| [Iteration 1 Burn Down](iteration-1-burndown.md) | Planned against actual remaining work for Iteration 1 |
| [Iteration 1 Review](iteration-1-review.md) | Completed against unfinished user stories, and the Iteration 1 velocity calculation |
| [Iteration 2 Board](iteration-2-board.md) | Iteration 2 user stories and their current labels |
| [Iteration 2 Backlog Update](iteration-2-backlog-update.md) | How the Iteration 1 velocity was used to adjust the Iteration 2 backlog |
| [Iteration 2 Tasks](iteration-2-tasks.md) | Iteration 2 user stories broken down into estimated tasks |
| [Iteration 2 Review](iteration-2-review.md) | Completed against unfinished user stories, and the Iteration 2 velocity calculation |
| [Iteration 2 Burn Down](iteration-2-burndown.md) | Planned against actual remaining work for Iteration 2 |
| [Iteration 3 Backlog Update](iteration-3-backlog-update.md) | How the Iteration 2 velocity was used to adjust the Iteration 3 backlog |
| [Test Plan](test-plan.md) | Testing approach, test cases per user story, and automated test results |

## Design and Quality

| Document | Purpose |
|---|---|
| [Class Diagram](class-diagram.md) | Data entity and service responsibilities |
| [Sequence Diagram: US5](sequence-diagram-us5.md) | Flow for displaying a report status badge |
| [SRP and DRY Review](srp-dry-review.md) | Single Responsibility and Don't Repeat Yourself review, and the refactoring applied |
| [US5 Manual Test](us5-manual-test.md) | Manual verification steps for the three report statuses |
