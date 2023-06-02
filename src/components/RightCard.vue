<template>
    <BaseBigCard class="right__side" :width="70">
        <BaseText :size="24" :marginBot="24">Today's highlights</BaseText>
        <BaseCard class="todayBlock" :type="'grid'" :column="3" :padding="'none'">
            <BaseCard class="todayCard">
                <span class="todayCard__value"> {{ forecastWeatherData[0].day.daily_chance_of_rain + " " +
                    "%" }}</span>
                <p>Chance of rain</p>
            </BaseCard>
            <BaseCard class="today__card">
                <span>{{ astroData }}</span>
            </BaseCard>
            <BaseCard class="today__card">
                <!-- <p></p> -->
                <span>Maximal temperature {{ forecastWeatherData[0].day.maxtemp_c + " " +
                    "C°" }}</span>
            </BaseCard>
            <BaseCard class="today__card">
                Visible
                <span>{{ 'Ощущается как' + ' ' + weatherData.feelslike_c + " " +
                    "C°" }}</span>
            </BaseCard>
            <BaseCard class="today__card">
                Влажность
                <span>{{ 'Ощущается как' + ' ' + weatherData.feelslike_c + " " +
                    "C°" }}</span>
            </BaseCard>
            <BaseCard class="today__card">
                УФ
                <span>{{ 'Ощущается как' + ' ' + weatherData.feelslike_c + " " +
                    "C°" }}</span>
            </BaseCard>
        </BaseCard>
    </BaseBigCard>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['weatherData', 'forecastWeatherData']),
        astroData() {
            let result;

            if (this.weatherData.is_day === 1) {
                result = 'Sunset:' + ' ' + this.forecastWeatherData[0].astro.sunset
            } else {
                result = 'Sunrise:' + ' ' + this.forecastWeatherData[0].astro.sunrise
            }
            return result
        },
    },
    mounted() {
        console.log(this.forecastWeatherData)
    }
}
</script>

<style scoped lang="sass">
@import '@/sass/components/rightCard';
</style>