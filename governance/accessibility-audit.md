# Accessibility Audit Report

**Audit date:** 2026-02-19  
**Tool:** axe-core v4.11.1 + Puppeteer  
**Standard:** WCAG 2.1 AA  
**Target file:** `dashboard/index.html`

## Summary

| Impact | Count |
|---|---|
| Critical | 0 |
| Serious | 0 |
| Moderate | 2 |
| Minor | 0 |
| Passes | 32 |

## Violations

| Rule | Impact | Element | Description | How to Fix |
|---|---|---|---|---|
| `landmark-one-main` | moderate | `html` | Ensure the document has a main landmark | Document should have one main landmark |
| `page-has-heading-one` | moderate | `html` | Ensure that the page, or at least one of its frames contains a level-one heading | Page should contain a level-one heading |

---

*Target: WCAG 2.1 AA — zero critical violations per release*
