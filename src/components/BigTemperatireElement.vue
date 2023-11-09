<template>
    <div class="temp">
        <div class="temp--big">
            <!-- <span v-if="showCondition" :class="currentIconName" class="temp__condition"></span> -->
            <span v-if="showCondition" :class="currentIconName" class="wi condition__icon"></span>
            <span class="temp__gradus">
                {{ Math.round(this.temp) + " " + "C°" }}
            </span>
        </div>
        <div class="temp__details" v-if="showDetails">
            <BaseText>Feels {{ Math.round(weatherData.feelslike_c) + " " + "C°" }}</BaseText>
            <BaseText>Cloud {{ weatherData.cloud + ' ' + "%" }} </BaseText>
            <BaseText>Wind {{ weatherData.wind_kph + ' ' + 'km/h' }}</BaseText>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    props: {
        temp: {
            type: Number,
            required: false
        },
        showDetails: {
            required: false,
            default: true
        },
        showCondition: {
            default: false
        }
    },
    methods: {
        ...mapActions(['getWeather']),
    },
    computed: {
        ...mapGetters(['dataisLoaded', 'weatherData', 'forecastWeatherData', 'currentIconName', 'currentDayName', 'weatherTime', 'weatherByHour']),
    },
};
</script>

<style scoped lang="sass">
@import '../sass/components/leftCard.sass'

.temp--big 
    display: flex
    align-items: flex-start
.temp--big .condition__icon 
    font-size: 46px
    position: relative 
    top: 40px
    margin-right: 16px
</style>