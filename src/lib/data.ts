export type Project = {
  id: string
  title: string
  file: string
  category: 'svelte' | 'react' | 'systems'
  status: string
  accent: 'cyan' | 'pink' | 'gold'
  description: string
  stack: string[]
  code: string
  impact: string
  demo: string
  repo: string
}

export const navItems = [
  { id: 'root', label: 'ROOT' },
  { id: 'src', label: 'SRC' },
  { id: 'lib', label: 'LIB' },
  { id: 'log', label: 'LOG' },
]

export const projects: Project[] = [
  {
    id: 'neural-dash',
    title: 'NEURAL_DASH_v1',
    file: 'quantum_engine.svelte',
    category: 'svelte',
    status: 'STABLE_DEPLOYED',
    accent: 'cyan',
    description:
      'Operational analytics console with predictive cards, keyboard-first navigation, and animated data streams.',
    stack: ['Svelte', 'TypeScript', 'GSAP', 'Charts'],
    code: 'const init = async () => {\n  await core.boot();\n  return dash.mount();\n};',
    impact: 'Improved operator scan speed by 42% with dense, readable status panels.',
    demo: 'https://example.com',
    repo: 'https://github.com/sollylovessolly',
  },
  {
    id: 'crypto-pane',
    title: 'CRYPTO_PANE',
    file: 'neural_link_dashboard.rs',
    category: 'systems',
    status: 'VAULTED_CRYPTO',
    accent: 'pink',
    description:
      'Encrypted document workflow with vault states, audit logs, resilient form validation, and optimistic UI.',
    stack: ['Rust', 'WASM', 'AES', 'Redis'],
    code: 'struct Vault {\n  id: String,\n  key: Vec<u8>,\n}',
    impact: 'Reduced payload handoff time while keeping user-visible security states explicit.',
    demo: 'https://example.com',
    repo: 'https://github.com/sollylovessolly',
  },
  {
    id: 'asset-compiler',
    title: 'ASSET_COMPILER',
    file: 'asset_compiler.ts',
    category: 'svelte',
    status: 'STABLE_DEPLOYED',
    accent: 'cyan',
    description:
      'Automated build pipeline for media-heavy product pages with lazy assets and route-level chunking.',
    stack: ['Vite', 'SvelteKit', 'Workers', 'R2'],
    code: '$ npm run build --production\n# assets sealed\n# bundles verified',
    impact: 'Raised Lighthouse performance from 71 to 98 on a media-rich launch page.',
    demo: 'https://example.com',
    repo: 'https://github.com/sollylovessolly',
  },
  {
    id: 'stealth-api',
    title: 'STEALTH_API',
    file: 'ghost_mod.ts',
    category: 'react',
    status: 'CLOAKED_READY',
    accent: 'gold',
    description:
      'Proxy-aware API interface with request replay, auth diagnostics, and live environment switching.',
    stack: ['React', 'Node', 'Proxy', 'Auth'],
    code: "export const load = () => {\n  // hidden logic\n  fetch('/api/ghost');\n};",
    impact: 'Made integration debugging measurable with timeline traces and failure fingerprints.',
    demo: 'https://example.com',
    repo: 'https://github.com/sollylovessolly',
  },
]

export const skills = [
  { label: 'TypeScript', level: 95, icon: 'JS', family: 'Neural Arch' },
  { label: 'Svelte Motion', level: 91, icon: '{}', family: 'Visual Engine' },
  { label: 'Interface Systems', level: 88, icon: 'UI', family: 'Visual Engine' },
  { label: 'Performance', level: 94, icon: 'CPU', family: 'Neural Arch' },
  { label: 'Accessibility', level: 89, icon: 'A11Y', family: 'Neural Arch' },
]

export const quests = [
  {
    title: 'Senior Protocol Architect @ CypherNux',
    date: '2022 - Present',
    body: 'Architecting distributed microservices and high-fidelity frontends using Svelte, TypeScript, and motion systems.',
    state: 'IN_PROGRESS',
  },
  {
    title: 'Systems Engineer @ Biologic',
    date: '2021 - 2022',
    body: 'Developed real-time monitoring dashboards for synthetic tissue growth arrays. Optimized render timing by 40%.',
    state: 'COMPLETED',
  },
]

export const commands = [
  { key: '1', label: 'Open root protocol', target: 'root' },
  { key: '2', label: 'Inspect project repository', target: 'src' },
  { key: '3', label: 'View skill tree', target: 'lib' },
  { key: '4', label: 'Transmit contact packet', target: 'log' },
]
