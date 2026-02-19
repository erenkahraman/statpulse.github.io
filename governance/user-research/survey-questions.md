# User Feedback Survey — .Stat Suite Data Explorer
**Distribution:** Post-session and in-product popup survey
**Goal:** Continuous user satisfaction measurement aligned with KPI `community-issue-resolution`

## Section 1: System Usability Scale (SUS)
Standard 10-item SUS questionnaire, 5-point Likert (Strongly Disagree → Strongly Agree):
1. I think that I would like to use this system frequently.
2. I found the system unnecessarily complex.
3. I thought the system was easy to use.
4. I think that I would need the support of a technical person to use this system.
5. I found the various functions in this system were well integrated.
6. I thought there was too much inconsistency in this system.
7. I would imagine that most people would learn to use this system very quickly.
8. I found the system very cumbersome to use.
9. I felt very confident using the system.
10. I needed to learn a lot of things before I could get going with this system.

SUS scoring formula:
- Odd items: score - 1
- Even items: 5 - score
- Sum × 2.5 = SUS score (0–100)
- Target: ≥ 70 (above average usability threshold)

## Section 2: Task-Specific Satisfaction
After each task scenario:
- "How difficult was this task?" (1=Very Easy, 5=Very Difficult)
- "Did you find what you were looking for?" (Yes / Partially / No)
- Open: "What would have made this easier?"

## Section 3: In-Product Popup Survey
Short 3-question survey triggered after user downloads data (via .Stat DE popup feature):
1. "Did you find the data you were looking for?" (Yes / Partially / No)
2. "How would you rate your experience today?" (1–5 stars)
3. "Any comments?" (free text, optional)

Analytics integration: responses tagged with session_id and dataflow_id
for correlation with Google Analytics events.

## Section 4: Accessibility Feedback
- "Did you use any assistive technology during this session?" (Yes/No)
- If yes: "Did the platform work well with your assistive technology?" (Yes/Partially/No)
- Open: "Please describe any accessibility barriers you encountered."
