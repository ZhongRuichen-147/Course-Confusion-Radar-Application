// Orchestration for the report actions (submit, vote, update status, clear).
// Each function takes a repository as its first argument instead of importing
// Firestore directly, so it can be unit-tested with a mock repository
// (tests/mocks/mockReportsRepository.js) instead of a live database.

import { validateReport } from "./logic.js";

export async function submitReport(repository, topic, description) {
    const validation = validateReport(topic, description);
    if (!validation.valid) {
        return { ok: false, message: validation.message };
    }

    await repository.addReport({
        topic,
        description,
        votes: 0,
        status: "Pending"
    });
    return { ok: true, message: "Your confusion report was submitted anonymously." };
}

export async function voteForReport(repository, reportId) {
    await repository.incrementVotes(reportId);
}

export async function updateReportStatus(repository, reportId, newStatus) {
    await repository.setStatus(reportId, newStatus);
}

export async function clearReports(repository) {
    const reports = await repository.getReports();
    await Promise.all(reports.map((report) => repository.deleteReport(report.id)));
}
