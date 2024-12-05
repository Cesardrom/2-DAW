import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import { createI18n } from 'vue-i18n';
import messages from './i18n/index.js';
import './style.css';

const i18n = createI18n({
  locale: 'es', // idioma por defecto
  messages,
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount('#app');