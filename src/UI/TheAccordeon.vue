<template>
    <div class="accordeon">
        <div class="accordeon__titleBlock" @click="openContent">
            <p class="accordeon__title">{{ this.title }}</p>
            <BaseIcon class="accordeon__icon" :icon="'expand_less'"></BaseIcon>
        </div>
        <transition name="slide">
            <div v-show="this.isOpen" class="accordeon__body">
                <slot name="content"></slot>
            </div>
        </transition>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            isOpen: false
        }
    },
    props: ['title'],
    computed: {
        ...mapGetters(['deviceType'])
    },
    methods: {
        openContent() {
            const accordeon = document.querySelectorAll('.accordeon')
            this.isOpen === true ? this.isOpen = false : this.isOpen = true

            accordeon.forEach((el) => {
                this.isOpen === true ? el.classList.add('active') : el.classList.remove('active')
            })
        }
    },
    mounted() {
        // const
    }
}
</script>

<style scoped lang="sass">
.accordeon
    &__icon 
        transform: rotate(0deg)
        transition: all 0.3s ease-in
    &.active &__icon
        transform: rotate(180deg)
        transition: all 0.3s ease-in

    &__titleBlock
        display: flex
        align-items: center
        justify-content: space-between
    &__title 
        font-weight: 400
    &__body
        padding-top: 24px
        display: flex
        flex-direction: column
        gap: 12px
    

.slide-enter-active 
   -moz-transition-duration: 0.3s
   -webkit-transition-duration: 0.3s
   -o-transition-duration: 0.3s
   transition-duration: 0.3s
   -moz-transition-timing-function: ease-in
   -webkit-transition-timing-function: ease-in
   -o-transition-timing-function: ease-in
   transition-timing-function: ease-in

.slide-leave-active 
   -moz-transition-duration: 0.3s
   -webkit-transition-duration: 0.3s
   -o-transition-duration: 0.3s
   transition-duration: 0.3s
   -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1)
   -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1)
   -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1)
   transition-timing-function: cubic-bezier(0, 1, 0.5, 1)

.slide-enter-to, .slide-leave-from
   max-height: 100px
   overflow: hidden

.slide-enter-from, .slide-leave-to 
   overflow: hidden
   max-height: 0

</style>