import { createApp } from 'vue'

import App from '@/App.vue'
import store from '@/store'
import router from '@/router'

import '@/styles/styles.scss'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')

if (process.env.NODE_ENV === "development")
    console.log("Modo desarrollo")
else
    console.log("Modo producción")