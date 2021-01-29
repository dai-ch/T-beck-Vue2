<template>
  <div id="confirmation">
    <div class="confirmation__wrap">
      <div class="container">
        <div class="form__title">
          <p class="text-l">
            <i class="fas fa-file-alt"></i>以下の内容をご確認ください
          </p>
          <span class="form__title__step">STEP4</span>
        </div>
        <div class="question__list">
          <div class="question__item">
            <p class="question">-性別-</p>
            <p>{{ getGender }}</p>
          </div>
          <div class="question__item">
            <p class="question">-生年月日-</p>
            <p>
              {{ getSelectYear.substr(0, 4) }}年{{ getSelectMonth }}月{{
                getSelectDate
              }}日
            </p>
          </div>
          <div class="question__item">
            <p class="question">現在、生命保険に加入されていますか？</p>
            <p>{{ getQuestion1 }}</p>
          </div>

          <div class="question__item">
            <p class="question">
              現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？
            </p>
            <p>{{ getQuestion2 }}</p>
          </div>
          <div class="question__item">
            <p class="question">
              過去5年以内に、病気やけがで、手術をうけたまたは継続して7日以上の入院をしたことがありますか？
            </p>
            <p>{{ getQuestion3 }}</p>
          </div>
          <div class="question__item">
            <p class="question">-ご相談内容-</p>
            <p>{{ getEnterConsultation }}</p>
          </div>
        </div>
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
  id: "confirmation",
  components: {},
  data() {
    return {
      questions: ["はい", "いいえ"],
    };
  },
  computed: {
    //index.jsのstateメソッドから値を取得
    getEnterConsultation() {
      return this.$store.state.consultationText;
    },
    getQuestion1() {
      return this.$store.state.question1;
    },
    getQuestion2() {
      return this.$store.state.question2;
    },
    getQuestion3() {
      return this.$store.state.question3;
    },
    getGender() {
      return this.$store.state.gender;
    },
    getSelectYear() {
      return this.$store.state.year;
    },
    getSelectMonth() {
      return this.$store.state.month;
    },
    getSelectDate() {
      return this.$store.state.date;
    },
  },
  methods: {
    nextBtn() {
      //this.$router.push("/");
    },
    previousBtn() {
      this.$router.push("/consultation");
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
