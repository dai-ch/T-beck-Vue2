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
    selectYear(state, year) {
      state.year = year;
    },
    selectMonth(state, month) {
      state.month = month;
    },
    selectDate(state, date) {
      state.date = date;
    },
  },
  actions: {},
  modules: {},
});
