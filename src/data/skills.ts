export interface Skill {
  name: string;
  category: string;
  level: number;
  tooltip?: string;
}

export const skills: Skill[] = [
  { name: 'Python', category: 'Languages', level: 95, tooltip: '5+ years, 15+ projects' },
  { name: 'C', category: 'Languages', level: 70, tooltip: 'Systems programming' },
  { name: 'C++', category: 'Languages', level: 65, tooltip: 'Performance-critical code' },
  { name: 'MATLAB', category: 'Languages', level: 75, tooltip: 'Numerical computing' },
  { name: 'HTML', category: 'Web', level: 85, tooltip: '' },
  { name: 'CSS', category: 'Web', level: 80, tooltip: '' },
  { name: 'Stata', category: 'Tools', level: 70, tooltip: 'Statistical analysis' },
  { name: 'Git/GitHub', category: 'Tools', level: 90, tooltip: 'Version control' },
  { name: 'Google Colab', category: 'Tools', level: 85, tooltip: '' },
  { name: 'Arduino', category: 'Tools', level: 60, tooltip: 'Embedded/IoT' },
  { name: 'Excel', category: 'Tools', level: 88, tooltip: '' },
  { name: 'LaTeX', category: 'Tools', level: 82, tooltip: 'Technical writing' },
  { name: 'Pandas', category: 'ML/Data', level: 92, tooltip: '' },
  { name: 'NumPy', category: 'ML/Data', level: 90, tooltip: '' },
  { name: 'Matplotlib', category: 'ML/Data', level: 85, tooltip: '' },
  { name: 'Scikit-Learn', category: 'ML/Data', level: 90, tooltip: '' },
  { name: 'Seaborn', category: 'ML/Data', level: 82, tooltip: '' },
  { name: 'PyTorch', category: 'ML/Data', level: 85, tooltip: 'Deep learning' },
];
