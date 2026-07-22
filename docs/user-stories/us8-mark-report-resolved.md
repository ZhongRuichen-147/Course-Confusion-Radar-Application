# US8: Mark Report as Resolved

## User Story
As a lecturer, I want to mark a confusion report as resolved so that students know the issue has been addressed.

## Status
Done

## Priority and Effort
Priority: 20  
Estimated effort: 1 day

## Acceptance Criteria

| ID | Criterion |
|---|---|
| AC8.1 | Each report card provides a lecturer status control with the three values Pending, Explained, and Resolved. |
| AC8.2 | The control shows the report's current status when the page loads. |
| AC8.3 | Selecting a new status writes that value to the report's `status` field in Firestore. |
| AC8.4 | After the status is changed, the report's status badge updates to the new value and colour without a manual page reload. |
| AC8.5 | The new status persists, so reloading the page shows the updated status. |

## Implementation Evidence
This feature is implemented in `script.js` through the function `updateReportStatus(reportId, newStatus)`, which writes the new status to Firestore and refreshes the view, and the helper `createStatusControl(report)`, which builds the per-card status dropdown and binds its `change` handler. The control styling is defined in `styles.css` (`.status-control`).

This replaces the manual Firebase-console procedure previously documented in `docs/us5-manual-test.md`: the three status values (Pending, Explained, Resolved) can now be set directly from the application.

## Related Files
- `index.html`
- `script.js`
- `styles.css`
- `docs/us5-manual-test.md`
- `docs/iteration-2-board.md`
- `README.md`
