# Iteration 2 Board

## Project

Course Confusion Radar Application

## Iteration 2 Goal

The goal of Iteration 2 is to build lecturer-side review features, allow
students to see the resolution status of their confusion reports, and add
basic topic filtering.

---

## Iteration 2 User Stories

| ID | User Story | Priority | Effort | Status |
|---|---|---:|---:|---|
| US5 | As a student, I want to see the status of a confusion report so that I know whether it is pending, explained, or resolved. | 20 | 1 day | Done |
| US6 | As a lecturer, I want to view the most confusing topics so that I can understand which areas need more explanation. | 10 | 3 days | Done |
| US7 | As a lecturer, I want to sort confusion reports by number of votes so that I can prioritize the most common problems. | 20 | 1 day | Done |
| US8 | As a lecturer, I want to mark a confusion report as resolved so that students know the issue has been addressed. | 20 | 1 day | Done |
| US10 | As a user, I want to filter confusion reports by topic so that I can find relevant issues quickly. | 30 | 1 day | Done |

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

### US6: Lecturer Dashboard
A "Most Confusing Topics" dashboard summarises each topic's report count and
total votes, ordered by total votes, built by the pure function
`summarizeTopics()`.

### US7: Sort Reports by Votes
A "Sort by" control (Newest / Most votes) reorders the report list using the
pure function `sortReports()`.

### US8: Mark Report as Resolved
Each report card has a lecturer status control (Pending / Explained /
Resolved) that writes the new status to Firestore via `updateReportStatus()`.

### US10: Filter Reports by Topic
A "Filter by topic" control shows only reports for the selected topic using
the pure function `filterReports()`, while the dashboard still summarises all
reports.

---

## Current Iteration 2 Progress

Iteration 2 is complete. US5, US6, US7, US8, and US10 are all implemented,
verified on the live GitHub Pages site, and committed. US10 was moved from
Iteration 3 into Iteration 2 because the Iteration 1 velocity proxy provides a
planning baseline of about 7 effort-days per iteration.