# US9: Manage Course Topics

## User Story
As an admin, I want to add and manage course topics so that confusion reports can be organized properly.

## Status
Done

## Priority and Effort
Priority: 30
Estimated effort: 2 days

## Acceptance Criteria

This user story is the Practical 8 TDD specification: the tests in
`tests/logic.test.js` were written from this table before `addTopic` and
`removeTopic` were implemented in `logic.js` (see the Practical 8 section of
`README.md`).

| ID | Criterion |
|---|---|
| AC9.1 | The admin panel shows the current list of course topics. |
| AC9.2 | Adding a topic with a valid new name adds it to the topic list, which is shared by the report form and the filter control. |
| AC9.3 | Adding a topic that already exists (case-insensitive match) is rejected with an error message, and the topic list is unchanged. |
| AC9.4 | Adding an empty or whitespace-only topic name is rejected with the message "Please enter a topic name.", and the topic list is unchanged. |
| AC9.5 | Topic names are trimmed of leading/trailing whitespace before being added. |
| AC9.6 | Removing an existing topic removes it from the topic list. |
| AC9.7 | Removing a topic that is not in the list leaves the list unchanged. |

## Implementation Evidence
The topic list management is implemented as two pure functions in `logic.js`:
`addTopic(topics, name)` (AC9.2-AC9.5) and `removeTopic(topics, name)`
(AC9.6-AC9.7). Both return a new array and do not mutate the list passed in,
matching the style of `filterReports`/`sortReports`. They are unit-tested in
`tests/logic.test.js`.

Firestore persistence uses the same repository pattern introduced for Mock
Object testing: `createFirestoreTopicsRepository` in `firestoreRepository.js`
wraps a `topics` collection (`getTopics`/`addTopic`/`removeTopic`), and
`addTopicAction`/`removeTopicAction` in `topicActions.js` call `addTopic`/
`removeTopic` from `logic.js` for validation before writing. This orchestration
is unit-tested against a Mock Object repository in `tests/topicActions.test.js`
(`tests/mocks/mockTopicsRepository.js`), the same way `reportActions.js` is
tested against a mock Firestore for reports.

The admin panel (AC9.1) is the "Manage Course Topics" section in `index.html`:
an add-topic form and a list of topics with a Remove button each, wired up in
`script.js` (`renderTopics`, `addTopic`, `removeTopic`). The report form's
topic dropdown and the report list's filter dropdown are now both populated
from the same Firestore-backed topic list instead of a hardcoded, duplicated
`<option>` list in each `<select>`.

Removing a topic does not change the topic field already stored on existing
reports; a report can still show a topic that has since been removed from the
admin list. This is a known limitation, not covered by the acceptance
criteria above.

## Related Files
- `logic.js`
- `topicActions.js`
- `firestoreRepository.js`
- `index.html`
- `script.js`
- `styles.css`
- `tests/logic.test.js`
- `tests/topicActions.test.js`
- `tests/mocks/mockTopicsRepository.js`
- `README.md`
