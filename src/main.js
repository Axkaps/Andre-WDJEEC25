import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import DropdownMenu from 'v-dropdown-menu'
import 'v-dropdown-menu/css'

const app = createApp(App)

app.use(router)
app.use(DropdownMenu)
app.mount('#app')
