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
- Backend / Database: Firebase
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

In Practical Week 3, the first iteration of the Course Confusion Radar Application was started. The main goal of Iteration 1 is to build the first working version of the confusion report feature so that students can submit and view confusion reports.

### Iteration 1 Board

An Iteration 1 board was created in the `docs` folder:

* `docs/iteration-1-board.md`

This board lists the planned user stories for Iteration 1 and their current development status.

### Iteration 1 User Stories

| ID  | User Story                                                                                                                    | Priority | Status |
| --- | ----------------------------------------------------------------------------------------------------------------------------- | -------: | ------ |
| US1 | As a student, I want to submit a confusing topic anonymously so that I can ask for help without feeling embarrassed.          |       10 | Done   |
| US2 | As a student, I want to select a course topic when submitting a confusion report so that my issue can be categorized clearly. |       10 | Todo   |
| US3 | As a student, I want to view existing confusion reports so that I can see whether other students have similar problems.       |       20 | Todo   |
| US4 | As a student, I want to vote "I'm confused too" on an existing report so that common learning difficulties can be identified. |       10 | Todo   |
| US5 | As a student, I want to see the status of a confusion report so that I know whether it is pending, explained, or resolved.    |       20 | Todo   |

### Implementation Completed in Week 3

The first confusion report management functionality was implemented during Iteration 1.

The following files were added or updated:

* `index.html`: added the initial page structure for the confusion radar application.
* `styles.css`: added the initial layout and component styling.
* `script.js`: implemented the first confusion report management functionality.
* `docs/iteration-1-board.md`: created the Iteration 1 board.
* `README.md`: added and updated project information, user stories, and development progress.

### Current Status

At this stage, the project has moved from requirements planning into initial implementation. The application now has an initial frontend structure and the first implemented feature related to confusion report management.

---

## 9. Conclusion

In Practical 2, target users were interviewed to collect feedback on the requirements for the Course Confusion Radar Application.

The feedback showed that students need a private and simple way to report confusing course topics, while lecturers need a clear dashboard to identify common learning difficulties.

These requirements were converted into user stories with titles, short descriptions, priorities, and estimated effort in days.

In Practical Week 3, Iteration 1 was started. An Iteration 1 board was created, planned user stories were marked for development, and the first confusion report management functionality was implemented. This means the project has progressed from requirements planning to initial coding and feature implementation.

