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

## 11. Conclusion

In Practical 2, target users were interviewed to collect feedback on the requirements for the Course Confusion Radar Application. The feedback showed that students need a private and simple way to report confusing course topics, while lecturers need a clear dashboard to identify common learning difficulties. These requirements were converted into user stories with titles, short descriptions, priorities, and estimated effort in days.

In Practical Week 3 and Week 3 Part 2, Iteration 1 was started and completed. The user stories were allocated into three iterations for Milestone 1, an Iteration 1 board was created and monitored using Todo, In Progress, and Done labels, and all four Iteration 1 user stories were implemented and backed by a Firebase Firestore database. A burn down chart was created to track progress.

This means the project has progressed from requirements planning to a working first version, with iteration planning, database integration, and progress tracking in place.

In Practical 4, Iteration 2 began with US5 (report status display), broken down into tracked tasks, implemented via a feature branch, and merged through a pull request with self-review, following the GitHub task-tracking workflow introduced this week.