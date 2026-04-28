<script>
  import { COMM_DATA } from "$lib";
  import CommCard from "./Card.svelte";
</script>

{#each Object.entries(COMM_DATA) as [comm, _]}
  {@const commName = comm.toUpperCase()}
  <CommCard src="/assets/logos/{commName}.png" name={commName} />
{/each}
