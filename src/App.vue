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
      this.store.loading = true;
      console.log('loading');
      axios
        .get(`${this.store.apiBaseUrl}/search/movie`, {
          params: {
            api_key: this.store.apiKey,
            query: this.store.searchKey,
          },
        })
        .then((resp) => {
          console.log('movies arrivati');
          this.store.movies = resp.data.results;
        })
        .catch((err) => {
          console.log(err);
        }).finally(() => {
          this.store.loading = false;
          console.log('stop loading');
        })
    },
    getSeries() {
      this.store.loading = true;
      console.log('loading');
      axios
        .get(`${this.store.apiBaseUrl}/search/tv`, {
          params: {
            api_key: this.store.apiKey,
            query: this.store.searchKey,
          },
        })
        .then((resp) => {
          console.log('serie arrivati');
          this.store.series = resp.data.results;
        })
        .catch((err) => {
          console.log(err);
        }).finally(() => {
          console.log('stop loading');
        })
    },
  },
};
</script>

<template>
  <AppHeader @search="performSearch" />
  <AppMain />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
