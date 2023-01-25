<template>
  <GlassCard :type='widthOfGlass'>
    <div class="content">
      <span>Ясно</span>
      <span>Облачность</span>
      <span>{{currentWeather.temp_c}}</span>
    </div>
  </GlassCard>
</template>

<script>
export default {
    data() {
        return {
            widthOfGlass: 'half',
            currentWeather: {}
        }
    },
    mounted() {
    this.axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=0654849dcf1945c5916194147232501&q=Batumi"
      )
      .then((response) => {
        this.currentWeather = response.data.current;
      });
  },
};
</script>

<style scoped lang="sass">
@import '../sass/components/weatherBigCard.sass'
</style>