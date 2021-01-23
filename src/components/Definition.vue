<template>
  <div class="container">
    <div class="form__title">
      <p class="text-l">
        <i class="fas fa-address-card"></i>お客様の情報を入力してください
      </p>
      <span class="form__title__step">STEP1</span>
    </div>
    <form>
      <div class="question__list">
        <div class="question__item">
          <p class="question">-性別-</p>
          <div class="radio" v-for="gender in genders" v-bind:key="gender">
            <input type="radio" name="gender" v-bind:value="gender" />{{
              gender
            }}
          </div>
        </div>
        <div class="question__item">
          <p class="question">-生年月日-</p>
          <label
            ><select class="select" name="year" v-model="selectedYear">
              <option v-for="year in yearsList" v-bind:value="year" v-bind:key="year">
                {{ year }}
              </option></select>年</label>
          <label
            ><select class="select" name="month" v-model="selectedMonth">
              <option v-for="month in monthList" v-bind:value="month" v-bind:key="month">
                {{ month }}
              </option></select>月</label>
          <select class="select" name="day" v-model="selectedDay">
            <option v-for="day in dayList" value="day" v-bind:key="day">
              {{ day }}
            </option>
          </select>
          <label>日</label>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  id: "customer",
  data() {
    return {
      selectedYear: "",
      selectedMonth: "",
      selectedDay: "",
      gender: "",
      genders: ["男性", "女性"],
    };
  },
  computed: {
    yearsList: function () {
      const years = [];
      //selectに入れる配列
      const year = new Date().getFullYear();
      for (let i = year; i > 1907; i--) {
        if (i > 2018) {
          years.push(i + "年 (令和" + (i - 2018) + ")");
        } else if (i > 1988) {
          years.push(i + "年 (平成" + (i - 1988) + ")");
        } else if (i > 1925) {
          years.push(i + "年 (昭和" + (i - 1925) + ")");
        } else if (i > 1911) {
          years.push(i + "年 (大正" + (i - 1911) + ")");
        } else if (i > 1868) {
          years.push(i + "年 (明治" + (i - 1868) + ")");
        }
      }
      return years;
    },
    monthList: function () {
      const months = [];
      for (let i = 1; i <= 12; i++) {
        months.push(i);
      }
      return months;
    },
    dayList: function () {
      const days = [];
      for (let i = 1; i <= 31; i++) {
        days.push(i);
      }
      return days;
    },
  },
};
</script>
<style scoped>
</style>