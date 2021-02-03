import { createApp } from 'vue'
import App from './App.vue'
import './main.js'
import router from './router'
//↓ストアの有効化
import store from './store'

createApp(App).use(store).use(router).mount('#app')
