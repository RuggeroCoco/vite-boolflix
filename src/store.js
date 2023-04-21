import { reactive } from "vue";

export const store = reactive({
  searchKey: "",
  movies: [],
  apiBaseUrl: "https://api.themoviedb.org/3",
  loading: false,
});
