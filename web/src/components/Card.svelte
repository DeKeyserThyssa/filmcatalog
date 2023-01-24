<script lang="ts">
  export let movie: any;
</script>

<li class="h-auto list-none rounded-xl shadow-2xl">
  <a href={`movie/${movie.id}`}>
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
    <!-- <img
        class="aspect-[2/3]"
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title || ''}
      /> -->
    <div class="p-2">
      <h3 class="text-2xl">{movie.title}</h3>
      <p class=""><strong>language: </strong>{movie.original_language}</p>
      <p class="">
        <strong>rating: </strong>{movie.vote_average} ({movie.vote_count})
      </p>
    </div>
  </a>
</li>