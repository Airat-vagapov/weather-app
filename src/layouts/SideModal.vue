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
            <transition name="fade-in">
                <div v-if="openLoader" class="modal__loader">
                    <div class="modal__loader__container">
                        <div class="modal__loader__icons">
                            <div class=" modal__loader__elem el1">
                                <i class="wi wi-day-sunny modal__loader__icon"></i>
                            </div>
                            <div class=" modal__loader__elem el2">
                                <i class="wi wi-storm-showers modal__loader__icon"></i>
                            </div>
                            <div class="el3 modal__loader__elem">
                                <i class="wi wi-day-haze modal__loader__icon"></i>
                            </div>
                            <div class="el4 modal__loader__elem">
                                <i class="wi wi-snow modal__loader__icon"></i>
                            </div>
                        <div class="el5 modal__loader__elem">
                            <i class="wi wi-hail modal__loader__icon"></i>
                        </div>
                    </div>
                        <!-- <div class="modal__loader__dots">
                                                <div class="modal__loader__dot dot_1"></div>
                                                <div class="modal__loader__dot dot_2"></div>
                                                <div class="modal__loader__dot dot_3"></div>
                                            </div> -->
                    </div>
                </div>
            </transition>

        </div>
    </transition>
</template>

<script>
import BaseBigCard from '@/UI/BaseBigCard.vue';
import { gsap } from "gsap";

export default {
    emits: ['closeModal'],
    props: ['isOpen', 'openLoader'],
    data() {
        return {
            animIsFinish: false
        }
    },
    components: { BaseBigCard },
    watch: {
        // animIsFinish() {
        //     if (this.animIsFinish) {
        //         this.loaderAnimation()
        //     }
        // },
        openLoader() {
            if (this.openLoader) {
                this.loaderAnimation()
            }
        }
    },
    methods: {
        closeModal() {
            this.$emit('closeModal')
        },
        finishAnim() {
            this.animIsFinish = true
        },
        loaderAnimation() {
            this.animIsFinish = false
            this.$nextTick(() => {
                let t1 = gsap.timeline({ repeat: -1 })
                t1.set('.el1', { x: 100, opacity: 0 });
                t1.set('.el2', { x: 100, opacity: 0 });
                t1.set('.el3', { x: 100, opacity: 0 });
                t1.set('.el4', { x: 100, opacity: 0 });
                t1.set('.el5', { x: 100, opacity: 0 });

                t1.fromTo('.el1', { x: 100, opacity: 0 }, { duration: 0.4, x: 0, opacity: 1, ease: 'linear' }, 1)
                t1.fromTo('.el1', { x: 0, opacity: 1 }, { duration: 0.4, x: -100, opacity: 0, ease: 'linear' }, '>')
                t1.fromTo('.el2', { x: 100, opacity: 0 }, { duration: 0.4, x: 0, opacity: 1, ease: 'linear' }, '>')
                t1.fromTo('.el2', { x: 0, opacity: 1 }, { duration: 0.4, x: -100, opacity: 0, ease: 'linear' }, '>')
                t1.fromTo('.el3', { x: 100, opacity: 0 }, { duration: 0.4, x: 0, opacity: 1, ease: 'linear' }, '>')
                t1.fromTo('.el3', { x: 0, opacity: 1 }, { duration: 0.4, x: -100, opacity: 0, ease: 'linear' }, '>')
                t1.fromTo('.el4', { x: 100, opacity: 0 }, { duration: 0.4, x: 0, opacity: 1, ease: 'linear' }, '>')
                t1.fromTo('.el4', { x: 0, opacity: 1 }, { duration: 0.4, x: -100, opacity: 0, ease: 'linear' }, '>')
                t1.fromTo('.el5', { x: 100, opacity: 0 }, { duration: 0.4, x: 0, opacity: 1, ease: 'linear' }, '>')
                t1.fromTo('.el5', { x: 0, opacity: 1 }, { duration: 0.4, x: -100, opacity: 0, ease: 'linear' }, '>')

                t1.play()
                t1.yoyo(true)

                // let t2 = gsap.timeline({ repeat: -1 })
                // t2.fromTo('.dot_1', { y: 0 }, { y: 20, duration: 0.2, ease: 'linear' }, 1)
                // t2.fromTo('.dot_2', { y: 0 }, { y: 20, duration: 0.2, ease: 'linear' }, '>')
                // t2.fromTo('.dot_3', { y: 0 }, { y: 20, duration: 0.2, ease: 'linear' }, '>')

                // t2.play()
                // t2.yoyo(true)
            })
        }
    },
}
</script>

<style scoped lang="sass">
@import '@/sass/layouts/sideModal.sass'
</style>

