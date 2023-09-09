import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from '@/core/router';

import App from '@/app.vue';

import '@/core/assets/main.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
