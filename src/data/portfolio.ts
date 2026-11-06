// ✏️ EDIT THIS FILE to update your portfolio. Everything on the site reads from here.

export const profile = {
  name: "Rajeswari R",
  role: "Full Stack Software Engineer",
  tagline: "I build scalable web applications with React, TypeScript, Java and Node.js — combining secure APIs, cloud delivery and AI-assisted development.",
  location: "Kansas City area, USA",
  email: "rajeswari.rayapati22@gmail.com",
  phone: "+1 (913) 346-0691",
  linkedin: "https://www.linkedin.com/in/rayapati1203/",
  github: "https://github.com/rayapati1200",
  status: "Open to Full Stack & AI-focused engineering roles",
  about: [
    "I'm a full stack software engineer with 4+ years of experience building scalable web applications across fintech and enterprise products, including banking, healthcare and workflow automation.",
    "I build React and TypeScript interfaces, Java/Spring Boot and Node.js services, and REST and GraphQL APIs. My work spans secure authentication, microservices, AWS delivery, Azure DevOps CI/CD integration and automated testing.",
    "I use profiling, caching and experimentation to improve application performance and reliability. Alongside Agile collaboration and technical documentation, I work with LLM applications, MCP, tool calling and multi-agent workflows, using AI-assisted testing and code review to support quality.",
  ],
  interests: ["Agentic AI systems", "Performance engineering", "Secure auth flows", "Developer experience", "Fintech platforms"],
};

export const skills: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["React", "TypeScript", "JavaScript", "Angular", "HTML5", "CSS3", "Responsive Design", "Reusable UI Components", "Accessibility", "Core Web Vitals", "Lighthouse"] },
  { group: "Backend & APIs", items: ["Java", "Spring Boot", "Spring Security", "Node.js", "Express.js", "REST API Design & Integration", "GraphQL", "Microservices", "JWT", "OAuth2", "RBAC", "Secure Account & Payment Workflows"] },
  { group: "AI & Tooling", items: ["LLM Applications", "MCP", "Tool / Function Calling", "Multi-Agent Workflows", "AI Coding Tools", "AI-Assisted Testing", "AI Code Review"] },
  { group: "Data", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "DynamoDB", "Snowflake", "SQL", "Python"] },
  { group: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "Terraform", "Git", "GitHub Actions", "Jenkins", "Azure DevOps Pipelines", "CI/CD", "Prometheus", "Grafana"] },
  { group: "Quality", items: ["Jest", "JUnit", "Cypress", "Selenium", "A/B Testing", "Profiling", "Agile", "Jira", "Technical Documentation"] },
];

export const experience: {
  company: string; role: string; period: string; location: string; domain: string; points: string[]; stack: string[];
}[] = [
  {
    company: "FIS Global", role: "Full Stack Software Engineer", period: "Feb 2026 — Present", location: "Remote, USA", domain: "Fintech · Fraud Detection",
    points: [
      "Build responsive React + TypeScript dashboards that help fraud analysts review and triage flagged transactions.",
      "Design and tune Spring Boot APIs, PostgreSQL queries and Redis caching inside the fraud detection pipeline.",
      "Drive frontend performance work with Lighthouse, Core Web Vitals profiling and code splitting across desktop and mobile browsers.",
      "Partner with product and design on A/B experiments, using funnel data to refine analyst alert-review workflows.",
      "Use AI-assisted coding tools for components, tests and refactoring while maintaining code reviews, automated quality gates and pull-request security checks.",
      "Own features end to end through GitHub Actions, Docker and AWS with Jest, JUnit and Cypress coverage.",
    ],
    stack: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "Redis", "AWS", "AI tooling"],
  },
  {
    company: "Accenture", role: "Software Development Analyst", period: "Jan 2023 — Dec 2023", location: "India", domain: "Healthcare · Enterprise Portals",
    points: [
      "Developed responsive React and Angular account-management portals with secure sign-in flows across devices and browsers.",
      "Built and maintained Java/Spring Boot microservices and REST APIs with health checks, retries and structured logging.",
      "Optimized dashboard performance through lazy loading, pagination and Redis caching; documented performance testing, monitoring and maintenance procedures.",
      "Implemented JWT, OAuth2 and role-based access control across user-facing flows.",
      "Standardized evaluation queries for validating AI-generated clinical insights.",
      "Automated UI and API regression tests with Selenium and JUnit; documented test cases, results and defects for ongoing support.",
      "Integrated Azure DevOps CI/CD into build, test and deployment workflows, and maintained Jenkins and Docker pipelines.",
      "Modeled data in Snowflake for compliant AI monitoring and reporting.",
    ],
    stack: ["Angular", "React", "Spring Boot", "Redis", "OAuth2", "Azure DevOps", "Jenkins", "Docker", "Snowflake"],
  },
  {
    company: "Accenture", role: "Software Development Engineer", period: "Nov 2021 — Dec 2022", location: "India", domain: "Banking · Payments",
    points: [
      "Built React + Node.js payment and transaction screens for enterprise banking clients.",
      "Designed Spring Boot REST APIs for accounts, payments and statements with validation and secure access.",
      "Optimized API response times with Redis caching, connection pooling and SQL query tuning after profiling production bottlenecks.",
      "Migrated monolith modules to microservices on AWS so small teams could own features through release.",
      "Introduced GraphQL endpoints to stop frontend over-fetching on key screens.",
      "Expanded JUnit and Cypress automated tests to strengthen release confidence.",
      "Traced logs and profiled bottlenecks to resolve production issues in transaction workflows.",
      "Collaborated with product owners and designers in Agile sprints, translating user feedback into features and scheduled releases.",
    ],
    stack: ["React", "Node.js", "Spring Boot", "Redis", "SQL", "GraphQL", "AWS", "JUnit", "Cypress"],
  },
  {
    company: "Worksbot", role: "Associate Software Engineer", period: "Jan 2020 — Oct 2021", location: "India", domain: "Workflow Automation",
    points: [
      "Developed responsive React and JavaScript dashboards for enterprise workflow automation across browsers and devices.",
      "Built Node.js/Express REST APIs backed by MongoDB with request validation, error handling and consistent frontend integrations.",
      "Improved page rendering through React memoization, code splitting and image optimization, validating changes with browser profiling.",
      "Implemented JWT authentication and session management across API endpoints.",
      "Optimized MongoDB queries and indexes for high-traffic APIs and responsive interfaces.",
      "Created a reusable component library and responsive layouts for consistent UX.",
      "Added unit and integration tests for core application modules to support reliable incremental releases.",
      "Resolved bugs and delivered customer-requested features through biweekly Agile releases, owning implementation through verification.",
    ],
    stack: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB", "JWT", "Unit & Integration Testing"],
  },
];

export const projects: {
  title: string; year: string; kind: string; description: string; highlights: string[]; stack: string[]; link?: string;
}[] = [
  {
    title: "HPE Software Engineering Job Simulation", year: "2026", kind: "Simulation · Forage",
    description: "Completed HPE's guided back-end engineering simulation on Forage in 2026, building a Java/Spring Boot employee-management REST API with JSON uploads and HTTP request handling.",
    highlights: [
      "Employee-management REST API design and Spring Boot implementation with JSON uploads and HTTP request handling",
      "Service proposal shaped around the HPE GreenLake cloud context",
      "Verified endpoint behavior and wrote application unit tests",
    ],
    stack: ["Java", "Spring Boot", "REST APIs", "HTTP", "JSON", "Unit Testing", "HPE GreenLake Cloud Platform"],
  },
  {
    title: "Agentic Infrastructure Operations Assistant", year: "2026", kind: "AI · Multi-Agent",
    description: "An AI ops assistant where specialized agents handle service health, incident triage and remediation through structured tool calling.",
    highlights: [
      "MCP-compatible REST tool services exposing telemetry, deployment status and runbooks",
      "Schema validation and scoped permissions for every tool",
      "MongoDB execution tracing and Docker/Kubernetes deployment for Spring Boot and React services",
      "Agent-to-tool and API integration testing across operational scenarios",
    ],
    stack: ["Java", "Spring Boot", "React", "MongoDB", "Docker", "Kubernetes", "MCP"],
  },
  {
    title: "API Integration & Testing Platform", year: "2026", kind: "Platform · DevTools",
    description: "A platform to register APIs, manage environments, configure test scenarios and review execution history in one place.",
    highlights: [
      "Spring Boot REST APIs and MongoDB models for projects, endpoints, environments, suites, execution history and permissions",
      "React/TypeScript dashboard for API registration, environments, test configuration, workflow execution and results",
      "JWT auth, RBAC, request validation and Redis caching",
      "Docker/Kubernetes deployment and telemetry for latency, response codes and failures",
    ],
    stack: ["Java", "Spring Boot", "React", "TypeScript", "MongoDB", "Redis", "Docker", "Kubernetes"],
  },
];

export const education = [
  { degree: "Master of Science, Computer Science", school: "University of Central Missouri", period: "Jan 2024 — Dec 2025", note: "Lees Summit, MO, USA · Advanced Algorithms · Web Application Programming · Advanced Database Management Systems · Machine Learning · Python Programming · Data Science & AI" },
  { degree: "B.Tech Computer Science", school: "Bharath University of Science and Technology", period: "Jul 2017 — May 2021", note: "Chennai, TN, India" },
];

export const certifications = ["AWS Certified Developer — Associate"];
