<script>
  import Card from "$lib/components/Card.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<div
  class="w-1/2 mx-auto h-screen flex flex-col gap-4 sm:gap-8 items-center justify-center"
>
  <h1 class="text-3xl text-center sm:text-5xl">Registrations are open!</h1>
  <p class="text-xs text-center sm:text-base">
    Please note the registration fee is set at <b>₹1,200</b> per delegate.
  </p>

  <div class="flex flex-col sm:flex-row gap-8">
    <a href="https://forms.gle/VXoARQGzwbCmEFKEA">
      <Card src="/assets/icons/individual.svg" name="Individual" small hovers />
    </a>

    <a href="https://forms.gle/i69a74RyM2khRY85A">
      <Card src="/assets/icons/delegation.svg" name="Delegation" small hovers />
    </a>
  </div>
</div>

<Footer />
