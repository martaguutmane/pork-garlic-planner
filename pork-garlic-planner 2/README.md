# Pork & Garlic Winter Strategy Planner

A single-page React + TypeScript financial planner for Vercel.

## Deploy
Import this repository in Vercel. Framework: Next.js. Root directory: repository root. Use the default installation settings and npm run build.

## Model updates
Year 1 actuals and editable Year 2 defaults: lib/winter-config.ts.
Auditable calculations: lib/finance.ts.
User interface: app/page.tsx; styling: app/globals.css.
No database, API keys or environment variables are needed.
The original Excel workbook was not attached; calculations follow the user-supplied brief.
