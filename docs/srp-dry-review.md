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

## Refactoring Applied

The findings above were recorded first, and the most significant SRP violation was then corrected in `script.js`.

| Change | Reason |
|---|---|
| Extracted `createStatusBadge(status)` from `renderReports()` | Status badge construction is a single, self-contained formatting responsibility. Separating it means the badge rules (text and colour class) live in one place instead of being embedded in the rendering loop. |
| Extracted `createReportCard(report)` from `renderReports()` | Building the DOM for one report card is a separate responsibility from deciding which reports to display. |
| `renderReports()` reduced to retrieve, handle the empty state, and append cards | The function now coordinates rendering instead of performing every rendering step itself. |

The refactoring is structural only. No behaviour was changed: the rendered report cards, badge colours, vote button, and empty-state message are identical to the previous version.

The `voteForReport()` call remains inside `createReportCard()` because the click handler must be bound to the button that the function creates. Separating event binding from DOM creation would require a larger design change than this practical needs.

## Reflection
The current implementation is simple and understandable for a small student project. The main SRP weakness identified in this
review was `renderReports()`, because it mixed UI construction, status badge formatting, and event binding. This specific
weakness has now been corrected by extracting `createStatusBadge()` and `createReportCard()`, as described above.

A larger redesign, such as introducing full OOP classes or separating the Firestore access layer from the UI layer, is not
necessary for this practical because the task asks to check and list findings rather than to redesign the code. The DRY
findings were reviewed and judged acceptable for the current project size, so they were recorded as future improvements
rather than changed now.

A useful side effect of this refactoring is that `createStatusBadge()` is a small function with predictable output, which
makes it easier to cover with automated tests in a later practical.