export interface Skill {
  name: string;
  category: 'Languages' | 'Technologies' | 'Libraries & Frameworks';
}

export const skills: Skill[] = [
  // Languages
  { name: 'Python', category: 'Languages' },
  { name: 'C', category: 'Languages' },
  { name: 'C++', category: 'Languages' },
  { name: 'MATLAB', category: 'Languages' },
  { name: 'SQL', category: 'Languages' },
  // Technologies
  { name: 'HTML', category: 'Technologies' },
  { name: 'CSS', category: 'Technologies' },
  { name: 'Dagster', category: 'Technologies' },
  { name: 'Kubernetes', category: 'Technologies' },
  { name: 'Docker', category: 'Technologies' },
  { name: 'Kong', category: 'Technologies' },
  { name: 'Stata', category: 'Technologies' },
  { name: 'Git/GitHub', category: 'Technologies' },
  { name: 'PostgreSQL', category: 'Technologies' },
  { name: 'Google Colab', category: 'Technologies' },
  { name: 'Arduino', category: 'Technologies' },
  { name: 'Excel', category: 'Technologies' },
  { name: 'Notion', category: 'Technologies' },
  // Libraries & Frameworks
  { name: 'Pandas', category: 'Libraries & Frameworks' },
  { name: 'NumPy', category: 'Libraries & Frameworks' },
  { name: 'Matplotlib', category: 'Libraries & Frameworks' },
  { name: 'Scikit-Learn', category: 'Libraries & Frameworks' },
  { name: 'Seaborn', category: 'Libraries & Frameworks' },
  { name: 'PyTorch', category: 'Libraries & Frameworks' },
  { name: 'Keras', category: 'Libraries & Frameworks' },
  { name: 'FastAPI', category: 'Libraries & Frameworks' },
  { name: 'Node.js', category: 'Libraries & Frameworks' },
];
