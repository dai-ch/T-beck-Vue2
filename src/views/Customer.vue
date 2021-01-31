<template>
  <div id="customer">
    <transition name="customer">
      <div class="customer__wrap">
        <div class="container">
          <div class="form__title">
            <p class="text-l">
              <i class="fas fa-address-card"></i>お客様の情報を入力してください
            </p>
            <span class="form__title__step">STEP1</span>
          </div>
          <form>
            <div class="question__list">
              <div class="question__item">
                <p class="question">-性別-</p>
                <input type="radio" class="radio" name="gender" value="男性" v-model="$store.state.gender"/>男性
                <input type="radio" class="radio" name="gender" value="女性" v-model="$store.state.gender"/>女性
              </div>
              <div class="question__item">
                <p class="question">-生年月日-</p>
                <label>
                  <select class="select" name="year" v-model="$store.state.year" v-on:change="modify">
                    <option v-for="year in getYears()" v-bind:key="year" v-on:select="selectYear">
                      {{ year }}
                    </option>
                  </select>年
                </label>
                <label>
                  <select class="select" name="month" v-model="$store.state.month" v-on:change="modify" v-on:select="selectMonth">
                    <option v-for="month in months" v-bind:key="month">
                      {{ month }}</option>
                  </select>月
                </label>
                <label>
                  <select class="select" name="date" v-model="$store.state.date">
                    <option v-for="date in getDates(year, month)" name="date" v-bind:key="date" v-on:select="selectDate" >{{ date }}</option>
                  </select>日
                </label>
              </div>
            </div>
          </form>
        </div>
        <button class="next__btn" v-on:click="nextBtn">
          次へ進む<i class="fas fa-angle-right"></i>
        </button>
      </div>
    </transition>
  </div>
</template>

<script src="../components/Definition.js">
//JSファイルには生年月日の計算式＋ボタン機能を追加
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
