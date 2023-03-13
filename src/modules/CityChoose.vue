<template>
    <SideModal :openLoader="cityIsLoading" :isOpen="cityChoose" @close-modal="closeModal">
        <BaseText>
            <h2>Choose the City</h2>
        </BaseText>
        <BaseIcon @click="closeModal" class="city__modal__icon" :icon="'close'"></BaseIcon>
        <div style="display: flex; position: relative;">
            <BaseInput class="city__modal__input" :value="cityName" @new-value="newValue => cityName = newValue"
                :placeholderText="'Write the city'">
            </BaseInput>
            <BaseIcon @click="handlerKeyup" class="city__modal__icon__search" :icon="'search'"></BaseIcon>
        </div>
        <div @click="submitCity(elem.city, elem.country)" class="city__modal__elem" v-for="(elem, index) in cityList"
            :key="index">
            <BaseText>{{ elem.city }}, {{ elem.country }}</BaseText>
        </div>
    </SideModal>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
export default {
    data() {
        return {
            cityName: '',
        }
    },
    computed: {
        ...mapGetters(['city', 'cityChoose', 'cityList', 'cityIsLoading']),
    },
    methods: {
        ...mapActions(['getCity', 'getWeather', 'getActualForecastByHour', 'getDayName', 'updateWeather']),
        ...mapMutations(['setCityChoose', 'setCity', 'setCountry', 'setCityList']),
        closeModal() {
            this.setCityChoose(false)
        },
        submitCity(city, country) {
            this.setCity(city)
            this.setCountry(country)
            this.closeModal()
            this.getWeather()
                .then(() => this.getActualForecastByHour())
                .then(() => this.getDayName())
                .then(() => {
                    const emptyCityList = []
                    this.setCityList(emptyCityList)
                })
        },
        searchCityName(value) {
            console.log(value)
            this.cityName = value
        },
        handlerKeyup() {
            console.log(this.cityName)
            this.getCity(this.cityName)
                .then(() => {
                    console.log(this.cityList)
                })
        },
    },
}
</script>

<style scoped lang="sass">
@import '@/sass/modules/cityChoose.sass'
</style>