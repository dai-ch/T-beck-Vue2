<template>
  <button class="next__btn" v-on:click="previousBtn">
    前へ戻る<i class="fas fa-angle-right"></i>
  </button>
</template>

<script>
export default {
  methods: {
    previousBtn() {
      this.$router.push("/interview");
    },
  },
};
</script>

<style scoped>
</style>