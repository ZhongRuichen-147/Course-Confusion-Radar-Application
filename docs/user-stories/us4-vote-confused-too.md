# US4: Vote "I'm Confused Too"

## User Story
As a student, I want to vote "I'm confused too" on an existing report so that common learning difficulties can be identified.

## Status
Done

## Priority and Effort
Priority: 10  
Estimated effort: 2 days

## Acceptance Criteria

| ID | Criterion |
|---|---|
| AC4.1 | Every report card displays an "I'm confused too" button. |
| AC4.2 | Clicking the button increases the `votes` field of that specific report by exactly 1 in Firestore. |
| AC4.3 | After voting, the reports list is refreshed and the report card shows the updated vote count. |
| AC4.4 | Voting on one report does not change the vote count of any other report. |

## Implementation Evidence
This feature is implemented in `script.js` through the `voteForReport(reportId)` function. Each report card built by `createReportCard()` includes an "I'm confused too" button. When the button is clicked, Firestore updates the selected report by incrementing its `votes` value.

## Related Files
- `index.html`
- `script.js`
- `README.md`
- `docs/iteration-1-board.md`