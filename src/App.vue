<script>
import axios from "axios";
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";

export default {
  components: { AppHeader, AppMain },
  data() {
    return {
      store,
    };
  },
  methods: {
    performSearch() {
      if (this.store.searchKey) {
        this.getMovies();
        this.getSeries();
      }
    },
    getMovies() {
      axios
        .get(`${this.store.apiBaseUrl}/search/movie`, {
          params: {
            api_key: this.store.apiKey,
            query: this.store.searchKey,
          },
        })
        .then((resp) => {
          this.store.movies = resp.data.results;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getSeries() {
      axios
        .get(`${this.store.apiBaseUrl}/search/tv`, {
          params: {
            api_key: this.store.apiKey,
            query: this.store.searchKey,
          },
        })
        .then((resp) => {
          this.store.series = resp.data.results;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<template>
  <AppHeader @search="performSearch" />
  <AppMain />
</template>

<style scoped></style>
