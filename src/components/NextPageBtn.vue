<template>
  <button class="next__btn" v-on:click="nextBtn">
    次へ進む<i class="fas fa-angle-right"></i>
  </button>
</template>

<script>
export default {
  methods: {
    nextBtn() {
      this.$router.push("/interview");
    },
  },
};
</script>

<style scoped>
</style>