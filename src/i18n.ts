/**
 * Languages the site can show. Vietnamese is turned off until its copy is
 * rewritten; set `enabled: true` (and add its routes) to bring it back.
 * The language switch only appears when two or more are enabled.
 */
export const languages = [
  { code: 'en', label: 'EN', name: 'English', enabled: true },
  { code: 'vi', label: 'VI', name: 'Tiếng Việt', enabled: false },
] as const

export type Lang = (typeof languages)[number]['code']

export const enabledLanguages = languages.filter(lang => lang.enabled)

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: 'numeric' })
}
