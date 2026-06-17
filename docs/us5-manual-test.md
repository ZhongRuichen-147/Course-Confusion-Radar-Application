# US5 Manual Test: Report Status Display

## Purpose
This document describes how to manually verify that the three confusion
report statuses (Pending, Explained, Resolved) render correctly with the
correct color badge.

## Steps

1. Open the Firebase console for the `cp3407-800c5` project and navigate to
   Firestore Database > `reports` collection.
2. Pick any existing report document and edit its `status` field, changing
   the value from `"Pending"` to `"Explained"`.
3. Reload `index.html` in the browser. The corresponding report card should
   now show a blue "Explained" badge instead of the yellow "Pending" badge.
4. Repeat step 2-3, changing the same document's `status` field to
   `"Resolved"`. The badge should turn green and display "Resolved".
5. Revert the field back to `"Pending"` afterwards to keep demo data
   consistent.

## Expected Result

| Status Value | Badge Color | Badge Text |
|---|---|---|
| Pending   | Yellow | Pending   |
| Explained | Blue   | Explained |
| Resolved  | Green  | Resolved  |