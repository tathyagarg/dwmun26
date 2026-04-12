<script lang="ts">
  import Icon from "@iconify/svelte";
</script>

<footer class="bg-custom-white w-full px-[16.6%] py-12">
  <h1 class="text-2xl mb-4">Contact Us</h1>

  <div class="flex flex-row items-center">
    <Icon icon="mdi:map-marker" class="text-4xl mr-2" />
    <span class="text-lg leading-[1.2]">
      Delhi Public School - Whitefield<br />
      Survey No. 123/124, Mallasandra Village<br />
      Hostoke Taluk, Bangalore - 560067
    </span>
  </div>

  <div class="flex flex-row items-center mt-4">
    <Icon icon="mdi:phone" class="text-4xl mr-2" />
    <span class="text-lg leading-[1.2]">
      Secretary General: Saachi Pathak -
      <a href="tel:+911234567890" class="text-blue-500 hover:underline"
        >+91 12345 67890</a
      ><br />
      Head of Delegate Affairs: Nivika Kumar -
      <a href="tel:+911234567890" class="text-blue-500 hover:underline"
        >+91 12345 67890</a
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
      href="mailto:dpsw.modelun@gmail.com"
      class="text-lg text-blue-500 hover:underline"
    >
      dpsw.modelun@gmail.com
    </a>
  </div>
</footer>
