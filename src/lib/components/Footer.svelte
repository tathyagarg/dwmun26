<script lang="ts">
  import Icon from "@iconify/svelte";
</script>

<footer
  class="bg-custom-white w-full px-4 sm:px-[16.6%] py-12 flex flex-col sm:flex-row relative"
>
  <div class="flex-2">
    <h1 class="text-2xl mb-4">Contact Us</h1>

    <div class="flex flex-row items-center">
      <Icon icon="mdi:map-marker" class="text-4xl mr-2" />
      <span class="text-base sm:text-lg leading-[1.2]">
        Delhi Public School - Whitefield<br />
        Survey No. 123/124, Mallasandra Village<br />
        Hoskote Taluk, Bangalore - 560067
      </span>
    </div>

    <div class="flex flex-row items-center mt-4">
      <Icon icon="mdi:phone" class="text-4xl mr-2" />
      <span class="text-base sm:text-lg leading-[1.2]">
        <span class="font-bold">Secretary General</span>: Saachi Pathak -
        <a href="tel:+919663426152" class="text-blue-500 hover:underline"
          >+91 96634 26152</a
        ><br />
        <span class="font-bold">Head of Delegate Affairs</span>: Sloka Pudipeddi
        -
        <a href="tel:+916364601718" class="text-blue-500 hover:underline"
          >+91 63646 01718</a
        ><br />
        <span class="font-bold">Head of Delegate Affairs</span>: Nivika Kumar -
        <a href="tel:+919170087106" class="text-blue-500 hover:underline"
          >+91 91700 87106</a
        >
      </span>
    </div>

    <div class="flex flex-row items-center mt-4">
      <Icon icon="mdi:instagram" class="text-4xl mr-2" />
      <a
        href="https://www.instagram.com/dwmun/"
        target="_blank"
        class="text-lg text-blue-500 hover:underline">@dwmun</a
      >
    </div>

    <!-- email -->
    <div class="flex flex-row items-center mt-4">
      <Icon icon="mdi:email" class="text-4xl mr-2" />
      <a
        href="mailto:help@dwmun.co.in"
        class="text-lg text-blue-500 hover:underline"
      >
        help@dwmun.co.in
      </a>
    </div>
  </div>

  <div class="flex flex-1 flex-col justify-end items-end gap-2">
    <img src="/assets/notbyai.png" alt="Not by AI" class="w-32" />

    <span class="text-xs opacity-75"
      >Made by <a href="https://arson.dev/">Tathya</a></span
    >
  </div>
</footer>

<style>
  @keyframes stripes {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: 0% 0;
    }
  }

  footer::before {
    content: "";
    position: absolute;
    pointer-events: none;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background: repeating-linear-gradient(
      105deg,
      transparent 0px,
      transparent 120px,
      rgba(from var(--color-dark-blue) r g b / 0.25) 120px,
      rgba(from var(--color-dark-blue) r g b / 0.25) 240px
    );
    background-size: 200% 100%;

    opacity: 0.2;
    animation: stripes 30s linear infinite;
  }
</style>
