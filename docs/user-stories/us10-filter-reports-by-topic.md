# US10: Filter Reports by Topic

## User Story
As a user, I want to filter confusion reports by topic so that I can find relevant issues quickly.

## Status
Done

## Priority and Effort
Priority: 30  
Estimated effort: 1 day

## Acceptance Criteria

| ID | Criterion |
|---|---|
| AC10.1 | The reports section provides a "Filter by topic" control with an "All topics" option and one option per course topic. |
| AC10.2 | Selecting a topic shows only the reports whose topic matches the selected value. |
| AC10.3 | Selecting "All topics" shows every report again. |
| AC10.4 | The filter works together with the sort control, so the filtered reports are still ordered by the selected sort option. |
| AC10.5 | When a filter matches no reports, the list shows "No reports match the selected topic." while the dashboard still summarises all reports. |

## Implementation Evidence
This feature is implemented in `script.js` through the pure function `filterReports(reports, topic)`, which returns a copy of the reports whose topic matches the selected value (or all reports when the value is `"all"`). The filter control is defined in `index.html` (`#filterTopic`). `renderReports()` applies the filter before the sort, giving the pipeline: retrieve, filter, sort, render. The dashboard is still built from all reports, so topic filtering affects only the report list.

Because `filterReports()` returns a new array and does not mutate its input or touch the DOM, it is a pure function and will be covered by the Practical 7 automated tests.

## Related Files
- `index.html`
- `script.js`
- `styles.css`
- `docs/iteration-2-board.md`
- `README.md`
