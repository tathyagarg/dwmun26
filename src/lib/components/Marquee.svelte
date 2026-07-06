<script lang="ts">
  let {
    children,
    marquee = false,
    back = true,
    flip = false,
    backblur = false,
  } = $props();
</script>

<div
  class="w-full flex items-center justify-center relative top-1/2 -translate-y-1/2"
>
  {#if back}
    <div
      class="absolute -right-[5%] w-[110%] bg-dark-blue/25 backdrop-blur-sm p-4 shadow-center-glow flex overflow-hidden select-none gap-8 opp-marquee"
      class:blur-xs={backblur}
      class:-rotate-5={!flip}
      class:rotate-5={flip}
    >
      <div
        class="shrink-0 flex items-center justify-around gap-8 min-w-full opp-marquee-content"
        class:justify-center!={!marquee}
      >
        {@render children()}
      </div>

      <div
        class="shrink-0 flex items-center justify-around gap-8 min-w-full opp-marquee-content"
        class:justify-center!={!marquee}
      >
        {@render children()}
      </div>
    </div>
  {/if}
  <div
    class="absolute -left-[5%] w-[110%] p-4 shadow-center-glow flex overflow-hidden select-none gap-8 marquee"
    style="background: linear-gradient(90deg, #142040 10%, var(--color-dark-blue) 50%, #142040 95%)"
    class:rotate-5={!flip}
    class:-rotate-5={flip}
  >
    <div
      class="shrink-0 flex items-center justify-around gap-8 min-w-full marquee-content"
      class:justify-center!={!marquee}
    >
      {@render children()}
    </div>

    <div
      class="shrink-0 flex items-center justify-around gap-8 min-w-full marquee-content"
      class:justify-center!={!marquee}
    >
      {@render children()}
    </div>
  </div>
</div>
