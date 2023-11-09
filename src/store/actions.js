import axios from 'axios';

export default {
  // Получение координат
  getLocation(context) {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const coordByLocation = position.coords.latitude + ',' + position.coords.longitude
          resolve(context.commit('setcityCoordinates', coordByLocation))
        }, () => { resolve(context.dispatch('getLocationByIp')) })
      } else {
        reject(new Error('Geolocaion not supported'))
      }
    })
  },

  async getLocationByIp(context) {
    await axios.get('https://dev-vagapov.ru/weather-app/api/v1/getLocation.php')
      .then((response) => {
        const city = response.data.city;
        const country = response.data.country_name;
        const lat = response.data.lat
        const lon = response.data.lon
        const coords = lat + ',' + lon
        context.commit('setCity', city)
        context.commit('setCountry', country)
        context.commit('setcityCoordinates', coords)
      })
  },

  async getWeather(context) {
    context.commit('setDataLoaded', false)
    const coordinates = context.getters.cityCoordinates
    await axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=0654849dcf1945c5916194147232501&q=${coordinates}&days=5&alerts=yes&aqi=yes`
      )
      .then((response) => {
        const currentWeather = response.data.current;
        const location = response.data.location;
        let forecastWeather = response.data.forecast.forecastday
        forecastWeather.shift();

        const conditionCode = currentWeather.condition.code;
        const is_day = currentWeather.is_day;

        const city = location.name
        const country = location.country

        context.commit('setWeatherData', currentWeather)
        context.commit('setForecastWeatherData', forecastWeather)
        // if (context.state.city === '' && context.state.country === '') {
        context.commit('setCity', city)
        context.commit('setCountry', country)
        // }

        // return axios.post("/api/v1/getWeatherIcon.php",
        return axios.post("https://dev-vagapov.ru/weather-app/api/v1/getWeatherIcon.php",
          JSON.stringify({
            code: conditionCode,
            isDay: is_day
          }),
        )
      })
      .then((response) => {
        const iconName = response.data
        context.commit('setCurrentIconName', iconName)
      })
      .then(() => {
        const dataisLoaded = true;
        context.commit('setDataLoaded', dataisLoaded)
      })
      .catch((error) => {
        console.log(error);
      });
  },
  async getBackPhoto(context) {
    const city = context.getters.city
    const country = context.getters.country
    await axios.get(`https://api.unsplash.com//photos/random?client_id=HuOJ7EiP7StG5VAHdZDxTckwCVl-lxUOvy9PuNHCfv8&querry='${city}, ${country} '&orientation=landscape`)
      .then((res) => {
        const backImgUrl = res.data.links.download
        context.commit('setBackImgUrl', backImgUrl)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  getDayName(context) {
    const dateString = context.getters.weatherData.last_updated;
    const date = new Date(dateString)
    const options = { weekday: 'long' }

    const dayName = date.toLocaleString('en-US', options)
    const weatherTime = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    // context.commit('setCurrentWeatherDate', date)
    context.commit('setCurrentDayName', dayName)
    context.commit('setWeatherTime', weatherTime)
  },

  getTime(context) {
    const clientTime = new Date();
    let year = clientTime.getFullYear();
    let month = clientTime.getMonth() + 1;
    let day = clientTime.getDate();
    let hour = clientTime.getHours();
    let minute = clientTime.getMinutes();
    let second = clientTime.getSeconds();
    if (month < 10) {
      month = "0" + month;
    }
    if (day < 10) {
      day = "0" + day;
    }
    if (hour < 10) {
      hour = "0" + hour;
    }
    if (minute < 10) {
      minute = "0" + minute;
    }
    if (second < 10) {
      second = "0" + second;
    }
    const date = day + "-" + month + "-" + year;
    const time = hour + ":" + minute + ":" + second;

    context.commit('setCurrentDate', date)
    context.commit('setCurrentTime', time)
  },

  async getActualForecastByHour(context) {
    const data = context.getters.forecastWeatherData
    const dayDataByHour = data[0].hour

    const currentWeatherDate = context.getters.weatherData.last_updated_epoch

    // Собираем данные погоды по часам относительно текущего времени
    const actualData = dayDataByHour.filter((el) => {
      return el.time_epoch >= currentWeatherDate
    })

    // Добираем данные погоды по часам, если не хватает на сутки вперед
    if (actualData.length < 24) {
      const nextDayWeather = data[1].hour
      const compareValue = 24 - actualData.length

      for (let i = 0; i < compareValue; i++) {
        let el = nextDayWeather[i]
        actualData.push(el)
      }
    }

    // Добавляем параметр время в массив 
    actualData.forEach((el) => {
      const date = new Date(el.time)
      const time_hour = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

      el.time_hour = time_hour
    })

    // Добавялем иконки относительно погоды
    // await axios.post("/api/v1/addIconsByWeatherForecast.php", JSON.stringify(actualData))
    await axios.post("https://dev-vagapov.ru/weather-app/api/v1/addIconsByWeatherForecast.php", JSON.stringify(actualData))
      .then((res) => {
        context.commit('setWeatherByHour', res.data)
      })
  },
  // Получаем список городов по вхождению
  async getCity(context, city) {
    // 
    let dataIsLoading = context.state.cityIsLoading
    dataIsLoading = true;
    context.commit('setCityIsLoading', dataIsLoading)
    await axios.post('https://dev-vagapov.ru/weather-app/api/v1/getCity.php', {
      city: JSON.stringify(city)
    })
      .then((res) => {
        context.commit('setCityList', res.data)
        context.commit('setcityCoordinates', res.data.coordinates)
        dataIsLoading = false
        context.commit('setCityIsLoading', dataIsLoading)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  async getWeatherIcon(code, isDay) {
    const data = { code, isDay }
    return axios.post("https://dev-vagapov.ru/weather-app/api/v1/getWeatherIcon.php",
      JSON.stringify(
        data
      ),)
  }

};

