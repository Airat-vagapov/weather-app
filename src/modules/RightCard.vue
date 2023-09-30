<template>
    <BaseBigCard class="right__side" :width="70">
        <TodayHighlights></TodayHighlights>
<<<<<<< HEAD
        <ForecastWeather></ForecastWeather>
=======
        
>>>>>>> 177969e (update)
    </BaseBigCard>
</template>

<script>
<<<<<<< HEAD
// import { mapGetters } from 'vuex';
import TodayHighlights from '@/components/TodayHighlights.vue';
import ForecastWeather from '@/components/ForecastWeather.vue'
export default {
    components: {
        TodayHighlights,
        ForecastWeather
    },
    computed: {
        // ...mapGetters(['weatherData', 'forecastWeatherData']),
        // astroData() {
        //     let result;

        //     if (this.weatherData.is_day === 1) {
        //         result = this.forecastWeatherData[0].astro.sunset
        //     } else {
        //         result = this.forecastWeatherData[0].astro.sunrise
        //     }
        //     return result
        // },
        // astroDataName() {
        //     let astroName
        //     if (this.weatherData.is_day === 1) {
        //         astroName = 'Sunset'
        //     } else {
        //         astroName = 'Sunrise'
        //     }
        //     return astroName
        // }
    },
    mounted() {
        // console.log(this.forecastWeatherData)
=======
import { mapGetters } from 'vuex';
import TodayHighlights from '@/components/TodayHighlights.vue';
export default {
    components: {
        TodayHighlights
    },
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
    mounted() {
        console.log(this.forecastWeatherData)
>>>>>>> 177969e (update)
    }
}
</script>

<style scoped lang="sass">

</style>