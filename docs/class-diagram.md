# Class Diagram

## Project

Course Confusion Radar Application

## Notes

The current implementation uses a functional JavaScript style rather than
traditional OOP classes. The diagram below represents the data structure
and responsibilities conceptually: `Report` models the data entity stored
in Firestore, and `ReportService` groups the functions in `script.js` that
operate on it.

```mermaid
classDiagram
    class Report {
        +string topic
        +string description
        +number votes
        +string status
        +Timestamp createdAt
    }

    class ReportService {
        +getReports() Report[]
        +submitReport(event) void
        +voteForReport(reportId) void
        +clearReports() void
        +renderReports() void
        +formatDate(createdAt) string
    }

    ReportService "1" ..> "*" Report : manages
```