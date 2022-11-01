import { createApp } from 'vue'
import './assets/css/global.css'
import App from './App.vue'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMagnifyingGlass, faArrowRight } from '@fortawesome/free-solid-svg-icons' 

library.add(faMagnifyingGlass, faArrowRight)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
