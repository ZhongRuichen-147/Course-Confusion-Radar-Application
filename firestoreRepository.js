// Wraps the Firestore SDK calls used by the application behind a small
// repository interface: getReports, addReport, incrementVotes, setStatus,
// deleteReport. reportActions.js depends only on this interface, not on
// Firestore directly, so a test can inject an in-memory fake that implements
// the same interface instead (see tests/mocks/mockReportsRepository.js).

import {
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
    increment,
    query,
    orderBy,
    where,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export function createFirestoreReportsRepository(db) {
    const reportsCollection = collection(db, "reports");

    return {
        async getReports() {
            const q = query(reportsCollection, orderBy("createdAt", "desc"));
            const snapshot = await getDocs(q);
            const reports = [];
            snapshot.forEach((docSnapshot) => {
                reports.push({ id: docSnapshot.id, ...docSnapshot.data() });
            });
            return reports;
        },

        async addReport(report) {
            const ref = await addDoc(reportsCollection, {
                ...report,
                createdAt: serverTimestamp()
            });
            return ref.id;
        },

        async incrementVotes(reportId) {
            await updateDoc(doc(db, "reports", reportId), { votes: increment(1) });
        },

        async setStatus(reportId, status) {
            await updateDoc(doc(db, "reports", reportId), { status });
        },

        async deleteReport(reportId) {
            await deleteDoc(doc(db, "reports", reportId));
        }
    };
}

export function createFirestoreTopicsRepository(db) {
    const topicsCollection = collection(db, "topics");

    return {
        async getTopics() {
            const q = query(topicsCollection, orderBy("name"));
            const snapshot = await getDocs(q);
            const topics = [];
            snapshot.forEach((docSnapshot) => {
                topics.push(docSnapshot.data().name);
            });
            return topics;
        },

        async addTopic(name) {
            await addDoc(topicsCollection, { name, createdAt: serverTimestamp() });
        },

        async removeTopic(name) {
            const q = query(topicsCollection, where("name", "==", name));
            const snapshot = await getDocs(q);
            await Promise.all(
                snapshot.docs.map((docSnapshot) => deleteDoc(docSnapshot.ref))
            );
        }
    };
}
