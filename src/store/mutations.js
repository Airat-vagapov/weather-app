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
    setDataLoaded (state, payload) {
        state.dataisLoaded = payload
    },
    setBackImgUrl(state, payload) {
        state.backImgUrl = payload
    }
}