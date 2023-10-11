<template>
    <BaseText :size="24" :marginBot="24">For next 2 days</BaseText>
    <!-- <VueSlickCarousel> -->
    <!-- <div>1</div>
        <div>2</div> -->
    <BaseCard class="todayBlock" :type="'grid'" :padding="'32'" v-for="(weather, index ) in this.forecastWeatherData"
        :key="index">
        <TimeElement :showTime="false"></TimeElement>
        <BigTemperatireElement :temp="weather.day.avgtemp_c"></BigTemperatireElement>
        <ConditionElement :hasLocationButton="false"></ConditionElement>
        <LineChart :data="weather.hour"></LineChart>
    </BaseCard>
    <!-- </VueSlickCarousel> -->
</template>
<script>
import { mapGetters } from 'vuex';
import BigTemperatireElement from './BigTemperatireElement.vue';
import TimeElement from './TimeElement.vue';
import ConditionElement from './ConditionElement.vue';
import LineChart from './LineChart.vue';


// import VueSlickCarousel from 'vue-slick-carousel'
// import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    components: { BigTemperatireElement, TimeElement, ConditionElement, LineChart },
    // components: { VueSlickCarousel },

    computed: {
        ...mapGetters(['weatherData', 'forecastWeatherData']),

        averageTemp() {
            return this.forecastWeatherData[1].day.avgtemp_c
        }

    },
    mounted() {
        console.log(this.forecastWeatherData);
    },
}
</script>
<style scoped lang="sass">
@import '@/sass/components/rightCard'

.todayBlock
    padding: 32px
    background-color: #fff
    border-radius: 12px

</style>