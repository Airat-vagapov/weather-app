<template>
  <BaseBigCard :width="30">
    <CityElement></CityElement>
    <div>
      <i class="wi wi-day-sunny"></i>
    </div>
    <div class="temp">
      <span class="temp__gradus">
        {{ weatherData.temp_c + " " + "C°" }}
      </span>
    </div>

    <span>{{ conditionText }}</span>
    <span>{{ 'Ощущается как' + ' ' + weatherData.feelslike_c + " " + "C°" }}</span>
    <span>{{ 'Ветер' + ' ' + weatherData.wind_kph + " " + "км/ч" }}</span>
    <span>{{ 'Направление ветра' + ' ' + weatherData.wind_dir }}</span>
    <span>{{ 'Влажность' + ' ' + weatherData.humidity + " " + "%" }}</span>
    <span>{{ 'Облачность' + ' ' + weatherData.cloud + " " + "%" }}</span>
  </BaseBigCard>
</template>

<script>
import { mapGetters } from 'vuex';
import CityElement from '@/UI/CityElement.vue';
export default {
  components: {
    CityElement
  },
  computed: {
    ...mapGetters(['weatherData', 'condition']),

    conditionText() {
      return this.weatherData.is_day === 1 ? this.condition.day : this.condition.night
    }
  },
};
</script>

<style scoped lang="sass">
@import '../sass/components/leftCard.sass'
</style>