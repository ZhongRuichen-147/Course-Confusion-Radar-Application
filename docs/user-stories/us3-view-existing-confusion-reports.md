# US3: View Existing Confusion Reports

## User Story
As a student, I want to view existing confusion reports so that I can see whether other students have similar problems.

## Status
Done

## Priority and Effort
Priority: 20  
Estimated effort: 2 days

## Implementation Evidence
This feature is implemented in `script.js` through `getReports()` and `renderReports()`. The `getReports()` function reads report documents from the Firestore `reports` collection and orders them by created date. The `renderReports()` function displays each report as a report card in the browser.

## Related Files
- `index.html`
- `script.js`
- `styles.css`
- `README.md`
- `docs/iteration-1-board.md`