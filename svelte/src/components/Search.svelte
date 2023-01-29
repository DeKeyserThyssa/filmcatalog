<script lang="ts">
    export let query: string
    export let handleSubmit: () => void
  </script>
  
  <div>
    <form on:input|preventDefault={handleSubmit}>
      <input
        bind:value={query}
        class="w-full px-4 py-2 mb-6 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
        type="search"
        placeholder="Search your favorite movies"
      />
    </form>
  </div>
  