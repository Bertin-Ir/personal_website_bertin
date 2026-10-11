// Rendered as a 2-column grid (md:grid-cols-2), filled row-wise:
// row1 = [0,1], row2 = [2,3], row3 = [4,5] — order below places
// New York University / Tulsa ahead of MIT on the right, and
// New York University Paris ahead of CodePath on the left.
export const education = [
  {
    institution: 'New York University Abu Dhabi',
    location: 'Abu Dhabi, UAE',
    year: null,
    degree: 'Bachelor of Science in Computer Science',
    minor: 'Minor: Mathematics and Economics',
    expectedGraduation: '2028',
    gpa: '3.85',
    courses: null,
  },
  {
    institution: 'New York University',
    location: 'New York, USA',
    year: null,
    degree: null,
    minor: null,
    expectedGraduation: null,
    gpa: null,
    courses: 'Agile Software Engineering and DevOps',
  },
  {
    institution: 'New York University Paris',
    location: 'Paris, France',
    year: null,
    degree: null,
    minor: null,
    expectedGraduation: null,
    gpa: null,
    courses: 'Machine Learning, Computer Networking, Computer System Organization',
  },
  {
    institution: 'University of Tulsa',
    location: 'Tulsa, Oklahoma, USA',
    year: null,
    degree: null,
    minor: null,
    expectedGraduation: null,
    gpa: null,
    courses: 'Database Systems',
  },
  {
    institution: 'CodePath',
    location: 'San Francisco / Remote',
    year: null,
    degree: null,
    minor: null,
    expectedGraduation: null,
    gpa: null,
    courses: null,
    courseList: [
      'Intermediate Technical Interview Prep (2025)',
      'Applied AI Engineering (2026)',
    ],
  },
  {
    institution: 'MIT',
    location: 'Remote',
    year: '2026',
    degree: null,
    minor: null,
    expectedGraduation: null,
    gpa: null,
    courses: 'Blockchain and Money, Financial Mathematics',
  },
];

export interface ExperienceEntry {
  role: string;
  company: string;
  location: string;
  period: string;
  /** Sort key, 'YYYY-MM' of the role's start month. Used to derive stats (e.g. years of experience) and to keep this list ordered. */
  startDate: string;
  /** Which Work Experience tab the role appears under. */
  category: 'technical' | 'other';
  description?: string;
  bullets?: string[];
  /** Tech badges for this role. When omitted, badges are matched from the role text against data/skills.ts. */
  skills?: string[];
}

// Ordered reverse-chronologically by startDate (most recent first).
// Same-month starts keep the role order from the CV.
export const experience: ExperienceEntry[] = [
  {
    role: 'Data Scientist',
    company: 'Sun Wolf Industries',
    location: 'Oklahoma, US',
    period: '09/2026 – Present',
    startDate: '2026-09',
    category: 'technical',
    skills: ['GeoPandas', 'SQL', 'Pandas', 'NumPy', 'Matplotlib'],
    bullets: [
      'Conducted market and competitive analysis of the oil and gas drilling industry to uncover underserved demand, identify high-value business opportunities, and inform strategic growth decisions for Sun Wolf Energy.',
      'Developed a financial dashboard to track revenue, expenses, and financial performance, improving visibility into business performance and supporting data-driven operational and budgeting decisions.',
    ],
  },
  {
    role: 'Academic Center Assistant',
    company: 'NYU Tulsa',
    location: 'Oklahoma, US',
    period: '09/2026 – Present',
    startDate: '2026-09',
    category: 'other',
    description:
      'Supported daily Academic Center operations by coordinating events and conferences, managing office supplies and inventory records, and maintaining accurate administrative documentation to ensure efficient day-to-day operations.',
  },
  {
    role: 'Analytics Engineering Intern',
    company: 'Irembo',
    location: 'Kigali, Rwanda',
    period: '05/2026 – 08/2026',
    startDate: '2026-05',
    category: 'technical',
    skills: [
      'Authentication & Authorization',
      'FastAPI',
      'Dagster',
      'Keycloak',
      'OAuth2 Proxy',
      'Redis',
      'Kong',
      'Kubernetes',
      'Docker',
      'Helm',
      'HashiCorp Vault',
    ],
    bullets: [
      'Eliminated 100% of unauthorised access to production Dagster pipelines by designing and deploying a zero-trust authentication layer (Keycloak, OAuth2 Proxy, Redis, Kong) enforcing verified identity and MFA on every request across all environments.',
      'Designed, packaged, and deployed the complete platform infrastructure on Kubernetes using Helm charts — covering six interdependent services including the OAuth2 Proxy, Dagster pipeline orchestrator, Keycloak identity provider, HashiCorp Vault, Redis, and Kong — enabling consistent and repeatable deployments across environments through parameterised configuration.',
      'Standardised authentication and authorisation across multiple Dagster instances (dev, staging, sandbox, production) and extended the same framework to additional micro-services — decoupling the auth layer from application code so any Kong-fronted system can adopt it with zero code changes.',
      'Designed and delivered automated weekly pipeline performance reports for payment data infrastructure, tracking reliability and runtime metrics across multiple Dagster jobs processing millions of transactions. Boosted pipelines run success rate by 50%.',
    ],
  },
  {
    role: 'Technical Interview Scholar',
    company: 'CodePath',
    location: 'San Francisco, USA',
    period: '08/2025 – 12/2025',
    startDate: '2025-08',
    category: 'other',
    description:
      'Completed rigorous training in algorithms, data structures, and performance optimization, strengthening system-level reasoning and scalability awareness for real-world software and ML pipelines.',
  },
  {
    role: 'Research Analyst Intern',
    company: 'Mentora',
    location: 'Dubai, UAE',
    period: '07/2025 – 08/2025',
    startDate: '2025-07',
    category: 'technical',
    bullets: [
      'Researched and automated admissions data collection for 700+ leading universities worldwide, ensuring high accuracy and reliability.',
      'Designed data pipelines in Python to clean, validate, and structure datasets into a smart, searchable admissions database designed to serve students, parents, and advisors across global markets.',
      'Contributed to the strategic growth of Mentora by transforming raw university data into actionable insights that will inform advising and investor presentations. Used libraries such as pandas, NumPy, Seaborn, and Matplotlib.',
    ],
  },
  {
    role: 'Mentor',
    company: 'NYU Abu Dhabi Summer Academy',
    location: 'Abu Dhabi, UAE',
    period: '06/2025 – 08/2025',
    startDate: '2025-06',
    category: 'other',
    bullets: [
      'Mentored and guided Summer Academy Scholars by providing mathematics tutoring and academic support, offering strategies for effective workload management, and ensuring the timely completion of assignments.',
      'Fostered a supportive and disciplined residential environment for over 200 students through effective behavior management strategies, enhancing student well-being and holistic development.',
      'Coordinated between faculty, staff, and students to streamline program activities, resolve issues promptly, and enhance the overall Summer Academy experience.',
    ],
  },
  {
    role: 'Library Reference Assistant',
    company: 'New York University Abu Dhabi',
    location: 'Abu Dhabi, UAE',
    period: '01/2025 – 12/2025',
    startDate: '2025-01',
    category: 'technical',
    bullets: [
      'Trained users in effective research methodologies, including database navigation, source evaluation, and systematic literature review techniques.',
      'Supported research workflows by assisting with citation management, resource organization, and access to both print and digital collections.',
      'Contributed to the development and maintenance of library web content, enhancing accessibility of research guides and digital resources.',
    ],
  },
  {
    role: 'Field Monitor',
    company: 'Areco Rwanda Nziza',
    location: 'Kigali, Rwanda',
    period: '02/2023 – 12/2023',
    startDate: '2023-02',
    category: 'technical',
    description:
      'Leveraged GPS technology to map beneficiary locations, enabling accurate distribution of eco-friendly stoves and supporting project monitoring through accurate data collection and analysis.',
  },
];

export const languages = [
  { name: 'English', proficiency: 'Proficient' },
  { name: 'French', proficiency: 'Basic' },
  { name: 'Kinyarwanda', proficiency: 'Native' },
];

const FULL_RESUME_URL = 'https://docs.google.com/document/d/1hmz10GXteV-iObB-zuOtXsj4wHBN75hHs9ZMG0tL8mI/edit?usp=sharing';

export const aboutMe = {
  paragraphs: [
    'A coder at heart, a math enthusiast by inclination, and economics-driven by mindset. I bring analytical rigor and technical skill together to solve real-world problems and build systems that create measurable impact.',
    'My work spans machine learning, data science, and software engineering. I develop, train, fine-tune, and evaluate machine learning models, with experience in data preprocessing, feature engineering, model evaluation, and predictive analytics. I also work with real-world datasets to build data pipelines, uncover patterns, and turn complex data into actionable insights.',
    'Beyond data and AI, I enjoy building the systems that make technology useful in practice—from websites to mobile apps. I have experience designing databases and data models, developing software applications, building APIs, and working with cloud-native infrastructure.',
    'At the intersection of mathematics, computing, and real-world problems, I am particularly interested in building intelligent, reliable, and scalable systems—and continuously learning whatever is necessary to solve the problem at hand.',
  ],
  contactLink: '/contact/',
  fullResumeUrl: FULL_RESUME_URL,
};

export { FULL_RESUME_URL };
