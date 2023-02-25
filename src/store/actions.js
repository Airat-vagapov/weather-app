import axios from 'axios';

export default {
  getLocation (context) {
    axios.get('/api/v1/getLocation.php')
      .then((response) => {
        const city = response.data.city;
        const country = response.data.country_name;
        context.commit('setCity', city)
        context.commit('setCountry', country)
      })
  }
}