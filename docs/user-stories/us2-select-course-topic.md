# US2: Select Course Topic

## User Story
As a student, I want to select a course topic when submitting a confusion report so that my issue can be categorized clearly.

## Status
Done

## Priority and Effort
Priority: 10  
Estimated effort: 1 day

## Implementation Evidence
This feature is implemented in `index.html` through the `topic` dropdown field. The available course topics include Requirements, User Stories, Agile Iteration, Testing, and GitHub. In `script.js`, the selected topic is read through `topicInput.value` and saved together with the report in Firestore.

## Related Files
- `index.html`
- `script.js`
- `README.md`
- `docs/iteration-1-board.md`