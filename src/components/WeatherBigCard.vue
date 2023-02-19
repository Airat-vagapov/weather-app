<template>
  <GlassCard :type="widthOfGlass">
    <div class="content">
      <div class="temp">
        <span class="temp__gradus">{{
          currentWeather.temp_c + " " + "C°"
        }}</span>
        <i class="wi wi-day-sunny"></i>
      </div>
      <span>{{ conditionDay }}</span>
      <span>Облачность</span>
    </div>
  </GlassCard>
</template>

<script>
export default {
  data() {
    return {
      widthOfGlass: "quater",
      currentWeather: {},
      conditionCode: "",
      conditionDay: "",
      conditionNight: "",
    };
  },
  methods: {
    getWeather() {
      this.axios
        .get(
          "http://api.weatherapi.com/v1/current.json?key=0654849dcf1945c5916194147232501&q=Batumi"
        )
        .then((response) => {
          this.currentWeather = response.data.current;
          const conditionCode = this.currentWeather.condition.code;
          this.conditionCode = conditionCode;
          return conditionCode;
        })
        .catch((error) => {
          console.log(error);
        })
        .then((conditionCode) => {
          this.axios
            .post("/api/v1/getWeatherCondition.php", {
              code: JSON.stringify({ conditionCode }),
            })
            .then((response) => {
              this.conditionDay = response.data.dayCondition;
              this.conditionNight = response.data.nightCondition;
            })
            .catch((error) => {
              console.log(error);
            });
        });
    },
  },
  mounted() {
    this.getWeather();
  },
};
</script>

<style scoped lang="sass">
@import '../sass/components/weatherBigCard.sass'
</style>