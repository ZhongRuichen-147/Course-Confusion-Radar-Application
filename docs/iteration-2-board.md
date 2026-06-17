# Iteration 2 Board

## Project

Course Confusion Radar Application

## Iteration 2 Goal

The goal of Iteration 2 is to build lecturer-side review features and allow
students to see the resolution status of their confusion reports.

---

## Iteration 2 User Stories

| ID | User Story | Priority | Effort | Status |
|---|---|---:|---:|---|
| US5 | As a student, I want to see the status of a confusion report so that I know whether it is pending, explained, or resolved. | 20 | 1 day | Done |
| US6 | As a lecturer, I want to view the most confusing topics so that I can understand which areas need more explanation. | 10 | 3 days | Todo |
| US7 | As a lecturer, I want to sort confusion reports by number of votes so that I can prioritize the most common problems. | 20 | 1 day | Todo |
| US8 | As a lecturer, I want to mark a confusion report as resolved so that students know the issue has been addressed. | 20 | 1 day | Todo |

---

## Board Labels

| Label | Meaning |
|---|---|
| Todo | The user story has been planned but has not been started yet. |
| In Progress | The user story is currently being implemented or partially completed. |
| Done | The user story has been implemented and committed to GitHub. |

---

## Completed User Stories in Iteration 2

### US5: View Report Status
Each report displays a color-coded status badge (Pending, Explained, or
Resolved), read from the `status` field in Firestore.

---

## Current Iteration 2 Progress

US5 is complete. The remaining lecturer-side features (US6-US8) are planned
but not yet started.