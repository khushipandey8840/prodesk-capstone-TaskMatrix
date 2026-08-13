# prodesk-capstone-TaskMatrix
# TaskMatrix

## Project Overview

TaskMatrix is an enterprise Agile Project Management application that helps teams manage projects, tasks, sprints, team members, and project progress from one centralized dashboard.

## Project Details

* **Project:** TaskMatrix
* **Sprint:** Project Sprint 13
* **Track:** Track A — Frontend Specialist
* **Repository:** prodesk-capstone-TaskMatrix

## Tech Stack

* React.js
* Vite
* React Router
* Redux Toolkit
* Tailwind CSS
* Axios
* React Hook Form
* Zod
* Jest & React Testing Library
* Storybook
* REST API
* MongoDB

## Core Features

### P0 — MVP

* User Authentication
* Project Dashboard
* Project Management
* Task Management
* Kanban Board
* Task Details
* Team Member Management
* Search & Filtering
* Responsive UI

### P1 — Priority Features

* Sprint Management
* Task Assignment
* Dashboard Analytics
* Notifications
* Role-based UI
* Advanced Filtering

### P2 — Stretch Goals

* Real-time Updates
* Activity Timeline
* Advanced Analytics
* Dark Mode
* Performance Optimization
* Extended Test Coverage

## Main Views

1. Authentication
2. Dashboard
3. Projects
4. Kanban Board
5. Task Details
6. Team Management
7. Analytics

## Architecture

TaskMatrix will use a modular React frontend with Redux Toolkit for global state management and REST APIs for application data.

MongoDB will be used as the primary database for users, projects, tasks, sprints, and related data.

## UI/UX

The application will provide a modern enterprise dashboard with:

* Responsive design
* Reusable components
* Consistent design system
* Accessible UI
* Clear navigation
* Data visualization

  ## UI/UX Design

Figma Wireframes: https://www.figma.com/design/sIm10bnUy3q600sSsr4CoF/Figma-basics?node-id=2601-9&t=ydepdql82j6GhHKk-1

## System Architecture

### MongoDB ERD

![MongoDB ERD](./erd.png)

## State Tree & Mock API

### Frontend State Tree

![TaskMatrix State Tree](./docs/taskmatrix-state-tree.png)

### Mock API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/tasks` | Fetch all tasks |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## Deliverables

* Public GitHub Repository
* Product Requirements Document
* Figma Wireframes
* MongoDB ERD
* Redux State Tree
* Mock API Endpoints
* Automated Tests
* Production Deployment

## Development Plan

**Week 1:** Planning, UI/UX and System Architecture
**Week 2:** Authentication, Dashboard and Projects
**Week 3:** Tasks, Kanban, Sprints and Team Management
**Week 4:** Testing, Optimization and Deployment
