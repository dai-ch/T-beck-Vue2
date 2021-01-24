<template>
  <div id="interview">
    <transition name="interview">
      <div class="interview__wrap">
        <div class="container">
          <div class="form__title">
            <p class="text-l">
              <i class="fas fa-chalkboard-teacher"></i>以下にお答えください
            </p>
            <span class="form__title__step">STEP2</span>
          </div>
          <form>
            <div class="question__list">
              <div class="question__item">
                <p class="question">現在、生命保険に加入されていますか？</p>
                <div class="radio" v-for="question in questions" v-bind:key="question">
                  <input type="radio" name="question1" v-bind:value="question" v-on:click="question1"/>{{ question }}</div>
              </div>
              <transition name="show2">
                <div class="question__item" v-show="show2">
                  <p class="question">
                    現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？
                  </p>
                  <div class="radio" v-for="question in questions" v-bind:key="question">
                    <input type="radio" name="question2" v-bind:value="question" v-on:click="question2"/>{{ question }}
                  </div>
                </div>
              </transition>
              <transition name="show3">
                <div class="question__item" v-show="show3">
                  <p class="question">
                    過去5年以内に、病気やけがで、手術をうけたまたは継続して7日以上の入院をしたことがありますか？
                  </p>
                  <div class="radio" v-for="question in questions" v-bind:key="question">
                    <input type="radio" name="question3" v-bind:value="question"/>{{ question }}
                  </div>
                </div>
              </transition>
            </div>
          </form>
        </div>
        <button class="next__btn" v-on:click="previousBtn">
          前へ戻る<i class="fas fa-angle-right"></i>
        </button>
        <button class="next__btn" v-on:click="nextBtn">
          次へ進む<i class="fas fa-angle-right"></i>
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  id: "interview",
  data() {
    return {
      questions: ["はい", "いいえ"],
      show2: false,
      show3: false,
    };
  },
  methods: {
    nextBtn() {
      this.$router.push("/consultation");
    },
    previousBtn() {
      this.$router.push("/");
    },
    question1() {
      this.show2 = true;
    },
    question2() {
      this.show3 = true;
    },
  },
};
</script>

<style scoped>
/* enterの開始状態 */
.show2-enter-from,
.show3-enter-from {
  opacity: 0;
}
/*  enterのtransitionのフェーズ中 */
.show2-enter-active,
.show3-enter-active {
  transition: 0.5s ease-in;
}
/* enterの終了状態 */
.show2-enter-to,
.show3-enter-to {
  opacity: 1;
}
</style>
