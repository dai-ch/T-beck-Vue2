<template>
  <div id="consultation">
    <div class="consultation__wrap">
      <div class="container">
        <div class="form__title">
          <p class="text-l">
            <i class="fas fa-file-alt"></i>ご相談内容をご記入ください
          </p>
          <span class="form__title__step">STEP3</span>
        </div>
        <form>
          <div class="question__list">
            <div class="question__item">
              <p class="question">-ご相談内容-</p>
              <textarea rows="16" />
            </div>
          </div>
        </form>
      </div>
    </div>
    <button class="next__btn" v-on:click="previousBtn">
      前へ戻る<i class="fas fa-angle-right"></i>
    </button>
    <button class="next__btn" v-on:click="nextBtn">
      次へ進む<i class="fas fa-angle-right"></i>
    </button>
  </div>
</template>

<script>
export default {
  id: "consultation",
  components: {
  },
  data() {
    return {
      questions: ["はい", "いいえ"],
    };
  },
  methods: {
    nextBtn() {
      //this.$router.push("/");
    },
    previousBtn() {
      this.$router.push("/interview");
    },
  },
};
</script>
<style scoped>
textarea {
  width: 100%;
  margin: 0 auto;
  border: 1px solid #ccc;
}
</style>
