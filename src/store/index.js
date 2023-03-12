import { createStore } from 'vuex'

// import axios from 'axios'

import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'


const store = createStore({
    state() {
        return {
            currentDate: '',
            currentTime: '',
            currentDayName: '',
            weatherTime: '',
            dataisLoaded: false,
            city: '',
            country: '',
            weatherData: {},
            forecastWeather:[],
            condition: {},
            weatherByHour: [],
            cityChoose: false,
            cityList: [],
            cityIsLoading: false,
            
        }
    },
    actions,
    mutations,
    getters,

})

export default store