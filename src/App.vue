<template>
  <div class="main_container">
    <TheHeader :city="city" :country="country"></TheHeader>
    <WeatherView :condition-day="condition.day" :condition-night="condition.night"></WeatherView>
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
  computed: {
    ...mapGetters(['city', 'country', 'weatherData', 'condition', 'dataisLoaded'])
  },
  methods: {
    ...mapActions(['getLocation', 'getWeather']),
  },
  mounted() {
    this.getLocation()
      .then(() => this.getWeather())
      .then(() => {
        console.log(this.weatherData)
        console.log(this.condition)
      })
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Ubuntu:wght@400;700&display=swap");
@import "./sass/removeDefault.sass";
@import "./sass/styles.sass";
@import "./css/icons/weather-icons.min.css";
</style>
