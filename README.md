# Space Portfolio

A cinematic, space-themed personal portfolio built with Next.js (App Router), Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Assembles all sections
  globals.css         Tailwind + global styles, reduced-motion support
components/
  Navbar.tsx          Sticky glass nav with scroll-spy active state
  Hero.tsx            Headline entrance animation, floating planet, parallax starfield
  FloatingPlanet.tsx  Orbiting planet with scroll-linked parallax
  Starfield.tsx       Twinkling generated starfield
  NebulaField.tsx     Ambient drifting glow blobs
  About.tsx           Bio + stat cards
  Skills.tsx          Skill card grid with hover glow
  Projects.tsx / ProjectCard.tsx  Interactive project cards
  Experience.tsx      Scroll-driven "trajectory" timeline
  Contact.tsx         Glass contact form with success state
  Footer.tsx
  ScrollProgress.tsx  Top progress bar
  Reveal.tsx           Shared scroll-reveal wrapper
  SectionHeader.tsx    Shared animated section header
lib/
  data.ts             Content: skills, projects, experience
```

## Customizing

- Edit copy and content in `lib/data.ts` and directly inside `Hero.tsx` / `About.tsx` / `Contact.tsx`.
- Colors and fonts live in `tailwind.config.ts` (`nebula.*` palette).
- Replace social links in `components/Contact.tsx`.
- All motion respects `prefers-reduced-motion` via `app/globals.css`.

## Optional: Three.js depth layer

The starfield/nebula are pure CSS + Framer Motion for performance. If you want true 3D depth, install `@react-three/fiber` and `@react-three/drei` and swap `Starfield.tsx` for a `<Canvas>` scene with an instanced star field and a `<Float>`-wrapped planet mesh — the rest of the layout (parallax hooks, section structure) will work unchanged.
