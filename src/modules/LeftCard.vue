<template>
  <BaseBigCard class="left__side" :width="30" v-if="this.deviceType === 'desktop'">
    <CityElement></CityElement>
    <BaseCard :type="'col'" :padding="'none'" :marginBot="16">
      <ConditionElement></ConditionElement>
      <BigTemperatireElement :temp="currentTemp"></BigTemperatireElement>
      <TimeElement :showDayName="true"></TimeElement>
    </BaseCard>

    <WeatherByHour></WeatherByHour>
  </BaseBigCard>

  <BaseBigCard class="left__side" v-if="this.deviceType === 'tablet' || this.deviceType === 'mobile'">
    <CityElement></CityElement>
    <BaseCard :type="'col'" :padding="'none'" :marginBot="16">
      <ConditionElement></ConditionElement>
      <BigTemperatireElement :temp="currentTemp"></BigTemperatireElement>
      <TimeElement :showDayName="true"></TimeElement>
    </BaseCard>

    <WeatherByHour></WeatherByHour>

    <TodayHighlights v-if="this.deviceType === 'tablet' || this.deviceType === 'mobile'"></TodayHighlights>
  </BaseBigCard>
</template>

<script>
import { mapGetters } from 'vuex';
import CityElement from '@/UI/CityElement.vue';
import WeatherByHour from '../components/WeatherByHour.vue';
import TimeElement from '../components/TimeElement.vue';
import ConditionElement from '@/components/ConditionElement.vue';
import BigTemperatireElement from '@/components/BigTemperatireElement.vue';
import TodayHighlights from '@/components/TodayHighlights.vue';
export default {
  components: {
    CityElement,
    WeatherByHour,
    TimeElement,
    ConditionElement,
    BigTemperatireElement,
    TodayHighlights
  },
  computed: {
    ...mapGetters(['dataisLoaded', 'weatherData', 'forecastWeatherData', 'currentIconName', 'currentDayName', 'weatherTime', 'weatherByHour', 'deviceType']),

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