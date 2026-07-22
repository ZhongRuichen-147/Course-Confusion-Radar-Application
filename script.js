// Firebase v10 modular SDK (loaded from CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
    increment,
    query,
    orderBy,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBiNSiWJZP4cKI2GzU9wINxUAzmU9Oi6BM",
    authDomain: "cp3407-800c5.firebaseapp.com",
    projectId: "cp3407-800c5",
    storageBucket: "cp3407-800c5.firebasestorage.app",
    messagingSenderId: "616101845581",
    appId: "1:616101845581:web:8281f5a292e8c436525a04"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const reportsCollection = collection(db, "reports");

// DOM elements
const reportForm = document.getElementById("reportForm");
const topicInput = document.getElementById("topic");
const descriptionInput = document.getElementById("description");
const reportsList = document.getElementById("reportsList");
const message = document.getElementById("message");
const clearReportsButton = document.getElementById("clearReports");
const dashboard = document.getElementById("dashboard");
const sortByInput = document.getElementById("sortBy");

async function getReports() {
    const q = query(reportsCollection, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    const reports = [];
    snapshot.forEach((d) => {
        reports.push({ id: d.id, ...d.data() });
    });
    return reports;
}

async function submitReport(event) {
    event.preventDefault();

    const topic = topicInput.value;
    const description = descriptionInput.value.trim();

    if (topic === "" || description === "") {
        message.textContent = "Please select a topic and enter a confusion description.";
        return;
    }

    try {
        await addDoc(reportsCollection, {
            topic: topic,
            description: description,
            votes: 0,
            status: "Pending",
            createdAt: serverTimestamp()
        });
        reportForm.reset();
        message.textContent = "Your confusion report was submitted anonymously.";
        await renderReports();
    } catch (error) {
        console.error("Error submitting report:", error);
        message.textContent = "Could not submit the report. Please try again.";
    }
}

async function voteForReport(reportId) {
    try {
        const reportRef = doc(db, "reports", reportId);
        await updateDoc(reportRef, { votes: increment(1) });
        await renderReports();
    } catch (error) {
        console.error("Error voting:", error);
    }
}

async function updateReportStatus(reportId, newStatus) {
    try {
        const reportRef = doc(db, "reports", reportId);
        await updateDoc(reportRef, { status: newStatus });
        await renderReports();
    } catch (error) {
        console.error("Error updating status:", error);
    }
}

async function clearReports() {
    try {
        const snapshot = await getDocs(reportsCollection);
        const deletions = [];
        snapshot.forEach((d) => {
            deletions.push(deleteDoc(doc(db, "reports", d.id)));
        });
        await Promise.all(deletions);
        message.textContent = "Demo reports have been cleared.";
        await renderReports();
    } catch (error) {
        console.error("Error clearing reports:", error);
    }
}

function formatDate(createdAt) {
    if (createdAt && typeof createdAt.toDate === "function") {
        return createdAt.toDate().toISOString().split("T")[0];
    }
    return "Pending";
}

function createStatusBadge(status) {
    const statusValue = status || "Pending";
    const statusBadge = document.createElement("span");
    statusBadge.className = `status-badge status-${statusValue.toLowerCase()}`;
    statusBadge.textContent = statusValue;
    return statusBadge;
}

function createStatusControl(report) {
    const control = document.createElement("div");
    control.className = "status-control";

    const label = document.createElement("label");
    label.htmlFor = `status-${report.id}`;
    label.textContent = "Lecturer: set status";

    const select = document.createElement("select");
    select.id = `status-${report.id}`;
    ["Pending", "Explained", "Resolved"].forEach((value) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = value;
        select.appendChild(option);
    });
    select.value = report.status || "Pending";
    select.addEventListener("change", function () {
        updateReportStatus(report.id, select.value);
    });

    control.appendChild(label);
    control.appendChild(select);
    return control;
}

function createReportCard(report) {
    const reportCard = document.createElement("article");
    reportCard.className = "report";

    const title = document.createElement("h3");
    title.textContent = report.topic;

    const description = document.createElement("p");
    description.textContent = report.description;

    const meta = document.createElement("p");
    meta.className = "report-meta";
    meta.appendChild(document.createTextNode("Status: "));
    meta.appendChild(createStatusBadge(report.status));
    meta.appendChild(
        document.createTextNode(
            ` | Votes: ${report.votes} | Created: ${formatDate(report.createdAt)}`
        )
    );

    const voteButton = document.createElement("button");
    voteButton.type = "button";
    voteButton.textContent = "I'm confused too";
    voteButton.addEventListener("click", function () {
        voteForReport(report.id);
    });

    reportCard.appendChild(title);
    reportCard.appendChild(description);
    reportCard.appendChild(meta);
    reportCard.appendChild(voteButton);
    reportCard.appendChild(createStatusControl(report));
    return reportCard;
}

function summarizeTopics(reports) {
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

function renderDashboard(reports) {
    const summaries = summarizeTopics(reports);
    dashboard.innerHTML = "";

    if (summaries.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.className = "empty-message";
        emptyMessage.textContent = "No confusion reports have been submitted yet.";
        dashboard.appendChild(emptyMessage);
        return;
    }

    const table = document.createElement("table");
    table.className = "dashboard-table";

    const headRow = document.createElement("tr");
    ["Topic", "Reports", "Total Votes"].forEach((text) => {
        const th = document.createElement("th");
        th.textContent = text;
        headRow.appendChild(th);
    });
    table.appendChild(headRow);

    summaries.forEach((summary) => {
        const row = document.createElement("tr");
        [summary.topic, summary.reportCount, summary.totalVotes].forEach((value) => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });
        table.appendChild(row);
    });

    dashboard.appendChild(table);
}

function sortReports(reports, sortBy) {
    const sorted = [...reports];
    if (sortBy === "votes") {
        sorted.sort((a, b) => (b.votes || 0) - (a.votes || 0));
    }
    return sorted;
}

async function renderReports() {
    const reports = await getReports();
    renderDashboard(reports);

    const visibleReports = sortReports(reports, sortByInput.value);
    reportsList.innerHTML = "";

    if (visibleReports.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.className = "empty-message";
        emptyMessage.textContent = "No confusion reports have been submitted yet.";
        reportsList.appendChild(emptyMessage);
        return;
    }

    visibleReports.forEach((report) => {
        reportsList.appendChild(createReportCard(report));
    });
}

reportForm.addEventListener("submit", submitReport);
clearReportsButton.addEventListener("click", clearReports);
sortByInput.addEventListener("change", renderReports);

renderReports();