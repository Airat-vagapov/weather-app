import { createStore } from 'vuex'

// import axios from 'axios'

import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'


const store = createStore({
    state() {
        return {
            dataisLoaded: false,
            city: '',
            country: '',
            weatherData: {},
            forecastWeather:[],
            condition: {},
            backImgUrl: ''
        }
    },
    actions,
    mutations,
    getters,

})

export default store