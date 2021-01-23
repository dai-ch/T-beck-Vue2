<template>
  <div id="customer">
    <transition name="customer">
      <div class="customer__wrap">
        <Definition></Definition>
        <button class="next__btn" v-on:click="nextBtn">
          次へ進む<i class="fas fa-angle-right"></i>
        </button>
      </div>
    </transition>
  </div>
</template>
<script>
import Definition from "../components/Definition.vue";

export default {
  id: "customer",
  components: {
    Definition,
  },
  methods: {
    nextBtn() {
      this.$router.push("/interview");
    },
  },
};
</script>
<style scoped>
/* 表示アニメーション */
.v-enter-from {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
/* アニメーションのスタイル */
.v-enter-active {
  transition: 0.5s ease-in;
}
.v-leave-active {
  transition: 0;
}

/* 非表示アニメーション */
.v-leave {
  opacity: 0;
}
.v-leave-to {
  opacity: 0;
}
</style>