<script lang="ts">
  import "./layout.css";
  import { onMount } from "svelte";
  import Navbar from "$lib/components/Navbar.svelte";

  let { children } = $props();

  const opacity = 25;
  const probability = 0.5;
  const damping = 0.75;

  onMount(() => {
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
    document.body.style.backgroundImage = `url(${canvas.toDataURL()})`;

    document.addEventListener("scroll", () => {
      const scrollbar = document.getElementById("scrollbar");
      if (!scrollbar) return;

      const scrollTop = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = maxScroll > 0 ? scrollTop / maxScroll : 0;

      // clamp
      const p = Math.min(Math.max(progress, 0), 1);

      const start = 33;
      const end = 66;

      // map to 25vh → 75vh
      const heightVH = 10; // example height of scrollbar
      const topVH = start + (end - heightVH - start) * p;

      scrollbar.style.top = `${topVH}vh`;
      scrollbar.style.height = `${heightVH}vh`;
    });
  });
</script>

<svelte:head>
  <link rel="icon" href="/assets/logo.png" />
</svelte:head>

<div class="h-screen w-screen fixed top-0 left-0 z-10 pointer-events-none">
  <div
    class="w-3 h-[35vh] top-[32vh] right-0 absolute backdrop-blur-sm rounded-l-xl shadow-left-glow"
  ></div>

  <div
    class="w-1 h-[10vh] top-[33vh] absolute right-1 rounded-full bg-dark-blue"
    id="scrollbar"
  ></div>
</div>

<Navbar />
{@render children()}
