<template>
    <transition name="fade-in">
        <div @click="closeModal" v-if="cityChoose" class="modal__background"></div>
    </transition>
    <transition name="slide-in">
        <div v-if="cityChoose" class="city__modal">
            <BaseBigCard :type="'col'" :width="100">
                <BaseText>
                    <h2>Choose the City</h2>
                </BaseText>
                <BaseIcon @click="closeModal" class="city__modal__icon" :icon="'close'"></BaseIcon>
                <BaseInput :placeholderText="'Write the city'"></BaseInput>
                <!-- <input class="city__modal__input" type="text"> -->
                <div class="city__modal__elem" v-for="(elem, index) in cityList" :key="index">
                    <BaseText>{{ elem.city }}, {{ elem.country }}</BaseText>
                </div>
            </BaseBigCard>
        </div>
    </transition>
</template>

<script>
import BaseBigCard from '@/UI/BaseBigCard.vue';
import { mapGetters, mapMutations, mapActions } from 'vuex';
export default {
    components: { BaseBigCard },
    watch: {
        cityChoose() {
            this.getCities()
        }
    },
    computed: {
        ...mapGetters(['cityChoose', 'cityList']),
    },
    methods: {
        ...mapActions(['getCity']),
        ...mapMutations(['setCityChoose']),
        closeModal() {
            this.setCityChoose(false)
        },
        getCities() {
            if (this.cityChoose === true) {
                this.getCity();
            }
        }

    },

}
</script>

<style scoped lang="sass">
@import '@/sass/modules/cityChoose.sass'
</style>