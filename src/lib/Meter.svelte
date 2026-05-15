<script lang="ts">
  export let label: string
  export let value: string
  export let level = 0
  export let variant: 'cyan' | 'pink' = 'cyan'
</script>

<span class="meter-label">{label} <strong>{value}</strong></span>
<div class:pink={variant === 'pink'} class="meter" role="meter" aria-label={label} aria-valuemin="0" aria-valuemax="100" aria-valuenow={level}>
  <span style={`width:${level}%`}></span>
</div>
