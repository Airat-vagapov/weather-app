import { createApp } from 'vue'

import App from '@/App.vue'
import store from './store/index.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

import LoadingPage from "@/layouts/LoadingPage.vue"
import BaseContainer from '@//UI/BaseContainer.vue'
import BaseTextWithIcon from '@/UI/BaseTextWithIcon.vue'
import BaseBigCard from '@/UI/BaseBigCard.vue'
import BaseCard from '@/UI/BaseCard.vue'
import BaseIcon from '@/UI/BaseIcon.vue'
import BaseText from '@/UI/BaseText.vue'




const app = createApp(App)
app.use(store)
app.use(VueAxios, axios)
app.provide('axios', app.config.globalProperties.axios)

app.component('BaseContainer', BaseContainer);
app.component('BaseTextWithIcon', BaseTextWithIcon);
app.component('BaseBigCard', BaseBigCard);
app.component('BaseCard', BaseCard);
app.component('BaseIcon', BaseIcon);
app.component('BaseText', BaseText);
app.component('LoadingPage', LoadingPage);




app.mount('#app')


