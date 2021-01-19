<template>
  <div class="hello">
    <div id="container">
      <div class="form__title">
        <span class="form__title__step">STEP1</span>
        <p class="text-l">お客様の情報を入力してください</p>
      </div>
      <form action="">
        <div class="question__list">
          <div class="question__item">
            <p class="">-性別-</p>
            <div v-for="gender in genders">
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
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "hello",
      text: "bye",
      showText: false,
      genders: ["男性", "女性"],
      years: [],
      months: [],
      days: [],
    };
  },
  methods: {
    toggle: function () {
      this.showText = !this.showText;
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  margin: 0 auto;
  padding: 0;
}

#container {
  width: 100%;
  max-width: 800px;
  margin: 4rem auto 0;
  border: 1px solid aquamarine;
  border-radius: 5px;
}

.form__title {
  padding: 10px 0;
  margin: 0;
  text-align: center;
  position: relative;
  background-color: aquamarine;
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

.question {
  color: blue;
  margin: 15px 0 10px 10px;
}

.select {
  margin-top: 15px;
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
  display: block;
}

.next__btn__span {
  font-weight: 700;
}
</style>
