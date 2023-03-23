<template>
  <BaseBigCard class="left__side" :width="30">
    <CityElement></CityElement>
    <BaseCard :type="'col'" :padding="'none'" :marginBot="16">
      <BaseTextWithIcon>
        <i :class="currentIconName" class="wi condition__icon"></i>
        <span class="condition__text">{{ weatherData.condition.text }}</span>
        <BaseIcon class="icon__near" @click="updateLocation" :icon="'near_me'"></BaseIcon>
      </BaseTextWithIcon>
      <div class="temp">
        <span class="temp__gradus">
          {{ Math.round(weatherData.temp_c) + " " + "C°" }}
        </span>
        <div class="temp__details">
          <BaseText>Feels {{ Math.round(weatherData.feelslike_c) + " " + "C°" }}</BaseText>
          <BaseText>Cloud {{ weatherData.cloud + ' ' + "%" }} </BaseText>
          <BaseText>Wind {{ weatherData.wind_kph + ' ' + 'km/h' }}</BaseText>
        </div>
      </div>
      <div class="time">
        <span class="bold">{{ currentDayName }}</span>, <span>{{ weatherTime }}</span>
      </div>
    </BaseCard>

    <WeatherByHour></WeatherByHour>
  </BaseBigCard>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import CityElement from '@/UI/CityElement.vue';
import WeatherByHour from './WeatherByHour.vue'
export default {
  components: {
    CityElement,
    WeatherByHour
  },
  methods: {
    ...mapActions(['getLocation', 'getWeather', 'getActualForecastByHour']),
    ...mapMutations(['setDataLoaded']),
    updateLocation() {
      this.setDataLoaded(false)
      this.getLocation()
        .then(() => this.getWeather())
        .then(() => this.getActualForecastByHour())
    }
  },
  computed: {
    ...mapGetters(['dataisLoaded', 'weatherData', 'forecastWeatherData', 'currentIconName', 'currentDayName', 'weatherTime', 'weatherByHour']),

    conditionText() {
      return this.weatherData.is_day === 1 ? this.condition.day : this.condition.night
    },

    findNextHour() {

      return 's'
    },
  },
  mounted() {

  }
};
</script>

<style scoped lang="sass">
@import '../sass/components/leftCard.sass'

</style>