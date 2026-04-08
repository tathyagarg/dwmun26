<script lang="ts">
  import { animate, onScroll, stagger } from "animejs";
  import { onMount } from "svelte";

  let timeLeft = $state(0);

  const MUN_DATE = new Date("2026-07-31T08:00:00Z").getTime();

  const probability = 0.5;
  const damping = 0.5;
  const opacity = 25;

  onMount(async () => {
    const canvas = document.createElement("canvas");
    const size = 400;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    const imageData = ctx?.createImageData(size, size)!;
    const data = imageData?.data ?? [];

    for (let i = 0; i < data.length; i += 4) {
      const shade_range = Math.random();
      const shade =
        (shade_range <= probability ? 255 : 0) * Math.random() * damping;

      data[i] = shade;
      data[i + 1] = shade;
      data[i + 2] = shade;
      data[i + 3] = opacity;
    }

    ctx?.putImageData(imageData, 0, 0);
    let letter = document.getElementsByClassName("letter");
    for (let i = 0; i < letter.length; i++) {
      (letter[i] as HTMLDivElement).style.backgroundImage =
        `url(${canvas.toDataURL()})`;
    }

    window.scrollTo(0, 0);

    timeLeft = Math.max(0, MUN_DATE - Date.now());

    setInterval(() => {
      timeLeft = Math.max(0, MUN_DATE - Date.now());
    }, 1000);

    await animate(".core", {
      opacity: 0,
      translateY: 50,
      duration: 0,
    });

    await animate(".core-2", {
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

    animate(".letter", {
      translateY: [50, 0],
      scale: [1.5, 1.0],
      opacity: [0, 1],
      duration: 500,
      easing: "easeOutExpo",
      delay: stagger(500),
      autoplay: onScroll({
        target: "#screen-2",
        container: document.body,
        enter: "top top-=50%",
        leave: "top top-=25%",
        sync: 0.25,
      }),
    });

    animate(".core-2", {
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 500,
      easing: "easeOutExpo",
      delay: stagger(100),
      autoplay: onScroll({
        target: "#screen-2",
        container: document.body,
        enter: "top top-=50%",
        leave: "top top-=25%",
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

  <div class="grid grid-cols-4 gap-2 w-[50%] mb-8 core">
    <div class="flex flex-col items-center">
      <h2 class="text-7xl">
        {Math.floor(timeLeft / (1000 * 60 * 60 * 24))}
      </h2>
      <span class="uppercase font-bold">Days</span>
    </div>

    <div class="flex flex-col items-center">
      <h2 class="text-7xl">
        {Math.floor((timeLeft / (1000 * 60 * 60)) % 24)}
      </h2>
      <span class="uppercase font-bold">Hours</span>
    </div>

    <div class="flex flex-col items-center">
      <h2 class="text-7xl">
        {Math.floor((timeLeft / (1000 * 60)) % 60)}
      </h2>
      <span class="uppercase font-bold">Minutes</span>
    </div>

    <div class="flex flex-col items-center">
      <h2 class="text-7xl">
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

<div class="h-screen w-2/3 mx-auto relative top-[100vh] p-8" id="screen-2">
  <div
    class="bg-custom-white p-8 core-2 shadow-2xl letter w-full h-[75vh] absolute"
  ></div>
  <div
    class="bg-custom-white p-8 core-2 shadow-2xl -rotate-5 letter w-full h-[75vh] absolute"
  ></div>

  <div
    class="bg-custom-white p-8 core-2 shadow-2xl rotate-5 letter w-full absolute"
    id="sec-letter"
  >
    <div class="flex flex-col mb-8">
      <div class="flex items-center justify-center gap-2 mb-8">
        <img src="/assets/logo.png" alt="Logo" class="w-36" />
        <div class="flex flex-col items-start uppercase">
          <span>Delhi Public School, Whitefield</span>
          <span>Model United Nations</span>
        </div>
      </div>
      <!--
      <span class="text-center uppercase font-bold text-sm text-black/40">
        Delhi Public School, Whitefield
      </span>
      -->
    </div>
    <div class="w-full text-right mb-8">8 April 2026</div>
    <h1 class="text-3xl font-bold core-2">Letter from the Secretary-General</h1>
    <hr class="mb-8 core-2" />
    <p class="core-2">Greetings delegates!</p>
    <br />
    <p class="core-2">
      It is with great pride and enthusiasm that the Organising Committee
      extends a warm invitation to you to attend DWMUN’25, hosted by Delhi
      Public School, Whitefield. Scheduled to take place on 31st July and 1st
      and 2nd of August, this prestigious conference promises to be a platform
      for young minds to engage in meaningful dialogue, critical
      problem-solving, and diplomacy. DWMUN’25 brings together delegates from
      across schools to simulate international diplomacy, as they represent
      various nations and address pressing global issues, just as diplomats do
      on real-world stages.
    </p>

    <br />
    <p class="core-2">
      This year, DWMUN will focus on promoting global cooperation,
      peacebuilding, and innovative solutions across various committees.
      Participants will not only gain a deeper understanding of international
      relations, conflict resolution, and policy-making but also develop
      leadership, oratory, and negotiation skills in a collaborative
      environment. We would be honored by your presence at the event in
      celebrating the spirit of diplomacy and youth engagement at DWMUN’25.
    </p>
    <br />
    <p class="core-2">
      Warm regards,<br /> Chirantana Hegde <br /> Secretary General <br />
      DWMUN’25 <br /> Delhi Public School, Whitefield
    </p>
  </div>
</div>

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

    opacity: 0.25;
    z-index: -1;
  }
</style>
