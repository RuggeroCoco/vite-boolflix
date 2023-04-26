import { reactive } from "vue";

export const store = reactive({
  searchKey: "",
  movies: [],
  apiBaseUrl: "https://api.themoviedb.org/3",
  apiKey: "47f5f5f67d92644652a185a658cca3a1",
  loading: false,
});
