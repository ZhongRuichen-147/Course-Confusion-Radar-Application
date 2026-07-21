# US3: View Existing Confusion Reports

## User Story
As a student, I want to view existing confusion reports so that I can see whether other students have similar problems.

## Status
Done

## Priority and Effort
Priority: 20  
Estimated effort: 2 days

## Acceptance Criteria

| ID | Criterion |
|---|---|
| AC3.1 | When the page is opened, every report stored in the Firestore `reports` collection is displayed in the reports list. |
| AC3.2 | Reports are ordered by their `createdAt` value in descending order, so the newest report appears first. |
| AC3.3 | Each report card shows the topic, the confusion description, the status, the vote count, and the created date. |
| AC3.4 | When no reports exist, the list shows the message "No confusion reports have been submitted yet." instead of an empty area. |

## Implementation Evidence
This feature is implemented in `script.js` through `getReports()`, `renderReports()`, and `createReportCard()`. The `getReports()` function reads report documents from the Firestore `reports` collection and orders them by created date. The `renderReports()` function handles the empty state and adds one card per report to the list, and `createReportCard()` builds the card for a single report.

## Related Files
- `index.html`
- `script.js`
- `styles.css`
- `README.md`
- `docs/iteration-1-board.md`