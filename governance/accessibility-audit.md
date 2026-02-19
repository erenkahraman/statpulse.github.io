# Accessibility Audit Report

**Audit date:** 2026-02-19  
**Tool:** axe-core v4.11.1 + Puppeteer  
**Standard:** WCAG 2.1 AA  
**Target file:** `dashboard/index.html`

## Summary

| Impact | Count |
|---|---|
| Critical | 0 |
| Serious | 1 |
| Moderate | 3 |
| Minor | 1 |
| Passes | 39 |

## Violations

| Rule | Impact | Element | Description | How to Fix |
|---|---|---|---|---|
| `aria-allowed-role` | minor | `article:nth-child(1)` | Ensure role attribute has an appropriate value for the element | ARIA role should be appropriate for the element |
| `color-contrast` | serious | `button[data-issue-idx="0"]` | Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds | Elements must meet minimum color contrast ratio thresholds |
| `heading-order` | moderate | `#report-body-0 > .report-body-inner > h4:nth-child(1)` | Ensure the order of headings is semantically correct | Heading levels should only increase by one |
| `landmark-one-main` | moderate | `html` | Ensure the document has a main landmark | Document should have one main landmark |
| `page-has-heading-one` | moderate | `html` | Ensure that the page, or at least one of its frames contains a level-one heading | Page should contain a level-one heading |

---

*Target: WCAG 2.1 AA — zero critical violations per release*
