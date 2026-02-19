/**
 * @fileoverview Automated WCAG 2.1 AA accessibility audit for the StatPulse dashboard.
 *
 * Uses Puppeteer to load dashboard/index.html in a headless browser and runs
 * axe-core analysis. Results are written to governance/accessibility-audit.md.
 *
 * Usage: node scripts/accessibility-audit.js
 * npm alias: npm run audit:a11y
 */

import puppeteer from 'puppeteer';
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname, join } from 'path';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

const require = createRequire(import.meta.url);

const DASHBOARD_PATH = join(__dirname, '..', 'dashboard', 'index.html');
const OUTPUT_PATH    = join(__dirname, '..', 'governance', 'accessibility-audit.md');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** @param {string} msg */
const log  = (msg) => console.log(`[INFO]  ${new Date().toISOString()} ${msg}`);
/** @param {string} msg */
const warn = (msg) => console.warn(`[WARN]  ${new Date().toISOString()} ${msg}`);
/** @param {string} msg */
const err  = (msg) => console.error(`[ERROR] ${new Date().toISOString()} ${msg}`);

function impactLabel(impact) {
  const map = { critical: 'critical', serious: 'serious', moderate: 'moderate', minor: 'minor' };
  return map[impact] ?? impact;
}

// ---------------------------------------------------------------------------
// Report formatter
// ---------------------------------------------------------------------------

function formatReport(results) {
  const date = new Date().toISOString().split('T')[0];

  let axeVersion = 'unknown';
  try {
    const pkg = JSON.parse(
      readFileSync(require.resolve('axe-core/package.json'), 'utf8')
    );
    axeVersion = pkg.version;
  } catch { /* ignore */ }

  const counts = { critical: 0, serious: 0, moderate: 0, minor: 0 };
  for (const v of results.violations) {
    counts[v.impact] = (counts[v.impact] ?? 0) + 1;
  }

  let md = `# Accessibility Audit Report\n\n`;
  md += `**Audit date:** ${date}  \n`;
  md += `**Tool:** axe-core v${axeVersion} + Puppeteer  \n`;
  md += `**Standard:** WCAG 2.1 AA  \n`;
  md += `**Target file:** \`dashboard/index.html\`\n\n`;

  md += `## Summary\n\n`;
  md += `| Impact | Count |\n`;
  md += `|---|---|\n`;
  md += `| Critical | ${counts.critical} |\n`;
  md += `| Serious | ${counts.serious} |\n`;
  md += `| Moderate | ${counts.moderate} |\n`;
  md += `| Minor | ${counts.minor} |\n`;
  md += `| Passes | ${results.passes.length} |\n\n`;

  if (results.violations.length === 0) {
    md += `## Violations\n\nNo violations found.\n\n`;
  } else {
    md += `## Violations\n\n`;
    md += `| Rule | Impact | Element | Description | How to Fix |\n`;
    md += `|---|---|---|---|---|\n`;
    for (const v of results.violations) {
      const element = (v.nodes[0]?.target?.join(' ') ?? 'N/A')
        .replace(/\|/g, '\\|').replace(/`/g, '').substring(0, 60);
      const desc = v.description.replace(/\|/g, '\\|');
      const fix  = v.help.replace(/\|/g, '\\|');
      md += `| \`${v.id}\` | ${impactLabel(v.impact)} | \`${element}\` | ${desc} | ${fix} |\n`;
    }
    md += `\n`;
  }

  if (results.incomplete.length > 0) {
    md += `## Needs Review (${results.incomplete.length} items)\n\n`;
    md += `These items could not be automatically determined and require manual review:\n\n`;
    for (const item of results.incomplete) {
      md += `- \`${item.id}\` — ${item.description}\n`;
    }
    md += `\n`;
  }

  md += `---\n\n`;
  md += `*Target: WCAG 2.1 AA — zero critical violations per release*\n`;

  return md;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function runAudit() {
  log('Launching headless browser...');

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    const fileUrl = pathToFileURL(DASHBOARD_PATH).href;

    log(`Loading ${fileUrl}`);
    await page.goto(fileUrl, { waitUntil: 'domcontentloaded', timeout: 30_000 });

    // Read axe-core source and inject it into the page context
    const axeSource = readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');
    await page.evaluate(axeSource);

    log('Running axe-core analysis (WCAG 2.1 AA)...');
    const results = await page.evaluate(() =>
      // eslint-disable-next-line no-undef
      axe.run(document, {
        runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'best-practice'] },
      })
    );

    const report = formatReport(results);
    writeFileSync(OUTPUT_PATH, report, 'utf8');

    const critical = results.violations.filter(v => v.impact === 'critical').length;
    log(`Audit complete — ${results.violations.length} violation(s), ${results.passes.length} pass(es)`);
    log(`Report written to governance/accessibility-audit.md`);

    if (critical > 0) {
      err(`${critical} CRITICAL violation(s) found — release blocked per WCAG KPI`);
      process.exitCode = 1;
    }
  } finally {
    await browser.close();
  }
}

runAudit().catch(e => {
  err(`Audit failed: ${e.message}`);
  process.exit(1);
});
