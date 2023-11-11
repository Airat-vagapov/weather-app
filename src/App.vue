<template>
  <div class="main__container" v-if="dataisLoaded">
    <div class="main">
      <LeftCard></LeftCard>
      <RightCard></RightCard>
    </div>
    <CityChoose></CityChoose>
  </div>

  <!-- <div class="main__container" v-if="dataisLoaded && this.deviceType === 'tablet'">

  </div> -->
  <LoadingPage :openLoader="true" v-if="!dataisLoaded"></LoadingPage>
</template>

<script>
// import mitt from 'mitt'
import { mapActions, mapGetters } from "vuex";
import LeftCard from './modules/LeftCard.vue'
import RightCard from './modules/RightCard.vue'
import CityChoose from './modules/CityChoose.vue';

export default {
  components: {
    LeftCard,
    RightCard,
    CityChoose,
  },
  computed: {
    ...mapGetters(['dataisLoaded', 'backImgUrl', 'cityChoose', 'cityCoordinates'])
  },
  methods: {
    ...mapActions(['getLocation', 'getWeather', 'getBackPhoto', 'getForecastWeather', 'getDayName', 'getActualForecastByHour', 'detectDevice']),
  },
  created() {
    // Определяем устройство
    this.detectDevice()

    // Получаем данные
    this.getLocation()
      .then(() => this.getWeather())
      .then(() => this.getActualForecastByHour())
      .then(() => this.getDayName())
  },
  mounted() {
    this.timeUpdateInterval = setInterval(this.getTime, 1000)
    console.log(this.deviceType)


  },
  beforeUnmount() {
    clearInterval(this.timeUpdateInterval);
  },
};
</script>

<style lang="sass">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Ubuntu:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import "./sass//vars.sass";
@import "./sass/removeDefault.sass";
@import "./sass/styles.sass";
@import "./css/icons/weather-icons.min.css";


</style>
