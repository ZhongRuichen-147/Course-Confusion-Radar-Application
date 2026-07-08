# US4: Vote "I'm Confused Too"

## User Story
As a student, I want to vote "I'm confused too" on an existing report so that common learning difficulties can be identified.

## Status
Done

## Priority and Effort
Priority: 10  
Estimated effort: 2 days

## Implementation Evidence
This feature is implemented in `script.js` through the `voteForReport(reportId)` function. Each rendered report card includes an "I'm confused too" button. When the button is clicked, Firestore updates the selected report by incrementing its `votes` value.

## Related Files
- `index.html`
- `script.js`
- `README.md`
- `docs/iteration-1-board.md`