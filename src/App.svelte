<script lang="ts">
  import { onMount, tick } from 'svelte'
  import gsap from 'gsap'
  import {
    Activity,
    Box,
    Cloud,
    Code2,
    Command,
    Cpu,
    Database,
    Download,
    ExternalLink,
    Keyboard,
    Lock,
    Mail,
    Moon,
    Rocket,
    Search,
    Send,
    Shield,
    Sun,
    Terminal,
    Trophy,
    X,
    Zap,
  } from 'lucide-svelte'
  import { commands, navItems, projects, quests, skills, type Project } from './lib/data'

  let activeSection = 'root'
  let activeFilter: 'all' | Project['category'] = 'all'
  let selectedProject: Project | null = null
  let commandOpen = false
  let reducedMotion = false
  let theme: 'dark' | 'light' = 'dark'
  let canvas: HTMLCanvasElement
  let rootEl: HTMLElement
  let name = ''
  let email = ''
  let message = ''
  let formState = 'READY_FOR_UPLINK'

  $: filteredProjects =
    activeFilter === 'all' ? projects : projects.filter((project) => project.category === activeFilter)

  const scrollToSection = async (id: string) => {
    activeSection = id
    commandOpen = false
    await tick()
    document.getElementById(id)?.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' })
  }

  const sanitize = (value: string) =>
    value
      .replace(/[<>]/g, '')
      .replace(/javascript:/gi, '')
      .trim()

  const submitPacket = () => {
    const safeName = sanitize(name)
    const safeEmail = sanitize(email)
    const safeMessage = sanitize(message)

    if (!safeName || !safeEmail.includes('@') || safeMessage.length < 12) {
      formState = 'PACKET_REJECTED_VALIDATION'
      return
    }

    const subject = encodeURIComponent(`Portfolio uplink from ${safeName}`)
    const body = encodeURIComponent(`${safeMessage}\n\nReturn uplink: ${safeEmail}`)
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`
    formState = 'TRANSMISSION_READY'
  }

  const toggleTheme = () => {
    theme = theme === 'dark' ? 'light' : 'dark'
    localStorage.setItem('sys-theme', theme)
    document.documentElement.dataset.theme = theme
  }

  const toggleMotion = () => {
    reducedMotion = !reducedMotion
    localStorage.setItem('sys-motion', reducedMotion ? 'reduced' : 'full')
    document.documentElement.dataset.motion = reducedMotion ? 'reduced' : 'full'
  }

  const runIntro = () => {
    if (reducedMotion) return
    gsap.fromTo(
      '.reveal',
      { autoAlpha: 0, y: 28 },
      { autoAlpha: 1, y: 0, duration: 0.75, stagger: 0.08, ease: 'power3.out' },
    )
    gsap.fromTo('.hero-title', { filter: 'blur(10px)' }, { filter: 'blur(0px)', duration: 1.2, ease: 'power2.out' })
    gsap.to('.scan-line', { xPercent: 120, duration: 2.8, repeat: -1, ease: 'none' })
    gsap.to('.orbit-frame', { rotate: 360, duration: 36, repeat: -1, ease: 'none' })
  }

  const bootCanvas = () => {
    const context = canvas?.getContext('2d')
    if (!context || reducedMotion) return
    const particles = Array.from({ length: 58 }, () => ({
      x: Math.random(),
      y: Math.random(),
      speed: 0.0005 + Math.random() * 0.0012,
      size: 0.7 + Math.random() * 1.8,
    }))

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * ratio
      canvas.height = window.innerHeight * ratio
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const draw = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight)
      context.fillStyle = 'rgba(0, 245, 255, 0.42)'
      context.strokeStyle = 'rgba(0, 245, 255, 0.09)'
      particles.forEach((particle, index) => {
        particle.y += particle.speed
        if (particle.y > 1.04) particle.y = -0.04
        const x = particle.x * window.innerWidth
        const y = particle.y * window.innerHeight
        context.beginPath()
        context.arc(x, y, particle.size, 0, Math.PI * 2)
        context.fill()
        const next = particles[index + 1]
        if (next && Math.abs(next.x - particle.x) < 0.18) {
          context.beginPath()
          context.moveTo(x, y)
          context.lineTo(next.x * window.innerWidth, next.y * window.innerHeight)
          context.stroke()
        }
      })
      requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
  }

  onMount(() => {
    theme = (localStorage.getItem('sys-theme') as 'dark' | 'light') || 'dark'
    reducedMotion =
      localStorage.getItem('sys-motion') === 'reduced' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    document.documentElement.dataset.theme = theme
    document.documentElement.dataset.motion = reducedMotion ? 'reduced' : 'full'
    runIntro()
    bootCanvas()

    const onKey = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        commandOpen = !commandOpen
      }
      if (event.key === 'Escape') {
        commandOpen = false
        selectedProject = null
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })
</script>

<svelte:head>
  <title>SYS_ARCH_v2.0.4 | Svelte Developer Portfolio</title>
  <meta
    name="description"
    content="Interactive cyber-terminal developer portfolio built with Svelte, GSAP, accessible controls, project filtering, command palette, and contact uplink."
  />
</svelte:head>

<canvas class="particle-field" bind:this={canvas} aria-hidden="true"></canvas>
<a class="skip-link" href="#root">Skip to portfolio content</a>

<div class="app-shell" bind:this={rootEl}>
  <header class="topbar" aria-label="Primary">
    <a class="brand" href="#root" on:click|preventDefault={() => scrollToSection('root')}>
      <Terminal size={22} aria-hidden="true" />
      <span>SYS_ARCH_v2.0.4</span>
    </a>
    <nav>
      {#each navItems as item}
        <button
          class:active={activeSection === item.id}
          type="button"
          on:click={() => scrollToSection(item.id)}
          aria-current={activeSection === item.id ? 'page' : undefined}
        >
          {item.label}
        </button>
      {/each}
    </nav>
    <div class="top-actions">
      <button class="icon-button" type="button" on:click={toggleTheme} aria-label="Toggle theme">
        {#if theme === 'dark'}<Sun size={16} />{:else}<Moon size={16} />{/if}
      </button>
      <button class="command-button" type="button" on:click={() => (commandOpen = true)}>
        <Search size={16} aria-hidden="true" />
        <span>CMD + K</span>
      </button>
    </div>
  </header>

  <main>
    <section id="root" class="section hero-section">
      <div class="hero-copy">
        <p class="eyebrow reveal"><span></span> PROTOCOL: PORTFOLIO_INITIATED</p>
        <h1 class="hero-title reveal">SYAH_MARKOM</h1>
        <p class="intro reveal">
          Full-stack architect specializing in <strong>Cyber-Protocol Engineering</strong>. Designing scalable digital
          neural networks and high-fidelity interface systems.
        </p>

        <div class="hero-panels reveal">
          <article class="panel vitals">
            <div class="panel-head">
              <span>CORE_VITALS</span>
              <Activity size={15} aria-hidden="true" />
            </div>
            <span class="meter-label">HP <strong>100%</strong></span>
            <div class="meter"><span style="width: 100%"></span></div>
            <span class="meter-label">MP <strong>85%</strong></span>
            <div class="meter pink"><span style="width: 85%"></span></div>
          </article>

          <button class="quest-button" type="button" on:click={() => scrollToSection('src')}>
            <span>INITIALIZE_QUEST</span>
            <Zap size={34} aria-hidden="true" />
            <i></i>
          </button>

          <article class="panel stack">
            <div class="panel-head">
              <span>ACTIVE_STACK</span>
              <Database size={15} aria-hidden="true" />
            </div>
            <div class="inventory">
              <span>JS</span>
              <Code2 size={21} aria-label="Code systems" />
              <Box size={21} aria-label="Component architecture" />
            </div>
          </article>
        </div>

        <div class="cta-row reveal">
          <a class="primary-link" href="#src" on:click|preventDefault={() => scrollToSection('src')}>
            Initialize mission
          </a>
          <a class="ghost-link" href="/resume.pdf" download>
            <Download size={17} aria-hidden="true" />
            Download manifest
          </a>
          <a class="ghost-link" href="https://github.com/sollylovessolly" target="_blank" rel="noreferrer">
            <Code2 size={17} aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>

      <div class="biometric-card reveal" aria-label="Developer biometric scan">
        <div class="corner top"></div>
        <div class="portrait-grid">
          <div class="orbit-frame"></div>
          <div class="scan-line"></div>
          <p>TARGET_ID: SM_X99</p>
          <p>THREAT_LEVEL: OMEGA</p>
          <span>SCANNING_BIOMETRICS... 100%</span>
        </div>
        <div class="corner bottom"></div>
      </div>
    </section>

    <section id="src" class="section projects-section">
      <div class="section-grid">
        <div class="headline-card reveal">
          <p><span></span> SYSTEM STATUS: OPERATIONAL</p>
          <h2>PROJECT REPOSITORY</h2>
          <p>
            Compiled artifacts and architectural documentation for high-priority initiatives. Filtered by
            stack-integrity and deployment efficiency.
          </p>
        </div>
        <aside class="deploy-card reveal" aria-label="Deployment status">
          <div><span>DEPLOYED_HP</span><strong>94%</strong></div>
          <div class="meter"><span style="width: 94%"></span></div>
          <div><span>BUILD_MANA</span><strong>78%</strong></div>
          <div class="meter pink"><span style="width: 78%"></span></div>
          <footer><span>UPTIME: 1,442.08H</span><span>LVL 42</span></footer>
        </aside>
      </div>

      <div class="filter-bar reveal" aria-label="Project filters">
        <span>FILTERS:</span>
        {#each ['all', 'svelte', 'react', 'systems'] as filter}
          <button
            type="button"
            class:active={activeFilter === filter}
            on:click={() => (activeFilter = filter as typeof activeFilter)}
          >
            {filter === 'all' ? 'ALL_UNITS' : filter.toUpperCase()}
          </button>
        {/each}
      </div>

      <div class="project-grid">
        {#each filteredProjects as project, index (project.id)}
          <article class={`project-card ${project.accent} reveal`} style={`--delay:${index * 70}ms`}>
            <header>
              <div>
                <p>PROJ::{project.id.toUpperCase()}</p>
                <h3>{project.title}</h3>
              </div>
              {#if project.accent === 'cyan'}<Box size={22} aria-hidden="true" />{/if}
              {#if project.accent === 'pink'}<Shield size={22} aria-hidden="true" />{/if}
              {#if project.accent === 'gold'}<Lock size={22} aria-hidden="true" />{/if}
            </header>
            <button class="project-visual" type="button" on:click={() => (selectedProject = project)}>
              <span>{project.file}</span>
              <i></i>
            </button>
            <pre><code>{project.code}</code></pre>
            <div class="tags">
              {#each project.stack as tech}
                <span>{tech}</span>
              {/each}
            </div>
            <footer>
              <span><i></i>{project.status}</span>
              <button type="button" on:click={() => (selectedProject = project)}>EXECUTE <Zap size={14} /></button>
            </footer>
          </article>
        {/each}
      </div>
    </section>

    <section id="lib" class="section profile-section">
      <aside class="profile-card reveal">
        <div class="avatar-frame">
          <span>LEVEL 42 ARCHITECT</span>
        </div>
        <h2>ALEX_VANCE</h2>
        <p>Senior Full-Stack Combatant // Neural Net Specialization</p>
        <div class="stat">
          <span class="meter-label">INTELLIGENCE (HP) <strong>942 / 1000</strong></span>
          <div class="meter"><span style="width: 94%"></span></div>
        </div>
        <div class="stat">
          <span class="meter-label">CREATIVITY (MP) <strong>750 / 800</strong></span>
          <div class="meter pink"><span style="width: 88%"></span></div>
        </div>
        <div class="mini-stats">
          <span>STR <strong>18</strong></span>
          <span>DEX <strong>19</strong></span>
          <span>CON <strong>17</strong></span>
          <span>CHA <strong>15</strong></span>
        </div>
      </aside>

      <div class="profile-main">
        <section class="module reveal">
          <header>
            <h2>SKILL_TREE_PROTOCOL</h2>
            <span><i></i> MASTERED</span>
          </header>
          <div class="skill-grid">
            {#each skills as skill}
              <article>
                <div class="skill-icon">{skill.icon}</div>
                <div>
                  <p>{skill.family}</p>
                  <span class="meter-label">{skill.label}<strong>{skill.level}%</strong></span>
                  <div class:meter={true} class:pink={skill.family === 'Visual Engine'}>
                    <span style={`width:${skill.level}%`}></span>
                  </div>
                </div>
              </article>
            {/each}
          </div>
        </section>

        <section class="module quest-log reveal">
          <h2>ACTIVE_QUEST_LOG</h2>
          {#each quests as quest}
            <article>
              <Rocket size={20} aria-hidden="true" />
              <div>
                <h3>{quest.title}</h3>
                <p>{quest.body}</p>
                <small>{quest.date}</small>
              </div>
              <span>{quest.state}</span>
            </article>
          {/each}
        </section>

        <section class="module achievements reveal">
          <h2>COLLECTED_ACHIEVEMENTS</h2>
          <div>
            <article><Trophy size={22} /><span>AWARDED 2023</span><strong>Open Source Pioneer</strong></article>
            <article><Activity size={22} /><span>UNLOCKED 2024</span><strong>Optimization Master</strong></article>
            <article><Lock size={22} /><span>LOCKED</span><strong>CTO Ascension</strong></article>
          </div>
        </section>
      </div>
    </section>

    <section id="log" class="section contact-section">
      <div class="terminal-log reveal">
        <header><span></span><span></span><span></span><strong>CONNECTION_LOG.LOG</strong></header>
        <div class="log-lines" aria-live="polite">
          <p><time>10:04:22</time> <b>[INFO]</b> Initializing Uplink Protocol...</p>
          <p><time>10:04:23</time> <b>[INFO]</b> Handshaking with remote server at 192.168.1.104</p>
          <p><time>10:04:25</time> <em>[WARN]</em> High latency detected on port 443. Redirecting...</p>
          <p><time>10:04:28</time> <b>[INFO]</b> SSL Certificate verified. Secure tunnel established.</p>
          <p><time>10:04:30</time> <b>[INFO]</b> Ready for data transmission.</p>
          <p class="prompt">&gt; <span></span></p>
        </div>
      </div>

      <form class="contact-panel reveal" on:submit|preventDefault={submitPacket}>
        <h2>CONTACT PORTAL</h2>
        <p>Encrypted packet delivery system. All transmissions are logged and tracked.</p>
        <div class="form-grid">
          <label>
            SENDER_ID
            <input bind:value={name} name="name" autocomplete="name" placeholder="Your Alias" required />
          </label>
          <label>
            RETURN_UPLINK
            <input bind:value={email} name="email" type="email" autocomplete="email" placeholder="Email@Network.io" required />
          </label>
        </div>
        <label>
          PROTOCOL_TYPE
          <select aria-label="Protocol type">
            <option>GENERAL_INQUIRY</option>
            <option>PROJECT_COLLAB</option>
            <option>MISSION_BRIEF</option>
          </select>
        </label>
        <label>
          ENCRYPTED_PAYLOAD
          <textarea bind:value={message} name="message" rows="8" minlength="12" placeholder="Construct your message here..." required></textarea>
        </label>
        <footer>
          <span><i></i> ENCRYPTION_ACTIVE: AES-256</span>
          <button type="submit"><Send size={16} /> TRANSMIT_PACKET</button>
        </footer>
        <p class="form-state" role="status">{formState}</p>
      </form>
    </section>
  </main>

  <footer class="statusbar">
    <span>./USER_PROMPT_2024</span>
    <span>STABLE_BUILD</span>
    <span>Uptime: 99.9%</span>
    <button type="button" on:click={toggleMotion} aria-pressed={reducedMotion}>
      <Keyboard size={14} />
      {reducedMotion ? 'FULL_MOTION' : 'REDUCE_MOTION'}
    </button>
  </footer>
</div>

{#if commandOpen}
  <div class="overlay" role="presentation" on:click={() => (commandOpen = false)}></div>
  <div class="command-palette" role="dialog" aria-modal="true" aria-labelledby="command-title">
    <header>
      <Command size={18} aria-hidden="true" />
      <h2 id="command-title">COMMAND_INTERFACE</h2>
      <button type="button" on:click={() => (commandOpen = false)} aria-label="Close command palette">
        <X size={18} />
      </button>
    </header>
    {#each commands as command}
      <button type="button" on:click={() => scrollToSection(command.target)}>
        <kbd>{command.key}</kbd>
        <span>{command.label}</span>
      </button>
    {/each}
    <button type="button" on:click={toggleTheme}>
      <kbd>T</kbd>
      <span>Toggle chroma theme</span>
    </button>
  </div>
{/if}

{#if selectedProject}
  <div class="overlay" role="presentation" on:click={() => (selectedProject = null)}></div>
  <div class="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <button class="modal-close" type="button" on:click={() => (selectedProject = null)} aria-label="Close project details">
      <X size={18} />
    </button>
    <p>{selectedProject.file}</p>
    <h2 id="modal-title">{selectedProject.title}</h2>
    <p>{selectedProject.description}</p>
    <div class="modal-visual"><span>{selectedProject.impact}</span></div>
    <div class="tags">
      {#each selectedProject.stack as tech}
        <span>{tech}</span>
      {/each}
    </div>
    <footer>
      <a href={selectedProject.demo} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Live demo</a>
      <a href={selectedProject.repo} target="_blank" rel="noreferrer"><Code2 size={16} /> Repository</a>
    </footer>
  </div>
{/if}
