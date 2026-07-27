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
| AC2.1 | The submission form provides a topic dropdown so the student can categorize their report. |
| AC2.2 | The topic chosen in the dropdown is saved as the `topic` field of the report and is displayed as the heading of the report card. |
| AC2.3 | The placeholder option "Select a topic" has an empty value and cannot be used to submit a report. |

## Implementation Evidence
This feature is implemented in `index.html` through the `topic` dropdown field, with the placeholder-only markup `<option value="">Select a topic</option>`. In `script.js`, the selected topic is read through `topicInput.value` and saved together with the report in Firestore.

Originally (Iteration 1) the dropdown's options were five topics hardcoded directly in `index.html`: Requirements, User Stories, Agile Iteration, Testing, and GitHub. Since US9 (Practical 8), those five are the initial seeded values in a Firestore `topics` collection instead, and the dropdown's options are populated dynamically by `renderTopics()` in `script.js` calling `topicsRepository.getTopics()` — see `docs/user-stories/us9-manage-course-topics.md`. The topic list a student can pick from is therefore whatever an admin currently has configured, not a fixed set of five.

## Related Files
- `index.html`
- `script.js`
- `topicActions.js`
- `firestoreRepository.js`
- `README.md`
- `docs/iteration-1-board.md`
- `docs/user-stories/us9-manage-course-topics.md`