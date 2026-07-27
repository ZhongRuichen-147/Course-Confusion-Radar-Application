# Mock Object Notes

## Project
Course Confusion Radar Application

## Purpose
This document records the Practical 8 research into Mock Objects and explains
how they were applied in this project.

## What a Mock Object Is

A Mock Object is a fake implementation of a dependency that a piece of code
relies on, used in place of the real thing during a test. It implements the
same interface as the real dependency (the same functions, taking and
returning the same shape of data) but behaves in a simple, predictable,
in-memory way instead of talking to the real system. The code under test
cannot tell the difference between the real dependency and the mock, because
it only ever calls the interface, not the concrete implementation.

This project's tests use hand-written Mock Objects rather than a mocking
library or framework: the mocks are just plain JavaScript functions returning
plain objects, matching the "no extra dependency" approach already used for
the Practical 7 test suite (the Node built-in test runner, `node:test`). A
library such as Sinon.js would offer more automatic call-tracking (spies,
stubs with configurable return sequences), but for the small, fixed
interfaces in this project a hand-written fake is simpler to read and does
not add a dependency.

## Why This Project Needed Mock Objects

`docs/test-plan.md` (Practical 7) recorded a known gap: `submitReport`,
`voteForReport`, `updateReportStatus`, and `clearReports` could not be
automatically tested because they called the Firestore SDK directly, which
needs a live database and network connection. They were only covered by
manual testing on the live site.

To close that gap, the Firestore calls were extracted behind a small
repository interface (`getReports`, `addReport`, `incrementVotes`,
`setStatus`, `deleteReport`), implemented for real by
`firestoreRepository.js` and orchestrated by `reportActions.js`. Because
`reportActions.js` only depends on the repository interface, a test can pass
in a Mock Object that implements the same interface over a plain in-memory
array (`tests/mocks/mockReportsRepository.js`) instead of a real database.
`tests/reportActions.test.js` uses this to test `submitReport`,
`voteForReport`, `updateReportStatus`, and `clearReports` directly.

## Example: Mocking a User Login Process

The Practical 8 task sheet gives mocking a login process as an example use of
Mock Objects. This project's application is intentionally anonymous and has
no real login (see README section 5), so there is no login feature to wire a
mock into. Instead, `auth.js` and its tests
(`tests/auth.test.js`, `tests/mocks/mockUserRepository.js`) are a small,
self-contained demonstration of the same technique: `login(userRepository,
username, password)` depends on an injected user repository, and the tests
supply a Mock Object (`createMockUserRepository`) with a fixed in-memory list
of users instead of a real authentication backend. This module is not
referenced by `index.html` or `script.js`; it exists only to demonstrate the
pattern, kept separate so it cannot be mistaken for a real feature of the
live application.

## Result

| Before (Practical 7) | After (Practical 8) |
|---|---|
| `submitReport`, `voteForReport`, `updateReportStatus`, `clearReports` untested except manually on the live site | Tested with a Mock Object repository (`tests/reportActions.test.js`, 7 tests) |
| No example of mocking a login/authentication dependency | `auth.js` + `tests/auth.test.js` demonstrate the pattern (3 tests) |
| 31 automated tests | 41 automated tests, all passing (`npm test`) |
