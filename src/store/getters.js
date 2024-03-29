export default {
    city(state) {
        return state.city
    },
    country(state) {
        return state.country
    },
    weatherData(state) {
        return state.weatherData
    },
    forecastWeatherData(state) {
        return state.forecastWeather
    },
    forecastWeatherWithoutToday(state) {
        return state.forecastWeatherWithoutToday
    },
    currentIconName(state) {
        return state.currentIconName
    },
    dataisLoaded(state) {
        return state.dataisLoaded
    },
    backImgUrl(state) {
        return state.backImgUrl
    },
    currentDate(state) {
        return state.currentDate
    },
    currentTime(state) {
        return state.currentTime
    },
    currentDayName(state) {
        return state.currentDayName
    },
    weatherTime(state) {
        return state.weatherTime
    },
    weatherByHour(state) {
        return state.weatherByHour
    },
    cityChoose(state) {
        return state.cityChoose
    },
    cityList(state) {
        return state.cityList
    },
    cityIsLoading(state) {
        return state.cityIsLoading
    },
    cityCoordinates(state) {
        return state.cityCoordinates
    },
    deviceType(state) {
        return state.deviceType
    }
}