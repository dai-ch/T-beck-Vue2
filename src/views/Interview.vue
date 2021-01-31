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
                <input class="radioBtn" type="radio" name="question1" value="はい" v-model="$store.state.question1" v-on:click="question1"
                />はい
                <input class="radioBtn" type="radio" name="question1" value="いいえ" v-model="$store.state.question1" v-on:click="question1"
                />いいえ
              </div>
              <transition name="show2">
                <div class="question__item" v-if="show2">
                  <p class="question">
                    現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？
                  </p>
                  <input class="radioBtn" type="radio" name="question2" value="はい" v-model="$store.state.question2" v-on:click="question2"
                  />はい
                  <input class="radioBtn" type="radio" name="question2" value="いいえ" v-model="$store.state.question2" v-on:click="question2"
                  />いいえ
                </div>
              </transition>
              <transition name="show3">
                <div class="question__item" v-if="show3">
                  <p class="question">
                    過去5年以内に、病気やけがで、手術をうけたまたは継続して7日以上の入院をしたことがありますか？
                  </p>
                  <input class="radioBtn" type="radio" name="question3" value="はい" v-model="$store.state.question3"
                  />はい
                  <input class="radioBtn" type="radio" name="question3" value="いいえ" v-model="$store.state.question3"
                  />いいえ
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
  id: 'interview',
  data() {
    return {
      show2: false,
      show3: false,
    };
  },
  computed: {},
  methods: {
    nextBtn() {
      this.$router.push('/consultation');
    },
    previousBtn() {
      this.$router.push('/');
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
.question__item {
  margin-top: 10px;
}
</style>
