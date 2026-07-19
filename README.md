# WayToChina — Website V1

Marketing website for WayToChina, a study-abroad agency helping students from
Morocco / MENA get into top Chinese universities — fully funded (scholarship)
or self-funded. Built from the client brief (`website-architecture-WayToChina.pdf`)
with `greatwall.ma` as the visual benchmark.

## Tech note (read first)

The build prompt assumed a Next.js starter, but the purchased template pack
(Nexsas v2.7.0) is **static HTML + compiled Tailwind + vanilla JS** — there is no
Next.js project in it. This site therefore follows the same stack as the template
it reuses: **plain HTML pages + one brand stylesheet + one JS file + Swiper**.
No build step is required — there is nothing to compile.

## Run it

Any static server works:

```bash
cd waytochina
python3 -m http.server 8931
# then open http://localhost:8931
```

Or just open `index.html` in a browser (everything works over file:// too).

## Deploy to Vercel

The repo is deploy-ready — `vercel.json` is included (clean URLs, cache and
security headers). No build step.

1. Push this folder to GitHub.
2. In Vercel: **Add New → Project → Import** the repo.
3. Framework Preset: **Other**. Leave Build Command and Output Directory
   **empty** (it's a static site served from the repo root).
4. Deploy.

`cleanUrls` means `/about.html` is served at `/about` etc. — internal `.html`
links keep working via automatic redirects.

Or from the CLI: `npx vercel` in this folder.

## Where to edit content (no layout code needed)

| What | File |
|---|---|
| Programs, services, stats, team, testimonials, partners, universities, FAQ, contact info | `data/site-data.js` — single source of truth, clearly commented |
| Hero background video | Replace `public/hero.mp4` (+ `public/hero-poster.jpg`) — keep the names |
| Proof video thumbnail ("You Could Be Next") | `images/proof-video-thumb.jpg` |
| Team / testimonial photos | `images/team/member-*.jpg`, `images/testimonials/student-*.jpg` |
| About page imagery | `images/about-story.jpg`, `images/about-founder.jpg` |
| Brand colors / fonts / spacing | `assets/waytochina.css` (`:root` tokens at the top) |
| Legal text | `privacy-policy.html`, `terms-conditions.html` (placeholder — replace before launch) |

All text currently in `data/site-data.js` is **placeholder** and marked as such.

## Pages

- `index.html` — homepage, 12 sections in the brief's exact order
- `about.html` — story, values, stats, team (`#team`)
- `services/` — the 5 canonical service detail pages:
  `consultation-guidance`, `document-preparation`, `admission-scholarship`,
  `visa-support`, `pre-departure-arrival`
- `universities.html` — static hand-curated list (deliberately NOT a database — out of scope for V1)
- `contact.html` — WhatsApp-first contact page (form is visual only at V1)
- `privacy-policy.html`, `terms-conditions.html`

The footer Services column is rendered from the same canonical list as the
homepage services grid (`data/site-data.js` → `services`), so the two can never
drift apart.

## Out of scope at V1 (per the brief)

No login/accounts, no searchable program database, no AI tools, no payment or
booking backend. The hero search bar is intentionally visual-only.

## Brand

- Red `#E9332B` (sampled from the Great Wall reference — their flat fill is
  `#FF0000`; ours is tempered slightly for accessible contrast on buttons),
  hover `#C4271F`
- Ink `#1A1A1A`, body `#4B5563`, muted `#6B7280`, line `#EAEAEA`, surface `#F7F7F7`
- Font: Inter Tight (Google Fonts, same family as the template)
- No emojis anywhere in UI copy
