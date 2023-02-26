<template>
  <div v-if="dataisLoaded" class="main_container">
    <TheHeader></TheHeader>
    <WeatherView></WeatherView>
    <TheFooter></TheFooter>
  </div>
  <LoadingPage v-else></LoadingPage>
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
    ...mapGetters(['dataisLoaded'])
  },
  methods: {
    ...mapActions(['getLocation', 'getWeather']),
  },
  mounted() {
    this.getLocation()
      .then(() => this.getWeather())

  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Ubuntu:wght@400;700&display=swap");
@import "./sass/removeDefault.sass";
@import "./sass/styles.sass";
@import "./css/icons/weather-icons.min.css";
</style>
