<script lang="ts">
  import CommRow from "$lib/components/CommRow.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Marquee from "$lib/components/Marquee.svelte";
  import { animate, onScroll, stagger, svg } from "animejs";
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

    await animate(".marquee", {
      opacity: 0,
      translateX: 100,
      duration: 0,
    });

    await animate(".opp-marquee", {
      opacity: 0,
      translateX: -100,
      duration: 0,
    });

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
      ease: "easeOutExpo",
    });

    animate(".right-core", {
      opacity: [0, 0.35],
      translateX: [100, 0],
      translateY: [100, 0],
      duration: 500,
      ease: "easeOutExpo",
    });

    animate(".left-core", {
      opacity: [0, 0.35],
      translateX: [-100, 0],
      translateY: [100, 0],
      duration: 500,
      ease: "easeOutExpo",
    });

    await animate(".core", {
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 500,
      delay: stagger(100),
      ease: "easeOutExpo",
    });

    animate([".core", ".absolute-core"], {
      scale: [1, 0.5],
      opacity: 0,
      ease: "easeInOutQuad",
      autoplay: onScroll({
        target: "#hero",
        container: document.body,
        enter: "top top",
        leave: "top bottom-=33%",
        sync: 0.25,
      }),
    });

    document.querySelectorAll(".letter").forEach((el, i) => {
      animate(el, {
        translateY: [100, 0],
        scale: [1.25, 1.0],
        opacity: [0, 1],
        autoplay: onScroll({
          target: "#screen-2",
          container: document.body,
          enter: `top top-=${60 - i * 20}%`,
          leave: `top top-=${35 - i * 20}%`,
          sync: 1,
        }),
      });
    });

    animate(".core-2", {
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 500,
      ease: "easeOutExpo",
      delay: stagger(100),
      autoplay: onScroll({
        target: "#screen-2",
        container: document.body,
        enter: "top top-=20%",
        leave: "top top-=5%",
        sync: 0.25,
      }),
    });

    animate(".right-core", {
      translateX: [0, 100],
      translateY: [0, 100],
      opacity: 0,
      ease: "easeInOutQuad",
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
      ease: "easeInOutQuad",
      autoplay: onScroll({
        target: "#hero",
        container: document.body,
        enter: "top top",
        leave: "top bottom-=33%",
        sync: 0.25,
      }),
    });

    animate(svg.createDrawable(".line"), {
      draw: "0 1",
      ease: "inOutQuad",
      duration: 50,
      delay: stagger(25),
      autoplay: onScroll({
        target: "#sec-letter",
        container: document.body,
        enter: "top top-=5%",
        leave: "top top",
        sync: 0.25,
      }),
    });

    animate(".marquee", {
      opacity: [0, 1],
      translateX: [100, 0],
      duration: 500,
      ease: "linear",
      autoplay: onScroll({
        target: "#screen-3",
        container: document.body,
        enter: "top top-=10%",
      }),
    }).then(() => {
      animate(".marquee-content", {
        translateX: ["0%", "-100%"],
        duration: 15000,
        loop: true,
        ease: "linear",
      });
    });

    animate(".opp-marquee", {
      opacity: [0, 1],
      translateX: [-100, 0],
      duration: 500,
      ease: "linear",
      autoplay: onScroll({
        target: "#screen-3",
        container: document.body,
        enter: "top top-=10%",
      }),
    }).then(() => {
      animate(".opp-marquee-content", {
        translateX: ["0%", "-100%"],
        duration: 15000,
        reversed: true,
        loop: true,
        ease: "linear",
      });
    });
  });
</script>

<div id="bg" class="absolute top-0 left-0 w-full h-[325vh]"></div>

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

  <h1 class="text-[10rem] core leading-[1.2]" id="heading">DWMUN'26</h1>

  <div class="grid grid-cols-4 gap-2 w-[50%] mb-8 core">
    <div class="flex flex-col items-start">
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

    <div class="flex flex-col items-end">
      <h2 class="text-7xl">
        {Math.floor((timeLeft / 1000) % 60)}
      </h2>
      <span class="uppercase font-bold">Seconds</span>
    </div>
  </div>

  <div class="w-[50%] flex items-center justify-between core mb-8 text-2xl">
    <span class="text-shadow-white text-shadow-sm"
      >July 31 - August 1, 2026</span
    >
    <span class="text-shadow-white text-shadow-sm"
      >Bigger. Better. Brighter.</span
    >
  </div>

  <div class="flex core">
    <a
      href="/register"
      class="flex-1 flex items-center justify-center px-6 py-3 bg-dark-blue hover:bg-cobalt-blue text-custom-white! rounded-lg text-lg font-semibold transition-colors duration-300 shadow-black/40 shadow-2xl"
    >
      Register Now!
    </a>

    <a
      href="/committees"
      class="flex-1 flex items-center justify-center text-center ml-4 px-6 py-3 bg-custom-white hover:bg-dark-white text-black! rounded-lg text-lg font-semibold transition-colors duration-300 shadow-black/40 shadow-2xl"
    >
      Explore Committees
    </a>
  </div>
</div>

<div class="h-screen w-2/3 mx-auto relative top-[100vh] p-8" id="screen-2">
  <div
    class="bg-custom-white p-8 2 shadow-2xl letter w-full h-[100vh] absolute"
  >
    <span class="absolute bottom-12 right-12">3</span>
  </div>
  <div
    class="bg-custom-white p-8 shadow-2xl -rotate-5 letter w-full h-[100vh] absolute"
  >
    <span class="absolute bottom-12 right-12">2</span>
  </div>

  <div
    class="bg-custom-white p-16 shadow-2xl rotate-5 letter w-full absolute"
    id="sec-letter"
  >
    <div class="flex flex-col mb-8">
      <div class="flex items-center justify-center gap-4 mb-8">
        <div class="flex flex-col items-end uppercase text-xs text-right">
          <span>Delhi Public School, Whitefield</span>
          <span>Model United Nations</span>
        </div>
        <img src="/assets/un-logo.png" alt="Logo" class="w-36" />
        <img src="/assets/logo.png" alt="Logo" class="w-36" />
        <div class="flex flex-col items-start uppercase text-xs text-left">
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
    <div class="w-full text-right mb-8">28 April 2026</div>
    <h1 class="text-3xl font-bold core-2">Letter from the Secretary-General</h1>
    <hr class="mb-8 core-2" />
    <p class="text-sm core-2">Dear delegates,</p>
    <br />
    <p class="text-justify text-sm core-2">
      It is a pleasure of mine to open the doors to the 8th edition of Delhi
      Public School Whitefield Model United Nations, DWMUN’26. As the Secretary
      General of this conference, I look forward to meeting each one of you.
    </p>

    <br />
    <p class="text=justify text-sm core-2">
      From budding delegates to experienced pros, I sincerely wish that DWMUN’26
      will be an enthralling competition and a neutral ground for you to hone
      your skills. The purpose of hosting this MUN is to provide students with
      opportunities to learn, compete, and grow their confidence to speak out in
      the real world.
    </p>

    <br />
    <p class="text-justify text-sm core-2">
      Looking back to my first MUN, it was very anti-cinematic. There was no
      dramatic music in the background as I walked in; instead, there was only a
      confused 8th grader looking up as seniors furiously debated policy with
      each other. As an ambitious kid, I chose ECOSOC as my first committee. I
      may have spoken once in the entirety of 3 days, but I walked out in love
      with MUNs. In those 3 days, I learned simply by sitting and listening to
      people. That is the power of a MUN. In a competition of public speaking,
      it turns out that listening is the most important part.
    </p>

    <br />
    <p class="text-justify text-sm core-2">
      Looking back at my past MUNs, I wasn’t all that impressive. During the
      MUNs, I was nervous and running on pure adrenaline up until the closing
      ceremony. Winning awards gave me no gratification at all; in fact, the
      best MUNs for me were not the ones I won, but the ones I lost miserably.
      It reminded me that there was so much more to learn, and even after a
      loss, I was proud of the research, speeches, and content I put out. At the
      end of the day, in the true nature of competition, winning and losing are
      just part of the game.
    </p>
    <br />
    <p class="text-justify text-sm core-2">
      So, I implore all of you to give your very best, and regardless of the
      outcome, I hope you take away an important lesson from this MUN and are
      proud of the work and efforts you put in. Wishing you all the very best
      for this conference, and looking forward to seeing what all of you have to
      bring to the table.
    </p>

    <br />

    <p class="text-sm core-2">
      Warm regards,<br /> Saachi Pathak <br /> Secretary General <br />
      DWMUN’26 <br /> Delhi Public School, Whitefield
    </p>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="53.5 20.17414093017578 331.9523010253906 147.17324829101562"
      height="200"
      ><path
        class="line"
        d="M 279.000,38.367 C 277.125,35.583 276.750,36.117 274.500,33.867"
        stroke-width="3.437"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 274.500,33.867 C 270.515,31.032 270.625,31.333 266.000,29.867"
        stroke-width="3.511"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 266.000,29.867 C 254.844,26.802 255.015,27.032 243.500,25.867"
        stroke-width="2.580"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 243.500,25.867 C 230.440,25.096 230.594,24.802 217.500,25.867"
        stroke-width="2.378"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 217.500,25.867 C 209.161,26.029 209.440,26.346 201.500,28.367"
        stroke-width="2.709"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 201.500,28.367 C 192.246,30.281 194.411,30.529 188.000,34.867"
        stroke-width="2.900"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 188.000,34.867 C 186.608,39.475 185.996,37.031 189.000,41.867"
        stroke-width="3.535"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 189.000,41.867 C 200.733,53.308 199.858,52.725 214.500,61.367"
        stroke-width="2.179"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 214.500,61.367 C 232.688,69.231 231.483,71.308 250.500,77.867"
        stroke-width="1.866"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 250.500,77.867 C 266.195,84.484 265.688,85.231 280.500,93.367"
        stroke-width="1.825"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 280.500,93.367 C 299.689,102.321 297.195,103.734 312.500,116.367"
        stroke-width="1.680"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 312.500,116.367 C 322.000,128.366 320.439,125.071 322.000,138.867"
        stroke-width="2.119"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 322.000,138.867 C 318.567,146.227 322.000,145.116 312.500,149.867"
        stroke-width="2.638"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 312.500,149.867 C 300.309,157.548 301.067,156.727 287.000,159.867"
        stroke-width="2.216"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 287.000,159.867 C 266.649,162.154 267.309,163.298 246.500,161.367"
        stroke-width="1.739"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 246.500,161.367 C 234.456,160.469 234.649,160.904 223.000,157.367"
        stroke-width="2.166"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 223.000,157.367 C 210.255,153.842 210.456,153.969 198.500,148.367"
        stroke-width="2.146"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 198.500,148.367 C 191.284,145.316 192.005,145.342 186.500,140.367"
        stroke-width="2.657"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 186.500,140.367 C 182.461,136.017 184.034,137.816 184.000,133.367"
        stroke-width="3.463"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 184.000,133.367 C 189.107,127.624 186.961,128.267 195.500,124.867"
        stroke-width="3.167"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 195.500,124.867 C 202.432,122.632 201.857,122.124 209.500,122.367"
        stroke-width="3.093"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 209.500,122.367 C 222.728,121.356 222.432,121.882 235.500,123.367"
        stroke-width="2.360"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 235.500,123.367 C 249.764,126.334 249.728,125.606 263.500,130.867"
        stroke-width="2.096"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 263.500,130.867 C 274.750,134.841 274.764,134.584 285.500,139.867"
        stroke-width="2.315"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 285.500,139.867 C 293.556,144.765 294.000,143.841 302.000,148.867"
        stroke-width="2.499"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 302.000,148.867 C 311.013,153.651 311.056,153.265 320.500,156.867"
        stroke-width="2.492"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 320.500,156.867 C 325.948,158.440 325.763,158.651 331.500,158.867"
        stroke-width="3.061"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 331.500,158.867 C 339.154,159.950 338.948,159.440 346.500,158.867"
        stroke-width="2.949"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 346.500,158.867 C 354.515,157.277 354.404,157.700 362.000,154.367"
        stroke-width="2.904"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 362.000,154.367 C 368.009,151.758 368.015,152.027 373.500,148.367"
        stroke-width="3.150"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 373.500,148.367 C 377.542,146.782 376.509,146.508 379.000,143.867"
        stroke-width="3.637"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 379.000,143.867 C 381.163,139.138 380.542,140.782 379.500,136.367"
        stroke-width="4.266"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 379.500,136.367 C 375.844,132.935 377.413,132.888 371.500,131.367"
        stroke-width="4.320"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 371.500,131.367 C 366.541,130.071 366.844,129.685 361.500,129.867"
        stroke-width="3.669"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 361.500,129.867 C 347.985,129.355 348.041,129.321 334.500,129.867"
        stroke-width="2.545"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 334.500,129.867 C 308.459,130.823 308.485,130.855 282.500,132.867"
        stroke-width="1.545"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 282.500,132.867 C 244.950,135.893 244.959,135.823 207.500,139.867"
        stroke-width="1.191"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 207.500,139.867 C 167.163,143.976 167.200,144.143 127.000,149.367"
        stroke-width="1.125"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path><path
        class="line"
        d="M 127.000,149.367 C 92.710,154.369 92.663,153.976 58.500,159.867"
        stroke-width="1.125"
        stroke="black"
        fill="none"
        stroke-linecap="round"
      ></path>
    </svg>

    <span class="absolute bottom-12 right-12">1</span>
  </div>
</div>

<div class="h-screen relative overflow-x-hidden top-[125vh]" id="screen-3">
  <h1 class="text-6xl text-center absolute top-32 w-full">Committees</h1>
  <Marquee>
    <CommRow />
  </Marquee>
</div>

<div class="relative top-[125vh]">
  <Footer />
</div>
