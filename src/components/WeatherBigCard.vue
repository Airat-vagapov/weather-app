<template>
  <GlassCard :type="widthOfGlass">
    <div class="content">
      <div class="temp">
        <i class="wi wi-day-sunny"></i>
        <span class="temp__gradus">
          {{ weatherData.temp_c + " " + "C°" }}
        </span>
      </div>
      <span>{{ condition.day }}</span>
      <span>{{ condition.night }}</span>
    </div>
  </GlassCard>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      widthOfGlass: "quater",
    };
  },
  computed: {
    ...mapGetters(['weatherData', 'condition']),
  }
};
</script>

<style scoped lang="sass">
@import '../sass/components/weatherBigCard.sass'
</style>