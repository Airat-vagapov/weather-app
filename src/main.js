import { createApp } from 'vue'

import App from '@/App.vue'
import store from './store/index.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

import TheHeader from '@/layouts/TheHeader.vue'
import TheFooter from "@/layouts/TheFooter.vue"
import LoadingPage from "@/layouts/LoadingPage.vue"
import GlassCard from '@//UI/GlassCard.vue'
import BaseContainer from '@//UI/BaseContainer.vue'



const app = createApp(App)
app.use(store)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)

app.component('BaseContainer', BaseContainer);
app.component('TheHeader', TheHeader);
app.component('TheFooter', TheFooter);
app.component('LoadingPage', LoadingPage);
app.component('GlassCard', GlassCard);




app.mount('#app')


