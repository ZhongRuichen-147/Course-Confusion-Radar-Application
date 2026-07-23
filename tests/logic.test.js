// Automated tests for the pure logic in logic.js.
// Run with: npm test   (which runs: node --test)
//
// The tests are grouped by user story. Each group has at least 3 test cases,
// and the cases correspond to the acceptance criteria (AC*) recorded on the
// user story pages in docs/user-stories/.

import { test } from "node:test";
import assert from "node:assert/strict";
import {
    validateReport,
    statusBadgeClass,
    summarizeTopics,
    sortReports,
    filterReports
} from "../logic.js";

// -------------------------------------------------------------------------
// US1 Submit Anonymous Confusion Report / US2 Select Course Topic
// validateReport(topic, description) -> { valid, message }
// -------------------------------------------------------------------------

test("US1/US2 validateReport rejects empty topic and description (AC1.3)", () => {
    const result = validateReport("", "");
    assert.equal(result.valid, false);
    assert.equal(result.message, "Please select a topic and enter a confusion description.");
});

test("US1/US2 validateReport rejects whitespace-only input", () => {
    assert.equal(validateReport("   ", "   ").valid, false);
});

test("US1/US2 validateReport rejects a topic with no description", () => {
    assert.equal(validateReport("Testing", "").valid, false);
});

test("US1/US2 validateReport accepts a topic with a description (AC1.1)", () => {
    const result = validateReport("Testing", "I am confused about boundary testing");
    assert.equal(result.valid, true);
    assert.equal(result.message, "");
});

// -------------------------------------------------------------------------
// US5 View Report Status / US8 Mark Report as Resolved
// statusBadgeClass(status) -> css class string
// -------------------------------------------------------------------------

test("US5/US8 statusBadgeClass maps Pending to the pending class (AC5.2)", () => {
    assert.equal(statusBadgeClass("Pending"), "status-badge status-pending");
});

test("US5/US8 statusBadgeClass maps Explained to the explained class", () => {
    assert.equal(statusBadgeClass("Explained"), "status-badge status-explained");
});

test("US5/US8 statusBadgeClass maps Resolved to the resolved class", () => {
    assert.equal(statusBadgeClass("Resolved"), "status-badge status-resolved");
});

test("US5/US8 statusBadgeClass defaults missing status to pending (AC5.3)", () => {
    assert.equal(statusBadgeClass(), "status-badge status-pending");
    assert.equal(statusBadgeClass(""), "status-badge status-pending");
});

// -------------------------------------------------------------------------
// US6 Lecturer Dashboard
// summarizeTopics(reports) -> [{ topic, reportCount, totalVotes }]
// -------------------------------------------------------------------------

test("US6 summarizeTopics returns an empty array for no reports (AC6.5)", () => {
    assert.deepEqual(summarizeTopics([]), []);
});

test("US6 summarizeTopics aggregates report count and votes per topic (AC6.2)", () => {
    assert.deepEqual(
        summarizeTopics([{ topic: "Testing", votes: 2 }, { topic: "Testing", votes: 0 }]),
        [{ topic: "Testing", reportCount: 2, totalVotes: 2 }]
    );
});

test("US6 summarizeTopics orders topics by total votes descending (AC6.3)", () => {
    const result = summarizeTopics([
        { topic: "A", votes: 1 },
        { topic: "B", votes: 5 },
        { topic: "A", votes: 1 }
    ]);
    assert.deepEqual(result.map((s) => s.topic), ["B", "A"]);
});

test("US6 summarizeTopics breaks vote ties by report count (AC6.4)", () => {
    const result = summarizeTopics([
        { topic: "X", votes: 0 },
        { topic: "Y", votes: 0 },
        { topic: "Y", votes: 0 }
    ]);
    assert.deepEqual(result.map((s) => s.topic), ["Y", "X"]);
});

test("US6 summarizeTopics tolerates missing topic and votes", () => {
    assert.deepEqual(
        summarizeTopics([{ topic: "Z" }, { votes: 3 }]),
        [
            { topic: "Unknown", reportCount: 1, totalVotes: 3 },
            { topic: "Z", reportCount: 1, totalVotes: 0 }
        ]
    );
});

// -------------------------------------------------------------------------
// US7 Sort Reports by Votes
// sortReports(reports, sortBy) -> new array
// -------------------------------------------------------------------------

test("US7 sortReports keeps the original order for 'newest' (AC7.3)", () => {
    const result = sortReports([{ id: "a", votes: 1 }, { id: "b", votes: 5 }], "newest");
    assert.deepEqual(result.map((r) => r.id), ["a", "b"]);
});

test("US7 sortReports orders by votes descending for 'votes' (AC7.2)", () => {
    const result = sortReports(
        [{ id: "a", votes: 1 }, { id: "b", votes: 5 }, { id: "c", votes: 3 }],
        "votes"
    );
    assert.deepEqual(result.map((r) => r.id), ["b", "c", "a"]);
});

test("US7 sortReports keeps newest-first on equal votes (stable)", () => {
    const result = sortReports(
        [{ id: "x", votes: 2 }, { id: "y", votes: 2 }, { id: "z", votes: 9 }],
        "votes"
    );
    assert.deepEqual(result.map((r) => r.id), ["z", "x", "y"]);
});

test("US7 sortReports treats a missing vote count as 0", () => {
    const result = sortReports([{ id: "p" }, { id: "q", votes: 4 }], "votes");
    assert.deepEqual(result.map((r) => r.id), ["q", "p"]);
});

test("US7 sortReports does not mutate its input (AC7.5)", () => {
    const input = [{ id: "a", votes: 1 }, { id: "b", votes: 5 }];
    sortReports(input, "votes");
    assert.deepEqual(input.map((r) => r.id), ["a", "b"]);
});

// -------------------------------------------------------------------------
// US10 Filter Reports by Topic
// filterReports(reports, topic) -> new array
// -------------------------------------------------------------------------

test("US10 filterReports returns every report for 'all' (AC10.3)", () => {
    const data = [{ id: "a", topic: "Testing" }, { id: "b", topic: "GitHub" }];
    assert.deepEqual(filterReports(data, "all").map((r) => r.id), ["a", "b"]);
});

test("US10 filterReports returns only the matching topic (AC10.2)", () => {
    const data = [
        { id: "a", topic: "Testing" },
        { id: "b", topic: "GitHub" },
        { id: "c", topic: "Testing" }
    ];
    assert.deepEqual(filterReports(data, "Testing").map((r) => r.id), ["a", "c"]);
});

test("US10 filterReports returns an empty array when nothing matches (AC10.5)", () => {
    assert.deepEqual(filterReports([{ id: "a", topic: "Testing" }], "Requirements"), []);
});

test("US10 filterReports treats an empty topic like 'all'", () => {
    const data = [{ id: "a", topic: "Testing" }, { id: "b", topic: "GitHub" }];
    assert.deepEqual(filterReports(data, "").map((r) => r.id), ["a", "b"]);
});

test("US10 filterReports does not mutate its input", () => {
    const input = [{ id: "a", topic: "X" }, { id: "b", topic: "Y" }];
    filterReports(input, "X");
    assert.deepEqual(input.map((r) => r.id), ["a", "b"]);
});
