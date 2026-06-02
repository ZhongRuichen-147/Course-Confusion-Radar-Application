# Iteration 1 Project Board

## Project Name
Course Confusion Radar Application

## Iteration
Iteration 1 - Week 3

## Iteration Goal
The goal of Iteration 1 is to build the first working prototype of the Course Confusion Radar Application. This iteration focuses on the student-side workflow, including anonymous confusion report submission, course topic selection, viewing existing reports, and voting on similar reports.

---

## Todo

- [ ] Vote "I'm Confused Too"  
  As a student, I want to vote "I'm confused too" on an existing report so that common learning difficulties can be identified.

- [ ] View Report Status  
  As a student, I want to see the status of a confusion report so that I know whether it is pending, explained, or resolved.

---

## In Progress

- [ ] Improve report display layout
- [ ] Prepare future Firebase database integration

---

## Done

- [x] Submit Anonymous Confusion Report  
  As a student, I want to submit a confusing topic anonymously so that I can ask for help without feeling embarrassed.

- [x] Select Course Topic  
  As a student, I want to select a course topic when submitting a confusion report so that my issue can be categorized clearly.

- [x] View Existing Confusion Reports  
  As a student, I want to view existing confusion reports so that I can see whether other students have similar problems.

---

## Completed User Story for Practical Week 3

### User Story
As a student, I want to submit a confusing topic anonymously so that I can ask for help without feeling embarrassed.

### Acceptance Criteria
- The student can select a course topic.
- The student can enter a confusion description.
- The student can submit the report without entering a name or student ID.
- The submitted report is displayed on the page.
- The report has a default status of "Pending".
- The report starts with 0 votes.

### Implementation Notes
For Iteration 1, the prototype stores reports in the browser's localStorage. This allows the feature to be tested before Firebase database integration is added in a later iteration.
