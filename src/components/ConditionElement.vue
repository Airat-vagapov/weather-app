<template>
    <div class="condition">
        <BaseTextWithIcon>
            <i v-if="showIcon" :class="currentIconName" class="wi condition__icon"></i>
            <span class="condition__text">{{ data }}</span>
        </BaseTextWithIcon>
        <!-- <BaseIcon class="icon__near" @click="updateLocation" :icon="'near_me'" v-if="showLocationButton"></BaseIcon> -->
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
export default {
    props: {
        hasLocationButton: {
            type: Boolean,
            default: true,
        },
        showIcon: {
            type: Boolean,
            required: false,
            default: true,
        },
        value: {
            required: false,
        }
    },
    computed: {
        ...mapGetters(['weatherData', 'forecastWeatherData', 'currentIconName', 'currentDayName', 'weatherTime', 'weatherByHour']),
        showLocationButton() {
            let showButton;
            this.hasLocationButton ? showButton = true : showButton = false;
            return showButton;
        },
        data() {
            let value;
            value = this.weatherData.condition.text;
            if (this.value) {
                value = this.value;
            }
            return value;
        }
    },
    methods: {
        ...mapActions(['getLocation', 'getWeather', 'getActualForecastByHour']),
        ...mapMutations(['setDataLoaded']),
        updateLocation() {
            this.setDataLoaded(false);
            this.getLocation()
                .then(() => this.getWeather())
                .then(() => this.getActualForecastByHour());
        }
    },
}
</script>

<style scoped lang="sass">

.condition 
    display: flex
    align-items: center
    gap: 8px
    justify-content: space-between
.condition__icon
    font-size: 32px
.condition__text
    font-size: 32px

// .icon__near
//     margin-left: auto
</style>