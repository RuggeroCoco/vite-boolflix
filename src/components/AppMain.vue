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
    <li v-for="(movie, index) in store.movies" :key="index">
      <AppCard :movie="movie" />
    </li>
  </ul>
</template>
