import { createApp } from 'vue'

import App from '@/App.vue'
import TheHeader from '@/components/layouts/TheHeader.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

app.component('TheHeader', TheHeader);

app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)

app.mount('#app')


