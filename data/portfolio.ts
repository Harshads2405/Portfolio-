export type SkillCategory =
  | "Programming"
  | "Backend"
  | "APIs"
  | "Frontend"
  | "Database"
  | "AI"
  | "Architecture"
  | "Tools"
  | "DevOps"
  | "Cloud";

export type ProjectIcon = "search" | "brain" | "layers" | "code" | "database" | "globe";

export type Skill = {
  name: string;
  category: SkillCategory | string;
};

export type Project = {
  title: string;
  tag: string;
  description: string;
  stack: string[];
  icon?: ProjectIcon;
  /** Optional URL for a live site, repository, or case study. */
  href?: string;
  /** The action text shown at the bottom of the card. */
  linkLabel?: string;
};

// Add, remove, or reorder skills here. The responsive grid and icon handling are automatic.
export const skills: Skill[] = [
  { name: "Python", category: "Programming" }, { name: "Django", category: "Backend" },
  { name: "Django REST", category: "APIs" }, { name: "FastAPI", category: "Backend" },
  { name: "Flask", category: "Backend" }, { name: "Vue.js", category: "Frontend" },
  { name: "React", category: "Frontend" }, { name: "Next.js", category: "Frontend" },
  { name: "PostgreSQL", category: "Database" }, { name: "MySQL", category: "Database" },
  { name: "LLMs", category: "AI" }, { name: "Groq AI", category: "AI" },
  { name: "OpenAI API", category: "AI" }, { name: "NLP", category: "AI" },
  { name: "RAG", category: "AI" }, { name: "Prompt Engineering", category: "AI" },
  { name: "REST APIs", category: "Architecture" }, { name: "Git / GitHub", category: "Tools" },
  { name: "Docker", category: "DevOps" }, { name: "Supabase", category: "Cloud" }
];

// Add projects here. Only title, tag, description, and stack are required.
export const projects: Project[] = [
  {
  title: "Enterprise AI Knowledge & Operations Copilot",
  tag: "AI • RAG • Enterprise SaaS",
  description: "Enterprise AI knowledge assistant with RAG, hybrid search, reranking, query rewriting, source citations, and automated retrieval and answer-quality evaluation.",
  stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "LangChain", "Groq AI", "Redis", "Next.js"],
  icon: "brain",
  href: "https://github.com/Harshads2405/enterprise-ai-knowledge-hub",
  linkLabel: "View on GitHub"
  },
  {
    title: "AI Resume Analyzer",
    tag: "AI • SaaS",
    description: "AI-powered resume analysis and career optimization platform with ATS scoring, resume parsing, keyword-gap detection and personalized coaching.",
    stack: ["Next.js", "React", "Supabase", "Groq AI"],
    icon: "search",
    href: "https://github.com/Harshads2405/ai-resume-analyzer",
    linkLabel: "View on GitHub"
  },
  {
    title: "AI Assistant Doctor",
    tag: "Healthcare AI",
    description: "Disease prediction and decision-support system using supervised machine learning, symptom analysis, a Flask API and patient-oriented recommendations.",
    stack: ["Python", "Flask", "ML", "MySQL"],
    icon: "brain",
    href: "https://github.com/Harshads2405/BE_Project/tree/main/Code",
    linkLabel: "View on GitHub"
  },
  {
    title: "Enterprise Immigration Platform",
    tag: "Production",
    description: "Scalable enterprise case-management backend with dynamic questionnaires, conditional branching, ERI/PERI mapping and configurable business rules.",
    stack: ["Django", "DRF", "Vue.js", "PostgreSQL"],
    icon: "layers",
    href: "https://welegal.ai/",
    linkLabel: "Website"
  }
];
