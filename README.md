# SYS_ARCH_v2.0.4 - Interactive Svelte Portfolio

Cyber-terminal developer portfolio built for the Frontend Wizards Stage 5b brief. The experience presents projects, skills, career quests, command-driven navigation, theme controls, reduced-motion support, and a validated contact uplink.

## Setup

```bash
npm install
npm run dev
npm run build
```

## Architecture

- `src/App.svelte` owns the interactive shell, section navigation, command palette, modal project viewer, theme state, reduced-motion state, GSAP choreography, and contact form behavior.
- `src/lib/ProjectCard.svelte` and `src/lib/Meter.svelte` provide reusable UI building blocks for project artifacts and telemetry meters.
- `src/lib/data.ts` keeps project, skill, quest, nav, and command data separate from presentation.
- `src/style.css` contains the terminal design system, responsive layouts, focus states, motion fallbacks, and theme variables.
- `public/resume.txt` provides a real downloadable manifest so the resume CTA does not point at a missing file.

## Animation Decisions

- GSAP drives the opening reveal sequence, title blur clear, scan-line loop, and slow biometric frame rotation.
- CSS handles lightweight micro-interactions such as hover lifts, focus rings, cursor blink, meters, and panel glow states.
- Motion is intentionally restrained around transform and opacity to keep animation smooth.
- A reduced-motion toggle and `prefers-reduced-motion` handling disable nonessential motion.

## Performance Optimization

- Built with Vite and Svelte for a small production bundle.
- Data is local and static, avoiding blocking API calls.
- Canvas background is capped to a modest particle count and device pixel ratio.
- Interactions use transform/opacity where possible.
- Assets are CSS-driven or text-based, avoiding heavy image payloads.

## Accessibility

- Semantic sections, form labels, live status text, and keyboard-friendly controls.
- Visible focus states across links, buttons, inputs, and dialogs.
- Skip link for fast keyboard navigation.
- Command palette supports `Ctrl/Cmd + K` and `Escape`.
- Theme and motion preferences persist in local storage.

## Trade-offs

- This implementation uses Svelte with section navigation rather than SvelteKit routing to stay focused on a fast single-page portfolio experience.
- Project demo links point to the repository until final deployments for each project are available.
- The contact form uses sanitized `mailto:` delivery to avoid exposing secrets or requiring a backend integration.
