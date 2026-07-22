// Pure logic for the Course Confusion Radar Application.
//
// These functions have no DOM or Firestore dependencies. They take plain data
// and return plain data, so they can be imported by both the browser code
// (script.js) and the automated tests (tests/logic.test.js) run with the Node
// built-in test runner.

export function validateReport(topic, description) {
    const cleanTopic = (topic || "").trim();
    const cleanDescription = (description || "").trim();
    if (cleanTopic === "" || cleanDescription === "") {
        return {
            valid: false,
            message: "Please select a topic and enter a confusion description."
        };
    }
    return { valid: true, message: "" };
}

export function statusBadgeClass(status) {
    const statusValue = status || "Pending";
    return `status-badge status-${statusValue.toLowerCase()}`;
}

export function summarizeTopics(reports) {
    const summaries = {};
    reports.forEach((report) => {
        const topic = report.topic || "Unknown";
        if (!summaries[topic]) {
            summaries[topic] = { topic: topic, reportCount: 0, totalVotes: 0 };
        }
        summaries[topic].reportCount += 1;
        summaries[topic].totalVotes += report.votes || 0;
    });
    return Object.values(summaries).sort((a, b) =>
        b.totalVotes - a.totalVotes ||
        b.reportCount - a.reportCount ||
        a.topic.localeCompare(b.topic)
    );
}

export function sortReports(reports, sortBy) {
    const sorted = [...reports];
    if (sortBy === "votes") {
        sorted.sort((a, b) => (b.votes || 0) - (a.votes || 0));
    }
    return sorted;
}

export function filterReports(reports, topic) {
    if (!topic || topic === "all") {
        return [...reports];
    }
    return reports.filter((report) => report.topic === topic);
}
