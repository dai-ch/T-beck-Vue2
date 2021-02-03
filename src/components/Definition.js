import moment from 'moment';

export default {
  id: 'customer',
  data() {
    return {
      gender: '',
      months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      year: moment().year(),
      month: moment().month() + 1,
      date: moment().date(),
    };
  },
  methods: {
    //年号を選択
    getYears: function() {
      const goBackYears = 110;
      const currentYears = moment().year();
      const finishYear = currentYears - goBackYears;
      const selectYears = [];
      for (let i = currentYears; i > finishYear; i--) {
        if (i > 2018) {
          selectYears.push(i + '年 (令和' + (i - 2018) + ')');
        } else if (i > 1988) {
          selectYears.push(i + '年 (平成' + (i - 1988) + ')');
        } else if (i > 1925) {
          selectYears.push(i + '年 (昭和' + (i - 1925) + ')');
        } else if (i > 1911) {
          selectYears.push(i + '年 (大正' + (i - 1911) + ')');
        } else if (i > 1868) {
          selectYears.push(i + '年 (明治' + (i - 1868) + ')');
        }
      }
      return selectYears;
    },
    //選択された月の最大の日数を計算
    getDates: function(year, month) {
      //指定した年月に対する日数を取得
      const formattedYearAndMonth = `${year}-${month}`;
      const maxDate = moment(formattedYearAndMonth, 'YYYY-MM').daysInMonth();
      //const maxDate = moment(year, month).daysInMonth();
      const days = [];
      for (let i = 1; i <= maxDate; i++) {
        days.push(i);
      }
      return days;
    },
    modify: function() {
      // 年や月が変更されたとき、日が存在しなくなる場合があるので調整する。
      // 例: 2018-12-31 を選択していて月が 12 から 2 に変更された場合、日を 28 にする。
      if (!moment([this.year, this.month - 1, this.date]).isValid()) {
        this.date = this.getFinalDate(this.year, this.month);
      }
    },
    getFinalDate: function(year, month) {
      // 月末日を取得
      return moment([year, month - 1]).endOf('month');
    },
    nextBtn() {
      this.$router.push('/interview');
    },
    selectYear(event) {
      this.$store.commit('selectYear', { year: event.target.value });
    },
    selectMonth(event) {

      this.$store.commit('selectMonth', { month: event.target.value });
    },
    selectDate(event)
    {
      this.$store.commit('selectDate', { date: event.target.value });
    },
    selectGender(event) {
      this.$store.commit('selectGender', { select: event.target.value });
    },
  },
};
