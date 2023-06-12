import { createApp } from 'vue'
import App from './App.vue'
import './assets/index-js/index'
import store from './assets/store/store'

createApp(App)
.use(store)
.mount('#app')
