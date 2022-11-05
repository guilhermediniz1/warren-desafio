import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/css/global.css'
import App from './App.vue'

const pinia = createPinia()

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass, faArrowRight, faCircleXmark } from '@fortawesome/free-solid-svg-icons' 

library.add(faMagnifyingGlass, faArrowRight, faCircleXmark)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(pinia).mount('#app')
