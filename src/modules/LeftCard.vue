<template>
  <BaseBigCard class="left__side" :width="30">
    <CityElement></CityElement>
    <BaseCard :type="'col'" :padding="'none'" :marginBot="16">
      <ConditionElement></ConditionElement>
      <BigTemperatireElement :temp="currentTemp"></BigTemperatireElement>
      <TimeElement></TimeElement>
    </BaseCard>

    <WeatherByHour></WeatherByHour>
  </BaseBigCard>
</template>

<script>
import { mapGetters } from 'vuex';
import CityElement from '@/UI/CityElement.vue';
import WeatherByHour from '../components/WeatherByHour.vue';
import TimeElement from '../components/TimeElement.vue';
import ConditionElement from '@/components/ConditionElement.vue';
import BigTemperatireElement from '@/components/BigTemperatireElement.vue';
export default {
  components: {
    CityElement,
    WeatherByHour,
    TimeElement,
    ConditionElement,
    BigTemperatireElement
  },
  computed: {
    ...mapGetters(['dataisLoaded', 'weatherData', 'forecastWeatherData', 'currentIconName', 'currentDayName', 'weatherTime', 'weatherByHour']),

    conditionText() {
      return this.weatherData.is_day === 1 ? this.condition.day : this.condition.night
    },

    currentTemp() {
      return this.weatherData.temp_c
    },

    findNextHour() {
      return 's'
    },
  },
};
</script>

<style scoped lang="sass">
@import '../sass/components/leftCard.sass'

</style>