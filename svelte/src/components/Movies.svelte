<script lang="ts">
  import { API_KEY } from "../apikey";


    async function getMovies() {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    const movies = await res.json();

    console.log('the movies', movies);

    if (res.ok) {
      return movies;
    } else {
      throw new Error(movies);
    }
  }

  $: allMoviesPromise = getMovies();
</script>

<section class="w-1/2 m-auto border border-gray-400 p-8 rounded">
    {#await allMoviesPromise then movies}
      {#each movies.results as movie}
        <div class="m-4 cursor-pointer">
          <div class="flex">
            {#if movie.poster_path === null}
      <img
        class="aspect-[2/3]"
        src="/placeholder_movie.svg"
        alt={movie.title || ''}
      />
    {:else}
      <img
        class="aspect-[2/3]"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title || ''}
      />
    {/if}
            <p class="my-auto font-semibold ml-2">{movie.title}</p>
          </div>
        </div>
      {/each}
    {/await}
  </section>