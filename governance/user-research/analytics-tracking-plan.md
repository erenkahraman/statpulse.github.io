# Analytics Tracking Plan — .Stat Suite Data Explorer
**Tool:** Google Analytics 4 (via Google Tag Manager)
**Reference:** .Stat DE analytics configuration docs
**Owner:** Product Manager, SDPS

## Measurement Objectives
Translate PM questions into measurable GA4 events:

| PM Question | GA4 Event | Dimensions |
|---|---|---|
| Which dataflows do users access most? | `dataflow_viewed` | dataflow_id, agency_id |
| Do users complete downloads? | `data_downloaded` | dataflow_id, format (CSV/JSON/XML) |
| Where do users drop off? | `filter_abandoned` | dataflow_id, step |
| Are shared links used? | `shared_view_opened` | dataflow_id, source |
| Do users find search results relevant? | `search_result_clicked` | query, position |
| How often do API users switch to UI? | `api_url_copied` | dataflow_id |

## Key Events to Implement
```javascript
// Dataflow viewed
gtag('event', 'dataflow_viewed', {
  dataflow_id: 'OECD.CFE,INBOUND@TOURISM_TRIPS,2.0',
  agency: 'OECD.CFE',
  source: 'search' // or 'browse', 'direct_link'
});

// Download completed
gtag('event', 'data_downloaded', {
  dataflow_id: 'OECD.CFE,INBOUND@TOURISM_TRIPS,2.0',
  format: 'csv',
  row_count: 1240
});
```

## KPI Dashboard Configuration (Google Analytics)
Custom GA4 report covering:
- MAU (Monthly Active Users) — target: track baseline, improve MoM
- Avg session duration — target: > 4 minutes (indicates data exploration)
- Download completion rate — target: > 60% of dataflow_viewed events
- Search → click rate — target: > 40% of searches result in a dataflow view
- Return visitor rate — target: > 30%

## Privacy & Compliance
- IP anonymisation enabled (GA4 default)
- No PII collected
- Cookie consent banner required per EU ePrivacy Directive
- Data retention: 14 months (GA4 default)
- OECD data processing agreement with Google in place before activation
