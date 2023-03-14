<template>
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
</template>

<script>
import { gsap } from "gsap";
export default {
  props: ['openLoader'],
  watch: {
    // openLoader() {
    //   if (this.openLoader) {
    //     this.loaderAnimation()
    //   }
    // }
  },
  methods: {
    loaderAnimation() {
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
  mounted() {
    this.loaderAnimation()
  },
}
</script>

<style lang="sass" scoped>
@import "../sass/vars.sass";
.modal__loader
        display: flex
        position: absolute
        // flex-wrap: wrap
        width: 100%
        height: 100vh
        z-index: 15
        background-color: #fff
        top: 0
        left: 0
        &__container
            position: relative
            top: 40%
            left: 0
            width: 100%
            height: 100px
            display: flex
            flex-wrap: wrap
        &__icons
            position: relative
            width: 100%
            height: 100%
            margin-bottom: 40px

        &__dots
            position: relative
            display: flex
            width: 100%
            justify-content: center
        &__dot
            margin-right: 24px
            position: relative
            width: 8px
            height: 8px
            background-color: $blue-color
            border-radius: 10px
            &:last-child
                margin-right: 0
        &__elem
            position: absolute
            display: flex
            width: 112px
            height: 100px
            left: calc(50% - 56px)
        &__icon
            font-size: 80px
            // margin-right: 24px
            position: relative
            top: 5px
            color: $blue-color

.fade-in-enter-from,
.fade-in-leave-to
    opacity: 0

.fade-in-enter-active,
.fade-in-leave-active
    transition: all 0.3s ease-in

.fade-in-enter-to,
.fade-in-leave-from
    opacity: 0.7
</style>