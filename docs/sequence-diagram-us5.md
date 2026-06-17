# Sequence Diagram: US5 Report Status Display

## Project

Course Confusion Radar Application

## Description

This diagram illustrates the flow when a student opens the page and views
the color-coded status badge (Pending/Explained/Resolved) for each
confusion report.

```mermaid
sequenceDiagram
    actor Student
    participant UI as Browser UI (index.html)
    participant JS as script.js
    participant FS as Firestore Database

    Student->>UI: Open page / reload
    UI->>JS: renderReports() triggered
    JS->>FS: getDocs(query(reportsCollection))
    FS-->>JS: report documents (incl. status field)
    JS->>JS: build status badge class (status-${value.toLowerCase()})
    JS->>UI: render report cards with color-coded badge
    UI-->>Student: Display reports with Pending/Explained/Resolved badge
```