import { createStore } from "vuex";
import { ADD_BOOK } from "./mutation-types";
import MainModule from './main-store'
import SubModule from './sub-store'

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
    // addBook(state, payload) {
    //   state.books.push(payload.book);
    // },
    updateName(state, name) {
      state.name = name;
    },
    [ADD_BOOK](state, payload) {
      state.books.push(payload.book);
    },
  },
  actions: {
    addAsync(context, payload) {
      //5000m秒後にミューテーション（ADD_BOOK）をコミット
      setTimeout(function() {
        context.commit(ADD_BOOK, payload);
      }, 5000);
    },
  },
  modules: {
    main: MainModule,
    sub:SubModule
  },
});
