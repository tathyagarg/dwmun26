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
  });
</script>

<svelte:head>
  <link rel="icon" href="/assets/logo.png" />
</svelte:head>

<Navbar />
{@render children()}
