import { createApp } from 'vue'

import App from '@/App.vue'

import TheHeader from '@/layouts/TheHeader.vue'
import TheFooter from "@/layouts/TheFooter.vue"
import LoadingPage from "@/layouts/LoadingPage.vue"
import GlassCard from '@//UI/GlassCard.vue'
import BaseContainer from '@//UI/BaseContainer.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

app.component('BaseContainer', BaseContainer);
app.component('TheHeader', TheHeader);
app.component('TheFooter', TheFooter);
app.component('LoadingPage', LoadingPage);
app.component('GlassCard', GlassCard);


app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)

app.mount('#app')


