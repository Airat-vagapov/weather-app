import axios from 'axios';

export default {
  async getLocation(context) {
    await axios.get('/api/v1/getLocation.php')
      .then((response) => {
        const city = response.data.city;
        const country = response.data.country_name;
        context.commit('setCity', city)
        context.commit('setCountry', country)
      })
  },
  async getWeather(context) {
    const city = context.getters.city;
    await axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=0654849dcf1945c5916194147232501&q=${city}&days=5&alerts=yes&aqi=yes`
      )
      .then((response) => {
        const currentWeather = response.data.current;
        const forecastWeather = response.data.forecast.forecastday
        const conditionCode = currentWeather.condition.code;

        context.commit('setWeatherData', currentWeather)
        context.commit('setForecastWeatherData', forecastWeather)

        return axios.post("/api/v1/getWeatherCondition.php", {
          code: JSON.stringify({ conditionCode })
        })
      })
      .then((response) => {
        const condition = response.data
        context.commit('setCondition', condition)
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

  getActualForecastByHour(context) {
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

    context.commit('setWeatherByHour', actualData)

  },

  async getCity(context) {
    await axios.get('api/v1/getCity.php')
      .then((res) => {
        console.log(res.data)
        context.commit('setCityList', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

};

