<template>
    <SideModal :error="emptyCityList" :openLoader="cityIsLoading" :isOpen="cityChoose" @close-modal="closeModal"
        data-moadal="cityChose">
        <template v-slot:content>

            <h2 class="modal__title">Choose the City</h2>

            <BaseIcon @click="closeModal" class="city__modal__icon" :icon="'close'"></BaseIcon>
            <div style="display: flex; flex-wrap: wrap; position: relative; margin-bottom: 32px;">
                <BaseInput :valid="isValid" :value="cityName" @new-value="newValue => cityName = newValue"
                    :placeholderText="'Write the city'">
                </BaseInput>
                <BaseIcon @click="handlerKeyup" class="city__modal__icon__search" :icon="'search'"></BaseIcon>
            </div>

            <TheScroll v-if="!emptyCityList" class="cityList">
                <div @click="submitCity(elem.city, elem.country, elem.coordinates)" class="city__modal__elem"
                    v-for="(elem, index) in cityList" :key="index">
                    <BaseText>{{ elem.city }}, {{ elem.country }}</BaseText>
                </div>
            </TheScroll>


        </template>
        <template v-slot:errorPage>
            <BaseCard class="city__modal__error" :type="'col'">
                <BaseIcon class="city__modal__error__icon" :icon="'error'"></BaseIcon>
                <BaseText :size="24" :marginBot="16">
                    No found!
                </BaseText>
                <BaseText :size="16">
                    Try another request
                </BaseText>

            </BaseCard>
        </template>
    </SideModal>
</template>

<script>
import TheScroll from '@/UI/TheScroll.vue';
import { mapGetters, mapMutations, mapActions } from 'vuex';
export default {
    data() {
        return {
            cityName: "",
            emptyCityList: false,
            isValid: true
        };
    },
    computed: {
        ...mapGetters(["city", "cityChoose", "cityList", "cityIsLoading"]),
    },
    methods: {
        ...mapActions(["getCity", "getWeather", "getActualForecastByHour", "getDayName", "updateWeather"]),
        ...mapMutations(["setCityChoose", "setCity", "setCountry", "setCityList", "setcityCoordinates"]),
        closeModal() {
            this.setCityChoose(false);
        },
        submitCity(city, country, coor) {
            this.setCity(city);
            this.setCountry(country);
            this.setcityCoordinates(coor);
            this.closeModal();
            this.getWeather()
                .then(() => this.getActualForecastByHour())
                .then(() => this.getDayName())
                .then(() => {
                    const emptyCityList = [];
                    this.setCityList(emptyCityList);
                });
        },
        searchCityName(value) {
            console.log(value);
            this.cityName = value;
        },
        handlerKeyup() {
            if (this.cityName == "") {
                this.isValid = false;
            }
            else {
                this.isValid = true;
                this.getCity(this.cityName)
                    .then(() => {
                        const arr = this.cityList;
                        if (arr.length < 1) {
                            this.emptyCityList = true;
                        }
                        else {
                            this.emptyCityList = false;
                        }
                    });
            }
        },
    },
    components: {
        TheScroll
    }
}
</script>
<style  scoped lang="sass">
@import '@/sass/modules/cityChoose.sass'
</style>