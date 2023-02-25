<template>
  <GlassCard :type="widthOfGlass">
    <div class="content">
      <div class="temp">
        <i class="wi wi-day-sunny"></i>
        <span class="temp__gradus">
          {{  + " " + "C°" }}
        </span>
      </div>
      <span>{{ conditionDay }}</span>
      <span>{{ conditionNight }}</span>
    </div>
  </GlassCard>
</template>

<script>
export default {
  data() {
    return {
      widthOfGlass: "quater",
    };
  },
};
</script>

<style scoped lang="sass">
@import '../sass/components/weatherBigCard.sass'
</style>