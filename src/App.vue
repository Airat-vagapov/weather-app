<template>
  <div v-if="dataisLoaded" class="main_container">
    <!-- <TheHeader></TheHeader>
    <WeatherView></WeatherView>
    <TheFooter></TheFooter> -->
    <LeftCard></LeftCard>
    <RightCard></RightCard>
  </div>
  <LoadingPage v-else></LoadingPage>
</template>

<script>
import mitt from 'mitt'
import { mapActions, mapGetters } from "vuex";
import LeftCard from './components/LeftCard.vue'
import RightCard from './components/RightCard.vue'

export default {
  components: {
    LeftCard,
    RightCard
  },
  computed: {
    ...mapGetters(['dataisLoaded', 'backImgUrl'])
  },
  methods: {
    ...mapActions(['getLocation', 'getWeather', 'getBackPhoto', 'getForecastWeather']),

    setBackImg(imgUrl) {
      const mainContainer = document.querySelector('.main_container')
      mainContainer.style.background = `url('${imgUrl}&w=1920&h=1080&fit=max') no-repeat center center fixed`
    }
  },
  created() {
    this.$emmiter = mitt()
    this.getLocation()
      .then(() => this.getWeather())
      // .then(() => this.getBackPhoto())
      // .then(() => this.getForecastWeather())
      // .then(() => {
      //   this.$emmiter.emit(('done'))
      // })
  },
  mounted() {
    // this.$emmiter.on('done', () => {
    //   this.setBackImg(this.backImgUrl)
    // })
  },
  beforeUnmount() {
    // Clean up event listener
    // this.$emitter.off('done');
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Ubuntu:wght@400;700&display=swap");
@import "./sass/removeDefault.sass";
@import "./sass/styles.sass";
@import "./css/icons/weather-icons.min.css";
</style>
