<template>
    <div class="forecastWeather">
        <BaseText :size="24" :marginBot="24">For next 2 days</BaseText>
        <!-- <div class="slider"> -->
        <Carousel>
            <Slide v-for="(weather, index ) in this.forecastWeatherData" :key="index">
                <BaseCard class="todayBlock" :type="'grid'" :padding="'32'">
                    <TimeElement :showTime="false" :showDate="true"></TimeElement>
                    <BigTemperatireElement :temp="weather.day.avgtemp_c"></BigTemperatireElement>
                    <ConditionElement :hasLocationButton="false"></ConditionElement>
                    <!-- <LineChart :data="weather.hour"></LineChart> -->
                </BaseCard>
            </Slide>
        </Carousel>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import BigTemperatireElement from './BigTemperatireElement.vue';
import TimeElement from './TimeElement.vue';
import ConditionElement from './ConditionElement.vue';
// import LineChart from './LineChart.vue';

import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
    components: { BigTemperatireElement, TimeElement, ConditionElement, Carousel, Slide },
    // components: { VueSlickCarousel },


    computed: {
        ...mapGetters(['weatherData', 'forecastWeatherData']),

        averageTemp() {
            return this.forecastWeatherData[1].day.avgtemp_c
        },
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
    width: 100%
</style>