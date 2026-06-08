# Iteration 1 Board

## Project

Course Confusion Radar Application

## Iteration 1 Goal

The goal of Iteration 1 is to build the core student confusion report workflow. This includes allowing students to select a course topic, submit an anonymous confusion report, view submitted reports, and vote on existing reports.

---

## Iteration 1 User Stories

| ID | User Story | Priority | Effort | Status |
|---|---|---:|---:|---|
| US1 | As a student, I want to submit a confusing topic anonymously so that I can ask for help without feeling embarrassed. | 10 | 2 days | Done |
| US2 | As a student, I want to select a course topic when submitting a confusion report so that my issue can be categorized clearly. | 10 | 1 day | Done |
| US3 | As a student, I want to view existing confusion reports so that I can see whether other students have similar problems. | 20 | 2 days | Done |
| US4 | As a student, I want to vote "I'm confused too" on an existing report so that common learning difficulties can be identified. | 10 | 2 days | Done |

---

## Board Labels

| Label | Meaning |
|---|---|
| Todo | The user story has been planned but has not been started yet. |
| In Progress | The user story is currently being implemented or partially completed. |
| Done | The user story has been implemented and committed to GitHub. |

---

## Completed User Stories in Iteration 1

### US1: Submit Anonymous Confusion Report
Students can enter a confusing topic description and submit it anonymously. The report is saved to the Firestore database.

### US2: Select Course Topic
Students select a course topic when creating a report, so reports are categorized by topic.

### US3: View Existing Confusion Reports
Submitted reports are read back from Firestore and displayed in the reports list, so students can see whether others have similar problems.

### US4: Vote "I'm Confused Too"
Each report has an "I'm confused too" button that increments its vote count in Firestore, helping identify common learning difficulties.

---

## Current Iteration 1 Progress

All four Iteration 1 user stories have been implemented and committed. The core student confusion report workflow (submit, categorize, view, vote) is complete and backed by the Firestore database.