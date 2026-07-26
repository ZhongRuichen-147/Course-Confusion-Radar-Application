# US9: Manage Course Topics

## User Story
As an admin, I want to add and manage course topics so that confusion reports can be organized properly.

## Status
In Progress

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

The admin UI (AC9.1) and Firestore-backed persistence of the topic list are
implemented through the repository seam added for Mock Object testing later
in Practical 8; this section is updated once that lands.

## Related Files
- `logic.js`
- `tests/logic.test.js`
- `README.md`
