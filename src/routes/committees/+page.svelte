<script>
  import { COMM_DATA } from "$lib";
  import Card from "$lib/components/Card.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Marquee from "$lib/components/Marquee.svelte";
  import { animate, splitText } from "animejs";
  import { onMount } from "svelte";

  onMount(async () => {
    animate("#marq-1", {
      translateX: ["-100%", "0%"],
      opacity: [0, 1],
      duration: 500,
      easing: "easeInOutSine",
    });

    animate("#marq-2", {
      translateX: ["100%", "0%"],
      opacity: [0, 1],
      duration: 500,
      easing: "easeInOutSine",
    });

    const { chars } = splitText("#comm-head", { chars: true });
    for (let i = 0; i < chars.length; i++) {
      animate(chars[i], {
        translateY: [25, 0],
        opacity: [0, 1],
        duration: 750,
        delay: 200 + i * 100,
        ease: "outCirc",
      });
    }
  });
</script>

<div id="bg" class="absolute top-0 left-0 w-full h-[175vh] sm:h-[120vh]"></div>
<div
  class="w-full h-screen absolute top-24 left-0 -z-10 pointer-events-none overflow-x-hidden"
>
  <img
    src="/assets/flowers/flower-1.png"
    alt="Flower 1"
    class="absolute -bottom-24 -right-12 w-1/3 rotate-y-180 opacity-35 right-core bottom-core"
  />
</div>

<div class="h-screen w-full relative top-24 hidden sm:block">
  <div class="relative top-48" id="marq-1">
    <Marquee back={false}>
      {#each Object.entries(COMM_DATA).slice(0, 4) as [comm, _]}
        {@const commName = comm.toUpperCase()}
        <button
          class="cursor-pointer"
          onclick={() => (window.location.href = `/committees/${comm}`)}
        >
          <Card
            src="/assets/logos/{commName}.png"
            name={commName}
            small
            hovers
          />
        </button>
      {/each}
    </Marquee>
  </div>

  <div class="w-full h-screen flex items-center justify-center">
    <h1 id="comm-head" class="text-9xl/[1.5] text-center py-12">Committees</h1>
  </div>

  <div class="relative bottom-48" id="marq-2">
    <Marquee back={false} flip={true}>
      {#each Object.entries(COMM_DATA).slice(4, 8) as [comm, _]}
        {@const commName = comm.toUpperCase()}
        <button
          class="cursor-pointer"
          onclick={() => (window.location.href = `/committees/${comm}`)}
        >
          <Card
            src="/assets/logos/{commName}.png"
            name={commName}
            small
            hovers
          />
        </button>
      {/each}
    </Marquee>
  </div>
</div>

<div class="min-h-screen w-full relative top-24 pb-8 block sm:hidden">
  <div class="w-full">
    <h1 id="comm-head" class="text-4xl/[1.5] text-center py-12">Committees</h1>
  </div>

  <div class="w-full grid grid-cols-2 gap-4 px-4">
    {#each Object.entries(COMM_DATA) as [comm, _]}
      {@const commName = comm.toUpperCase()}
      <button
        class="cursor-pointer"
        onclick={() => (window.location.href = `/committees/${comm}`)}
      >
        <Card src="/assets/logos/{commName}.png" name={commName} small hovers />
      </button>
    {/each}
  </div>
</div>

<div class="relative top-24">
  <Footer />
</div>
