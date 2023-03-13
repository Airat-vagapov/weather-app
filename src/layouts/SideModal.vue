<!-- Нужно передать пропс isOpen, 
по которому открывается родительский попап 
Если нужен прелоудер, то передаем параметр в пропс openLoader
по которому определяем, что еще получаем данные-->

<template>
    <transition name="fade-in">
        <div v-if="isOpen" @click="closeModal" class="modal__background"></div>
    </transition>
    <transition name="slide-in">
        <div v-if="isOpen" class="modal">
            <BaseBigCard :type="'col'" :width="100">
                <slot></slot>
            </BaseBigCard>
            <div v-if="openLoader" class="modal__loader">
                <div class="modal__loader__container">
                    <i class="wi wi-day-sunny modal__loader__icon el1"></i>
                    <i class="wi wi-day-cloudy modal__loader__icon el2"></i>
                    <i class="wi wi-day-wi-day-rain modal__loader__icon el3"></i>
                    <i class="wi wi-snow modal__loader__icon el4"></i>
                    <i class="wi wi-hail modal__loader__icon el5"></i>
                </div>
            </div>

        </div>
    </transition>
</template>

<script>
import BaseBigCard from '@/UI/BaseBigCard.vue';
import { gsap } from "gsap";

export default {
    emits: ['closeModal'],
    props: ['isOpen', 'openLoader'],
    components: { BaseBigCard },
    watch: {
        // openLoader() {
        //     console.log(this.isOpen)
        //     if (this.openLoader) {
        //         setTimeout(this.loaderAnimation(), 4000)
        //     }
        // }
    },
    methods: {
        closeModal() {
            this.$emit('closeModal')
        },
        loaderAnimation() {
            console.log(document.querySelector('.el1'))
            let t1 = gsap.timeline()
            t1.fromTo('.el1', { x: 0 }, { duration: 1, x: -100 }, 1)
            t1.set('.el1', { x: 100 });
            t1.fromTo('.el2', { x: 0 }, { duration: 1, x: -100 }, '>')
            t1.set('.el2', { x: 100 });

            console.log('start')
            t1.play()
            console.log('end')
        }
    },
    mounted() {
        console.log(document.querySelector('.el1'))
        if (this.openLoader) {
            setTimeout(this.loaderAnimation(), 4000)
        }
    },
}
</script>

<style scoped lang="sass">
@import '@/sass/layouts/sideModal.sass'
</style>

