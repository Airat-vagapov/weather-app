<template>
    <div class="temp">
        <span class="temp__gradus">
            {{ Math.round(this.temp) + " " + "C°" }}
            <!-- {{ Math.round(weatherData.temp_c) + " " + "C°" }} -->
        </span>
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
</style>