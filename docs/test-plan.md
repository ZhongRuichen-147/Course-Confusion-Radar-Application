# Test Plan

## Project
Course Confusion Radar Application

## Purpose
This document discusses and plans the testing for the project (Practical 7). It
describes the testing approach, records at least three test cases for each of
five selected user stories, and links those test cases to the automated tests
in `tests/logic.test.js`.

---

## 1. Testing Approach

The application has two kinds of code, and each is tested in the way that suits
it best:

| Layer | Example | How it is tested |
|---|---|---|
| Pure logic | `validateReport`, `statusBadgeClass`, `summarizeTopics`, `sortReports`, `filterReports` in `logic.js` | Automated unit tests (Node built-in test runner) |
| DOM and Firestore | rendering report cards, writing to Firestore, the live dashboard | Manual and integration testing on the live GitHub Pages site |

The pure logic was deliberately extracted into `logic.js` (Practical 7 refactor)
precisely so that it could be unit-tested without a browser or a database. Each
pure function takes plain data and returns plain data, so a test can call it
directly and check the result.

The parts that touch the DOM or Firestore cannot be tested as pure functions.
They are verified by manual and integration testing (see section 4).

### Test framework
The automated tests use the **Node built-in test runner** (`node:test` with
`node:assert`). This needs no extra dependencies, so the repository stays clean
(no `node_modules`). The tests are run with:

```
npm test
```

which runs `node --test` and discovers `tests/logic.test.js`.

---

## 2. Test Cases per User Story

Five user stories were selected. Each has at least three test cases. The
"Automated" column names the test in `tests/logic.test.js` that implements the
case, and each case traces back to an acceptance criterion (AC) on the user
story page in `docs/user-stories/`.

### US1 Submit Anonymous Confusion Report (also covers US2 Select Course Topic)
Function under test: `validateReport(topic, description)`

| # | Test case | Expected result | Automated |
|---|---|---|---|
| 1 | Submit with empty topic and empty description | Invalid, message "Please select a topic and enter a confusion description." (AC1.3) | yes |
| 2 | Submit with whitespace-only topic and description | Invalid | yes |
| 3 | Select a topic but leave the description empty | Invalid | yes |
| 4 | Provide a topic and a description | Valid, empty message (AC1.1) | yes |

### US6 Lecturer Dashboard
Function under test: `summarizeTopics(reports)`

| # | Test case | Expected result | Automated |
|---|---|---|---|
| 1 | No reports | Empty summary (AC6.5) | yes |
| 2 | Two reports on the same topic with 2 and 0 votes | One row: reportCount 2, totalVotes 2 (AC6.2) | yes |
| 3 | Topics A (2 votes) and B (5 votes) | B is ordered before A (AC6.3) | yes |
| 4 | Two topics with equal votes but different report counts | The topic with more reports is first (AC6.4) | yes |
| 5 | A report with a missing topic or missing votes | Missing topic becomes "Unknown", missing votes counts as 0 | yes |

### US7 Sort Reports by Votes
Function under test: `sortReports(reports, sortBy)`

| # | Test case | Expected result | Automated |
|---|---|---|---|
| 1 | Sort by "newest" | Original order kept (AC7.3) | yes |
| 2 | Sort by "votes" | Ordered by votes, highest first (AC7.2) | yes |
| 3 | Sort by "votes" with equal votes | Ties keep the newest-first order (stable) | yes |
| 4 | Sort by "votes" with a missing vote count | Missing votes treated as 0 | yes |
| 5 | Sort any list | The original array is not modified (AC7.5) | yes |

### US8 Mark Report as Resolved (status display; also covers US5 View Report Status)
Function under test: `statusBadgeClass(status)`

| # | Test case | Expected result | Automated |
|---|---|---|---|
| 1 | Status "Pending" | Class "status-badge status-pending" (AC5.2) | yes |
| 2 | Status "Explained" | Class "status-badge status-explained" | yes |
| 3 | Status "Resolved" | Class "status-badge status-resolved" | yes |
| 4 | Missing or empty status | Defaults to the pending class (AC5.3) | yes |

### US10 Filter Reports by Topic
Function under test: `filterReports(reports, topic)`

| # | Test case | Expected result | Automated |
|---|---|---|---|
| 1 | Filter value "all" | Every report is returned (AC10.3) | yes |
| 2 | Filter a specific topic | Only reports with that topic are returned (AC10.2) | yes |
| 3 | Filter a topic that no report has | Empty list (AC10.5) | yes |
| 4 | Empty filter value | Behaves like "all" | yes |
| 5 | Filter any list | The original array is not modified | yes |

**Total: 23 automated test cases across 5 user stories, all passing.**

---

## 3. Test Results

Running `npm test` (or `node --test`) produces:

```
tests 23
pass 23
fail 0
```

The suite was also verified on a clean checkout of the repository to confirm the
tests do not depend on any un-committed local files.

---

## 4. Manual and Integration Testing

The features that touch the DOM or Firestore cannot be covered by the pure-logic
unit tests. They were verified by manual and integration testing on the live
site (https://zhongruichen-147.github.io/Course-Confusion-Radar-Application/):

| User story | Manual / integration check |
|---|---|
| US1 Submit | Submitting a valid report adds it to the list; an empty form shows the validation message and writes nothing. |
| US3 View reports | Reports load from Firestore and render as cards, newest first. |
| US4 Vote | Clicking "I'm confused too" increments the vote count in Firestore and the card updates. |
| US6 Dashboard | The dashboard renders one row per topic with the correct counts and votes. |
| US7 Sort | Switching the sort control reorders the visible list. |
| US8 Status | Changing a report's status writes to Firestore and the badge colour updates; the change persists after reload. |
| US10 Filter | Filtering by topic shows only matching reports; a no-match filter shows the "No reports match the selected topic." message. |

The US5 status states also have a documented manual test in
`docs/us5-manual-test.md`.

---

## 5. What Is Not Automated (and Why)

- **Firestore reads and writes** are not unit-tested because they depend on the
  live database and network. They are covered by the manual/integration checks
  above. A future improvement (Practical 8) is to use a mock object to simulate
  Firestore so these paths can be tested automatically.
- **DOM rendering** (building cards, the dashboard table) is not unit-tested
  because it depends on the browser DOM. The rendering functions were kept thin
  and delegate their decisions to the tested pure functions, so most of the risk
  is already covered by the unit tests.
