<template>
  <div id="about">
    <button @click="active = !active">切り替え</button>
    <h1>This is an about page</h1>
    <!-- <transition>
      <div v-show="active">トランジションの対象</div>
    </transition> -->

    <transition name="animation" appear>
      <p v-show="text">こんにちは</p>
    </transition>
  </div>
</template>


<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  el: "#about",
  data() {
    return {
      text: true,
    };
  },
};
</script>

<style scoped>
/* enterの開始状態 */
.animation-enter {
  /* opacity: 0; */
}
/*  enterのtransitionのフェーズ中 */
.animation-enter-active {
  /* animation: slide-in 1.5s; */
  /* transition: opacity 10s ease-in; */
}
/* enterの終了状態 */
.animation-enter-to {
  /* opacity: 1;
  background-color: yellow; */
}

/* leaveの開始状態 */
.animation-leave {
  /* opacity: 1;
  background-color: yellow;
  background-color: blue; */
}

/* leaveの終了状態 */
.animation-leave-to {
  /* opacity: 1;
  background-color: green;
  background-color: blue; */
}
</style>