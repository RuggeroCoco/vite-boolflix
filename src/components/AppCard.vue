<script>
export default {
  name: "AppCard",
  props: {
    cardObj: Object,
  },
  data() {
    return {
      availableFlags: ["it", "en"],
    };
  },
  methods: {
    getImgPath(imgPath) {
      return new URL(imgPath, import.meta.url).href;
    },
  },
  computed: {
    isFlagAvailable() {
      return this.availableFlags.includes(this.cardObj.original_language);
    },
    getOriginalLanguagePath() {
      return `../assets/images/${this.cardObj.original_language}.png`;
    },
    objTitle() {
      return this.cardObj.title ? this.cardObj.title : this.cardObj.name;
    },
    objOriginalTitle() {
      return this.cardObj.original_title
        ? this.cardObj.original_title
        : this.cardObj.original_name;
    },
    objVote() {
      return Math.ceil(this.cardObj.vote_average / 2);
    }
  },
};
</script>

<template>
  <div>
    <h3>{{ objTitle }}</h3>
    <h4>{{ objOriginalTitle }}</h4>
    <div class="language">
      <p v-if="!isFlagAvailable">
        {{ cardObj.original_language }}
      </p>
      <img v-else :src="getImgPath(this.getOriginalLanguagePath)" alt="" />
    </div>
    <p>{{ cardObj.vote_average }}</p>
    <div>
      {{ objVote }}
      <i v-for="num in 5" :key="num" class="fa-star" :class="num <= objVote ? 'fa-solid' : 'fa-regular'"></i>
    </div>
  </div>
</template>

<style scoped lang="scss">
.language {
  img {
    width: 50px;
  }
}
</style>
