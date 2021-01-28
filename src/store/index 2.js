import { createStore } from "vuex";

export default createStore({
  //データを更新するためのメソッド
  state: {
    count: 1,
    books: [
      {
        isbn: "888-8-8888-8888-8",
        title: "プログラミング入門",
        price: 2000,
      },
    ],
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
  },
  actions: {},
  modules: {},
});
