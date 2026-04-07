<script lang="ts">
  import { animate, onScroll, stagger } from "animejs";
  import { onMount } from "svelte";

  let timeLeft = $state(0);

  const MUN_DATE = new Date("2026-07-31T08:00:00Z").getTime();

  onMount(async () => {
    timeLeft = Math.max(0, MUN_DATE - Date.now());

    setInterval(() => {
      timeLeft = Math.max(0, MUN_DATE - Date.now());
    }, 1000);

    await animate(".core", {
      opacity: 0,
      translateY: 50,
      duration: 0,
    });

    animate(".absolute-core", {
      opacity: [0, 0.35],
      scale: [0.8, 1],
      duration: 500,
      easing: "easeOutExpo",
    });

    animate(".right-core", {
      opacity: [0, 0.35],
      translateX: [100, 0],
      translateY: [100, 0],
      duration: 500,
      easing: "easeOutExpo",
    });

    animate(".left-core", {
      opacity: [0, 0.35],
      translateX: [-100, 0],
      translateY: [100, 0],
      duration: 500,
      easing: "easeOutExpo",
    });

    await animate(".core", {
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 500,
      delay: stagger(100),
      easing: "easeOutExpo",
    });

    animate([".core", ".absolute-core"], {
      scale: [1, 0.5],
      opacity: 0,
      easing: "easeInOutQuad",
      autoplay: onScroll({
        target: "#hero",
        container: document.body,
        enter: "top top",
        leave: "top bottom-=33%",
        sync: 0.25,
      }),
    });

    animate(".right-core", {
      translateX: [0, 100],
      translateY: [0, 100],
      opacity: 0,
      easing: "easeInOutQuad",
      autoplay: onScroll({
        target: "#hero",
        container: document.body,
        enter: "top top",
        leave: "top bottom-=33%",
        sync: 0.25,
      }),
    });

    animate(".left-core", {
      translateX: [0, -100],
      translateY: [0, 100],
      opacity: 0,
      easing: "easeInOutQuad",
      autoplay: onScroll({
        target: "#hero",
        container: document.body,
        enter: "top top",
        leave: "top bottom-=33%",
        sync: 0.25,
      }),
    });
  });
</script>

<div id="bg" class="absolute top-0 left-0 w-full h-[200vh]"></div>

<div
  class="flex flex-col items-center justify-center h-screen w-screen fixed"
  id="hero"
>
  <div class="absolute w-full h-full top-0 left-0 pointer-events-none z-[-1]">
    <!--
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
    -->

    <img
      src="/assets/flowers/flower-2.png"
      alt="Flower 2"
      class="absolute bottom-24 -right-96 w-1/2 rotate-y-180 -rotate-20 opacity-35 right-core"
    />

    <img
      src="/assets/flowers/flower-2.png"
      alt="Flower 2"
      class="absolute top-24 -left-96 w-1/2 rotate-20 opacity-35 left-core"
    />

    <img
      src="/assets/logo.png"
      alt="Logo"
      class="absolute top-1/2 left-1/2 w-1/4 opacity-35 -translate-x-1/2 -translate-y-1/2 absolute-core"
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
      class="px-6 py-3 bg-dark-blue hover:bg-cobalt-blue text-custom-white! rounded-lg text-lg font-semibold transition-colors duration-300 shadow-black/40 shadow-2xl"
    >
      Register Now!
    </a>

    <a
      href="/commitees"
      class="ml-4 px-6 py-3 bg-custom-white hover:bg-dark-white text-black! rounded-lg text-lg font-semibold transition-colors duration-300 shadow-black/40 shadow-2xl"
    >
      Explore Committees
    </a>
  </div>
</div>

<div class="h-screen relative top-[100vh]"></div>

<style>
  #bg::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    background: url("/assets/lines.png") repeat;
    background-size: 400px 400px;
    background-position: 0 0;
    background-attachment: scroll;

    opacity: 0.15;
    z-index: -1;
  }
</style>
