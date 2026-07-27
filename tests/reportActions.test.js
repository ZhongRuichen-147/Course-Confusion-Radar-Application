// Automated tests for reportActions.js using a Mock Object
// (tests/mocks/mockReportsRepository.js) in place of Firestore.
//
// These cover the paths docs/test-plan.md previously listed as "not
// automated because they depend on the live database": submitReport,
// voteForReport, updateReportStatus, and clearReports.

import { test } from "node:test";
import assert from "node:assert/strict";
import {
    submitReport,
    voteForReport,
    updateReportStatus,
    clearReports
} from "../reportActions.js";
import { createMockReportsRepository } from "./mocks/mockReportsRepository.js";

test("submitReport rejects invalid input without calling the repository", async () => {
    const repository = createMockReportsRepository();
    const result = await submitReport(repository, "", "");
    assert.equal(result.ok, false);
    assert.equal(result.message, "Please select a topic and enter a confusion description.");
    assert.deepEqual(await repository.getReports(), []);
});

test("submitReport adds a valid report as Pending with 0 votes", async () => {
    const repository = createMockReportsRepository();
    const result = await submitReport(repository, "Testing", "What is a mock object?");
    assert.equal(result.ok, true);
    assert.equal(result.message, "Your confusion report was submitted anonymously.");

    const reports = await repository.getReports();
    assert.equal(reports.length, 1);
    assert.equal(reports[0].topic, "Testing");
    assert.equal(reports[0].votes, 0);
    assert.equal(reports[0].status, "Pending");
});

test("voteForReport increments the vote count of the matching report", async () => {
    const repository = createMockReportsRepository([
        { id: "a", topic: "Testing", votes: 2 }
    ]);
    await voteForReport(repository, "a");
    const reports = await repository.getReports();
    assert.equal(reports[0].votes, 3);
});

test("voteForReport does nothing when the report id does not exist", async () => {
    const repository = createMockReportsRepository([{ id: "a", votes: 1 }]);
    await voteForReport(repository, "missing");
    const reports = await repository.getReports();
    assert.equal(reports[0].votes, 1);
});

test("updateReportStatus writes the new status to the matching report", async () => {
    const repository = createMockReportsRepository([
        { id: "a", status: "Pending" }
    ]);
    await updateReportStatus(repository, "a", "Resolved");
    const reports = await repository.getReports();
    assert.equal(reports[0].status, "Resolved");
});

test("clearReports deletes every report", async () => {
    const repository = createMockReportsRepository([
        { id: "a", topic: "Testing" },
        { id: "b", topic: "GitHub" }
    ]);
    await clearReports(repository);
    assert.deepEqual(await repository.getReports(), []);
});

test("clearReports does nothing when there are no reports", async () => {
    const repository = createMockReportsRepository([]);
    await clearReports(repository);
    assert.deepEqual(await repository.getReports(), []);
});
