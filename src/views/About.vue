<template>
  <div id="about">
    <button @click="active = !active">切り替え</button>
    <h1>This is an about page</h1>

    <transition name="animation" appear>
      <p v-show="text">こんにちは</p>
    </transition>
    <hr />
    <p>書籍は全部で{{ booksCount }}冊あります</p>
    <ul v-for="b of getBooksByPrice(2500)" v-bind:key="b.isbn">
      <li>{{ b.title }}：({{ b.price }}円)<br />ISBN：{{ b.isbn }}</li>
    </ul>
    <hr />
    <!-- <input type="button" v-on:click="ondecrement" value="-" />
    {{ count }}
    <input type="button" v-on:click="onincremnt" value="+" /> -->
    <hr />
    <form v-on:submit.prevent="onclick">
      <label for="isbn">ISBN:</label>
      <input type="text" id="isbn" v-model="isbn" /><br />
      <label for="title">書名:</label>
      <input type="text" id="title" v-model="title" /><br />
      <label for="price">価格:</label>
      <input type="number" id="price" v-model="price" /><br />
      <input type="submit" value="登録" />
    </form>
    <hr />
    <form>
      <label for="name">氏名：</label>
      <input type="text" id="name" v-model="$store.state.name" />
    </form>
    <hr/>
  メイン：{{mainUpdated}}<br/>
  サブ：{{subUpdated}}<br/>
  <input type="button" value="更新" v-on:click="setUpdated">
  </div>
</template>

<script>
//import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
//import { mapActions } from "vuex";

export default {
  el: "#about",
  data() {
    //フォームで扱う情報を準備
    return {
      text: true,
      isbn: "",
      title: "",
      price: 0,
    };
  },
  //値を取得
  computed: {
    ...mapGetters(["booksCount", "getBooksByPrice"]),
    name: {
      get() {
        return this.$store.state.name;
      },
      set(value) {
        this.$store.commit("updateName", value);
      },
    },
    //mainモジュールの時刻更新
    mainUpdated(){
      return this.$store.state.main.updated
    },
    subUpdated(){
      return this.$store.state.sub.updated
    }
  },
  methods: {
    //インクリメント
    onincremnt() {
      this.$store.commit("increment");
    },
    //ディクリメント
    ondecrement() {
      this.$store.commit("decrement");
    },
    //...mapActions(["addAsync"]),
    onclick() {
      // this.$store.commit("addBook", {
      //   book: {
      //     isbn: this.isbn,
      //     title: this.title,
      //     price: this.price,
      //   },
      // });
      //アクションの呼び出し＝dispatchする
      this.$store.dispatch("addAsync", {
        book: {
          isbn: this.isbn,
          title: this.title,
          price: this.price,
        },
      });

    },
    ...mapMutations(["plus", "minus"]),
    setUpdated(){
      this.$store.commit('main/setUpdated'),
      this.$store.commit('sub/setUpdated')
    }
  },
};
</script>

<style scoped></style>
