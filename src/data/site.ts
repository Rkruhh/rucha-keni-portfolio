export const profile = {
  name: "Rucha Dilip Keni",
  shortName: "Rucha Keni",
  title: "Data Analyst",
  location: "Florida, United States",
  email: "rucha.k@itjobinbox.com",
  phone: "+1 813-358-6151",
  phoneHref: "tel:+18133586151",
  linkedin: "https://www.linkedin.com/in/rucha-keni-5182171a4/",
  github: "https://github.com/Rkruhh",
  resumePath: "/RuchaKeni_Resume.pdf",
  summary:
    "Analyst with 3+ years of experience turning messy operational and ERP data into decision-ready dashboards and automated pipelines—so teams can move faster with fewer surprises.",
};

export const metrics = [
  {
    value: "40%",
    label: "Faster executive decisions",
    detail: "Power BI executive dashboard",
  },
  {
    value: "5M+",
    label: "Daily records processed",
    detail: "SQL + Python ETL",
  },
  {
    value: "28%",
    label: "Fewer data errors",
    detail: "Validation pipelines",
  },
  {
    value: "45 min",
    label: "Reporting cycle",
    detail: "Down from 6 hours",
  },
  {
    value: "12%",
    label: "Fewer stockouts",
    detail: "Demand vs. availability analysis",
  },
  {
    value: "7.2%",
    label: "YoY spend reduction",
    detail: "Cost and performance analytics",
  },
];

export const experience = [
  {
    company: "Holiday Channel",
    role: "Analyst",
    location: "USA",
    dates: "Jul 2026 — Present",
    bullets: [
      "Engineered a Python + SQL data validation and reconciliation pipeline to process and sync 5K+ Supabase records across content and marketplace data, automating duplicate detection, missing-value checks, and consistency validation.",
      "Developed Power BI dashboards and KPI reports covering content, search, marketplace, and user-behavior metrics, using trend and anomaly analysis to track operational KPIs through automated, centralized reporting.",
    ],
  },
  {
    company: "Barnes & Noble Education, Inc.",
    role: "Supply Chain Data Analyst",
    location: "USA",
    dates: "Aug 2024 — May 2026",
    bullets: [
      "Analyzed 20K–30K records across sales, inventory, course requirements, and enrollment to find demand vs. availability gaps, reducing stockout incidents by 12% and cutting external purchase volume by 10% through internal transfers.",
      "Built a recurring Power BI dashboard with DAX measures that consolidated operations KPIs, purchase orders, and shipment data—cutting weekly reporting time by 5 hours and resolving over 90% of data discrepancies in the same cycle.",
    ],
  },
  {
    company: "Capgemini Technology Services",
    role: "Analyst",
    location: "India",
    dates: "Aug 2021 — Jun 2024",
    bullets: [
      "Led a Power BI executive dashboard integrating SAP and Oracle ERP data, giving leadership real-time KPI visibility and improving decision-making speed by 40%.",
      "Designed automated SQL + Python ETL pipelines to cleanse and validate 5M+ daily records, reducing processing errors by 28% and cutting reporting time from 6 hours to 45 minutes; statistical root-cause analysis reduced forecast bias by 9%.",
      "Built Tableau + SQL spend and performance analytics that supported a 7.2% YoY cost reduction; analyzed order-to-cash exceptions and contributed to SOP improvements that reduced fulfillment exceptions by 30%.",
    ],
  },
  {
    company: "Siemens",
    role: "Operations Analyst",
    location: "India",
    dates: "Jan 2020 — Jul 2021",
    bullets: [
      "Analyzed availability, balances, purchase orders, and usage in SAP and Excel, flagging shortages, excess, and delayed orders 3–7 days before they could affect operations.",
      "Automated and consolidated weekly operations reporting, reducing report preparation time by 20%, and partnered with cross-functional teams to cut delay incidents by 15%.",
    ],
  },
];

export const projects = [
  {
    name: "Customer Electronics Case Study",
    href: "https://github.com/Rkruhh/Supply-Chain-Case-Study",
    tags: ["Planning", "ATP", "Forecast bias", "Python"],
    summary:
      "End-to-end planning case across DTC, marketplace, and retail. Cleaned multi-system inventory and SKUs, scored forecast bias vs. noise, and rebuilt a 13-week buy plan from actual lead-time variance.",
    highlights: [
      "Identified a 2,100-unit error and 1,260-unit duplicate receipt",
      "Restated sellable stock (ATP) by colorway and location",
      "Rebuilt true cost/order and a not-just-margin allocation rule",
    ],
  },
  {
    name: "Supply Chain Analytics and Optimization",
    href: "https://github.com/Rkruhh/PandasProjects",
    tags: ["Pandas", "KPIs", "Inventory", "Suppliers"],
    summary:
      "Analyzed a beauty supply-chain dataset covering inventory, demand, supplier performance, lead times, manufacturing cost, shipping cost, and defect rates.",
    highlights: [
      "Developed operational KPIs and visualizations",
      "Surfaced inventory risk, supplier inefficiency, and cost drivers",
      "Mapped opportunities for process improvement",
    ],
  },
  {
    name: "Content Engine",
    href: "https://github.com/Rkruhh/ContentEngine",
    tags: ["Next.js", "TypeScript", "AI SDK", "Evals"],
    summary:
      "Draft → evaluate → revise loop for technical writing. Stateless Next.js app that generates a draft, scores it against a rubric, and revises until the writing meets the brief.",
    highlights: [
      "Structured evals with Zod schemas and a pass/fail harness",
      "Groq-backed generate/revise pipeline via the Vercel AI SDK",
      "Unit tests for rubric scoring and pipeline behavior",
    ],
  },
  {
    name: "TheTechies — SAS Healthcare Pipeline",
    href: "https://github.com/Rkruhh/TheTechies",
    tags: ["SAS", "Clinical data", "ANOVA", "Visual Analytics"],
    summary:
      "Team SAS pipeline on the Mayo Clinic PBC dataset (418 patients). Ingests, validates, and analyzes a randomized clinical trial, then reports outcomes in SAS Visual Analytics.",
    highlights: [
      "Data quality checks, range validation, and trial vs. registry split",
      "Median/mode imputation, derived clinical features, ANOVA and survival analysis",
      "Interactive VA dashboard covering patient mix, biomarkers, and outcomes",
    ],
  },
  {
    name: "Refund Voice Agent",
    href: "https://github.com/Rkruhh/refund_voice_agent",
    tags: ["Python", "ElevenLabs", "Voice AI", "State machine"],
    summary:
      "Voice-driven refund proof of concept: collect identity, look up the order, check eligibility, and close the loop with auditable artifacts.",
    highlights: [
      "Conversation state machine from email → last-4 → order number",
      "Eligibility engine with eligible and ineligible trial paths",
      "Decision logs, receipts, transcripts, and per-call cost metrics",
    ],
  },
];

export const skillGroups = [
  {
    title: "Operations & Business Analytics",
    items: [
      "Supply Chain Management",
      "Inventory Optimization",
      "Demand Planning & Forecasting",
      "S&OP",
      "Procurement Analytics",
      "PO Management",
      "Supplier Performance",
      "Logistics & Freight Analytics",
      "Order-to-Cash (O2C)",
    ],
  },
  {
    title: "Data & Analytics",
    items: [
      "SQL (PostgreSQL, MySQL, T-SQL)",
      "Python (Pandas, NumPy, SciPy)",
      "Power BI & DAX",
      "Tableau",
      "Advanced Excel, VBA, Power Query",
      "Data Modeling",
      "KPI Analysis & Reporting",
      "Dashboard Development",
    ],
  },
  {
    title: "ERP, ETL & Data Management",
    items: [
      "SAP MM/SD",
      "Oracle ERP",
      "ERP Data Integration",
      "ETL Pipelines",
      "Data Cleansing & Validation",
      "Data Quality",
      "Reporting Automation",
    ],
  },
  {
    title: "Process Improvement & Quality",
    items: [
      "Root Cause Analysis",
      "Process Mapping",
      "Lean Six Sigma",
      "SOP Development",
      "Agile/Scrum",
      "Functional, Integration & Regression Testing",
      "Jira",
    ],
  },
];

export const certifications = [
  {
    name: "CSCMP Supply Chain Foundations",
    issuer: "LinkedIn Learning Community",
    dates: "Sep 2026",
  },
  {
    name: "Introduction to Power BI",
    issuer: "DataCamp",
    dates: "May 2026",
  },
  {
    name: "Introduction to SQL",
    issuer: "DataCamp",
    dates: "May 2026",
  },
  {
    name: "Six Sigma White Belt",
    issuer: "LinkedIn Learning Community",
    dates: "Sep 2026",
  },
  {
    name: "Introduction to Regression with Statsmodels in Python",
    issuer: "DataCamp",
    dates: "Sep 2025",
  },
  {
    name: "A/B Testing in Python",
    issuer: "DataCamp",
    dates: "Sep 2025",
  },
  {
    name: "Analysis and Reporting for Supply Chain Management",
    issuer: "PMI",
    dates: "Sep 2026",
  },
  {
    name: "Explainable AI in Python",
    issuer: "DataCamp",
    dates: "Oct 2025",
  },
  {
    name: "Working with Hugging Face",
    issuer: "DataCamp",
    dates: "Oct 2025",
  },
  {
    name: "Deep Learning for Text with PyTorch",
    issuer: "DataCamp",
    dates: "Oct 2025",
  },
  {
    name: "Introduction to Snowflake",
    issuer: "DataCamp",
    dates: "Oct 2025",
  },
  {
    name: "Introduction to Generative AI in Snowflake",
    issuer: "DataCamp",
    dates: "Oct 2025",
  },
  {
    name: "Introduction to Databricks",
    issuer: "DataCamp",
    dates: "Nov 2025",
  },
  {
    name: "Machine Learning with PySpark",
    issuer: "DataCamp",
    dates: "Sep 2025",
  },
];

export const education = [
  {
    school: "University of North Carolina at Charlotte",
    credential: "MS, Information Technology",
    location: "Charlotte, NC, US",
    dates: "Aug 2024 — May 2026",
  },
  {
    school: "University of Mumbai",
    credential: "BE, Computer Science",
    location: "Mumbai, India",
    dates: "Jun 2017 — May 2021",
  },
];

export const nav = [
  { href: "#work", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certs", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];
