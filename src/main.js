import { createApp } from 'vue'

import App from '@/App.vue'

import TheHeader from '@/components/layouts/TheHeader.vue'
import TheFooter from "@/components/layouts/TheFooter.vue"
import GlassCard from '@//UI/GlassCard.vue'
import BaseContainer from '@//UI/BaseContainer.vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

app.component('BaseContainer', BaseContainer);
app.component('TheHeader', TheHeader);
app.component('TheFooter', TheFooter);
app.component('GlassCard', GlassCard);


app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)

app.mount('#app')


