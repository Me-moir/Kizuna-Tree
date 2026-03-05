# 日本協会 — Thomasian Nihon Kyoukai

**Thomasian Nihon Kyoukai** (トマス系日本協会) is the official website and digital hub of the Japanese culture organization at the University of Santo Tomas. It functions as an enhanced linktree — a single destination where members, alumni, and the public can explore upcoming events, follow our social channels, learn about the organization, and stay connected with the community.

---

## Features

- **Events Display** — Upcoming and past events with dates, descriptions, and registration or RSVP links
- **Social & Link Hub** — Curated links to all official social media pages, forms, and resources in one place
- **Organization Info** — About section covering the org's history, mission, and current officers
- **Gallery / Media** — Highlights from past events and activities
- **Announcements** — Pinned notices for members (e.g. deadlines, meeting schedules)
- **Responsive Design** — Optimized for mobile, since most visitors arrive from Instagram or Facebook

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5.x |
| UI Library | React 19.x |
| Styling | Tailwind CSS 3.x |
| Animations | Framer Motion |
| Fonts | Google Fonts (Japanese-capable) |
| Deployment | Vercel |

---

## Getting Started

**Prerequisites:** Node.js 18+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other scripts

```bash
npm run build   # Production build
npm run start   # Start production server
npm run lint    # Run ESLint
```

---

## Project Structure

```
src/
├── app/                    # Next.js App Router pages and layouts
│   ├── page.tsx            # Homepage / link hub
│   ├── events/             # Events listing and detail pages
│   └── about/              # Organization info and officers
├── components/
│   ├── EventCard.tsx       # Individual event display component
│   ├── LinkButton.tsx      # Styled link tile for the hub
│   ├── AnnouncementBanner/ # Pinned notice banner
│   └── ui/                 # Shared UI (nav, footer, modals)
├── content/                # Static content: events, links, officers data
│   ├── events.ts
│   └── links.ts
├── styles/                 # Global CSS and theme variables
├── hooks/                  # Custom React hooks
└── utils/                  # Helper functions
```

---

## Content Management

Events, links, and announcements are managed through static TypeScript data files in `src/content/`. No CMS is required — update the data files and redeploy to Vercel.

### Adding an Event

Open `src/content/events.ts` and add an entry to the array:

```ts
{
  id: "hanami-2025",
  title: "Hanami Gathering 2025",
  date: "2025-04-05",
  location: "UST Main Building Grounds",
  description: "Join us for our annual cherry blossom viewing event.",
  registrationUrl: "https://forms.google.com/...",
  image: "/images/events/hanami-2025.jpg",
}
```

### Adding a Link

Open `src/content/links.ts` and add an entry:

```ts
{
  label: "Follow us on Instagram",
  url: "https://instagram.com/tnk_ust",
  icon: "instagram",
}
```

---

## Contributing

1. Fork the repository and create a feature branch (`git checkout -b feature/your-feature`)
2. Follow the existing code style — TypeScript, Tailwind utility classes, and ESLint rules
3. For new components, add them under `src/components/` with a brief JSDoc comment
4. Open a pull request with a clear description of what changed and why

For questions or to report a bug, open an issue or reach out through the org's official channels.

---

## About the Organization

**Thomasian Nihon Kyoukai** (トマス系日本協会) is a recognized student organization at the University of Santo Tomas dedicated to the appreciation and promotion of Japanese language, culture, and the arts. From anime and manga to traditional tea ceremony and calligraphy, the org creates a space for Thomasians who share a love for all things Japanese.

---

## License

ISC — maintained by the TNK Web Committee.
