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
    return reportCard;
}

async function renderReports() {
    const reports = await getReports();
    reportsList.innerHTML = "";

    if (reports.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.className = "empty-message";
        emptyMessage.textContent = "No confusion reports have been submitted yet.";
        reportsList.appendChild(emptyMessage);
        return;
    }

    reports.forEach((report) => {
        reportsList.appendChild(createReportCard(report));
    });
}

reportForm.addEventListener("submit", submitReport);
clearReportsButton.addEventListener("click", clearReports);

renderReports();