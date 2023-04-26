<script>
import { store } from "../store";

export default {
  name: "AppHeader",
  emits: ["search"],
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <h2>Boolflix</h2>
  <input type="text" v-model.trim="store.searchKey" />
  <button @click="$emit('search')">Cerca</button>
</template>
