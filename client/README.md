# 🧩 Test Case Management System — Feature Stories

## 🏁 Phase 1: Project Setup

### Story 1 — Initialize Project

**As a developer**, I want to set up a MERN project scaffold so that I can start building features consistently.  
**Acceptance Criteria:**

- Create React app with Vite.- done
- Initialize Node/Express backend. - done
- Connect MongoDB via Mongoose. - todo
- Configure ESLint + Prettier. - done
- Add environment variables for dev/prod.

### Story 2 — Configure Folder Structure

**As a developer**, I want a clean folder structure for frontend, backend, and tests.  
**Acceptance Criteria:**

- Create `/client` and `/server` directories. - done
- Add `/tests` folder for automation. - to do
- Define standard subfolders (components, pages, controllers, routes, models, etc.). - done
- Document structure in README. - done

---

## 🔐 Phase 2: Authentication & Authorization

### Story 3 — User Registration & Login

**As a user**, I want to register and log in securely so I can access the dashboard.  
**Acceptance Criteria:**

- JWT authentication.
- Password hashing (bcrypt).
- Login form validation.
- Protected routes in React.

### Story 4 — Role-Based Access

**As an admin**, I want to manage user roles so that permissions are enforced.  
**Acceptance Criteria:**

- Roles: Admin, Tester.
- Middleware for authorization.
- UI hides restricted actions for non-admins.

---

## 🧾 Phase 3: Core CRUD Features

### Story 5 — Create Test Case

**As a tester**, I want to create a new test case with title, steps, and tags.  
**Acceptance Criteria:**

- Form validation.
- API endpoint for POST /testcases.
- Success toast + redirect to list view.

### Story 6 — View Test Cases

**As a user**, I want to view all test cases in a paginated table.  
**Acceptance Criteria:**

- Table with sorting, filtering, pagination.
- API endpoint for GET /testcases.
- Loading and error states.

### Story 7 — Edit & Delete Test Case

**As a tester**, I want to update or remove test cases easily.  
**Acceptance Criteria:**

- PUT /testcases/:id and DELETE /testcases/:id endpoints.
- Confirmation modal before delete.
- Optimistic UI updates.

---

## 🧩 Phase 4: Test Suites & Organization

### Story 8 — Create Test Suite

**As an admin**, I want to group test cases into suites for better organization.  
**Acceptance Criteria:**

- Suite creation form.
- Link test cases to suites.
- Display suite overview page.

### Story 9 — Dashboard Overview

**As a user**, I want a dashboard showing test case metrics and activity.  
**Acceptance Criteria:**

- Cards for total test cases, suites, users.
- Charts for test distribution.
- Recent activity list.

---

## 🧪 Phase 5: Automation Integration

### Story 10 — Component Tests

**As a developer**, I want to verify React components render correctly.  
**Acceptance Criteria:**

- React Testing Library setup.
- Tests for Table, Modal, Form components.

### Story 11 — API Tests

**As a developer**, I want to validate backend endpoints automatically.  
**Acceptance Criteria:**

- Supertest + Jest setup.
- CRUD endpoint coverage.
- Mock data factories.

### Story 12 — E2E Tests

**As a QA engineer**, I want Playwright tests that simulate user flows.  
**Acceptance Criteria:**

- Login, CRUD, filtering flows.
- Screenshots + HTML reports.
- CI integration.

---

## 🚀 Phase 6: CI/CD & Deployment

### Story 13 — CI Pipeline

**As a developer**, I want automated builds and tests on every commit.  
**Acceptance Criteria:**

- GitHub Actions workflow.
- Run lint, unit, API, and E2E tests.
- Generate reports.

### Story 14 — Deployment

**As a developer**, I want to deploy the app so others can view it.  
**Acceptance Criteria:**

- Frontend on Vercel/Netlify.
- Backend on Render/Railway.
- Environment configs for production.

---

## 🎨 Phase 7: Polish & Documentation

### Story 15 — UI Refinement

**As a user**, I want a clean, responsive interface.  
**Acceptance Criteria:**

- Material UI theme.
- Mobile responsiveness.
- Consistent spacing and typography.

### Story 16 — README & Demo

**As a recruiter**, I want to understand the project quickly.  
**Acceptance Criteria:**

- Professional README with screenshots.
- Demo link.
- Test coverage summary.

client/
│
├── src/
│ ├── components/ # Reusable UI components
│ │ ├── Table/
│ │ ├── Modal/
│ │ ├── Form/
│ │ └── Chart/
│ │
│ ├── pages/ # Route-level pages
│ │ ├── Login/
│ │ ├── Dashboard/
│ │ ├── TestCases/
│ │ ├── TestSuites/
│ │ └── Users/
│ │
│ ├── hooks/ # Custom hooks
│ │ ├── useAuth.js
│ │ ├── useTestCases.js
│ │ └── useApi.js
│ │
│ ├── context/ # Global state (Auth, Theme, etc.)
│ │ └── AuthContext.js
│ │
│ ├── services/ # API abstraction layer
│ │ ├── apiClient.js
│ │ ├── testCaseService.js
│ │ ├── suiteService.js
│ │ └── userService.js
│ │
│ ├── utils/ # Helpers, formatters
│ ├── styles/ # Global styles, theme config
│ ├── assets/ # Images, icons
│ ├── App.jsx
│ ├── main.jsx
│ └── router.jsx
│
├── public/
└── package.json
---> New structure:
src/
components/
HeaderNavBar/
HeaderNavBar.jsx
HeaderNavBar.css
SideBar/
SideBar.jsx
SideBar.css
Common/
Button.jsx
Card.jsx
Modal.jsx

context/
AuthContext.jsx
TestCaseContext.jsx (optional later)

hooks/
useAuth.js
useFetch.js
useTestCases.js (optional later)

pages/
Dashboard/
DashboardPage.jsx

    Login/
      LoginPage.jsx

    TestCases/
      List/
        TestCaseListPage.jsx
        List.css
        components/
          TestCaseCard.jsx
          EmptyState.jsx

      Details/
        TestCaseDetailsPage.jsx
        Details.css
        components/
          StepsList.jsx
          MetadataPanel.jsx
          Preconditions.jsx

      Create/
        TestCaseCreatePage.jsx
        Create.css
        components/
          CreateForm.jsx

      Edit/
        TestCaseEditPage.jsx
        Edit.css
        components/
          EditForm.jsx

    Users/
      UserPage.jsx

services/
api.js
testcaseService.js
userService.js
authService.js

utils/
formatDate.js
validators.js
constants.js

styles/
App.css
layout.css
index.css

App.jsx
main.jsx

server/
│
├── src/
│ ├── controllers/ # Request handlers
│ │ ├── authController.js
│ │ ├── bugController.js
│ │ ├── suiteController.js
│ │ └── userController.js
│ │
│ ├── routes/ # Express routes
│ │ ├── authRoutes.js
│ │ ├── bugRoutes.js
│ │ ├── suiteRoutes.js
│ │ └── userRoutes.js
│ │
│ ├── models/ # Mongoose schemas
│ │ ├── User.js
│ │ ├── Bug.js
│ │ ├── Suite.js
│ │ └── Comment.js
│ │
│ ├── middleware/ # Auth, error handling, validation
│ │ ├── authMiddleware.js
│ │ ├── roleMiddleware.js
│ │ └── errorHandler.js
│ │
│ ├── services/ # Business logic (optional but senior-level)
│ │ ├── bugService.js
│ │ └── userService.js
│ │
│ ├── utils/ # Helpers, logger, constants
│ │ ├── logger.js
│ │ └── validators.js
│ │
│ ├── config/ # DB connection, env config
│ │ ├── db.js
│ │ └── env.js
│ │
│ ├── app.js # Express app
│ └── server.js # Server entry point
│
├── tests/ # Backend unit + API tests (optional)
└── package.json
