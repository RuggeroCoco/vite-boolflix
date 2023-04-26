<script>
export default {
  name: "AppCard",
  props: {
    movie: Object,
  },
};
</script>

<template>
  <div>
    <h3>{{ movie.title }}</h3>
    <h4>{{ movie.original_title }}</h4>
    <p>{{ movie.original_language }}</p>
    <p>{{ movie.vote_average }}</p>
    <div>
      <span v-for="num in 4" :index="num"> S </span>
    </div>
  </div>
</template>
