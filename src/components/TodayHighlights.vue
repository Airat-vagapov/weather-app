<template>
    <BaseText :size="24" :marginBot="24">Today's highlights</BaseText>
    <BaseCard class="todayBlock" :type="'grid'" :column="3" :padding="'none'" :marginBot="32">
        <BaseCard class="todayCard">
            <span class="todayCard__value"> {{ forecastWeatherData[0].day.daily_chance_of_rain + " " +
                "%" }}</span>
            <p>Chance of rain</p>
        </BaseCard>
        <BaseCard class="todayCard">
            <span class="todayCard__value">{{ astroData }}</span>
            <p>{{ astroDataName }}</p>
        </BaseCard>
        <BaseCard class="todayCard">
            <span class="todayCard__value"> {{ forecastWeatherData[0].day.maxtemp_c + " " +
                "C°" }}</span>
            <p>Max temperature</p>
        </BaseCard>
        <BaseCard class="todayCard">
            <span class="todayCard__value">{{ forecastWeatherData[0].day.avghumidity + ' ' + '%' }}</span>
            <p>Average humidity</p>
        </BaseCard>
        <BaseCard class="todayCard">
            <span class="todayCard__value">{{ forecastWeatherData[0].day.uv }}</span>
            <p>UV</p>
        </BaseCard>
        <BaseCard class="todayCard">
            <span class="todayCard__value">{{ forecastWeatherData[0].day.avgvis_km + " " +
                "km" }}</span>
            <p>Average visible</p>
        </BaseCard>
    </BaseCard>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['weatherData', 'forecastWeatherData']),
        astroData() {
            let result;

            if (this.weatherData.is_day === 1) {
                result = this.forecastWeatherData[0].astro.sunset
            } else {
                result = this.forecastWeatherData[0].astro.sunrise
            }
            return result
        },
        astroDataName() {
            let astroName
            if (this.weatherData.is_day === 1) {
                astroName = 'Sunset'
            } else {
                astroName = 'Sunrise'
            }
            return astroName
        }
    },
}
</script>
<style scoped lang="sass">
@import '@/sass/components/rightCard'
</style>