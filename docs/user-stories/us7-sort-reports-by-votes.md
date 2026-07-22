# US7: Sort Reports by Votes

## User Story
As a lecturer, I want to sort confusion reports by number of votes so that I can prioritize the most common problems.

## Status
Done

## Priority and Effort
Priority: 20  
Estimated effort: 1 day

## Acceptance Criteria

| ID | Criterion |
|---|---|
| AC7.1 | The reports section provides a "Sort by" control with two options: Newest and Most votes. |
| AC7.2 | When "Most votes" is selected, reports are ordered by their vote count in descending order. |
| AC7.3 | When "Newest" is selected, reports keep their default order (most recently created first). |
| AC7.4 | Changing the sort control re-renders the list immediately without reloading the page. |
| AC7.5 | Sorting changes only the order of the reports; it does not add, remove, or modify any report. |

## Implementation Evidence
This feature is implemented in `script.js` through the pure function `sortReports(reports, sortBy)`, which returns a sorted copy of the reports (by vote count descending when `sortBy` is `"votes"`, otherwise the default newest-first order). The sort control is defined in `index.html` (`#sortBy`), and `renderReports()` applies the sort before rendering the list. A `change` listener on the control re-renders the list.

Because `sortReports()` returns a new array and does not mutate its input or touch the DOM, it is a pure function and will be covered by the Practical 7 automated tests.

## Related Files
- `index.html`
- `script.js`
- `styles.css`
- `docs/iteration-2-board.md`
- `README.md`
