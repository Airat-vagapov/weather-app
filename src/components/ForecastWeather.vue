<template>
    <BaseText :size="24" :marginBot="24">For next 2 days</BaseText>
    <BaseCard class="todayBlock" :type="'grid'" :padding="'none'">
        <BaseCard class="forecastCard">
            <span class="todayCard__value"> {{ forecastWeatherData[1].day.maxtemp_c + " " +
                "C°" }}</span>
        </BaseCard>
        <BaseCard class="todayCard">
            <span class="todayCard__value"> {{ forecastWeatherData[2].day.maxtemp_c + " " +
                "C°" }}</span>
            <p>Chance of rain</p>
        </BaseCard>
    </BaseCard>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['weatherData', 'forecastWeatherData']),
    },
    mounted() {
        console.log(this.forecastWeatherData)
    },
}
</script>
<style scoped lang="sass">
@import '@/sass/components/rightCard'
</style>