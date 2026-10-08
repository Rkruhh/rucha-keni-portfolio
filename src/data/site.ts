export const profile = {
  name: "Rucha Dilip Keni",
  shortName: "Rucha Keni",
  title: "Supply Chain Analyst",
  location: "Florida, USA",
  email: "rucha.k@itjobinbox.com",
  phone: "+1 813-358-6151",
  phoneHref: "tel:+18133586151",
  linkedin: "https://www.linkedin.com/in/rucha-keni-5182171a4/",
  github: "https://github.com/Rkruhh",
  resumePath: "/RuchaKeni_Resume.pdf",
  summary:
    "Supply Chain Analyst with 5+ years of experience in medical devices, retail, manufacturing, and procurement. I forecast demand and manage inventory with Python, SQL, Excel, Power BI, and SAP MM—cutting forecast error, stockouts, and excess inventory while replacing manual reports with live dashboards.",
};

export const metrics = [
  {
    value: "38%→29%",
    label: "Lower forecast MAPE",
    detail: "Python and SQL demand models",
  },
  {
    value: "31–32%",
    label: "Fewer stockouts",
    detail: "Replenishment and safety stock",
  },
  {
    value: "$2.4M",
    label: "Excess inventory removed",
    detail: "Plus $2.1M at a second employer",
  },
  {
    value: "6→2 days",
    label: "Monthly reporting cycle",
    detail: "67% faster with Power BI",
  },
  {
    value: "74%→90%",
    label: "On-time delivery",
    detail: "Supplier scorecards in Power BI",
  },
  {
    value: "$1.6M",
    label: "SLOB inventory reduced",
    detail: "Consignment and hospital tracking",
  },
];

export const experience = [
  {
    company: "Johnson & Johnson",
    role: "Supply Chain Analyst II",
    location: "USA",
    dates: "Jul 2026 — Current",
    bullets: [
      "Support statistical demand forecast models in Python and SQL across 800+ medical device SKUs, integrating historical sales trends with commercial inputs to improve MAPE-based forecast accuracy against baseline.",
      "Maintain and enhance consignment stock and hospital inventory tracking dashboards in Power BI, reducing manual reconciliation effort by 40% and supporting SLOB inventory reduction of $1.6M.",
      "Coordinate S&OP/IBP demand review inputs with Commercial, Warehouse, Customer Service, and Quality teams across 6 distribution regions, contributing to a 14% reduction in forecast bias.",
      "Build scenario analysis models in Excel and SQL for new product launches and supply disruptions, supporting proactive mitigation for 25+ risk events and protecting 97% on-time delivery.",
      "Consolidate multi-source KPI reporting (forecast accuracy, inventory turnover, OTD) into a single Power BI suite, shrinking monthly reporting cycle from 6 days to 2 days (67% faster).",
    ],
  },
  {
    company: "Barnes & Noble Education, Inc.",
    role: "Supply Chain Analyst",
    location: "USA",
    dates: "Aug 2024 — May 2026",
    bullets: [
      "Modeled semester-driven textbook demand forecasts in SQL and Excel using historical sales and enrollment data, reducing peak-season stockouts by 32% across 700+ campus stores.",
      "Designed inventory replenishment plans in the ERP system for textbook seasons, improving fill rate from 88% to 95% while cutting post-semester excess inventory by $2.1M.",
      "Automated distribution planning reports allocating stock to stores based on regional demand patterns, reducing manual planning time by 45% and improving store-level in-stock rates by 18%.",
      "Developed KPI dashboards for order fulfillment and inventory levels in Power BI, giving leadership real-time visibility and reducing weekly reporting effort by 50%.",
      "Analyzed sales and inventory data in SQL to identify slow-moving titles, driving markdown and reallocation decisions that improved inventory turnover by 13%.",
      "Coordinated with warehouse and logistics teams on distribution schedules, reducing average order-to-store lead time by 2.1 days (24% improvement) during peak season.",
    ],
  },
  {
    company: "Capgemini Technology Services",
    role: "Supply Chain Analyst",
    location: "India",
    dates: "Aug 2021 — Jun 2024",
    bullets: [
      "Built supplier scorecards in Power BI integrating delivery, quality, and spend data from SAP MM, improving on-time delivery from 74% to 90% across 40+ managed suppliers and reducing quality escalations by 30%.",
      "Developed statistical demand forecast models in Python and SQL for a global manufacturing client, integrating 3 years of historical sales with seasonality and promotional inputs, reducing weighted MAPE from 38% to 29% across 600+ SKUs.",
      "Automated safety stock and replenishment calculations in SQL based on demand variability and supplier lead times, reducing stockouts by 31% across A-class SKUs while maintaining 95% service level and cutting excess inventory by $2.4M.",
      "Designed S&OP demand review dashboards in Power BI consolidating demand plans, supply plans, and inventory positions across 8 distribution regions, reducing planning cycle time from 11 days to 6 days.",
      "Configured and executed MRP runs in SAP MM (MRP type PD/VB), optimizing lot-size and safety-stock parameters to improve material planning accuracy by 25% and reduce expedited freight costs by $340K annually.",
      "Conducted root cause analysis on 15+ supplier delivery delay events using Python and SQL, applying Pareto and 5-Why analysis that reduced average procurement lead time by 3.1 days (26% improvement).",
    ],
  },
  {
    company: "Siemens",
    role: "Procurement Analyst",
    location: "India",
    dates: "Aug 2020 — Jul 2021",
    bullets: [
      "Analyzed supplier quotes for technical components (motors, gearboxes, valves) in Excel, producing bid summaries that improved cost estimation accuracy by 17% across 120+ project bids.",
      "Aligned RFQ requirements with project specifications for 90+ procurement packages, reducing clarification cycles by 25% and accelerating bid turnaround.",
      "Maintained historical bid data and pricing benchmarks, enabling 15% faster vendor negotiations and more informed future cost estimates.",
      "Prepared vendor evaluation reports comparing techno-commercial value rather than lowest price, improving data-driven vendor selection by 20% and reducing post-award disputes.",
      "Presented procurement decision inputs to Project Procurement Managers, cutting decision-making time by 30% and improving project bidding competitiveness.",
      "Tracked purchase order records and pricing history in Excel, improving pricing transparency by 35% and supporting repeatable cost benchmarking.",
    ],
  },
];

export const projects = [
  {
    name: "Consumer Electronics Supply Chain Case Study",
    href: "https://github.com/Rkruhh/Supply-Chain-Case-Study",
    tags: ["Python", "SQL", "Excel", "Planning"],
    summary:
      "End-to-end supply and inventory planning across DTC, marketplace, and retail. Cleaned multi-system inventory and SKU data and scored forecast bias versus noise to isolate true demand signal.",
    highlights: [
      "Identified a 2,100-unit book error and a 1,260-unit duplicate receipt",
      "Restated sellable stock (ATP) by colorway and location",
      "13-week buy plan with safety stock from actual lead-time variance",
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
    title: "Languages & Querying",
    items: [
      "Python (pandas, NumPy, statsmodels)",
      "SQL",
      "Excel (advanced formulas, pivot tables, scenario modeling)",
    ],
  },
  {
    title: "Analytics & Visualization",
    items: [
      "Power BI",
      "KPI Dashboarding",
      "Executive Reporting",
      "Root Cause Analysis (Pareto, 5-Why)",
      "Scenario & What-If Analysis",
    ],
  },
  {
    title: "Planning & Forecasting",
    items: [
      "Statistical Demand Forecasting",
      "Forecast Accuracy (MAPE, Bias)",
      "S&OP / IBP",
      "Demand Review",
      "Safety Stock Optimization",
      "Replenishment Planning",
      "Distribution Planning",
    ],
  },
  {
    title: "Supply Chain & Inventory",
    items: [
      "Inventory Optimization",
      "SLOB Reduction",
      "Consignment Stock Management",
      "Inventory Turnover",
      "Fill Rate",
      "On-Time Delivery (OTD)",
      "Lead Time Reduction",
    ],
  },
  {
    title: "Procurement & Supplier Management",
    items: [
      "Supplier Scorecards",
      "Vendor Evaluation",
      "RFQ / Bid Analysis",
      "Cost Benchmarking",
      "Purchase Order Tracking",
    ],
  },
  {
    title: "ERP & Systems",
    items: ["SAP MM", "MRP Configuration (PD/VB)", "ERP Replenishment Planning"],
  },
  {
    title: "Process & Collaboration",
    items: [
      "Cross-Functional Stakeholder Management",
      "Report Automation",
      "Process Improvement",
      "Data-Driven Decision Making",
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
];

export const education = [
  {
    school: "University of North Carolina at Charlotte",
    credential: "Master of Science in Information Technology",
    location: "Charlotte, NC, US",
    dates: "May 2026",
  },
  {
    school: "University of Mumbai",
    credential: "Bachelor of Engineering in Computer Science",
    location: "Mumbai, India",
    dates: "May 2021",
  },
];

export const nav = [
  { href: "#work", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certs", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];
