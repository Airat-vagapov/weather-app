<template>
  <BaseContainer>
    <WeatherBigCard
      :dataisLoaded="dataLoaded"
      :weather-data="weatherData"
      :condition-day="conditionDay"
      :condition-night="conditionNight"
    ></WeatherBigCard>
  </BaseContainer>
</template>

<script>
import WeatherBigCard from "../components/WeatherBigCard.vue";
export default {
  props: ["dataisLoaded", "weatherData", "conditionDay", "conditionNight"],
  components: { WeatherBigCard },
};
</script>