<template>
    <transition name="fade-in">
        <div @click="closeModal" v-if="cityChoose" class="modal__background"></div>
    </transition>
    <transition name="slide-in">
        <div v-if="cityChoose" class="city__modal">
            <BaseBigCard :type="'col'">
                <BaseText>
                    <h2>Choose the City</h2>
                </BaseText>
                <BaseIcon @click="closeModal" class="city__modal__icon" :icon="'close'"></BaseIcon>
                <input class="city__modal__input" type="text">
                <div>
                    <ul>
                        <li>test</li>
                        <li>test</li>
                        <li>test</li>
                    </ul>
                </div>
            </BaseBigCard>
        </div>
    </transition>
</template>

<script>
import BaseBigCard from '@/UI/BaseBigCard.vue';
import { mapGetters, mapMutations } from 'vuex';
export default {

    components: { BaseBigCard },
    computed: {
        ...mapGetters(['cityChoose']),
    },
    methods: {
        ...mapMutations(['setCityChoose']),
        closeModal() {
            this.setCityChoose(false)
        }
    },

}
</script>

<style scoped lang="sass">
@import '@/sass/modules/cityChoose.sass'
</style>