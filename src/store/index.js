import { createStore } from 'vuex';

export default createStore({
  //データを更新するためのメソッド
  strict: true,
  state: {
    consultationText: '',
    gender: '',
    year: '',
    month: '',
    date: '',
    question1: '',
    question2: '',
    question3: '',
  },
  //引数は渡せるがセッターの設置不可
  getters: {
    //送信されたデータをstateメソッドに登録する
    consultationText(state) {
      return state.consultationText;
    },
    getGender(state) {
      return state.gender;
    },
    getSelectYear(state) {
      return state.year;
    },
    getSelectMonth(state) {
      return state.month;
    },
    getSelectDate(state) {
      return state.date;
    },
    getQuestion1(state) {
      return state.question1;
    },
    getQuestion2(state) {
      return state.question2;
    },
    getQuestion3(state) {
      return state.question3;
    },
  },
  //stateを専用のメソッドで更新。ステートを更新するメソッド
  mutations: {
    selectGender(state, selectGender) {
      state.gender = selectGender.select;
    },
    selectYear(state, selectedYear) {
      state.year = selectedYear.year;
    },
    selectMonth(state, selectedMonth) {
      state.month = selectedMonth.month;
    },
    selectDate(state, selectDate) {
      state.date = selectDate.date;
    },
    question1(state, interviewQuestion1) {
      state.question1 = interviewQuestion1.question1;
    },
    question2(state, interviewQuestion2) {
      state.question2 = interviewQuestion2.question2;
    },
    question3(state, interviewQuestion3) {
      state.question3 = interviewQuestion3.question3;
    },
    enterConsultation(state, consultationText) {
      state.consultationText = consultationText.text;
    },
  },
  actions: {},
  modules: {},
});
