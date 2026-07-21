# US5: View Report Status

## User Story
As a student, I want to see the status of a confusion report so that I know whether it is pending, explained, or resolved.

## Status
Done

## Priority and Effort
Priority: 20  
Estimated effort: 1 day

## Acceptance Criteria

| ID | Criterion |
|---|---|
| AC5.1 | Every report card displays a status badge showing the report's current status value. |
| AC5.2 | The badge uses the CSS class `status-pending`, `status-explained`, or `status-resolved` according to the status value, giving a yellow, blue, or green badge. |
| AC5.3 | If a report has no `status` value stored, the badge defaults to "Pending" rather than showing an empty badge. |
| AC5.4 | Changing the `status` field in Firestore and reloading the page updates both the badge text and the badge colour. |

## Implementation Evidence
This feature is implemented in `script.js` through the `createStatusBadge(status)` function. It reads the report's `status` value from Firestore, falls back to "Pending" when the value is missing, and returns a badge element whose CSS class is derived from the status. The visual styles are defined in `styles.css` using `.status-badge`, `.status-pending`, `.status-explained`, and `.status-resolved`.

## Related Files
- `script.js`
- `styles.css`
- `docs/iteration-2-board.md`
- `docs/us5-manual-test.md`
- `README.md`