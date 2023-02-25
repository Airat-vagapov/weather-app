<template>
  <div class="main_container">
    <TheHeader :city="city" :country="country"></TheHeader>
    <WeatherView :dataisLoaded="dataLoaded" :weather-data="currentWeather" :condition-day="conditionDay"
      :condition-night="conditionNight"></WeatherView>
    <TheFooter></TheFooter>
  </div>
  <!-- <LoadingPage v-if="!dataLoaded"></LoadingPage> -->
  <!-- </div> -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import WeatherView from "@/modules/WeatherView.vue";

export default {
  components: {
    WeatherView,
  },
  data() {
    return {
      dataLoaded: false,
      // city: "",
      // country: "",
      currentWeather: {},
      conditionDay: "",
      conditionNight: "",
    };
  },
  computed: {
    ...mapGetters(['city', 'country'])
  },
  methods: {

    ...mapActions(['getLocation']),

    // getCity() {
    //   this.axios
    //     .get("/api/v1/getCity.php")
    //     .then((response) => {
    //       console.log(response.data)
    //       this.city = response.data.city;
    //       this.country = response.data.country_name;
    //       return response.data.city;
    //     })
    // .then((city) => {
    //   this.getWeather(city);
    // });
    // },

    // getWeather(city) {
    //   console.log(city);
    //   this.axios
    //     .get(
    //       `http://api.weatherapi.com/v1/current.json?key=0654849dcf1945c5916194147232501&q=${city}`
    //     )
    //     .then((response) => {
    //       console.log(response.data.current);
    //       this.currentWeather = response.data.current;
    //       console.log(this.currentWeather);
    //       const conditionCode = this.currentWeather.condition.code;
    //       return conditionCode;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     })
    //     .then((conditionCode) => {
    //       this.axios
    //         .post("/api/v1/getWeatherCondition.php", {
    //           code: JSON.stringify({ conditionCode }),
    //         })
    //         .then((response) => {
    //           this.conditionDay = response.data.dayCondition;
    //           this.conditionNight = response.data.nightCondition;
    //           this.dataLoaded = true;
    //         })
    //         .catch((error) => {
    //           console.log(error);
    //         });
    //     });
    // },
  },
  mounted() {
    this.getLocation()
    console.log(this.city)
    console.log(this.country)
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Ubuntu:wght@400;700&display=swap");
@import "./sass/removeDefault.sass";
@import "./sass/styles.sass";
@import "./css/icons/weather-icons.min.css";
</style>
