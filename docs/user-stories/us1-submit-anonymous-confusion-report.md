# US1: Submit Anonymous Confusion Report

## User Story
As a student, I want to submit a confusing topic anonymously so that I can ask for help without feeling embarrassed.

## Status
Done

## Priority and Effort
Priority: 10  
Estimated effort: 2 days

## Acceptance Criteria

| ID | Criterion |
|---|---|
| AC1.1 | When a topic is selected and a description is entered, submitting the form creates a new report in the Firestore `reports` collection with `votes` set to 0, `status` set to "Pending", and a `createdAt` timestamp. |
| AC1.2 | The submission form does not ask for a student name, student ID, or email address, and no identifying field is stored with the report. |
| AC1.3 | If the topic or the description is empty, no report is created and the page shows the message "Please select a topic and enter a confusion description." |
| AC1.4 | After a successful submission, the form is cleared and the new report appears in the reports list. |

## Implementation Evidence
This feature is implemented in `script.js` through the `submitReport(event)` function. When the form is submitted, the selected topic and confusion description are saved to the Firestore `reports` collection. The report is submitted without asking for a student name or identity, which supports anonymous reporting.

## Related Files
- `index.html`
- `script.js`
- `README.md`
- `docs/iteration-1-board.md`