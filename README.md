# Taylor Lee — Portfolio

Personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Font:** Geist (Sans + Mono)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Install Dependencies

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deploy on Vercel

1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"New Project"**
4. Import your GitHub repository
5. Vercel auto-detects Next.js — click **"Deploy"**
6. Your site will be live in ~60 seconds

Alternatively, deploy directly from the CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles + Tailwind config
│   ├── layout.tsx        # Root layout with SEO metadata
│   └── page.tsx          # Main page composing all sections
└── components/
    ├── AnimatedSection.tsx  # Reusable scroll-triggered animation wrapper
    ├── SectionHeading.tsx   # Consistent section header component
    ├── Navbar.tsx           # Sticky navbar with mobile menu
    ├── Hero.tsx             # Hero section with CTA buttons
    ├── About.tsx            # About section with highlights
    ├── Projects.tsx         # Featured projects as case-study cards
    ├── Experience.tsx       # Work history in timeline format
    ├── Skills.tsx           # Skills grouped by category
    ├── Education.tsx        # Academic background
    ├── Contact.tsx          # Contact section with email + LinkedIn
    └── Footer.tsx           # Footer with links
```

## Customization

- **Resume:** Replace `public/Taylor-Lee-Resume.pdf` with your latest resume
- **Content:** All text content lives directly in each component file — edit the data arrays to update
- **Colors:** Accent color and palette defined in `tailwind.config.ts` and `globals.css`
- **SEO:** Metadata configured in `src/app/layout.tsx`
