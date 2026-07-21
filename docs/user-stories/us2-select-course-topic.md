# US2: Select Course Topic

## User Story
As a student, I want to select a course topic when submitting a confusion report so that my issue can be categorized clearly.

## Status
Done

## Priority and Effort
Priority: 10  
Estimated effort: 1 day

## Acceptance Criteria

| ID | Criterion |
|---|---|
| AC2.1 | The submission form provides a topic dropdown containing the five course topics: Requirements, User Stories, Agile Iteration, Testing, and GitHub. |
| AC2.2 | The topic chosen in the dropdown is saved as the `topic` field of the report and is displayed as the heading of the report card. |
| AC2.3 | The placeholder option "Select a topic" has an empty value and cannot be used to submit a report. |

## Implementation Evidence
This feature is implemented in `index.html` through the `topic` dropdown field. The available course topics include Requirements, User Stories, Agile Iteration, Testing, and GitHub. In `script.js`, the selected topic is read through `topicInput.value` and saved together with the report in Firestore.

## Related Files
- `index.html`
- `script.js`
- `README.md`
- `docs/iteration-1-board.md`