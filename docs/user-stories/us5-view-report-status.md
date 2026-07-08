# US5: View Report Status

## User Story
As a student, I want to see the status of a confusion report so that I know whether it is pending, explained, or resolved.

## Status
Done

## Priority and Effort
Priority: 20  
Estimated effort: 1 day

## Implementation Evidence
This feature is implemented in `script.js` through the status badge logic inside `renderReports()`. The function reads the report's `status` value from Firestore and displays it as a badge. The visual styles are defined in `styles.css` using `.status-badge`, `.status-pending`, `.status-explained`, and `.status-resolved`.

## Related Files
- `script.js`
- `styles.css`
- `docs/iteration-2-board.md`
- `docs/us5-manual-test.md`
- `README.md`