<template>
  <ul
    class="grid w-full grid-cols-5 items-center text-center text-xs font-medium sm:w-auto sm:space-x-3 sm:text-left sm:text-sm bg-purple-50 py-3"
  >
    <li>
      <a
        exact-active-class="opacity-40"
        class="inline-block rounded-md px-3 py-1 outline-none focus-visible:ring-2 pl-6"
        href="/"
      >
        <img class="w-24" src="/logo.png" alt="logo" />
      </a>
    </li>

    <li>
      <a
        active-class="opacity-40"
        class="inline-block rounded-md px-3 py-1 outline-none focus-visible:ring-2"
        href="/popular"
      >
        Popular movies
      </a>
    </li>

    <li>
      <a
        active-class="opacity-40"
        class="inline-block rounded-md px-3 py-1 outline-none focus-visible:ring-2"
        href="/current"
      >
        Now playing
      </a>
    </li>

    <li>
      <a
        active-class="opacity-40"
        class="inline-block rounded-md px-3 py-1 outline-none focus-visible:ring-2"
        href="/best"
      >
        Best movies
      </a>
    </li>

    <li>
      <a
        active-class="opacity-40"
        class="inline-block rounded-md px-3 py-1 outline-none focus-visible:ring-2"
        href="/search"
      >
        <img class="w-6" src="/search.svg" alt="logo" />
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  setup() {},
}
</script>
