<script>
import { store } from "../store";
import AppCard from "./AppCard.vue";
export default {
  name: "AppMain",
  components: { AppCard },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <h2>Movies</h2>
  <ul>
    <li v-for="movie in store.movies" :key="movie.id">
      <AppCard :cardObj="movie" />
    </li>
  </ul>
  <h2>Serie TV</h2>
  <ul>
    <li v-for="serie in store.series" :key="serie.id">
      <AppCard :cardObj="serie" />
    </li>
  </ul>
</template>
