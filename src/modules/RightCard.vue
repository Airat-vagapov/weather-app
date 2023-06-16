<template>
    <BaseBigCard class="right__side" :width="70">
        <TodayHighlights></TodayHighlights>
        
    </BaseBigCard>
</template>

<script>
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
    }
}
</script>

<style scoped lang="sass">

</style>