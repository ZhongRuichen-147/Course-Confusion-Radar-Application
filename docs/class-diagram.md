# Class Diagram

## Project

Course Confusion Radar Application

## Architecture Diagram (online UML tool)

Created with [diagrams.net (draw.io)](https://app.diagrams.net), an online UML
diagramming tool, per the Practical rubric's design requirement. The native
source file is [`architecture-diagram.drawio`](architecture-diagram.drawio)
(open it at app.diagrams.net to edit).

![Architecture diagram: Report and Topic entities, ReportsRepository/TopicsRepository, ReportActions/TopicActions, ReportView, and DashboardService, with arrows showing reads/writes, depends-on, calls, and summarises relationships](architecture-diagram.png)

## Notes

The current implementation uses a functional JavaScript style rather than
traditional OOP classes. The diagram above (and the equivalent Mermaid version
below, kept for quick viewing directly on GitHub) represents the data
structure and responsibilities conceptually, updated for the Practical 8 Mock
Object refactor. `Report` and `Topic` model the data entities stored in
Firestore.

Firestore access now sits behind a repository interface, implemented for real
by `ReportsRepository`/`TopicsRepository` (`firestoreRepository.js`).
`ReportActions`/`TopicActions` (`reportActions.js`/`topicActions.js`) contain
the orchestration logic and depend only on that repository interface, not on
Firestore directly, which is what lets a Mock Object replace the repository in
tests (see `docs/mock-object-notes.md`). `ReportView` (DOM rendering in
`script.js`) calls the action modules instead of talking to Firestore
directly. `DashboardService` is the lecturer dashboard aggregation added in
Iteration 2. The pure functions `summarizeTopics`, `sortReports`,
`filterReports`, `addTopic`, and `removeTopic` take plain data and return
plain data without touching the DOM or Firestore, which keeps them
unit-testable.

## Mermaid Version

```mermaid
classDiagram
    class Report {
        +string topic
        +string description
        +number votes
        +string status
        +Timestamp createdAt
    }

    class Topic {
        +string name
        +Timestamp createdAt
    }

    class ReportsRepository {
        +getReports() Report[]
        +addReport(report) id
        +incrementVotes(reportId) void
        +setStatus(reportId, status) void
        +deleteReport(reportId) void
    }

    class TopicsRepository {
        +getTopics() string[]
        +addTopic(name) void
        +removeTopic(name) void
    }

    class ReportActions {
        +submitReport(repository, topic, description) Result
        +voteForReport(repository, reportId) void
        +updateReportStatus(repository, reportId, status) void
        +clearReports(repository) void
    }

    class TopicActions {
        +addTopicAction(repository, name) Result
        +removeTopicAction(repository, name) void
    }

    class ReportView {
        +renderReports() void
        +createReportCard(report) Element
        +createStatusBadge(status) Element
        +createStatusControl(report) Element
        +renderTopics() void
        +sortReports(reports, sortBy) Report[]
        +filterReports(reports, topic) Report[]
        +formatDate(createdAt) string
    }

    class DashboardService {
        +summarizeTopics(reports) TopicSummary[]
        +renderDashboard(reports) void
    }

    ReportsRepository "1" ..> "*" Report : reads and writes
    TopicsRepository "1" ..> "*" Topic : reads and writes
    ReportActions ..> ReportsRepository : depends on (real or mock)
    TopicActions ..> TopicsRepository : depends on (real or mock)
    ReportView ..> ReportActions : calls
    ReportView ..> TopicActions : calls
    DashboardService ..> Report : summarises
```