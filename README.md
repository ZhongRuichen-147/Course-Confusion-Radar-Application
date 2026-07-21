# Course Confusion Radar Application

## GITHUB Link
https://github.com/ZhongRuichen-147/Course-Confusion-Radar-Application.git

## Student Name
Zhong Ruichen

## Project Role(s)
Developer, Designer, Project Manager, Tester

---

## 1. Project Overview
The purpose of this project is to develop a web-based platform called Course Confusion Radar Application. This platform allows students to anonymously submit confusing course topics after lectures or practical sessions.

Many students may feel embarrassed to ask questions in class. As a result, lecturers may not always know which topics students are struggling with. Course Confusion Radar Application helps solve this problem by collecting anonymous confusion reports and showing the most common difficult topics on a simple dashboard.

The platform will allow students to submit confusing topics, vote "I'm confused too" on existing reports, and view whether a topic has been explained or resolved. Lecturers can use the dashboard to identify common learning difficulties and adjust their teaching or revision focus.

## 2. Objectives
- To create a web-based platform for students to report confusing course topics anonymously.
- To help students express learning difficulties without feeling embarrassed.
- To allow students to vote on existing confusion reports if they have the same issue.
- To help lecturers identify the most confusing topics in a course.
- To provide a simple dashboard that shows common learning difficulties.
- To improve communication between students and lecturers through structured feedback.

## 3. Features
### Student Features

- Submit a confusion report anonymously.
- Select a course topic when submitting a report.
- View existing confusion reports from other students.
- Vote "I'm confused too" on reports with similar problems.
- Check whether a confusion topic is pending, explained, or resolved.

### Lecturer / Admin Features
- View a dashboard of common confusing topics.
- Sort confusion reports by number of votes.
- Filter reports by course topic.
- Mark a confusion report as explained or resolved.
- Manage course topics.

## 4. Technology Stack
The project will use the following technology stack:

- Frontend: HTML, CSS, JavaScript
- Database: Firebase Firestore (NoSQL cloud database)
- Version Control: GitHub

This technology stack is suitable for an individual project because it allows the application to store and manage data without building a complex backend server.

## 5. Data and Privacy
The Course Confusion Radar Application will not collect sensitive personal information from students. Confusion reports will be submitted anonymously to encourage honest feedback and reduce the pressure of asking questions. The system will only store basic information required for the platform, such as the course topic, confusion description, number of votes, report status, and created date. Student identity will not be required when submitting a confusion report. This approach helps protect student privacy while allowing lecturers to identify common learning difficulties effectively.

The Firestore security rules currently allow public read and write access to the `reports` collection. This matches the anonymous, no-login design of the application, where any student can submit or view a report without authenticating. Because no student identity or personal information is stored, this access model does not expose any personal data. For a production system, access would be tightened (for example, read-only for students and status changes restricted to lecturers), but public access is acceptable for this student demonstration project.

## 6. Initial Backlog Ideas

1. As a student, I want to submit a confusing topic anonymously so that I can ask for help without feeling embarrassed.

2. As a student, I want to select a course topic when submitting a confusion report so that my issue can be categorized clearly.

3. As a student, I want to view existing confusion reports so that I can see whether other students have similar problems.

4. As a student, I want to vote "I'm confused too" on an existing report so that common learning difficulties can be identified.

5. As a student, I want to see the status of a confusion report so that I know whether it is pending, explained, or resolved.

6. As a lecturer, I want to view the most confusing topics so that I can understand which areas need more explanation.

7. As a lecturer, I want to sort confusion reports by number of votes so that I can prioritize the most common problems.

8. As a lecturer, I want to mark a confusion report as resolved so that students know the issue has been addressed.

9. As an admin, I want to add and manage course topics so that confusion reports can be organized properly.

10. As a user, I want to filter confusion reports by topic so that I can find relevant issues quickly.

---

## 7. User Stories

In this report, priority 10 represents the highest priority and priority 50 represents the lowest priority.

| Title | Short Description | Priority | Effort |
|---|---|---:|---:|
| Submit Anonymous Confusion Report | As a student, I want to submit a confusing topic anonymously so that I can ask for help without feeling embarrassed. | 10 | 2 days |
| Select Course Topic | As a student, I want to select a course topic when submitting a confusion report so that my issue can be categorized clearly. | 10 | 1 day |
| View Existing Confusion Reports | As a student, I want to view existing confusion reports so that I can see whether other students have similar problems. | 20 | 2 days |
| Vote “I’m Confused Too” | As a student, I want to vote “I’m confused too” on an existing report so that common learning difficulties can be identified. | 10 | 2 days |
| View Report Status | As a student, I want to see the status of a confusion report so that I know whether it is pending, explained, or resolved. | 20 | 1 day |
| Lecturer Dashboard | As a lecturer, I want to view the most confusing topics so that I can understand which areas need more explanation. | 10 | 3 days |
| Sort Reports by Votes | As a lecturer, I want to sort confusion reports by number of votes so that I can prioritize the most common problems. | 20 | 1 day |
| Mark Report as Resolved | As a lecturer, I want to mark a confusion report as resolved so that students know the issue has been addressed. | 20 | 1 day |
| Manage Course Topics | As an admin, I want to add and manage course topics so that confusion reports can be organized properly. | 30 | 2 days |
| Filter Reports by Topic | As a user, I want to filter confusion reports by topic so that I can find relevant issues quickly. | 30 | 1 day |

---

## 8. Practical Week 3: Iteration 1 Progress

In Practical Week 3, the first iteration of the Course Confusion Radar Application was started. The goal of Iteration 1 is to build the core student confusion report workflow so that students can submit, view, and vote on confusion reports.

### Iteration 1 Board

An Iteration 1 board was created in the `docs` folder:

- `docs/iteration-1-board.md`

This board lists the Iteration 1 user stories and their current development status, using Todo, In Progress, and Done labels.

### Iteration 1 User Stories

| ID | User Story | Priority | Effort | Status |
|---|---|---:|---:|---|
| US1 | As a student, I want to submit a confusing topic anonymously so that I can ask for help without feeling embarrassed. | 10 | 2 days | Done |
| US2 | As a student, I want to select a course topic when submitting a confusion report so that my issue can be categorized clearly. | 10 | 1 day | Done |
| US3 | As a student, I want to view existing confusion reports so that I can see whether other students have similar problems. | 20 | 2 days | Done |
| US4 | As a student, I want to vote "I'm confused too" on an existing report so that common learning difficulties can be identified. | 10 | 2 days | Done |

### Implementation Completed in Iteration 1

All four Iteration 1 user stories were implemented and committed. The following files were added or updated:

- `index.html`: page structure for the confusion radar application.
- `styles.css`: layout and component styling.
- `script.js`: confusion report submission, viewing, and voting, connected to the Firestore database.
- `docs/iteration-1-board.md`: created and updated the Iteration 1 board.
- `docs/milestone-1-plan.md`: allocated user stories across three iterations.
- `docs/iteration-1-burndown.md` and `docs/iteration-1-burndown.png`: burn down data and chart.
- `README.md`: project information, user stories, and development progress.

### Current Status

All four Iteration 1 user stories (submit, select topic, view, vote) are complete and backed by the Firestore database. The project has moved from requirements planning into a working first version with iteration planning and progress tracking in place.

---

## 9. Practical Week 3 Part 2 Progress

In Practical Week 3 Part 2, the planned user stories were allocated into three iterations for Milestone 1 based on priority, estimated effort, and feature dependency.

The Iteration 1 board was updated with Todo, In Progress, and Done labels to monitor progress. All four Iteration 1 user stories were completed:

| ID | Completed User Story | Evidence |
|---|---|---|
| US1 | Submit Anonymous Confusion Report | Report submission implemented in the interface and written to the Firestore database. |
| US2 | Select Course Topic | Course topic selection field implemented when creating a report. |
| US3 | View Existing Confusion Reports | Reports are read back from Firestore and displayed in the reports list. |
| US4 | Vote "I'm Confused Too" | Vote button increments the report's vote count in Firestore. |

The application now stores all confusion reports in a Firebase Firestore database instead of local browser storage.

A burn down line chart (planned vs actual remaining work) was created to monitor Iteration 1 progress, available at `docs/iteration-1-burndown.png`.

Related files:

- `docs/milestone-1-plan.md`
- `docs/iteration-1-board.md`
- `docs/iteration-1-burndown.md`
- `docs/iteration-1-burndown.png`

---

## 10. Practical 4: Iteration 2 Progress (US5)

In Practical 4, work began on Iteration 2 of the Course Confusion Radar Application, following the task execution and tracking process introduced in Chapter 4.

### Task Breakdown for US5

US5 (View Report Status) was broken down into four tasks and tracked using GitHub Issues with `todo`, `in-progress`, and `done` labels:

| Task ID | Description | Effort |
|---|---|---:|
| T5.1 | Verify status field write/read logic | 0.1 day |
| T5.2 | Add color-coded status badges (Pending/Explained/Resolved) | 0.3 day |
| T5.3 | Write manual test documentation | 0.1 day |
| T5.4 | Update milestone plan and create Iteration 2 board | 0.1 day |

During task estimation review, it was found that the `status` field was already written to Firestore and read back during Iteration 1 (as part of US1 implementation), so the remaining work for US5 was lower than the original 1-day estimate in `milestone-1-plan.md`.

### Implementation

A feature branch `feature/us5-report-status` was created for this work. The following files were added or updated:

- `script.js`: report status is now rendered as a color-coded badge instead of plain text.
- `styles.css`: added `.status-badge` styling with distinct colors for Pending (yellow), Explained (blue), and Resolved (green).
- `docs/us5-manual-test.md`: manual test steps for verifying all three status states via the Firebase console.
- `docs/milestone-1-plan.md`: US5 status updated to Done.
- `docs/iteration-2-board.md`: created to track Iteration 2 user stories (US5-US8).

### GitHub Workflow

Each task was committed separately with a descriptive message, and the corresponding GitHub Issue was updated from `todo` to `done` as work progressed. The feature branch was merged into `main` via a pull request, with self-review comments added on the changed files before merging.

### Current Status

US5 is complete and verified: all three status values (Pending, Explained, Resolved) render with the correct badge color, confirmed through manual testing against the Firestore database. The remaining Iteration 2 user stories (US6-US8, lecturer-side features) are planned but not yet started.

---

## 11. Practical 5: Iteration 1 Reflection

In Practical 5, the project was reviewed against SRP and DRY principles, and the completed and unfinished user stories were documented.

### SRP and DRY Review
The SRP and DRY review is documented in `docs/srp-dry-review.md`.

The current implementation uses functional JavaScript rather than traditional OOP classes, so the review treats the functions in `script.js` as a conceptual responsibility group. The main finding is that `renderReports()` has more than one responsibility because it builds UI elements, formats status badges, and attaches event handlers.

### Task and User Story Monitoring
The project uses GitHub Issues with `todo`, `in-progress`, and `done` labels to monitor user stories. Completed user stories are marked as done, while unfinished backlog items remain todo.

### Completed vs Unfinished User Stories
The Iteration 1 review is documented in `docs/iteration-1-review.md`.

US1-US4 were completed in Iteration 1. US5 was completed during Practical 4 as the first Iteration 2 user story. The remaining unfinished backlog items are US6-US10.

### Completed User Story Pages
GitHub-rendered documentation pages were added for each completed user story:

- `docs/user-stories/us1-submit-anonymous-confusion-report.md`
- `docs/user-stories/us2-select-course-topic.md`
- `docs/user-stories/us3-view-existing-confusion-reports.md`
- `docs/user-stories/us4-vote-confused-too.md`
- `docs/user-stories/us5-view-report-status.md`

GitHub Pages hosting has since been enabled, so these user story pages are now published as live web pages rather than only repository files. See the Practical 5 Follow-up subsection below for details.

### Actual Velocity
The course material used for this review did not explicitly define the velocity formula or unit. Therefore, the calculation uses estimated effort-days as a velocity proxy.

Using that metric, the actual velocity for Iteration 1 was **7 effort days per iteration**. If counted by completed user stories instead, the velocity was **4 completed user stories per iteration**.

### Practical 5 Follow-up (completed after the initial submission)

After the initial Practical 5 and 6 submissions, several follow-up improvements were made to complete and strengthen the Practical 5 work. Each was tracked as a GitHub Issue (#47-#51).

**SRP refactoring.** The main SRP weakness identified in `docs/srp-dry-review.md` was corrected. `renderReports()` was split by extracting `createStatusBadge()` and `createReportCard()`, so it now only retrieves reports, handles the empty state, and appends cards. The change is structural and does not alter behaviour, and it is recorded under "Refactoring Applied" in `docs/srp-dry-review.md`. (Issue #49)

**Acceptance criteria.** Numbered acceptance criteria (AC1.1, AC2.1, and so on) were added to the US1-US5 pages in `docs/user-stories/`, so that the Practical 7 test cases can be written directly against them. (Issue #48)

**Velocity documentation consolidation.** The velocity-proxy explanation, previously repeated across several documents, was consolidated into a single source of truth in `docs/iteration-1-review.md`. The other planning documents now link back to it. No numbers or conclusions were changed. (Issue #50)

**GitHub Pages hosting.** GitHub Pages was enabled from the `main` branch root (Settings > Pages). A `_config.yml` (Cayman theme) and a documentation index at `docs/index.md` were added so the Markdown documents render as themed web pages with resolved `.html` links. The application is published as a live demo at: https://zhongruichen-147.github.io/Course-Confusion-Radar-Application/ (Issue #47)

**Firestore rules fix.** While verifying the live deployment, the application showed an empty reports list. The cause was that the Firestore test-mode security rules, set on 8 June 2026, had expired after 30 days and were denying all reads and writes (`permission-denied`). The rules were updated to allow read and write on the `reports` collection, matching the anonymous design described in section 5, and the live application was confirmed to render the existing reports again. (Issue #51)

---

## 12. Practical 6: Iteration 2 Planning Adjustment

In Practical 6, the Iteration 1 reflection was used to adjust the Iteration 2 plan.

The SRP and DRY findings from Practical 5 are documented in `docs/srp-dry-review.md` and are referenced here as evidence for the Iteration 1 reflection.

The Iteration 1 burn down graph is documented in `docs/iteration-1-burndown.md` and `docs/iteration-1-burndown.png`.

The Iteration 1 velocity is documented in `docs/iteration-1-review.md`. Because the provided course material used for this review did not explicitly define a velocity formula, the project uses estimated effort-days as a velocity proxy.

Using that metric, the Iteration 1 velocity proxy was 7 effort-days per iteration. The original Iteration 2 backlog contained US5-US8, with a total of 6 effort-days. To better match the Iteration 1 velocity proxy, US10 was moved from Iteration 3 into Iteration 2.

The updated Iteration 2 backlog is documented in `docs/iteration-2-backlog-update.md`, and the Iteration 2 task breakdown is documented in `docs/iteration-2-tasks.md`.

The updated Iteration 2 user stories are:

- US5: View Report Status - Done
- US6: Lecturer Dashboard - Todo
- US7: Sort Reports by Votes - Todo
- US8: Mark Report as Resolved - Todo
- US10: Filter Reports by Topic - Todo

US9 remains planned for Iteration 3.

The completed user story pages for US1-US5 remain available in `docs/user-stories/`. No additional completed user story page was added during Practical 6 because US6, US7, US8, US9, and US10 are still Todo.

---

## 13. Conclusion

In Practical 2, target users were interviewed to collect feedback on the requirements for the Course Confusion Radar Application. The feedback showed that students need a private and simple way to report confusing course topics, while lecturers need a clear dashboard to identify common learning difficulties. These requirements were converted into user stories with titles, short descriptions, priorities, and estimated effort in days.

In Practical Week 3 and Week 3 Part 2, Iteration 1 was started and completed. The user stories were allocated into three iterations for Milestone 1, an Iteration 1 board was created and monitored using Todo, In Progress, and Done labels, and all four Iteration 1 user stories were implemented and backed by a Firebase Firestore database. A burn down chart was created to track progress.

This means the project has progressed from requirements planning to a working first version, with iteration planning, database integration, and progress tracking in place.

In Practical 4, Iteration 2 began with US5 (report status display), broken down into tracked tasks, implemented via a feature branch, and merged through a pull request with self-review, following the GitHub task-tracking workflow introduced this week.

In Practical 5, the project was reviewed for SRP and DRY, the completed and unfinished user stories were documented, and GitHub Issues were used to track both Practical 5 tasks and user stories with `todo`, `in-progress`, and `done` labels. Documentation pages were also added for the completed user stories, and Iteration 1 velocity was calculated using estimated effort-days as a proxy because the course material used for this review did not explicitly define a velocity formula.

Practical 6 added an Iteration 2 planning adjustment based on the Iteration 1 velocity proxy, with US10 moved into Iteration 2 and US9 remaining in Iteration 3.