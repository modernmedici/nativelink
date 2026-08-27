/**
 * Canonical marketing CTAs. Product hero is the source of truth (TRA-545);
 * overlapping destinations reuse these labels so chrome, heroes, and pricing
 * cannot drift apart (TRA-555).
 */
export const PRIMARY_CTA_LABEL = "Start in 10 minutes";
export const PRIMARY_CTA_HREF = "/docs";

export const TALK_TO_US_LABEL = "Talk to us";
export const TALK_TO_US_HREF = "/contact";

/** Docs and absolute URLs open in a new tab from persistent site chrome. */
export function opensInNewTab(href: string): boolean {
  return href === PRIMARY_CTA_HREF || href.startsWith("http");
}
