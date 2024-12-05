import { createApp } from 'vue'
import './style.css'
import i18n from './i18n'
import App from './App.vue'
import router from './router.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

const app = createApp(App)

app.use(i18n)

app.mount('#app')

app.use(router)

