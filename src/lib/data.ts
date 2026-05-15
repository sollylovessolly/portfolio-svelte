export type Project = {
  id: string
  title: string
  file: string
  category: 'typescript' | 'javascript' | 'react'
  status: string
  accent: 'cyan' | 'pink' | 'gold'
  description: string
  stack: string[]
  code: string
  impact: string
  demo: string
  repo: string
  screenshot: string
}

export const profile = {
  name: 'SOLLY',
  displayName: 'Solly',
  title: 'Frontend Developer Intern',
  image: '/profile.png',
  linkedin: 'https://www.linkedin.com/in/oyindamola-solarin-b348ab3b6/',
  email: 'sollylovessolly@gmail.com',
  intro:
    'Self-taught frontend developer focused on building beautiful, responsive, and user-friendly web interfaces with React, JavaScript, TypeScript, Tailwind CSS, HTML, and CSS.',
}

export const navItems = [
  { id: 'root', label: 'ROOT' },
  { id: 'src', label: 'SRC' },
  { id: 'lib', label: 'LIB' },
  { id: 'log', label: 'LOG' },
]

export const projects: Project[] = [
  {
    id: 'todo-item-card',
    title: 'TODO_ITEM_CARD',
    file: 'todo.js',
    category: 'javascript',
    status: 'STABLE_DEPLOYED',
    accent: 'cyan',
    description:
      'Responsive and accessible Todo Task Card for HNG Stage 0, featuring semantic HTML, keyboard navigation, and required data-testid attributes.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    code: 'const task = {\n  title: "Learn frontend",\n  completed: false,\n};',
    impact: 'Highlights clean fundamentals, responsive layout, semantic structure, and careful accessibility details.',
    demo: 'https://todo-item-card-hng-stage-0.vercel.app/',
    repo: 'https://github.com/sollylovessolly/todo-item-card-hng-stage-0-',
    screenshot: '/projects/todo-item-card.png',
  },
  {
    id: 'profile-card',
    title: 'PROFILE_CARD',
    file: 'profile_card.jsx',
    category: 'react',
    status: 'STABLE_DEPLOYED',
    accent: 'pink',
    description:
      'A polished profile card interface for presenting personal details, links, and frontend identity in a compact responsive layout.',
    stack: ['React', 'CSS', 'JavaScript'],
    code: 'export function ProfileCard() {\n  return <Card user={solly} />;\n}',
    impact: 'Shows visual hierarchy, spacing discipline, responsive UI, and component composition.',
    demo: 'https://github.com/sollylovessolly',
    repo: 'https://github.com/sollylovessolly',
    screenshot: '/projects/interface-lab.svg',
  },
  {
    id: 'invoice-management-app',
    title: 'INVOICE_MNGT_APP',
    file: 'invoice_app.tsx',
    category: 'typescript',
    status: 'STABLE_DEPLOYED',
    accent: 'cyan',
    description:
      'Placeholder for the invoice management app. Add the final description, live URL, repository URL, and screenshot when ready.',
    stack: ['TypeScript', 'React', 'Tailwind CSS'],
    code: 'type Invoice = {\n  id: string;\n  total: number;\n};',
    impact: 'Reserved for a full dashboard workflow with forms, filters, invoice states, and responsive data views.',
    demo: 'https://comfy-moxie-6bc315.netlify.app/',
    repo: 'https://github.com/sollylovessolly/Invoice-Management-App',
    screenshot: '/projects/invoice.png',
  },
  {
    id: 'habit-tracker',
    title: 'HABIT_TRACKER',
    file: 'habit_tracker.tsx',
    category: 'react',
    status: 'STABLE_DEPLOYED',
    accent: 'pink',
    description:
      'A mobile-first Progressive Web App for tracking daily habits, built with Next.js, React, TypeScript, and Tailwind CSS.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    code: 'const streak = habits.reduce(\n  (count, habit) => count + habit.done,\n  0,\n);',
    impact: 'Demonstrates state-driven UI, mobile-first thinking, and useful everyday product interactions.',
    demo: 'https://habit-tracker-kappa-rose.vercel.app/',
    repo: 'https://github.com/sollylovessolly/habit-tracker',
    screenshot: '/projects/habit-tracker.png',
  },
  {
    id: 'solly-gram',
    title: 'SOLLY_GRAM',
    file: 'sollygram.tsx',
    category: 'typescript',
    status: 'ACTIVE_BUILD',
    accent: 'cyan',
    description:
      'End-to-end encrypted messaging app where messages are encrypted in the browser before anything is sent to the backend.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    code: 'const encrypted = await encrypt(\n  message,\n  recipient.publicKey,\n);',
    impact: 'Shows serious frontend engineering around security-minded UX, async flows, and polished app structure.',
    demo: 'https://end-to-end-encrypted-app.vercel.app/',
    repo: 'https://github.com/sollylovessolly/end-to-end-encrypted-app',
    screenshot: '/projects/sollygram.png',
  },
  {
    id: 'ai-page-summarizer',
    title: 'AI_PAGE_SUMMARIZER',
    file: 'summarizer.jsx',
    category: 'javascript',
    status: 'CLOAKED_READY',
    accent: 'gold',
    description:
      'An AI powered Chrome Extension built with Manifest V3 that extracts readable content from webpages, sends it to an AI API for summarization, and displays structured summaries with key insights in a clean popup interface.',
    stack: ['JavaScript', 'Chrome Extension', 'CSS'],
    code: 'const summary = await ai.summarize(\n  pageContent,\n);',
    impact: 'Combines practical AI tooling with a clean browser extension interface and structured output.',
    demo: 'https://github.com/sollylovessolly/AI-page-summarizer-chrome-extension',
    repo: 'https://github.com/sollylovessolly/AI-page-summarizer-chrome-extension',
    screenshot: '/projects/ai-page.png',
  },
  {
    id: 'solly-socials',
    title: 'SOLLY_SOCIALS',
    file: 'social_links.jsx',
    category: 'react',
    status: 'STABLE_DEPLOYED',
    accent: 'pink',
    description:
      'Placeholder for Solly Socials. Add the final project description, live URL, repository URL, and screenshot when ready.',
    stack: ['React', 'JavaScript', 'CSS'],
    code: 'const socials = links.map(\n  (link) => <SocialLink {...link} />,\n);',
    impact: 'Reserved for a social/link hub with clean visual identity and fast navigation.',
    demo: 'https://solly-socials.vercel.app/',
    repo: 'https://github.com/sollylovessolly/solly-socials',
    screenshot: '/projects/sollys-socials.png',
  },
  {
    id: 'portfolio',
    title: 'PORTFOLIO',
    file: 'portfolio.svelte',
    category: 'typescript',
    status: 'STABLE_DEPLOYED',
    accent: 'gold',
    description:
      'Placeholder for the final portfolio case study. Replace this with the deployed URL, repo, screenshot, and build notes.',
    stack: ['Svelte', 'TypeScript', 'GSAP'],
    code: 'const portfolio = mount(App, {\n  target: root,\n});',
    impact: 'Reserved for the full interactive portfolio build and submission case study.',
    demo: 'https://github.com/sollylovessolly/portfolio-svelte',
    repo: 'https://github.com/sollylovessolly/portfolio-svelte',
    screenshot: '/projects/typed-dashboard.svg',
  },
]

export const skills = [
  { label: 'React', level: 84, icon: 'RX', family: 'Frontend Core' },
  { label: 'JavaScript', level: 86, icon: 'JS', family: 'Frontend Core' },
  { label: 'TypeScript', level: 74, icon: 'TS', family: 'Typed Systems' },
  { label: 'Tailwind CSS', level: 82, icon: 'TW', family: 'Visual Engine' },
  { label: 'HTML / CSS', level: 90, icon: 'UI', family: 'Visual Engine' },
  { label: 'Python Basics', level: 48, icon: 'PY', family: 'Other Tools' },
]

export const quests = [
  {
    title: 'Frontend Developer Intern',
    date: 'Current',
    body: 'Building responsive web interfaces, writing cleaner code, and improving UI polish through focused frontend projects.',
    state: 'IN_PROGRESS',
  },
  {
    title: 'Frontend Growth Track',
    date: 'Ongoing',
    body: 'Sharpening React, JavaScript, Tailwind CSS, HTML, CSS, and design judgment through public GitHub projects.',
    state: 'COMPLETED',
  },
]

export const commands = [
  { key: '1', label: 'Open root protocol', target: 'root' },
  { key: '2', label: 'Inspect project repository', target: 'src' },
  { key: '3', label: 'View skill tree', target: 'lib' },
  { key: '4', label: 'Transmit contact packet', target: 'log' },
]
