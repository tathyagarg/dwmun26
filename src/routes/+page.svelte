<script lang="ts">
  import { createTimeline, stagger } from "animejs";
  import { onMount } from "svelte";

  let timeLeft = $state(0);

  const MUN_DATE = new Date("2026-07-31T08:00:00Z").getTime();

  onMount(() => {
    timeLeft = Math.max(0, MUN_DATE - Date.now());

    setInterval(() => {
      timeLeft = Math.max(0, MUN_DATE - Date.now());
    }, 1000);

    let timeline = createTimeline();

    timeline
      .add(".core", {
        opacity: 0,
        translateY: 50,
        duration: 0,
      })
      .add(
        ".core",
        {
          opacity: 1,
          translateY: 0,
          duration: 1000,
          delay: stagger(200),
          easing: "easeOutExpo",
        },
        "+=500",
      );
  });
</script>

<div id="hero"></div>

<div class="flex flex-col items-center justify-center h-screen relative">
  <div class="absolute w-full h-full top-0 left-0 pointer-events-none z-[-1]">
    <img
      src="/assets/flowers/flower-1.png"
      alt="Flower 1"
      class="absolute -bottom-24 -right-12 w-1/3 rotate-y-180 opacity-35"
    />

    <img
      src="/assets/flowers/flower-2.png"
      alt="Flower 2"
      class="absolute -top-24 -left-24 w-1/4 opacity-35 rotate-135"
    />

    <img
      src="/assets/dove.png"
      alt="Dove"
      class="absolute -bottom-24 -left-24 w-1/4 opacity-35 rotate-y-180 -rotate-25"
    />

    <img
      src="/assets/flowers/flower-3.png"
      alt="Flower 3"
      class="absolute -top-48 -right-12 w-1/5 opacity-35 rotate-200"
    />

    <img
      src="/assets/logo.png"
      alt="Logo"
      class="absolute top-1/2 left-1/2 w-1/4 opacity-35 -translate-x-1/2 -translate-y-1/2"
    />
  </div>

  <h1 class="text-[10rem] core" id="heading">DWMUN'26</h1>

  <div class="grid grid-cols-4 gap-2 w-[33%] mb-8 core">
    <div class="flex flex-col items-center">
      <h2 class="text-5xl">
        {Math.floor(timeLeft / (1000 * 60 * 60 * 24))}
      </h2>
      <span class="uppercase font-bold">Days</span>
    </div>

    <div class="flex flex-col items-center">
      <h2 class="text-5xl">
        {Math.floor((timeLeft / (1000 * 60 * 60)) % 24)}
      </h2>
      <span class="uppercase font-bold">Hours</span>
    </div>

    <div class="flex flex-col items-center">
      <h2 class="text-5xl">
        {Math.floor((timeLeft / (1000 * 60)) % 60)}
      </h2>
      <span class="uppercase font-bold">Minutes</span>
    </div>

    <div class="flex flex-col items-center">
      <h2 class="text-5xl">
        {Math.floor((timeLeft / 1000) % 60)}
      </h2>
      <span class="uppercase font-bold">Seconds</span>
    </div>
  </div>

  <div class="flex core">
    <a
      href="/register"
      class="px-6 py-3 bg-dark-blue hover:bg-cobalt-blue text-white rounded-lg text-lg font-semibold transition-colors duration-300 shadow-black/40 shadow-2xl"
    >
      Register Now!
    </a>

    <a
      href="/commitees"
      class="ml-4 px-6 py-3 bg-custom-white hover:bg-dark-white text-black rounded-lg text-lg font-semibold transition-colors duration-300 shadow-black/40 shadow-2xl"
    >
      Explore Committees
    </a>
  </div>
</div>

<div class="h-screen"></div>

<style>
  #hero {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  #hero::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: url("/assets/lines.png") repeat;
    background-size: 400px 400px;
    background-position: 0 0;
    background-attachment: fixed;

    opacity: 0.15;
    z-index: -2;
  }
</style>
