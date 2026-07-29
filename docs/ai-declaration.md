# Declaration of AI-Generated Material

**Student:** Zhong Ruichen
**Subject:** CP3407 Advanced Software Engineering
**Project:** Course Confusion Radar Application
**Assessment:** Assessment 3 - Project Report

Per the CP3407 Assessment Overview, Generative AI tools are not restricted for
Assessment 3, provided any use is acknowledged with a Declaration of
AI-Generated Material. This page is that declaration.

## Tool Used

[Claude Code](https://www.anthropic.com/claude-code), an AI coding assistant
built by Anthropic, running Claude models (Sonnet/Opus family). Claude Code
was used interactively as a development assistant throughout the project,
from Practical 1 (Week 1) through to submission.

## Scope of AI Assistance

Claude Code was used to help with:

- **Code**: drafting and refactoring the JavaScript implementation
  (`script.js`, `logic.js`, `firestoreRepository.js`, `reportActions.js`,
  `topicActions.js`, `auth.js`) to satisfy user stories and acceptance
  criteria I defined.
- **Tests**: writing the Node.js (`node:test`) test suite and the mock
  repository objects used to test Firestore-backed code without a live
  database.
- **Documentation**: drafting the user story pages, iteration boards,
  burn-down charts, reviews, test plan, and other pages under `docs/`, based
  on decisions and progress I directed.
- **Diagrams**: producing the architecture (class) diagram, database design
  diagram, and interface wireframe in draw.io (app.diagrams.net), an online
  diagramming tool, per the assessment rubric's requirement to use an online
  design tool.
- **Git/GitHub workflow**: drafting commit messages and helping manage
  GitHub Issues for tracking user stories and bugs.

## What Was Not Delegated to AI

- All requirements, feature scope, and prioritisation decisions (the user
  stories and their priorities in the [Milestone 1 Plan](milestone-1-plan.md))
  are my own decisions as the sole developer, designer, project manager, and
  tester on this individual project.
- Every code change was manually verified by me against the acceptance
  criteria on the deployed application
  (<https://zhongruichen-147.github.io/Course-Confusion-Radar-Application/>)
  before being committed.
- Every commit was reviewed by me before it was made, and every `git push`
  to the remote repository was executed by me personally.
- The Firebase project setup and the Firestore security rules (which are
  managed in the Firebase Console and are not part of the repository) were
  configured by me directly.
- I understand and take responsibility for all code and documentation in
  this repository, regardless of which parts were AI-assisted during
  drafting.

## Why This Declaration Exists

This project was built with continuous AI assistance rather than AI
assistance on isolated tasks, so this declaration covers the whole
repository rather than individual files. It is provided in place of a
per-file annotation, in line with the assessment's requirement to
acknowledge GenAI use for Assessment 3.
