<script lang="ts">
  import Card from './Card.svelte';

  export let results: any[] = [];
</script>


<ul class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
  {#each results as result (result.id)}
    <Card movie={result} />
  {/each}
</ul>