<template>
  <div id="about">
    <button @click="active = !active">切り替え</button>
    <h1>This is an about page</h1>
   
    <transition name="animation" appear>
      <p v-show="text">こんにちは</p>
    </transition>
  </div>
</template>


<script>
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

</style>