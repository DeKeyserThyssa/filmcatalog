<script>
  import Search from './Search.svelte'
  import { onMount } from 'svelte'
  import SearchResults from './SearchResults.svelte'
  import API_KEY from '../apikey.ts'

  let searchQuery = ''
  let searchTerm = null
  let totalPages = null
  let searchResults = []
  let nextPage = 1
  let isLoading = false

  let observer
  let target

  const loadMoreResults = (entries) => {
    entries.forEach((entry) => {
      // If new search or if ongoing search
      if (nextPage === 1 || isLoading) return

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
    totalPages = null
    nextPage = 1

    if (!searchTerm) return

    searchMovies()
  }

  function searchMovies() {
    isLoading = true

    const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=f273f529bbfef70aa8e1cded08b78e7e&query=${searchTerm}&page=${nextPage}`

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

        if (nextPage <= totalPages) {
          nextPage += 1
          if (nextPage >= totalPages) {
            return
          }
          searchMovies()
        }
      })
      .catch(() => alert('An error occured!'))
      .finally(() => {
        isLoading = false

        if (nextPage >= Number(totalPages)) {
          observer.unobserve(target)
        }
      })
  }
</script>

<main class="App">
  <Search bind:query={searchQuery} {handleSubmit} />
  <SearchResults results={searchResults} />

  <div class="loading-indicator">
    {#if isLoading}
      <p>Loading...</p>
    {/if}
  </div>
</main>
