<script>
  export let query
  export let handleSubmit
</script>

<div>
  <form on:submit|preventDefault={handleSubmit}>
    <input
      bind:value={query}
      class="w-full px-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
      type="search"
      placeholder="Search your favorite movies"
    />
  </form>
</div>
