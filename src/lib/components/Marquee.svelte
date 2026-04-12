<script lang="ts">
  let { children, marquee = true } = $props();
</script>

<div
  class="w-full flex items-center justify-center relative top-1/2 -translate-y-1/2"
>
  <div
    class="absolute -right-[5%] w-[110%] -rotate-5 bg-dark-white p-4 shadow-center-glow flex overflow-hidden select-none gap-8"
    class:opp-marquee={marquee}
  >
    <div
      class="shrink-0 flex items-center justify-around gap-8 min-w-full"
      class:justify-center!={!marquee}
      class:opp-marquee-content={marquee}
    >
      {@render children()}
    </div>

    <div
      class="shrink-0 flex items-center justify-around gap-8 min-w-full"
      class:justify-center!={!marquee}
      class:opp-marquee-content={marquee}
    >
      {@render children()}
    </div>
  </div>
  <div
    class="absolute -left-[5%] w-[110%] rotate-5 bg-dark-white p-4 shadow-center-glow flex overflow-hidden select-none gap-8"
    class:marquee
  >
    <div
      class="shrink-0 flex items-center justify-around gap-8 min-w-full"
      class:justify-center!={!marquee}
      class:marquee-content={marquee}
    >
      {@render children()}
    </div>

    <div
      class="shrink-0 flex items-center justify-around gap-8 min-w-full"
      class:justify-center!={!marquee}
      class:marquee-content={marquee}
    >
      {@render children()}
    </div>
  </div>
</div>
