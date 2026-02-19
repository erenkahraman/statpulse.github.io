# .Stat Suite Data Explorer — Usability Test Plan
**Product:** SIS-CC .Stat Suite Data Explorer
**Version:** [sprint/release]
**Prepared by:** Product Manager, SDPS Division
**Status:** Template

## Objectives
What specific PM questions this test answers — e.g.:
- Can first-time users find and download a specific SDMX dataflow within 3 minutes?
- Do users understand the filter panel well enough to narrow a dataset?
- Are error messages clear when a data query returns no results?

## Participants
- Target: 5–8 participants per round (Nielsen Norman: 5 users surface 85% of usability issues)
- Profile: data analysts at NSI member organisations, policy researchers, civil society data users
- Recruitment: SIS-CC community mailing list, OECD colleague network

## Methodology
- Moderated remote usability testing (60 min sessions)
- Think-aloud protocol
- Tasks completed on staging environment (not production)
- Screen + audio recorded with participant consent

## Task Scenarios (5 tasks)
Each task written from user perspective, no UI hints given:

1. **Find a dataset** — "You need annual tourism arrivals data for France. Find the dataset and tell me what you see."
2. **Filter and download** — "Download only the 2015–2022 data for France and Germany in CSV format."
3. **Understand metadata** — "Before downloading, find out who publishes this data and how frequently it is updated."
4. **Share a view** — "Share a link to this exact chart view with a colleague."
5. **API access** — "A developer colleague needs the REST API URL for this dataset. Find it."

## Metrics
| Metric | Measurement | Target |
|---|---|---|
| Task completion rate | % tasks completed without assistance | ≥ 80% |
| Time on task | Seconds per task | Baseline first round |
| Error rate | Wrong clicks before completion | < 3 per task |
| SUS Score | System Usability Scale (post-session survey) | ≥ 70 |
| Satisfaction | 5-point Likert per task | ≥ 4.0 |

## Session Structure
- 5 min: Introduction and consent
- 10 min: Warm-up questions about data work habits
- 35 min: Task scenarios (think-aloud)
- 10 min: Post-session interview + SUS survey

## Analysis
- Affinity mapping of observations per task
- Rainbow spreadsheet for cross-participant patterns
- Severity rating per issue: Critical / Serious / Minor
- Output: Usability findings report → GitHub Issue with label `user-research`

## Tools
- Video: Lookback.io or MS Teams recording
- Notes: structured observation sheet (see survey-questions.md)
- Analysis: FigJam affinity board
- Reporting: GitHub Issue per round
