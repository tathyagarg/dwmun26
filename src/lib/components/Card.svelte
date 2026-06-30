<script lang="ts">
  let {
    src,
    name,
    subtext = null,
    small = false,
    hovers = false,
    soft = false,
  } = $props();
</script>

<div
  class="min-h-full bg-custom-white border-2 border-dark-blue p-8 shadow-white/20 transition-all duration-300"
  class:hover:shadow-lg={hovers}
  class:hover:scale-110={hovers}
  class:hover:rounded-2xl={hovers}
>
  {#if soft}
    <div id="img-wrapper">
      <img
        {src}
        alt={name}
        class="aspect-square object-cover mb-4"
        class:w-64={!small}
        class:w-48={small}
      />
    </div>
  {:else}
    <img
      {src}
      alt={name}
      class="aspect-square object-cover mb-4"
      class:w-64={!small}
      class:w-48={small}
    />
  {/if}
  <h1 class="max-w-[12ch] text-2xl text-center">{name}</h1>
  {#if subtext}
    <p class="text-center text-lg mt-2">{subtext}</p>
  {/if}
</div>

<style>
  #img-wrapper {
    overflow: hidden;
  }

  #img-wrapper img {
    display: block;
    /*
    --thresh: 3%;

    -webkit-mask-image: linear-gradient(
        to right,
        transparent,
        black var(--thresh),
        black calc(100% - var(--thresh)),
        transparent
      ),
      linear-gradient(
        to bottom,
        transparent,
        black var(--thresh),
        black calc(100% - var(--thresh)),
        transparent
      );

    -webkit-mask-composite: source-in;
    mask-composite: intersect;
  */
  }
</style>
