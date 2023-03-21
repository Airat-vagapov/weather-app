<template>
  <!-- <div  class="main_container">
    <BaseContainer> -->
  <div v-if="dataisLoaded">
    <div class="flex__row">
      <LeftCard></LeftCard>
      <RightCard></RightCard>
    </div>
    <!-- </BaseContainer> -->
    <CityChoose></CityChoose>
  </div>
  <LoadingPage :openLoader="true" v-else></LoadingPage>
</template>

<script>
// import mitt from 'mitt'
import { mapActions, mapGetters } from "vuex";
import LeftCard from './components/LeftCard.vue'
import RightCard from './components/RightCard.vue'
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
    ...mapActions(['getLocation', 'getWeather', 'getBackPhoto', 'getForecastWeather', 'getDayName', 'getActualForecastByHour']),
  },
  created() {
    // this.$emmiter = mitt()
    this.getLocation()
      .then(() => this.getWeather())
      .then(() => this.getActualForecastByHour())
      .then(() => this.getDayName())
  },
  mounted() {
    this.timeUpdateInterval = setInterval(this.getTime, 1000)
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
