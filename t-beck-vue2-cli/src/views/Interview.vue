<template>
  <div class="customerInfo">
    <div id="container">
      <div class="form__title">
        <p class="text-l">以下にお答えください</p>
        <span class="form__title__step">STEP2</span>
      </div>
      <form action="">
        <div class="question__list">
          <div class="question__item">
            <p class="question">現在、生命保険に加入されていますか？</p>
            <div class="radio" v-for="question in questions">
              <input type="radio" name="question1" v-bind:value="question" />{{
                question
              }}
            </div>
          </div>
          <div class="question__item">
            <p class="question">
              現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？
            </p>
            <div class="radio" v-for="question in questions">
              <input type="radio" name="question2" v-bind:value="question" />{{
                question
              }}
            </div>
          </div>
          <div class="question__item">
            <p class="question">
              過去5年以内に、病気やけがで、手術をうけたまたは継続して7日以上の入院をしたことがありますか？
            </p>
            <div class="radio" v-for="question in questions">
              <input type="radio" name="question3" v-bind:value="question" />{{
                question
              }}
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

  <button class="next__btn" v-on:click="onclickPre">前へ戻る</button>
  <button class="next__btn" v-on:click="onclick">次へ進む</button>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    //HelloWorld,
  },
  data() {
    return {
      questions: ["はい", "いいえ"],
    };
  },
  methods: {
    onclick() {
      this.$router.push("/consultation");
    },
    onclickPre() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
body {
  margin: 0 auto;
  padding: 0;
}

#container {
  width: 90%;
  max-width: 800px;
  margin: 4rem auto 0;
  border: 1px solid aqua;
  border-radius: 5px;
}

.form__title {
  padding: 10px 0;
  margin: 0;
  text-align: center;
  position: relative;
  background-color: aquamarine;
  border: 1px solid aqua;
}

.form__title__step {
  position: absolute;
  left: 0;
  top: 0;
  padding: 0 3px;
  background-color: blue;
  color: #fff;
  border-radius: 5px;
}

.question__list {
  text-align: left;
  padding: 15px;
}

.question__item {
  padding: 5px;
}

.question {
  color: blue;
}

.radio {
  display: inline-block;
  margin-top: 10px;
  margin-right: 10px;
  padding: 10px 0;
}

.select {
  margin-top: 15px;
  padding: 5px;
  border: 1px solid #bbb;
}

.container__item {
  padding: 10px;
}

.next__btn {
  color: #fff;
  background-color: #36eec0;
  padding: 5px 20px;
  border-radius: 5px;
  border: none;
  margin: 20px 10px 0;
  display: inline-block;
}
</style>
