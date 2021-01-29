import { createStore } from "vuex";
import { ADD_BOOK } from "./mutation-types";
import MainModule from "./main-store";
import SubModule from "./sub-store";

export default createStore({
  //データを更新するためのメソッド
  strict: true,
  state: {
    count: 1,
    books: [
      {
        isbn: "888-8-8888-8888-8",
        title: "プログラミング入門",
        price: 2000,
      },
    ],
    name: "",
    consultationText: "",
    gender: "",
    year: "",
    month: "",
    date: "",
    question1: "",
    question2: "",
    question3: "",
  },
  //引数は渡せるがセッターの設置不可
  getters: {
    booksCount(state) {
      //書籍件数を取得
      return state.books.length;
    },
    getBooksByPrice(state) {
      //指定された価格price未満の書籍情報を取得
      return (price) => {
        return state.books.filter((book) => book.price < price);
      };
    },
    BooksCount3000(state, getters) {
      return getters.getBooksByPrice(3000).length;
    },
  },
  //stateを専用のメソッドで更新。ステートを更新するメソッド
  mutations: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    updateName(state, name) {
      state.name = name;
    },
    [ADD_BOOK](state, payload) {
      state.books.push(payload.book);
    },
    //送信されたデータをstateメソッドに登録する
    enterConsultation(state, consultationText) {
      console.log("uketotta");
      state.consultationText = consultationText;
    },
    question1(state, question1) {
      state.question1 = question1;
    },
    question2(state, question2) {
      state.question2 = question2;
    },
    question3(state, question3) {
      state.question3 = question3;
    },
    selectGender(state, gender) {
      state.gender = gender;
    },
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
  actions: {
    addAsync(context, payload) {
      //10m秒後にミューテーション（ADD_BOOK）をコミット
      setTimeout(function() {
        context.commit(ADD_BOOK, payload);
      }, 10);
    },
  },
  modules: {
    main: MainModule,
    sub: SubModule,
  },
});
