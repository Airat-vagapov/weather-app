<template>
  <BaseBigCard :width="30">
    <CityElement></CityElement>
    <BaseCard :type="'col'">
      <BaseTextWithIcon>
        <i class="wi wi-day-sunny condition__icon"></i>
        <span class="condition__text">{{ weatherData.condition.text }}</span>
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
import { mapGetters } from 'vuex';
import CityElement from '@/UI/CityElement.vue';
import WeatherByHour from './WeatherByHour.vue'
export default {
  components: {
    CityElement,
    WeatherByHour
  },
  computed: {
    ...mapGetters(['weatherData', 'forecastWeatherData', 'condition', 'currentDayName', 'weatherTime', 'weatherByHour']),

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