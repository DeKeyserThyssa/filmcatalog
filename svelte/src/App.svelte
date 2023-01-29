<script lang="ts">
  import { onMount } from 'svelte'
  import { API_KEY } from './apikey'
  import Search from './components/Search.svelte'
  import SearchResults from './components/SearchResults.svelte'

  let searchQuery = ''
  let searchTerm: string
  let totalPages: number
  let searchResults: any[] = []
  let page: number = 1
  let isLoading: boolean = false

  let observer: any
  let target: any

  const loadMoreResults = (entries: any) => {
    entries.forEach((entry: any) => {
      // If new search or if ongoing search
      if (page === 1 || isLoading) return

      // target is intersecting the viewport
      if (entry.isIntersecting) {
        searchMovies()
      }
    })
  }

  onMount(() => {
    observer = new IntersectionObserver(loadMoreResults)
    target = document.querySelector('.loading-indicator')

    observer.observe(target)
  })

  function handleSubmit() {
    searchTerm = searchQuery.trim()
    searchResults = []
    totalPages = 0
    page = 1

    if (!searchTerm) return

    searchMovies()
  }

  function handleInput(event) {
    searchTerm = event.target.value;
  }

  function searchMovies() {
    isLoading = true

    const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${page}`

    fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response.json()
      })
      .then((data) => {
        if (data.total === 0) {
          alert('No movies found!')
          return
        }

        searchResults = [...searchResults, ...data.results]
        totalPages = data.total_pages

        if (page <= totalPages) {
          page += 1
          if (page >= totalPages) {
            return
          }
          searchMovies()
        }
      })
      .catch(() => alert('An error occured!'))
      .finally(() => {
        isLoading = false

        if (page >= Number(totalPages)) {
          observer.unobserve(target)
        }
      })
  }

  $: if (searchTerm) {
    searchMovies();
  }

</script>

<main class="m-12 items-center justify-center">
  <Search bind:query={searchQuery} {handleSubmit} />
  <SearchResults results={searchResults} />

  <div class="loading-indicator">
    {#if isLoading}
      <p>Loading...</p>
    {/if}
  </div>
</main>
