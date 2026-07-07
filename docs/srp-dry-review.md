# SRP and DRY Review

## Project
Course Confusion Radar Application

## Scope
The project currently uses functional JavaScript instead of traditional OOP classes. Therefore, this review treats the 
functions in `script.js` as the conceptual responsibility group represented by `ReportService` in the class diagram.

## SRP Review

| Function / Concept | Responsibility | SRP Finding |
|---|---|---|
| `getReports()` | Reads reports from Firestore and returns report data. | Satisfies SRP because it only handles report retrieval. |
| `submitReport(event)` | Validates form input, writes a report to Firestore, resets the form, shows a message, and refreshes the report list. | Partially violates SRP because form validation, database writing, UI feedback, and refreshing are mixed in one function. |
| `voteForReport(reportId)` | Updates the vote count for one report. | Mostly satisfies SRP because it focuses on voting. |
| `clearReports()` | Deletes demo reports and refreshes the UI. | Acceptable for a small demo project, but it combines database deletion and UI feedback. |
| `formatDate(createdAt)` | Converts Firestore timestamp data into a display date. | Satisfies SRP because it only formats dates. |
| `renderReports()` | Reads report data, builds report cards, creates status badges, attaches vote button handlers, and updates the DOM. | Partially violates SRP because data rendering, status badge formatting, DOM creation, and event binding are all handled together. |

## DRY Review

| Finding | Evidence | Improvement |
|---|---|---|
| Report refresh is repeated after changes. | `await renderReports()` appears after submitting, voting, and clearing reports. | This is acceptable for now, but a helper such as `refreshReports()` could be added later if more update actions are created. |
| Status values appear in multiple places. | `Pending`, `Explained`, and `Resolved` are used in code, CSS, and manual test documentation. | This is acceptable in the current small project, but constants could be introduced later. |
| Error handling is repeated. | Several functions use separate `try/catch` blocks. | For a larger project, common error display logic could be extracted. |

## Reflection
The current implementation is simple and understandable for a small student project. The main SRP weakness is `renderReports()`, 
because it mixes UI construction, status badge formatting, and event binding. However, a large refactor is not necessary 
for this practical because the task asks to check and list findings, not to redesign the code.