// Stable anchor ids shared by the pages that render an entry and the pages that link to it.
export const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

/** "Analytics Engineering Intern" at "Irembo" -> "analytics-engineering-intern-irembo" */
export const experienceSlug = (e: { role: string; company: string }) => slugify(`${e.role} ${e.company}`);

/** Anchor id on /projects/ for a project card. */
export const projectAnchor = (id: string) => `project-${id}`;
