<template>
  <BaseBigCard :width="30">
    <CityElement></CityElement>
    <BaseCard :type="'col'">
      <BaseTextWithIcon>
        <i :class="currentIconName" class="wi condition__icon"></i>
        <span class="condition__text">{{ weatherData.condition.text }}</span>
        <BaseIcon class="icon__near" @click="updateLocation" :icon="'near_me'"></BaseIcon>
      </BaseTextWithIcon>
      <div class="temp">
        <span class="temp__gradus">
          {{ weatherData.temp_c + " " + "C°" }}
        </span>
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