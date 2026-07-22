# US6: Lecturer Dashboard

## User Story
As a lecturer, I want to view the most confusing topics so that I can understand which areas need more explanation.

## Status
Done

## Priority and Effort
Priority: 10  
Estimated effort: 3 days

## Acceptance Criteria

| ID | Criterion |
|---|---|
| AC6.1 | The page shows a "Lecturer Dashboard" section listing each course topic that has at least one report. |
| AC6.2 | For each topic, the dashboard shows the number of reports and the total number of votes across those reports. |
| AC6.3 | Topics are ordered by total votes in descending order, so the most voted (most confusing) topic appears first. |
| AC6.4 | When two topics have the same total votes, the topic with more reports is shown first. |
| AC6.5 | When no reports exist, the dashboard shows "No confusion reports have been submitted yet." instead of an empty table. |

## Implementation Evidence
This feature is implemented in `script.js` through the pure function `summarizeTopics(reports)`, which groups reports by topic and totals their report count and votes, and `renderDashboard(reports)`, which builds the dashboard table. The dashboard is rendered from all reports inside `renderReports()`. The dashboard section and its styling are defined in `index.html` (`#dashboard`) and `styles.css` (`.dashboard-table`).

Because `summarizeTopics()` is a pure function (reports array in, summary array out, with no DOM or Firestore access), it is directly unit-testable and will be covered by the Practical 7 automated tests.

## Related Files
- `index.html`
- `script.js`
- `styles.css`
- `docs/iteration-2-board.md`
- `README.md`
