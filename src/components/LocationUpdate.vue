<template>
    <div>
        <BaseIcon class="icon__near" @click="updateLocation" :icon="'near_me'"></BaseIcon>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
export default {
    computed: {
        ...mapGetters(['weatherData', 'forecastWeatherData', 'currentIconName', 'currentDayName', 'weatherTime', 'weatherByHour']),
    },
    methods: {
        ...mapActions(['getLocation', 'getWeather', 'getActualForecastByHour']),
        ...mapMutations(['setDataLoaded']),

        updateLocation() {
            this.setDataLoaded(false)
            this.getLocation()
                .then(() => this.getWeather())
                .then(() => this.getActualForecastByHour())
        }
    },
}
</script>