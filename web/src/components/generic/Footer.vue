<template>
  <div class="px-6 pt-5 pb-6 bg-purple-50 bottom-0 fixed w-screen">
    <footer class="mx-auto max-w-4xl flex justify-between">
      <p class="text-sm text-neutral-800">
        Thyssa De Keyser - Disclaimer {{ new Date().getFullYear() }}
      </p>
      <p class="text-sm text-neutral-800">
        Use of data from the
        <a
          class="underline text-[#0d253f] hover:text-[#01b4e4]"
          href="https://www.themoviedb.org/"
          >TMDB API <img class="h-3" src="/logo_tmdb.svg" alt="logo TMDB"
        /></a>
      </p>
    </footer>
  </div>
</template>

<script lang="ts">
export default {}
</script>
