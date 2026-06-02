const STORAGE_KEY = "confusionReports";

const reportForm = document.getElementById("reportForm");
const topicInput = document.getElementById("topic");
const descriptionInput = document.getElementById("description");
const reportsList = document.getElementById("reportsList");
const message = document.getElementById("message");
const clearReportsButton = document.getElementById("clearReports");

function getReports() {
    const savedReports = localStorage.getItem(STORAGE_KEY);

    if (savedReports === null) {
        return [];
    }

    return JSON.parse(savedReports);
}

function saveReports(reports) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
}

function createReport(topic, description) {
    return {
        id: Date.now(),
        topic: topic,
        description: description,
        votes: 0,
        status: "Pending",
        createdAt: new Date().toISOString().split("T")[0]
    };
}

function submitReport(event) {
    event.preventDefault();

    const topic = topicInput.value;
    const description = descriptionInput.value.trim();

    if (topic === "" || description === "") {
        message.textContent = "Please select a topic and enter a confusion description.";
        return;
    }

    const reports = getReports();
    const newReport = createReport(topic, description);

    reports.unshift(newReport);
    saveReports(reports);

    reportForm.reset();
    message.textContent = "Your confusion report was submitted anonymously.";

    renderReports();
}

function voteForReport(reportId) {
    const reports = getReports();

    for (let i = 0; i < reports.length; i++) {
        if (reports[i].id === reportId) {
            reports[i].votes += 1;
        }
    }

    saveReports(reports);
    renderReports();
}

function clearReports() {
    localStorage.removeItem(STORAGE_KEY);
    message.textContent = "Demo reports have been cleared.";
    renderReports();
}

function renderReports() {
    const reports = getReports();
    reportsList.innerHTML = "";

    if (reports.length === 0) {
        const emptyMessage = document.createElement("p");
        emptyMessage.className = "empty-message";
        emptyMessage.textContent = "No confusion reports have been submitted yet.";
        reportsList.appendChild(emptyMessage);
        return;
    }

    for (let i = 0; i < reports.length; i++) {
        const report = reports[i];

        const reportCard = document.createElement("article");
        reportCard.className = "report";

        const title = document.createElement("h3");
        title.textContent = report.topic;

        const description = document.createElement("p");
        description.textContent = report.description;

        const meta = document.createElement("p");
        meta.className = "report-meta";
        meta.textContent = `Status: ${report.status} | Votes: ${report.votes} | Created: ${report.createdAt}`;

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

        reportsList.appendChild(reportCard);
    }
}

reportForm.addEventListener("submit", submitReport);
clearReportsButton.addEventListener("click", clearReports);

renderReports();
