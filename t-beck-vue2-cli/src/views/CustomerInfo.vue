<template>
  <div class="customerInfo">
    <div id="container">
      <div class="form__title">
        <p class="text-l">お客様の情報を入力してください</p>
        <span class="form__title__step">STEP1</span>
      </div>
      <form action="">
        <div class="question__list">
          <div class="question__item">
            <p class="question">-性別-</p>
            <div class="radio" v-for="gender in genders">
              <input type="radio" name="gender" v-bind:value="gender" />{{
                gender
              }}
            </div>
          </div>
          <div class="question__item">
            <p class="question">-生年月日-</p>
            <label
              ><select class="select" name="year">
                <option v-for="year in yearsList" v-bind:value="year">
                  {{ year }}
                </option></select
              >年</label
            >
            <label
              ><select class="select" name="month">
                <option v-for="month in monthList" v-bind:value="month">
                  {{ month }}
                </option></select
              >月</label
            >
            <select class="select" name="day">
              <option v-for="day in dayList" value="day">{{ day }}</option>
            </select>
            <label>日</label>
          </div>
        </div>
      </form>
    </div>
  </div>
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
      genders: ["男性", "女性"],
      years: [],
      months: [],
      days: [],
    };
  },
  methods: {
    onclick() {
      this.$router.push("/interview");
    },
  },
  computed: {
    yearsList: function () {
      //selectに入れる配列
      const year = new Date().getFullYear();
      for (let i = year; i > 1907; i--) {
        if (i > 2018) {
          this.years.push(i + "年 (令和" + (i - 2018) + ")");
        } else if (i > 1988) {
          this.years.push(i + "年 (平成" + (i - 1988) + ")");
        } else if (i > 1925) {
          this.years.push(i + "年 (昭和" + (i - 1925) + ")");
        } else if (i > 1911) {
          this.years.push(i + "年 (大正" + (i - 1911) + ")");
        } else if (i > 1868) {
          this.years.push(i + "年 (明治" + (i - 1868) + ")");
        }
      }
      return this.years;
    },
    monthList: function () {
      for (let i = 1; i <= 12; i++) {
        this.months.push(i);
      }
      return this.months;
    },
    dayList: function () {
      for (let i = 1; i <= 31; i++) {
        this.days.push(i);
      }
      return this.days;
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
  margin: 20px auto 0;
  display: inline-block;
}

</style>
