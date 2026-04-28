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
      duration: 1000,
      easing: "easeInOutSine",
    });

    animate("#marq-2", {
      translateX: ["100%", "0%"],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeInOutSine",
    });

    const { chars } = splitText("#comm-head", { chars: true });
    for (let i = 0; i < chars.length; i++) {
      animate(chars[i], {
        translateY: [25, 0],
        opacity: [0, 1],
        duration: 750,
        delay: 200 + i * 100,
        easing: "easeInOutSine",
      });
    }
  });
</script>

<div class="h-screen w-full relative">
  <div class="relative top-48" id="marq-1">
    <Marquee marquee={false} back={false}>
      {#each Object.entries(COMM_DATA).slice(0, 4) as [comm, _]}
        {@const commName = comm.toUpperCase()}
        <button
          class="cursor-pointer"
          onclick={() => (window.location.href = `/committees/${comm}`)}
        >
          <Card
            src="/assets/logos/{commName}.png"
            name={commName}
            small={true}
          />
        </button>
      {/each}
    </Marquee>
  </div>

  <div class="w-full h-screen flex items-center justify-center">
    <h1 id="comm-head" class="text-9xl/[1.5] text-center py-12">Committees</h1>
  </div>

  <div class="relative bottom-48" id="marq-2">
    <Marquee marquee={false} back={false} flip={true}>
      {#each Object.entries(COMM_DATA).slice(4, 8) as [comm, _]}
        {@const commName = comm.toUpperCase()}
        <button
          class="cursor-pointer"
          onclick={() => (window.location.href = `/committees/${comm}`)}
        >
          <Card
            src="/assets/logos/{commName}.png"
            name={commName}
            small={true}
          />
        </button>
      {/each}
    </Marquee>
  </div>
</div>

<Footer />
