const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

// Whole-token match; alternatives like "Git/GitHub" match either side. Case-insensitive
// ("pandas" == "Pandas") except for names that are also everyday words or single letters.
const CASE_SENSITIVE = new Set(['C', 'Excel', 'Notion']);
export function skillMatcher(name: string): RegExp {
  const alts = name.split('/').map(escapeRe).join('|');
  return new RegExp(`(?<![A-Za-z0-9+#])(?:${alts})(?![A-Za-z0-9+#])`, CASE_SENSITIVE.has(name) ? '' : 'i');
}
