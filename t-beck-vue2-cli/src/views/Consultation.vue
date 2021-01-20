<template>
  <div class="customerInfo">
    <div id="container">
      <div class="form__title">
        <p class="text-l">以下にお答えください</p>
        <span class="form__title__step">STEP3</span>
      </div>
      <form action="">
        <div class="question__list">
          <div class="question__item">
            <p class="question">-ご相談内容-</p>
            <textarea rows="8" />
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
      this.$router.push("/");
    },
    onclickPre() {
      this.$router.push("/interview");
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

textarea {
  width: 100%;
  margin: 0 auto;
  border:1px solid #ccc;
}
</style>
