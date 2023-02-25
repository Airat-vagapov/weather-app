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
        `http://api.weatherapi.com/v1/current.json?key=0654849dcf1945c5916194147232501&q=${city}`
      )
      .then((response) => {
        const currentWeather = response.data.current;
        const conditionCode = currentWeather.condition.code;

        context.commit('setWeatherData', currentWeather)

        return axios.post("/api/v1/getWeatherCondition.php", {
          code: JSON.stringify({ conditionCode })
        })
      })
      .then((response) => {
        const condition = response.data
        context.commit('setCondition', condition)
        
        const dataisLoaded = true;
        context.commit('dataisLoaded', dataisLoaded)
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

