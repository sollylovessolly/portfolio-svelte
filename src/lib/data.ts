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
  image: '/profile.svg',
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
    id: 'interface-lab',
    title: 'INTERFACE_LAB',
    file: 'polished_ui.tsx',
    category: 'react',
    status: 'STABLE_DEPLOYED',
    accent: 'cyan',
    description:
      'Responsive React interface focused on clean layout, polished micro-interactions, and friendly user experience.',
    stack: ['React', 'TypeScript', 'Tailwind CSS'],
    code: 'const buildUI = () => {\n  return <Interface polished />;\n};',
    impact: 'Shows frontend growth through modern components, responsive layout, and careful visual rhythm.',
    demo: 'https://github.com/sollylovessolly/portfolio-svelte',
    repo: 'https://github.com/sollylovessolly/portfolio-svelte',
    screenshot: '/projects/interface-lab.svg',
  },
  {
    id: 'js-toolkit',
    title: 'JS_TOOLKIT',
    file: 'frontend_tools.js',
    category: 'javascript',
    status: 'ACTIVE_BUILD',
    accent: 'pink',
    description:
      'A JavaScript-focused project space for interactive UI experiments, DOM logic, validation, and smooth browser behavior.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    code: 'function initApp() {\n  hydrateInteractions();\n  validateInputs();\n}',
    impact: 'Demonstrates comfort with browser fundamentals and interaction engineering.',
    demo: 'https://github.com/sollylovessolly/portfolio-svelte',
    repo: 'https://github.com/sollylovessolly/portfolio-svelte',
    screenshot: '/projects/js-toolkit.svg',
  },
  {
    id: 'typed-dashboard',
    title: 'TYPED_DASHBOARD',
    file: 'dashboard_core.ts',
    category: 'typescript',
    status: 'STABLE_DEPLOYED',
    accent: 'cyan',
    description:
      'TypeScript dashboard concept with reusable data structures, typed project records, and accessible UI states.',
    stack: ['TypeScript', 'Vite', 'CSS'],
    code: 'type Project = {\n  title: string;\n  stack: string[];\n};',
    impact: 'Highlights cleaner code habits and stronger component/data separation.',
    demo: 'https://github.com/sollylovessolly/portfolio-svelte',
    repo: 'https://github.com/sollylovessolly/portfolio-svelte',
    screenshot: '/projects/typed-dashboard.svg',
  },
  {
    id: 'cute-ui-kit',
    title: 'CUTE_UI_KIT',
    file: 'soft_components.jsx',
    category: 'react',
    status: 'CLOAKED_READY',
    accent: 'gold',
    description:
      'A modern component kit direction for cute, clean, good-looking interfaces with useful interaction states.',
    stack: ['React', 'Tailwind CSS', 'CSS'],
    code: 'export function Card() {\n  return <section className="soft-ui" />;\n}',
    impact: 'Captures the visual direction Solly wants to be known for: beautiful and useful interfaces.',
    demo: 'https://github.com/sollylovessolly/portfolio-svelte',
    repo: 'https://github.com/sollylovessolly/portfolio-svelte',
    screenshot: '/projects/cute-ui-kit.svg',
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
    title: 'Self-taught Frontend Growth Track',
    date: 'Ongoing',
    body: 'Sharpening React, JavaScript, TypeScript, Tailwind CSS, HTML, CSS, and design judgment through public GitHub projects.',
    state: 'COMPLETED',
  },
]

export const commands = [
  { key: '1', label: 'Open root protocol', target: 'root' },
  { key: '2', label: 'Inspect project repository', target: 'src' },
  { key: '3', label: 'View skill tree', target: 'lib' },
  { key: '4', label: 'Transmit contact packet', target: 'log' },
]
