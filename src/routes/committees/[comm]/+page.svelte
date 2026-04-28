<script lang="ts">
  import Card from "$lib/components/Card.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Marquee from "$lib/components/Marquee.svelte";
  import { animate, onScroll } from "animejs";
  import { onMount } from "svelte";

  let { data } = $props();
  let { commData } = $derived(data);

  onMount(async () => {
    animate(".marquee", {
      translateX: "100%",
      duration: 0,
    });

    animate(".opp-marquee", {
      translateX: "-100%",
      duration: 0,
    });

    animate("#ebLogo", {
      translateX: "50%",
      opacity: 0,
      duration: 0,
    });

    animate(".left-core", {
      rotateY: 180,
      duration: 0,
    });

    animate(".right-core", {
      rotateY: 180,
      duration: 0,
    });

    animate("#comm-logo", {
      scale: 2,
      duration: 0,
    });

    animate(".left-core", {
      translateX: [25, 0],
      opacity: 0.35,
      duration: 1000,
      ease: "inSine",
    });

    animate(".right-core", {
      translateX: [-25, 0],
      opacity: 0.35,
      duration: 1000,
      ease: "inSine",
    });

    animate(".top-core", {
      translateY: [25, 0],
      duration: 1000,
      ease: "inSine",
    });

    animate(".bottom-core", {
      translateY: [-25, 0],
      duration: 1000,
      ease: "inSine",
    });

    animate(".marquee", {
      translateX: ["100%", "0"],
      ease: "outExpo",
      autoplay: onScroll({
        target: "#screen-2",
        container: document.body,
        enter: "top top-=40%",
        leave: "top top",
        sync: 0.25,
      }),
    });

    animate(".opp-marquee", {
      translateX: ["-100%", "0"],
      ease: "outExpo",
      autoplay: onScroll({
        target: "#screen-2",
        container: document.body,
        enter: "top top-=40%",
        leave: "top top",
        sync: 0.25,
      }),
    });

    animate("#ebLogo", {
      translateX: ["50%", "0"],
      opacity: [0, 0.5],
      ease: "outExpo",
      autoplay: onScroll({
        target: "#screen-2",
        container: document.body,
        enter: "top top-=40%",
        leave: "top top",
        sync: 0.25,
      }),
    });

    await animate("#comm-logo", {
      opacity: 1,
      duration: 250,
      ease: "inExpo",
    });

    await animate("#comm-logo", {
      scale: [2, 2, 1],
      duration: 1000,
      ease: "inExpo",
    });

    animate("#comm-name", {
      translateY: [-25, 0],
      opacity: 1,
      duration: 500,
      delay: 250,
      ease: "easeOutExpo",
    });

    await animate("#agenda", {
      translateY: [25, 0],
      opacity: 1,
      duration: 500,
      delay: 250,
      ease: "easeOutExpo",
    });

    animate("#left", {
      translateX: [-25, 0],
      opacity: 1,
      duration: 500,
      ease: "inExpo",
    });

    animate("#right", {
      translateX: [25, 0],
      opacity: 1,
      duration: 500,
      ease: "inExpo",
    });
  });
</script>

<div
  class="w-full h-screen absolute top-0 left-0 -z-10 pointer-events-none overflow-x-hidden overflow-y-visible"
>
  <img
    src="/assets/flowers/flower-1.png"
    alt="Flower 1"
    class="absolute -bottom-24 -right-12 w-1/3 rotate-y-180 opacity-35 right-core bottom-core"
  />

  <img
    src="/assets/flowers/flower-2.png"
    alt="Flower 2"
    class="absolute -top-24 -left-24 w-1/4 opacity-35 rotate-135 left-core top-core"
  />

  <img
    src="/assets/dove.png"
    alt="Dove"
    class="absolute -bottom-24 -left-24 w-1/4 opacity-35 rotate-y-180 -rotate-25 left-core bottom-core"
  />

  <img
    src="/assets/flowers/flower-3.png"
    alt="Flower 3"
    class="absolute -top-48 -right-12 w-1/5 opacity-35 rotate-200 right-core top-core"
  />
</div>

<div
  id="bg"
  class="absolute top-0 left-0 w-full h-[200vh] pointer-events-none"
></div>

<div class="h-[80vh] my-[10vh] w-full grid grid-cols-3" id="screen-1">
  <div id="left">
    <div
      id="about-comm"
      class="flex flex-col items-center justify-center px-4 gap-4 h-full"
    >
      <div
        class="text-justify bg-cobalt-blue/25 rounded-lg p-4 text-lg backdrop-blur-sm flex-1 border-2 border-dark-blue"
      >
        <h2 class="text-2xl">About the Committee</h2>
        <hr />
        <p>
          {commData.description ||
            "This committee's description is not available yet."}
        </p>
      </div>

      {#if commData.backgroundGuideUrl}
        <a
          class="py-4 w-full text-center border-2 border-dark-blue rounded-lg backdrop-blur-sm"
          href={commData.backgroundGuideUrl}
        >
          Background Guide
        </a>
      {:else}
        <p
          class="text-center w-full border-2 border-dark-blue rounded-lg py-4 backdrop-blur-sm"
        >
          Background guide not available yet.
        </p>
      {/if}
    </div>
  </div>
  <div class="flex flex-col items-center justify-center px-4">
    <h1 class="uppercase text-8xl" id="comm-name">{commData.name}</h1>
    <img
      src="/assets/logos/{commData.name.toUpperCase()}.png"
      alt={commData.name}
      class="w-3/4 z-20"
      id="comm-logo"
    />

    <div id="agenda">
      <p class="uppercase text-center text-xl mt-8 mb-4">Agenda:</p>
      <p class="text-justify text-xl">
        {commData.agenda || "To be decided."}
      </p>
    </div>
  </div>
  <div class="px-4" id="right">
    {#if commData.matrix.length !== 0}
      {commData.matrix.filter((pf) => !pf.filled).length} / {commData.matrix
        .length} Portfolios Vacant
    {:else}
      <span class="font-bold"> No portfolio information available yet. </span>
    {/if}

    <div
      class="w-full max-h-[80vh] overflow-y-scroll rounded-lg backdrop-blur-sm overflow-x-hidden border-2 border-dark-blue"
    >
      {#each commData.matrix as portfolio}
        <div
          class="flex flex-col justify-center gap-2 border-b-2 border-dark-blue py-2 px-4"
          class:bg-[#b1dcc480]={!portfolio.filled}
          class:bg-[#dca1a480]={portfolio.filled}
        >
          <p class="text-2xl">
            {portfolio.portfolio}
          </p>
          {#if portfolio.filled}
            <p>Filled</p>
          {:else}
            <p>Vacant</p>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>

<div class="w-full h-screen overflow-hidden py-16 px-4 relative" id="screen-2">
  <img
    src="/assets/logos/{commData.name.toUpperCase()}.png"
    alt="Background"
    class="h-full object-cover absolute top-0 right-0 translate-x-1/2 opacity-50"
    id="ebLogo"
  />

  <img
    src="/assets/flowers/flower-2.png"
    alt="Flower 2"
    class="absolute bottom-0 -left-1/2 translate-x-1/2 w-1/2 rotate-y-180 opacity-35"
  />

  <h1 class="text-8xl text-shadow-sm text-center">The Executive Board</h1>
  <hr />
  {#if commData.eb.length === 0}
    <p class="text-center mt-4 text-lg">
      No information about the executive board is available yet.
    </p>
  {:else}
    <Marquee marquee={false}>
      {#each commData.eb as ebMember}
        <Card
          name={ebMember.name}
          src={ebMember.image}
          subtext={ebMember.position}
        />
      {/each}
    </Marquee>
  {/if}
</div>

<Footer />

<style>
  #comm-name,
  #comm-logo,
  #agenda,
  #left,
  #right,
  .left-core,
  .right-core {
    opacity: 0;
  }
</style>
