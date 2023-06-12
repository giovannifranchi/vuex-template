import { createApp } from 'vue'
import App from './App.vue'
import './assets/index-js/index'
import store from './store/store'
import router from './router/Router'



createApp(App)
.use(store)
.use(router)
.mount('#app')
