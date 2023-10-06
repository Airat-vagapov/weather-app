<template>
    <BaseText :size="24" :marginBot="24">For next 2 days</BaseText>


    <BaseCard class="todayBlock" :type="'grid'" :padding="32" v-for="(weather, index ) in this.forecastWeatherData"
        :key="index">
        <TimeElement :showTime="false"></TimeElement>
        <BigTemperatireElement :temp="weather.day.avgtemp_c"></BigTemperatireElement>
        <ConditionElement :hasLocationButton="false"></ConditionElement>
    </BaseCard>

    <!-- <BaseCard class="todayBlock" :type="'grid'" :padding="32">
        <TimeElement :showTime="false"></TimeElement>
        <BigTemperatireElement :temp="averageTemp"></BigTemperatireElement>
        <ConditionElement :hasLocationButton="false"></ConditionElement>
    </BaseCard> -->
</template>
<script>
import { mapGetters } from 'vuex';
import BigTemperatireElement from './BigTemperatireElement.vue';
import TimeElement from './TimeElement.vue';
import ConditionElement from './ConditionElement.vue';
export default {
    components: { BigTemperatireElement, TimeElement, ConditionElement },
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