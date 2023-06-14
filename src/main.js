import { createApp } from 'vue'
import App from './App.vue'
import './assets/index-js/index'
import store from './store/store'
import router from './router/Router'

//exetrnal components

import VueApexCharts from 'vue3-apexcharts' //this is a library for charts, find docs @'https://apexcharts.com/docs/vue-charts/'!!
import Toast, {POSITION} from "vue-toastification"; //this is a library for toasts, find docs @'https://github.com/Maronato/vue-toastification'!!
import "vue-toastification/dist/index.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fa5 } from '@fortawesome/free-solid-svg-icons' //this is just an example, each new icon used needs to be registered here;
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fa5); //icons must be registered also here, remeber to use them in components without fa-regular, fa-solid, fa-light etc...



createApp(App)
.use(store)
.use(router)
.use(Toast, {position: POSITION.BOTTOM_RIGHT}) //can be called also from store actions :-)
.component('font-awesome-icon', FontAwesomeIcon)
.component('VueApexCharts', VueApexCharts)
.mount('#app')


// NOTE: epic-spinner is inclueded in node modules as well find docs @ 'https://github.com/epicmaxco/epic-spinners'
// It can be used directly from components and this is an example of usage:
        
        /* <template>
          <div id="app">
            <atom-spinner :animation-duration="1000" :size="60" color="#ff1d5e" />
          </div>
        </template>
        
        <script>
        import { AtomSpinner } from 'epic-spinners'
        
        export default {
          components: {
            AtomSpinner,
          },
        }
        </script> */
