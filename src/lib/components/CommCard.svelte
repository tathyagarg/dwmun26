<script lang="ts">
  let data: { src: string; name: string } = $props();
</script>

<div class="min-h-full bg-custom-white border-2 border-dark-blue p-8">
  <img
    src={data.src}
    alt={data.name}
    class="aspect-square w-64 object-cover mb-4"
  />
  <h1 class="text-2xl text-center">{data.name}</h1>
</div>
