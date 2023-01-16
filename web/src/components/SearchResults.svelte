<script>
  import Card from './Card.svelte';

  export let results;
</script>


<ul class="grid grid-cols-5 gap-x-72 gap-6 m-[70px auto]">
  {#each results as result (result.id)}
    <Card movie={result} />
  {/each}
</ul>