<template>
    <BaseText :size="24" :marginBot="24" v-if="showTitle">Today's highlights</BaseText>
    <BaseCard class="todayBlock" :type="'grid'" :column="3" :padding="'none'" v-if="this.deviceType === 'desktop'">
        <BaseCard class="todayCard">
            <span class="todayCard__value"> {{ forecastWeatherData[0].day.daily_chance_of_rain + " " +
                "%" }}</span>
            <p class="todayCard__text">Chance of rain</p>
        </BaseCard>
        <BaseCard class="todayCard">
            <span class="todayCard__value">{{ astroData }}</span>
            <p class="todayCard__text">{{ astroDataName }}</p>
        </BaseCard>
        <BaseCard class="todayCard">
            <span class="todayCard__value"> {{ forecastWeatherData[0].day.maxtemp_c + " " +
                "C°" }}</span>
            <p class="todayCard__text">Max temp</p>
        </BaseCard>
        <BaseCard class="todayCard">
            <span class="todayCard__value">{{ forecastWeatherData[0].day.avghumidity + ' ' + '%' }}</span>
            <p class="todayCard__text">Humidity</p>
        </BaseCard>
        <BaseCard class="todayCard">
            <span class="todayCard__value">{{ forecastWeatherData[0].day.uv }}</span>
            <p class="todayCard__text">UV</p>
        </BaseCard>
        <BaseCard class="todayCard">
            <span class="todayCard__value">{{ weatherData.vis_km + " " +
                "km" }}</span>
            <p class="todayCard__text">Visible</p>
        </BaseCard>
    </BaseCard>

    <TheAccordeon v-if="this.deviceType === 'tablet' || this.deviceType === 'mobile'" :title="'Weather details'">
        <template v-slot:content>
            <BaseCard class="todayCard">
                <span class="todayCard__value"> {{ forecastWeatherData[0].day.daily_chance_of_rain + " " +
                    "%" }}</span>
                <p class="todayCard__text">Chance of rain</p>
            </BaseCard>
            <BaseCard class="todayCard">
                <span class="todayCard__value">{{ astroData }}</span>
                <p class="todayCard__text">{{ astroDataName }}</p>
            </BaseCard>
            <BaseCard class="todayCard">
                <span class="todayCard__value"> {{ forecastWeatherData[0].day.maxtemp_c + " " +
                    "C°" }}</span>
                <p class="todayCard__text">Max temp</p>
            </BaseCard>
            <BaseCard class="todayCard">
                <span class="todayCard__value">{{ forecastWeatherData[0].day.avghumidity + ' ' + '%' }}</span>
                <p class="todayCard__text">Humidity</p>
            </BaseCard>
            <BaseCard class="todayCard">
                <span class="todayCard__value">{{ forecastWeatherData[0].day.uv }}</span>
                <p class="todayCard__text">UV</p>
            </BaseCard>
            <BaseCard class="todayCard">
                <span class="todayCard__value">{{ weatherData.vis_km + " " +
                    "km" }}</span>
                <p class="todayCard__text">Visible</p>
            </BaseCard>
        </template>
    </TheAccordeon>
</template>
<script>
import { mapGetters } from 'vuex';
import TheAccordeon from '@/UI/TheAccordeon.vue';
export default {
    components: { TheAccordeon },
    props: ['showTitle'],
    computed: {
        ...mapGetters(['weatherData', 'forecastWeatherData', 'deviceType']),
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