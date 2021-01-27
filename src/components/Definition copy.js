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

  }, methods: {
    nextBtn() {
      this.$router.push("/interview");
    },
  }
};