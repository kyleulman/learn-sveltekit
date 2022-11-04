# Project Actions

## To-do

- Add JS/TS toggle
- Add package manager toggle

## 11-04-22

- Test Font Load (font-local)
  - Add fonts locally
  - Compare local vs remote
    - Local - 881ms / 503ms
      - 2390ms
      - 545ms
      - 510ms
      - 476ms
      - 483ms
    - Remote - 1213ms / 932ms
      - 2340ms
      - 1500ms
      - 874ms
      - 670ms
      - 683ms
    - Local 2 - 1034ms / 837ms
      - 602 ms
      - 580 ms
      - 996 ms
      - 1820 ms
      - 1170 ms
    - Local 3 - 580ms
      - 717
      - 556
      - 562
      - 499
      - 564
    - Local 4 - 650ms
      - 756ms
      - 594ms
      - 581ms
      - 712ms
      - 609ms
- Test icons png vs webp
- Convert icons to webp
- Find more readable syntax highlighting
- General refactor
  - Remove hooks file
  - Document service worker global type (@types/serviceworker)
  - Update description
  - Add request wrapper

## 11-02-22

- Add prefetch to article links
- Fix maskable icons on mobile
- Fix double title in desktop PWA

## 11-01-22

- Add "slug" to "metadata" interface
- Update data prop to match API response
- Add more space between 'main' and 'footer'

## 10-31-22

- Start notes for hooks article
- Add robots.txt, handle non-article pages
- Migrate articles to ulman-digital
- Get articles from ulman-digital API
- Change port number to 1337
- Change url in fetch requests to env
- Update request headers

## 10-30-22

- Add service worker
- Add metadata component
- Update font
- Add icons & card, manifest.json, update description
- Fix Twitter card
- Update colors

## 10-29-22

- Initial commit
  - Initialize app w/TypeScript, ESLint, Prettier, Playwright
  - Update README
  - Add Tailwind
- Configure Vercel deployments
  - Initial deploy from "prod"
  - Configure "prev" deployments
  - Ignore deployments from "dev" ([ "$VERCEL_GIT_COMMIT_REF" == dev ])
- Add MDSveX, Add Markdown articles
- Add Tailwind typography plugin
- Add Tailwind forms plugin
- Plan project
- Migrate article planning from Notion
- Add index page
- Style project
  - Configure dark/light modes
  - Add syntax highlighting to code blocks
  - Alter .prose defaults
