<script lang="ts">
  let { src, name, subtext = null, small = false } = $props();
</script>

<div class="min-h-full bg-custom-white border-2 border-dark-blue p-8">
  <img
    {src}
    alt={name}
    class="aspect-square object-cover mb-4"
    class:w-64={!small}
    class:w-48={small}
  />
  <h1 class="text-2xl text-center">{name}</h1>
  {#if subtext}
    <p class="text-center text-lg mt-2">{subtext}</p>
  {/if}
</div>
