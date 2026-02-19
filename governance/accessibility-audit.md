# Accessibility Audit Report

**Audit date:** 2026-02-19  
**Tool:** axe-core v4.11.1 + Puppeteer  
**Standard:** WCAG 2.1 AA  
**Target file:** `dashboard/index.html`

## Summary

| Impact | Count |
|---|---|
| Critical | 0 |
| Serious | 2 |
| Moderate | 2 |
| Minor | 0 |
| Passes | 32 |

## Violations

| Rule | Impact | Element | Description | How to Fix |
|---|---|---|---|---|
| `aria-hidden-focus` | serious | `#guide-panel` | Ensure aria-hidden elements are not focusable nor contain focusable elements | ARIA hidden element must not be focusable or contain focusable elements |
| `color-contrast` | serious | `.guide-btn` | Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds | Elements must meet minimum color contrast ratio thresholds |
| `landmark-one-main` | moderate | `html` | Ensure the document has a main landmark | Document should have one main landmark |
| `page-has-heading-one` | moderate | `html` | Ensure that the page, or at least one of its frames contains a level-one heading | Page should contain a level-one heading |

## Needs Review (1 items)

These items could not be automatically determined and require manual review:

- `color-contrast` — Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds

---

*Target: WCAG 2.1 AA — zero critical violations per release*
