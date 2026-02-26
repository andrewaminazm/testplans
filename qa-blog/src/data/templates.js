// Downloadable test plan and test strategy templates

export const templates = [
  {
    id: "agile-test-plan",
    name: "Agile Sprint Test Plan",
    description: "Lightweight test plan for a single sprint. Covers scope, acceptance criteria, and test approach per sprint.",
    category: "Test Plan",
    format: "txt",
    icon: "📋",
    color: "#6366f1",
  },
  {
    id: "ieee-829-test-plan",
    name: "IEEE 829 Test Plan (Full)",
    description: "Formal test plan following IEEE 829 standard. Ideal for regulated industries and enterprise projects.",
    category: "Test Plan",
    format: "txt",
    icon: "📄",
    color: "#4f46e5",
  },
  {
    id: "test-case-template",
    name: "Test Case Template",
    description: "Structured template for writing test cases: ID, steps, expected results, priority, and status.",
    category: "Test Cases",
    format: "txt",
    icon: "✅",
    color: "#10b981",
  },
  {
    id: "test-strategy-onepager",
    name: "Test Strategy One-Pager",
    description: "One-page test strategy summary: approach, types, tools, and quality gates. Perfect for stakeholders.",
    category: "Test Strategy",
    format: "txt",
    icon: "🎯",
    color: "#8b5cf6",
  },
  {
    id: "test-strategy-document",
    name: "Test Strategy Document (Full)",
    description: "Complete test strategy template: scope, objectives, types, levels, automation, environments, defects, metrics, and risks. For projects and programs.",
    category: "Test Strategy",
    format: "txt",
    icon: "📑",
    color: "#7c3aed",
  },
  {
    id: "uat-test-plan",
    name: "UAT Test Plan",
    description: "User Acceptance Testing plan with scope, user roles, scenarios, and sign-off criteria.",
    category: "Test Plan",
    format: "txt",
    icon: "👥",
    color: "#0ea5e9",
  },
  {
    id: "smoke-checklist",
    name: "Smoke Test Checklist",
    description: "Quick smoke test checklist to verify critical paths before deeper testing or release.",
    category: "Checklist",
    format: "txt",
    icon: "🔥",
    color: "#f59e0b",
  },
  {
    id: "regression-test-plan",
    name: "Regression Test Plan",
    description: "Regression testing scope, test suite structure, and execution schedule for releases.",
    category: "Test Plan",
    format: "txt",
    icon: "🔄",
    color: "#ec4899",
  },
  {
    id: "api-test-plan",
    name: "API Test Plan",
    description: "API and integration testing plan: endpoints, methods, data, and automation approach.",
    category: "Test Plan",
    format: "txt",
    icon: "🔌",
    color: "#14b8a6",
  },
  {
    id: "defect-report-template",
    name: "Defect / Bug Report Template",
    description: "Standard defect report fields: steps to reproduce, severity, environment, and status.",
    category: "Defect",
    format: "txt",
    icon: "🐛",
    color: "#ef4444",
  },
  {
    id: "test-summary-report",
    name: "Test Summary Report",
    description: "End-of-cycle test summary: coverage, pass/fail, defects, risks, and release recommendation.",
    category: "Report",
    format: "txt",
    icon: "📊",
    color: "#6366f1",
  },
  {
    id: "traceability-matrix",
    name: "Requirements Traceability Matrix",
    description: "Map requirements to test cases and defects. Ensures full coverage and audit trail.",
    category: "Traceability",
    format: "txt",
    icon: "🔗",
    color: "#059669",
  },
  {
    id: "release-readiness-checklist",
    name: "Release Readiness Checklist",
    description: "Pre-release checklist: testing complete, sign-offs, deployment steps, and go/no-go criteria.",
    category: "Checklist",
    format: "txt",
    icon: "🚀",
    color: "#dc2626",
  },
  {
    id: "test-environment-request",
    name: "Test Environment Request",
    description: "Request form for test environment setup: hardware, software, access, and data needs.",
    category: "Request",
    format: "txt",
    icon: "🖥️",
    color: "#2563eb",
  },
  {
    id: "test-execution-log",
    name: "Test Execution Log",
    description: "Daily or per-run log of test execution: date, build, tester, cases run, pass/fail, notes.",
    category: "Report",
    format: "txt",
    icon: "📝",
    color: "#7c3aed",
  },
  {
    id: "risk-log",
    name: "Test Risk Log / Register",
    description: "Log of testing risks: description, impact, likelihood, mitigation, owner, status.",
    category: "Risk",
    format: "txt",
    icon: "⚠️",
    color: "#b45309",
  },
  {
    id: "exploratory-charter",
    name: "Exploratory Testing Charter",
    description: "Charter for time-boxed exploratory sessions: mission, scope, and focus areas.",
    category: "Test Plan",
    format: "txt",
    icon: "🔍",
    color: "#0891b2",
  },
  {
    id: "performance-test-plan",
    name: "Performance Test Plan",
    description: "Load, stress, and performance testing: objectives, scenarios, metrics, and tools.",
    category: "Test Plan",
    format: "txt",
    icon: "⚡",
    color: "#4f46e5",
  },
  {
    id: "security-test-checklist",
    name: "Security Test Checklist",
    description: "Security testing checklist: auth, injection, data exposure, and OWASP-related checks.",
    category: "Checklist",
    format: "txt",
    icon: "🔒",
    color: "#be185d",
  },
  {
    id: "test-data-request",
    name: "Test Data Request Form",
    description: "Request test data: what data, format, volume, refresh frequency, and sensitivity.",
    category: "Request",
    format: "txt",
    icon: "📦",
    color: "#0d9488",
  },
  {
    id: "qa-metrics-template",
    name: "QA Metrics Dashboard Template",
    description: "Template for tracking QA metrics: defect rate, coverage, automation %, cycle time.",
    category: "Report",
    format: "txt",
    icon: "📈",
    color: "#16a34a",
  },
  {
    id: "change-request-form",
    name: "Change Request / CR Form",
    description: "Document change requests: what changed, impact on tests, approval, and implementation.",
    category: "Request",
    format: "txt",
    icon: "📋",
    color: "#64748b",
  },
];

// Template body content (plain text for download)
export const templateContent = {
  "agile-test-plan": `AGILE SPRINT TEST PLAN
================================
Project: [Project Name]
Sprint: [Sprint Number / Name]
Sprint Dates: [Start] – [End]
Test Lead: [Name]
Last Updated: [Date]

1. SPRINT GOAL
   [One sentence describing what the sprint delivers]

2. FEATURES / USER STORIES IN SCOPE
   | Story ID | Title                          | Acceptance Criteria Summary     |
   |----------|--------------------------------|----------------------------------|
   | US-xxx   | [Story title]                  | [Key criteria]                  |
   | US-xxx   | [Story title]                  | [Key criteria]                  |

3. OUT OF SCOPE (this sprint)
   - [Item 1]
   - [Item 2]

4. TEST APPROACH
   - Functional: [Manual / Automated / Both]
   - Regression: [Scope: full suite / smoke only / none]
   - Exploratory: [Time-box: e.g. 2 hours per feature]

5. ENVIRONMENTS & DATA
   - Environment: [e.g. QA / Staging]
   - Test data: [Refreshed / Synthetic / Masked prod]

6. ENTRY CRITERIA (testing can start when)
   - Dev complete and deployed to test env
   - Acceptance criteria agreed and testable
   - Test environment and data ready

7. EXIT CRITERIA (sprint testing done when)
   - All planned test cases executed
   - No critical/high bugs open (or agreed exceptions)
   - Product Owner sign-off on stories

8. RISKS & BLOCKERS
   | Risk              | Impact | Mitigation        |
   |-------------------|--------|-------------------|
   | [e.g. Env down]   | High   | [Action]          |

9. NOTES
   [Any additional notes]
`,

  "ieee-829-test-plan": `IEEE 829 TEST PLAN (STRUCTURE)
========================================
Document ID: TP-[Project]-[Version]
Project: [Project Name]
Version: [x.y]
Author: [Name]
Date: [Date]
Approved by: [Name]

1. TEST PLAN IDENTIFIER
   Unique ID and version of this test plan.

2. INTRODUCTION
   - Purpose of the test plan
   - Scope (what is and is not tested)
   - References (requirements doc, design doc, etc.)
   - Definitions and acronyms

3. TEST ITEMS
   - List of software items (modules, features) to be tested
   - Version or build identification

4. FEATURES TO BE TESTED
   - All features and their priority
   - Traceability to requirements (e.g. Req ID)

5. FEATURES NOT TO BE TESTED
   - Explicit exclusions with justification

6. APPROACH (STRATEGY)
   - Overall test approach (e.g. risk-based, phase-based)
   - Test levels: unit, integration, system, acceptance
   - Test types: functional, non-functional, regression
   - Entry and exit criteria for each level
   - Pass/fail criteria
   - Suspension and resumption criteria

7. ITEM PASS/FAIL CRITERIA
   - Definition of pass and fail for test items

8. SUSPENSION CRITERIA AND RESUMPTION REQUIREMENTS
   - When to suspend testing (e.g. critical env failure)
   - What is required to resume

9. TEST DELIVERABLES
   - Test plan (this document)
   - Test design specifications
   - Test case specifications
   - Test procedure specifications
   - Test item transmittal reports
   - Test logs
   - Test incident reports
   - Test summary report

10. TESTING TASKS
    - Tasks with dependencies and responsibilities
    - Effort and schedule

11. ENVIRONMENTAL NEEDS
    - Hardware, software, tools, test data
    - Roles and training

12. STAFFING AND TRAINING NEEDS
    - Roles required (test lead, testers, automation)
    - Training plan

13. RESPONSIBILITIES
    - Who does what (e.g. dev, QA, PM)

14. SCHEDULE
    - Milestones and dates
    - Dependencies on dev and other teams

15. RISKS AND CONTINGENCIES
    - Risks (technical, resource, schedule)
    - Mitigation and contingency plans

16. APPROVALS
    - Sign-off table: Name, Role, Date, Signature
`,

  "test-case-template": `TEST CASE TEMPLATE
==================
Project: [Project Name]
Module/Feature: [Name]
Version: [x.y]
Author: [Name]
Date: [Date]

LEGEND
------
Priority: P1 (Critical) | P2 (High) | P3 (Medium) | P4 (Low)
Status: Draft | Ready | Pass | Fail | Blocked | Skip
Type: Functional | Regression | Smoke | UAT | Negative

TEST CASES
----------

Test Case ID: TC-001
Title: [Short descriptive title]
Priority: P1
Type: Functional
Preconditions: [What must be true before test runs]
Test Data: [If applicable]

Steps:
  1. [Action 1]
  2. [Action 2]
  3. [Action 3]

Expected Result: [What should happen]
Actual Result: [Fill during execution]
Status: [Pass/Fail/Blocked]
Notes: [Optional]

---
Test Case ID: TC-002
Title: [Short descriptive title]
Priority: P2
Type: [Type]
Preconditions: [Preconditions]
Test Data: [Data]

Steps:
  1. [Step 1]
  2. [Step 2]

Expected Result: [Expected]
Actual Result: [Actual]
Status: [Status]
Notes: [Notes]

---
[Add more test cases as needed]
`,

  "test-strategy-onepager": `TEST STRATEGY ONE-PAGER
========================
Product/Project: [Name]
Version: [x.y]
Owner: [QA Lead Name]
Date: [Date]

1. OBJECTIVES
   - Ensure [product] meets quality goals for [release/milestone]
   - Reduce production defects by [target]
   - [Other key objective]

2. SCOPE
   In scope: [Features, modules, platforms]
   Out of scope: [Exclusions]

3. TESTING TYPES
   | Type        | Approach    | Owner   | Tools / Notes   |
   |-------------|-------------|---------|-----------------|
   | Functional  | Manual + Auto| QA      | [Tool]          |
   | Regression  | Automated   | QA      | [Tool]          |
   | Performance | As needed   | QA/Dev  | [Tool]          |
   | Security    | Per checklist| QA     | [Tool]          |
   | UAT         | Manual      | Business| [Process]       |

4. TEST LEVELS
   - Unit: Developers (target coverage: [x]%)
   - Integration: QA + Dev
   - System: QA
   - UAT: Business users

5. ENVIRONMENTS
   - Dev, QA, Staging, Production (or as applicable)
   - Test data: [Strategy]

6. QUALITY GATES (exit criteria for release)
   - [ ] All P1/P2 test cases executed
   - [ ] No critical/high open defects (or approved waivers)
   - [ ] Test summary approved by [Role]
   - [ ] [Other gate]

7. RISKS & MITIGATION
   - [Risk]: [Mitigation]

8. METRICS
   - Defect escape rate, test coverage %, automation %
`,

  "test-strategy-document": `TEST STRATEGY DOCUMENT (FULL)
=============================
Product/Program: [Name]
Version: [x.y]
Owner: [QA Lead / Test Manager Name]
Date: [Date]
Approved by: [Name]

1. INTRODUCTION
   - Purpose: Define how testing is performed for [product/program] to achieve quality goals.
   - Scope: This strategy applies to [all projects / program X / product Y].
   - Audience: QA team, development, product, and stakeholders.
   - References: [Link to quality policy, project charter, or standards.]

2. OBJECTIVES & GOALS
   - Primary: [e.g. Ensure releases meet quality standards and minimize production defects.]
   - Secondary: [e.g. Increase automation coverage to 70% within 12 months.]
   - Success criteria: [e.g. Zero critical defects at release; 95%+ pass rate on regression.]

3. TESTING SCOPE
   In scope:
   - [Features, modules, platforms, integrations]
   Out of scope:
   - [Exclusions with brief justification]
   Assumptions: [e.g. Stable test environment; requirements documented.]

4. TESTING TYPES
   | Type        | Description              | Owner    | Approach      | Tools / Notes     |
   |-------------|--------------------------|----------|---------------|-------------------|
   | Functional  | Validate features vs reqs| QA       | Manual + Auto | [Tool]            |
   | Integration | APIs, components together| QA/Dev   | Automated     | [Tool]            |
   | Regression  | No unintended breakage   | QA       | Automated     | [Tool]            |
   | Performance | Load, stress, response   | QA/Dev   | As needed     | [Tool]            |
   | Security    | Auth, injection, OWASP   | QA       | Per checklist | [Tool]            |
   | UAT         | Business acceptance      | Business | Manual        | [Process]         |
   | Exploratory | Unscripted exploration   | QA       | Time-boxed    | [Charter]         |

5. TEST LEVELS
   - Unit: Developers; target coverage [x]%; tool [e.g. JUnit, Jest].
   - Integration: QA + Dev; focus on interfaces and data flow.
   - System: QA; end-to-end flows and non-functional.
   - Acceptance (UAT): Business users; sign-off for release.

6. TEST AUTOMATION STRATEGY
   - What we automate: [e.g. Regression, smoke, API, critical E2E.]
   - What stays manual: [e.g. Exploratory, UAT, ad-hoc.]
   - Target: [x]% of regression automated by [date].
   - Framework/tools: [e.g. Selenium, Cypress, Postman.]
   - Maintenance: [Who maintains; how often suite is reviewed.]

7. ENVIRONMENT STRATEGY
   - Environments: Dev, QA, Staging, Production (or as applicable).
   - Test data: [Refresh strategy; masking; synthetic data.]
   - Access: [Who has access; how to request.]
   - Stability: [Expectations for uptime and maintenance.]

8. DEFECT MANAGEMENT
   - Severity: Critical, High, Medium, Low (definitions: [brief]).
   - Priority: P1–P4; who sets priority: [Role].
   - Tool: [e.g. Jira, Azure DevOps.]
   - SLA: [e.g. Critical fixed in 24h; High in 1 week.]
   - Triage: [Frequency; attendees; escalation path.]

9. METRICS & REPORTING
   - Key metrics: Defect density; test coverage %; pass rate; automation %; cycle time; defect escape rate.
   - Reporting: [Frequency: daily/weekly]; [Audience]; [Format/dashboard].
   - Quality gates: [e.g. No P1/P2 open; pass rate >95%; sign-off from QA Lead.]

10. RISK-BASED TESTING
    - We prioritize testing by: (1) Business impact, (2) Likelihood of failure, (3) Change density.
    - High-risk areas: [Get more coverage and earlier testing.]
    - Risk log: [Where risks are documented and reviewed.]

11. ROLES & RESPONSIBILITIES
    | Role         | Responsibility                          |
    |--------------|----------------------------------------|
    | QA Lead      | Strategy, plan, metrics, sign-off      |
    | Testers      | Design, execute, report                |
    | Developers   | Unit tests, fix defects                |
    | Product      | Requirements, UAT, acceptance          |

12. RISKS & MITIGATION
    | Risk              | Impact | Mitigation                    |
    |-------------------|--------|-------------------------------|
    | [e.g. Env down]   | High   | [Backup env; early smoke]     |
    | [e.g. Late reqs]  | Medium | [Shift-left; clarify scope]   |

13. REVIEW & APPROVAL
    This strategy is reviewed [e.g. annually or per major release] and updated as needed.
    Approved by: ________________  Role: ________________  Date: ________
`,

  "uat-test-plan": `USER ACCEPTANCE TEST (UAT) PLAN
===============================
Project: [Project Name]
Release: [Release Name/Version]
UAT Lead: [Name]
Business Owner: [Name]
Planned Dates: [Start] – [End]
Last Updated: [Date]

1. PURPOSE
   Confirm the system meets business requirements and is ready for production use from the end-user perspective.

2. SCOPE
   In scope:
   - [Feature/Process 1]
   - [Feature/Process 2]
   Out of scope:
   - [Excluded area]

3. UAT OBJECTIVES
   - Validate [key business flows]
   - Confirm [compliance / business rules]
   - Sign-off for go-live

4. PARTICIPANTS (ROLES)
   | Role           | Name(s)     | Responsibility        |
   |----------------|-------------|------------------------|
   | Business Owner | [Name]      | Final sign-off        |
   | UAT Lead       | [Name]      | Plan, execution, report|
   | Subject Matter Experts | [Names] | Execute scenarios     |
   | IT Support     | [Name]      | Environment, access    |

5. TEST SCENARIOS (HIGH LEVEL)
   | ID   | Scenario Name           | Priority | Owner   |
   |------|-------------------------|----------|---------|
   | UAT-1| [e.g. Order to cash]   | High     | [Name]  |
   | UAT-2| [e.g. User management] | High     | [Name]  |
   | UAT-3| [Scenario]             | Medium   | [Name]  |

6. ENVIRONMENT & DATA
   - Environment: [UAT URL / system]
   - Data: [Production-like / masked / synthetic]
   - Access: [How users get access]

7. ENTRY CRITERIA
   - System test complete and signed off
   - UAT environment stable and data loaded
   - Test scenarios and scripts ready
   - Participants identified and trained

8. EXIT CRITERIA (UAT complete when)
   - All planned scenarios executed
   - No critical defects open (or business-accepted)
   - Business sign-off obtained

9. SIGN-OFF
   I approve that UAT is complete and the system is fit for production use (or with documented exceptions).
   Name: ________________  Role: ________________  Date: ________
`,

  "smoke-checklist": `SMOKE TEST CHECKLIST
====================
Build/Release: [Version or Build ID]
Environment: [e.g. QA / Staging]
Date: [Date]
Tester: [Name]

Purpose: Verify critical paths and that the build is stable enough for further testing.

Instructions: Execute each check. Mark Pass (P) or Fail (F). Any F on a critical item = build rejected for testing.

CRITICAL PATHS
--------------
[ ] 1. Application launches / home page loads
[ ] 2. User can log in (valid credentials)
[ ] 3. User can log out
[ ] 4. [Primary feature 1] – happy path works
[ ] 5. [Primary feature 2] – happy path works
[ ] 6. [Primary feature 3] – happy path works
[ ] 7. Key navigation (menu / main links) works
[ ] 8. No critical errors in console / logs (note if checked)

INTEGRATION (if applicable)
--------------------------
[ ] 9. Main API / service connectivity
[ ] 10. Database connectivity
[ ] 11. External dependency (e.g. payment, SSO) – basic check

NOTES
-----
- Build pass? (Y/N): ___
- Blockers: ___________________________
- Comments: ___________________________
`,

  "regression-test-plan": `REGRESSION TEST PLAN
=====================
Project: [Project Name]
Release: [Release Name]
Test Lead: [Name]
Last Updated: [Date]

1. PURPOSE
   Ensure new changes do not break existing functionality. Define scope, suite, and execution approach.

2. SCOPE
   - Product/Modules: [List]
   - Platforms (e.g. browsers, OS): [List]
   - Out of scope: [Areas excluded from regression]

3. REGRESSION TEST SUITE
   - Suite name / ID: [e.g. Full Regression v2.1]
   - Total test cases: [Number]
   - Source: [Test repository / tool link]
   - Estimated execution time: [e.g. 2 days full run]

4. SUITE STRUCTURE (optional breakdown)
   | Area/Module   | # Cases | Priority | Owner  |
   |---------------|--------|----------|--------|
   | [Module A]    | xx     | P1/P2    | [Name] |
   | [Module B]    | xx     | P1/P2    | [Name] |
   | [Integration] | xx     | P2       | [Name] |

5. EXECUTION APPROACH
   - Full regression: [When – e.g. before major release]
   - Partial / targeted: [When – e.g. after small fixes]
   - Automated: [% and tool]
   - Manual: [% and focus areas]

6. SCHEDULE (this release)
   - Regression start: [Date]
   - Regression end: [Date]
   - Buffer: [Days]

7. ENTRY CRITERIA
   - Smoke test passed
   - Build stable in test environment
   - Test data and env ready

8. EXIT CRITERIA
   - Planned regression cases executed
   - No critical/high defects open (or approved)
   - Regression summary report updated

9. RISKS
   - [e.g. Flaky tests]: [Mitigation]
`,

  "api-test-plan": `API TEST PLAN
==============
Project/Product: [Name]
API Version: [e.g. v1]
Test Lead: [Name]
Date: [Date]

1. SCOPE
   - APIs in scope: [List or reference to API spec]
   - Out of scope: [Other services not tested]

2. TEST OBJECTIVES
   - Validate request/response contract (status, schema)
   - Validate business logic and data integrity
   - Validate error handling and edge cases
   - Validate security (auth, authorization, rate limits if applicable)

3. ENVIRONMENT
   - Base URL(s): [e.g. https://api.qa.example.com]
   - Auth: [e.g. Bearer token, API key]
   - Test data: [How data is set up]

4. TEST TYPES
   - Contract / schema validation
   - Positive and negative functional tests
   - Boundary and invalid input
   - Security (auth, injection, etc.)
   - Performance (optional: load, stress)

5. KEY ENDPOINTS (example table)
   | Method | Endpoint           | Purpose              | Priority |
   |--------|--------------------|----------------------|----------|
   | GET    | /users             | List users           | P1       |
   | POST   | /users             | Create user          | P1       |
   | GET    | /users/:id         | Get user by ID       | P1       |
   | PUT    | /users/:id         | Update user          | P2       |
   | DELETE | /users/:id         | Delete user          | P2       |

6. TEST DATA
   - Valid payloads: [Reference or examples]
   - Invalid / edge: [Examples]
   - Auth tokens: [How to obtain and use]

7. TOOLS
   - [e.g. Postman, Rest Assured, pytest]
   - Automation: [Yes/No, framework]

8. ENTRY/EXIT CRITERIA
   Entry: API available in test env, spec stable
   Exit: All planned API tests executed, no P1/P2 failures
`,

  "defect-report-template": `DEFECT / BUG REPORT TEMPLATE
============================
Project: [Project Name]
Reported by: [Name]
Date: [Date]
Environment: [e.g. QA, Browser, OS]

DEFECT ID: [e.g. BUG-001]
TITLE: [Short, descriptive title]

SEVERITY: [Critical / High / Medium / Low]
PRIORITY: [P1 / P2 / P3 / P4]
STATUS: [New / Open / In Progress / Fixed / Verified / Closed]
MODULE/FEATURE: [Where the defect is]

STEPS TO REPRODUCE:
  1. [Step 1]
  2. [Step 2]
  3. [Step 3]

EXPECTED RESULT:
  [What should happen]

ACTUAL RESULT:
  [What actually happens]

ENVIRONMENT:
  - OS: [e.g. Windows 11]
  - Browser/App: [e.g. Chrome 120]
  - Build/Version: [e.g. 2.1.0]
  - URL (if web): [e.g. https://...]

ATTACHMENTS (if any):
  - Screenshot: [filename]
  - Logs: [filename or paste]

ADDITIONAL NOTES:
  [Frequency: always / intermittent, workaround if any]
`,

  "test-summary-report": `TEST SUMMARY REPORT
====================
Project: [Project Name]
Release/Phase: [Name]
Test Phase: [e.g. System Test, UAT]
Period: [Start Date] – [End Date]
Report Author: [Name]
Date: [Date]

1. EXECUTIVE SUMMARY
   [2–3 sentences: overall quality, pass/fail summary, recommendation to release or not]

2. TEST EXECUTION SUMMARY
   | Metric              | Count |
   |---------------------|-------|
   | Total test cases    | xxx   |
   | Passed              | xxx   |
   | Failed              | xxx   |
   | Blocked             | xxx   |
   | Skipped             | xxx   |
   | Not run             | xxx   |
   | Pass rate           | xx%   |

3. COVERAGE
   - Requirements covered: [x/y or %]
   - Modules/areas tested: [List or %]
   - Gaps (if any): [Brief description]

4. DEFECT SUMMARY
   | Severity  | Open | Fixed | Deferred |
   |-----------|------|-------|----------|
   | Critical  | x    | x     | x        |
   | High      | x    | x     | x        |
   | Medium    | x    | x     | x        |
   | Low       | x    | x     | x        |

   Critical/High open: [Number] – [List or “None”]

5. RISKS & ISSUES
   - [Risk 1]: [Impact and mitigation]
   - [Issue 2]: [Status]

6. RECOMMENDATION
   [ ] Recommend release as-is
   [ ] Recommend release with known issues (list below)
   [ ] Do not recommend release (blockers)

   Comments: ___________________________

7. APPROVAL
   Test Lead: ________________  Date: ________
   [Other approver]: ________________  Date: ________
`,

  "traceability-matrix": `REQUIREMENTS TRACEABILITY MATRIX (RTM)
========================================
Project: [Project Name]
Release: [Release Name]
Author: [Name]
Date: [Date]

Purpose: Link requirements to test cases and defects for coverage and audit.

REQUIREMENTS TO TEST CASES
--------------------------
| Req ID   | Requirement Summary      | Test Case IDs    | Status   |
|----------|---------------------------|------------------|----------|
| REQ-001  | [Requirement description]| TC-001, TC-002   | Covered  |
| REQ-002  | [Requirement description]| TC-003           | Covered  |
| REQ-003  | [Requirement description]| TC-004, TC-005   | Partial  |
| REQ-004  | [Requirement description]| —                | Not covered |

DEFECTS TO REQUIREMENTS / TEST CASES
------------------------------------
| Defect ID | Related Req | Related TC | Severity |
|-----------|-------------|------------|----------|
| BUG-001   | REQ-001     | TC-001     | High     |
| BUG-002   | REQ-003     | TC-005     | Medium   |

COVERAGE SUMMARY
----------------
- Total requirements: [x]
- Covered by test cases: [x] ([%])
- Not covered: [list or count]
- Defects logged: [x]
`,

  "release-readiness-checklist": `RELEASE READINESS CHECKLIST
=============================
Release: [Release Name/Version]
Target Date: [Date]
Release Manager: [Name]
Last Updated: [Date]

TESTING
-------
[ ] All planned test cycles completed
[ ] No critical or high defects open (or approved waivers)
[ ] Test summary report approved
[ ] UAT sign-off obtained (if applicable)
[ ] Performance / security checks done (if required)
[ ] Regression suite passed (or documented exceptions)

DOCUMENTATION & CONFIG
----------------------
[ ] Release notes drafted and reviewed
[ ] Known issues / release notes updated
[ ] Config and env details documented
[ ] Rollback plan documented and communicated

DEPLOYMENT & SIGN-OFF
--------------------
[ ] Deployment runbook ready
[ ] Database migrations / scripts validated
[ ] Stakeholder go/no-go meeting held
[ ] Go-live sign-off: ________________  Date: ________
[ ] Post-release monitoring plan in place

NOTES / BLOCKERS
----------------
[Any blockers or open items]
`,

  "test-environment-request": `TEST ENVIRONMENT REQUEST
=========================
Requested by: [Name]
Date: [Date]
Project: [Project Name]
Environment: [e.g. QA / UAT / Staging]
Need-by date: [Date]

HARDWARE / INFRASTRUCTURE
-------------------------
- Servers / instances: [Number, spec if needed]
- Database: [Type, version]
- Other (cache, queue, etc.): [Details]

SOFTWARE / CONFIGURATION
------------------------
- Application version: [Version or “latest”]
- OS: [e.g. Linux / Windows]
- Config (env vars, feature flags): [List or attach]
- Third-party / integrations: [What needs to be available]

ACCESS & USERS
--------------
- URLs: [List]
- Test user accounts: [Number and roles]
- VPN / network: [If required]

TEST DATA
---------
- Data refresh: [None / Full / Partial]
- Sensitive data: [Masked / Synthetic / N/A]
- Data request form: [Link or attached]

NOTES
-----
[Any special requirements or dependencies]
`,

  "test-execution-log": `TEST EXECUTION LOG
==================
Project: [Project Name]
Release/Phase: [Name]
Log Owner: [Name]

EXECUTION RECORDS
-----------------
| Date       | Build/Version | Tester  | Total | Pass | Fail | Blocked | Skip | Notes        |
|------------|---------------|---------|-------|------|------|---------|------|--------------|
| [Date]     | [Build]       | [Name]  | xx    | xx   | xx   | xx      | xx   | [Brief note] |
| [Date]     | [Build]       | [Name]  | xx    | xx   | xx   | xx      | xx   | [Brief note] |

BLOCKERS / ISSUES
-----------------
- [Date] [Description of blocker]
- [Date] [Description]

NOTES
-----
[Any additional notes]
`,

  "risk-log": `TEST RISK LOG / REGISTER
========================
Project: [Project Name]
Owner: [Name]
Last Updated: [Date]

| ID    | Risk Description        | Impact | Likelihood | Mitigation           | Owner  | Status   |
|-------|--------------------------|--------|------------|----------------------|--------|----------|
| R-001 | [e.g. Env instability]   | High   | Medium     | [Mitigation action]  | [Name] | Open     |
| R-002 | [e.g. Late requirements]| Medium | High       | [Mitigation action]  | [Name] | Mitigated|
| R-003 | [Risk]                  | [H/M/L]| [H/M/L]    | [Action]             | [Name] | [Status] |

STATUS: Open | Mitigated | Accepted | Closed
`,

  "exploratory-charter": `EXPLORATORY TESTING CHARTER
==========================
Session: [Session name or number]
Date: [Date]
Tester: [Name]
Time-box: [e.g. 90 minutes]
Area/Feature: [Module or feature under exploration]

MISSION
-------
[One or two sentences: What are we trying to learn or validate?]
Example: "Explore the checkout flow to find usability issues and edge cases in payment handling."

SCOPE
-----
In scope: [What is in scope for this session]
Out of scope: [What we are not focusing on]

FOCUS AREAS / IDEAS
-------------------
- [Idea 1: e.g. Try different payment methods]
- [Idea 2: e.g. Invalid or boundary inputs]
- [Idea 3: e.g. Interrupt and resume]

NOTES / FINDINGS
----------------
[To be filled during or after the session]
`,

  "performance-test-plan": `PERFORMANCE TEST PLAN
=====================
Project: [Project Name]
Release: [Name]
Author: [Name]
Date: [Date]

1. OBJECTIVES
   - [e.g. Verify response time under expected load]
   - [e.g. Find breaking point / stress]
   - [e.g. Validate scalability]

2. SCOPE
   - In scope: [APIs, pages, transactions]
   - Out of scope: [Excluded areas]

3. SCENARIOS & METRICS
   | Scenario      | Load (users/VUs) | Duration | Success criteria (e.g. p95, error %) |
   |---------------|------------------|----------|---------------------------------------|
   | Baseline      | [x]              | [x min]  | p95 < [x] ms, 0% errors               |
   | Peak load     | [x]              | [x min]  | p95 < [x] ms, <0.1% errors            |
   | Stress        | Ramp to failure  | [x min]  | Document breaking point               |

4. ENVIRONMENT
   - Test env: [URL / spec]
   - Data: [Volume, nature]
   - Monitoring: [Tools]

5. TOOLS
   - [e.g. JMeter, k6, Gatling, LoadRunner]
   - Reporting: [How results are captured]

6. ENTRY/EXIT CRITERIA
   Entry: Env ready, script ready, baseline agreed
   Exit: Scenarios run, report generated, results reviewed
`,

  "security-test-checklist": `SECURITY TEST CHECKLIST
======================
Project: [Project Name]
Version: [x.y]
Tester: [Name]
Date: [Date]

AUTHENTICATION & SESSION
------------------------
[ ] Strong password policy enforced
[ ] Account lockout after failed attempts
[ ] Session timeout and invalidation on logout
[ ] No sensitive data in URLs
[ ] Secure cookie flags (HttpOnly, Secure where applicable)

AUTHORIZATION
-------------
[ ] Role-based access enforced (no privilege escalation)
[ ] Direct object reference (IDOR) checks
[ ] Unauthorized access returns 403, not 401 details that leak info

INPUT & INJECTION
-----------------
[ ] SQL injection tested (inputs, headers)
[ ] XSS (reflected, stored) tested
[ ] Command injection / other injection as applicable

DATA & CONFIG
-------------
[ ] Sensitive data not in logs or error messages
[ ] HTTPS only; no mixed content
[ ] Security headers (CSP, X-Frame-Options, etc.) as per policy
[ ] Secrets not in code or config in repo

DEPENDENCIES & SUPPLY CHAIN
---------------------------
[ ] Known vulnerable dependencies checked (e.g. Snyk, OWASP Dependency-Check)
[ ] Third-party scripts and integrations reviewed

NOTES
-----
[References: OWASP Top 10, internal security standards]
`,

  "test-data-request": `TEST DATA REQUEST FORM
======================
Requested by: [Name]
Date: [Date]
Project: [Project Name]
Environment: [e.g. QA / UAT]

WHAT DATA IS NEEDED
------------------
- Entity/area: [e.g. Users, Orders, Products]
- Purpose: [e.g. Functional testing, UAT]
- Volume: [e.g. 1000 records, full copy]
- Format: [e.g. DB dump, CSV, API seed]

REFRESH / TIMING
----------------
- Frequency: [One-time / Daily / Weekly]
- Need-by date: [Date]

SENSITIVITY & COMPLIANCE
------------------------
- Contains PII?: [Yes / No]
- Masking required?: [Yes / No – describe]
- Compliance (GDPR, etc.): [Any requirements]

APPROVAL
--------
Approved by: ________________  Date: ________
`,

  "qa-metrics-template": `QA METRICS DASHBOARD TEMPLATE
==========================
Project: [Project Name]
Period: [e.g. Sprint 5 / March 2026]
Owner: [Name]

EXECUTION METRICS
-----------------
| Metric              | Value  | Target | Trend |
|----------------------|--------|--------|-------|
| Test cases executed  | xxx    | xxx    | ↑/↓   |
| Pass rate            | xx%    | >95%   | ↑/↓   |
| Automation %         | xx%    | [x]%   | ↑/↓   |
| Blocked / skipped    | xx     | —      | —     |

DEFECT METRICS
--------------
| Metric              | Value  | Target | Trend |
|----------------------|--------|--------|-------|
| Defects found       | xx     | —      | —     |
| Defects fixed        | xx     | —      | —     |
| Critical/High open   | xx     | 0      | —     |
| Defect escape (prod) | xx     | 0      | —     |

COVERAGE & CYCLE
----------------
| Metric              | Value  |
|----------------------|--------|
| Requirements covered | xx%   |
| Code coverage (if applicable) | xx% |
| Avg. cycle time (days) | x.x  |

NOTES
-----
[Key insights and actions]
`,

  "change-request-form": `CHANGE REQUEST (CR) FORM
======================
Project: [Project Name]
CR ID: CR-xxx
Submitted by: [Name]
Date: [Date]

CHANGE SUMMARY
---------------
- Title: [Short title]
- Description: [What is changing and why]
- Source: [Requirement / Defect / Stakeholder request]

IMPACT ON TESTING
-----------------
- Affected areas: [Modules, features]
- Test cases impacted: [List or “New tests required”]
- Regression impact: [High / Medium / Low]
- Test data / env impact: [If any]

APPROVAL
--------
- Requested by: ________________  Date: ________
- Approved by: ________________  Date: ________
- Implementation: [Target date or sprint]
`,
};
