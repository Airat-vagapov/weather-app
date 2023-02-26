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
        console.log(currentWeather)
        console.log(response.data.current)
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
};

