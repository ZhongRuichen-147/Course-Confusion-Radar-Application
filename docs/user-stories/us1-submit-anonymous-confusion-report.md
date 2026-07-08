# US1: Submit Anonymous Confusion Report

## User Story
As a student, I want to submit a confusing topic anonymously so that I can ask for help without feeling embarrassed.

## Status
Done

## Priority and Effort
Priority: 10  
Estimated effort: 2 days

## Implementation Evidence
This feature is implemented in `script.js` through the `submitReport(event)` function. When the form is submitted, the selected topic and confusion description are saved to the Firestore `reports` collection. The report is submitted without asking for a student name or identity, which supports anonymous reporting.

## Related Files
- `index.html`
- `script.js`
- `README.md`
- `docs/iteration-1-board.md`