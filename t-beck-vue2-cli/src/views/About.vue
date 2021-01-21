<template>
  <div id="about">
    <h1>This is an about page</h1>

    <!-- <transition>
      <div id="panel" v-show="flag">ttttt</div>
    </transition>
     <button v-on:click="onclick">トップへ</button> -->
  </div>
  <div id="panel">vvvvv</div>
</template>


<script>
import func from "../../vue-temp/vue-editor-bridge";
export default {
  methods: {
    onclick() {
      this.$router.push("/about");
    },
  },
};

// new Vue({
//   el: "#about",
//   data: {
//     flag: true,
//   },
//   methods: {
//     onclick: function () {
//       this.flag = !this.flag;
//     },
//   },
// });
</script>
