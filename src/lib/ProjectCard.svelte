<script lang="ts">
  import { Box, Lock, Shield, Zap } from 'lucide-svelte'
  import type { Project } from './data'

  export let project: Project
  export let index = 0
  export let onOpen: (project: Project) => void = () => undefined
</script>

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
  <button class="project-visual" type="button" on:click={() => onOpen(project)}>
    <img src={project.screenshot} alt={`${project.title} screenshot`} loading="lazy" />
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
    <button type="button" on:click={() => onOpen(project)}>EXECUTE <Zap size={14} /></button>
  </footer>
</article>
