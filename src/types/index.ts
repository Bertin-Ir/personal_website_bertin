/** Experiment schema: used by ExperimentsSection and [slug].astro. */
export interface Experiment {
  id: string;
  title: string;
  problem: string;
  strategies: string;
  metrics: string;
  results: string;
  slug: string;
}

/** Skill layer: name + items for SkillsSection. */
export interface SkillLayer {
  name: string;
  items: string[];
  icon?: string;
}
