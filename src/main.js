import { createApp } from 'vue'
import App from './App.vue'
import TheHeader from './layouts/TheHeader.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)

app.component('TheHeader', TheHeader)

app.mount('#app')


