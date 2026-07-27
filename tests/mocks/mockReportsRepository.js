// A hand-written Mock Object standing in for firestoreRepository.js. It
// implements the same interface (getReports/addReport/incrementVotes/
// setStatus/deleteReport) over a plain in-memory array instead of Firestore,
// so reportActions.js can be tested without a live database or network.

export function createMockReportsRepository(initialReports = []) {
    let reports = initialReports.map((report) => ({ ...report }));
    let nextId = 1;

    return {
        async getReports() {
            return reports.map((report) => ({ ...report }));
        },

        async addReport(report) {
            const id = `mock-${nextId++}`;
            reports.push({ id, ...report });
            return id;
        },

        async incrementVotes(reportId) {
            const report = reports.find((r) => r.id === reportId);
            if (report) {
                report.votes = (report.votes || 0) + 1;
            }
        },

        async setStatus(reportId, status) {
            const report = reports.find((r) => r.id === reportId);
            if (report) {
                report.status = status;
            }
        },

        async deleteReport(reportId) {
            reports = reports.filter((r) => r.id !== reportId);
        }
    };
}
