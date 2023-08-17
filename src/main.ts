import './assets/css/main.css'

import { createApp, h } from 'vue'
import router from './router'
import AppVue from './App.vue'

const app = createApp({
  render: () => h(AppVue)
})

app.use(router)

app.mount('#app')
