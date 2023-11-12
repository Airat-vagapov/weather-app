<template>
    <div class="forecastWeather">
        <BaseText :size="24" :marginBot="24">For next 2 days</BaseText>
        <!-- <div class="slider"> -->
        <Carousel>
            <Slide v-for="(weather, index ) in this.forecastWeatherData" :key="index">
                <BaseCard class="forecastCard--main" :type="'grid'" :column="3" :padding="'32'">
                    <div class="grid__elem">
                        <TimeElement :showTime="false" :showDate="true" :showDayAndMonth="true" :dateType="'custom'"
                            :dateData="weather.date">
                        </TimeElement>
                        <BigTemperatireElement :showCondition="true" :showDetails="false" :temp="weather.day.avgtemp_c">
                        </BigTemperatireElement>
                        <ConditionElement :hasLocationButton="false" :showIcon="false"></ConditionElement>
                    </div>
                    <div class="grid__elem--2">
                        <div class="flex__row flex__row--centerVert h100">
                            <ForecastHighlights :data="weather"></ForecastHighlights>
                        </div>
                    </div>
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
import ForecastHighlights from './ForecastHighlights.vue';
// import LineChart from './LineChart.vue';

import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
    components: { BigTemperatireElement, TimeElement, ConditionElement, Carousel, Slide, ForecastHighlights },


    computed: {
        ...mapGetters(['weatherData', 'forecastWeatherData']),

        averageTemp() {
            return this.forecastWeatherData[1].day.avgtemp_c
        },
    },
    mounted() {
        // console.log(this.forecastWeatherData);
    },
}
</script>
<style scoped lang="sass">
@import '@/sass/components/rightCard'

.forecastCard--main
    padding: 32px
    background-color: #fff
    border-radius: 12px
    width: 100%
</style>