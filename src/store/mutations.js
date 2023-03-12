export default {
    setCity(state, payload) {
        state.city = payload
    },
    setCountry(state, payload) {
        state.country = payload
    },
    setWeatherData(state, payload) {
        state.weatherData = payload
    },
    setForecastWeatherData(state, payload) {
        state.forecastWeather = payload
    },
    setCondition(state, payload) {
        state.condition = payload
    },
    setDataLoaded(state, payload) {
        state.dataisLoaded = payload
    },
    setBackImgUrl(state, payload) {
        state.backImgUrl = payload
    },
    setCurrentDate(state, payload) {
        state.currentDate = payload
    },
    setCurrentTime(state, payload) {
        state.currentTime = payload
    },
    setCurrentDayName(state, payload) {
        state.currentDayName = payload
    },
    setWeatherTime(state, payload) {
        state.weatherTime = payload
    },
    setWeatherByHour(state, payload) {
        state.weatherByHour = payload
    },
    setCityChoose(state, payload) {
        state.cityChoose = payload
    },
    setCityList(state, payload) {
        state.cityList = payload
    },
    setCityIsLoading(state, payload) {
        state.cityIsLoading = payload
    }
}