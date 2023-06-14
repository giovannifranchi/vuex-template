import { createApp } from 'vue'
import App from './App.vue'
import './assets/index-js/index'
import store from './store/store'
import router from './router/Router'

//exetrnal components

import VueApexCharts from 'vue3-apexcharts' //this is a library for charts, find docs @'https://apexcharts.com/docs/vue-charts/'...
import { library } from '@fortawesome/fontawesome-svg-core'
import { fa5 } from '@fortawesome/free-solid-svg-icons' //this is just an example, each new icon used needs to be registered here;
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fa5); //icons must be registered also here, remeber to use them in components without fa-regular, fa-solid, fa-light etc...



createApp(App)
.use(store)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.component('VueApexCharts', VueApexCharts)
.mount('#app')
