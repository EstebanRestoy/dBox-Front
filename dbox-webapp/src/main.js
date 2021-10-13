import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from "primevue/config"
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/bootstrap4-dark-purple/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import router from './router'
import store from './store'

createApp(App)
.use(store)
.use(router)
.use(PrimeVue)
.mount('#app')
