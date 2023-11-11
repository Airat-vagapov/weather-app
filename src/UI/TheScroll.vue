<template>
    <div class="scrollFade">
        <PerfectScrollbar :style="{ height: scrollHeight }" :settings="scrollbarSettings">
            <div class="scrollContainer">
                <slot></slot>
            </div>
        </PerfectScrollbar>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
export default {
    data() {
        return {
            scrollHeight: 0
        }
    },
    props: {
        scrollbarSettings: {
            // scrollYMarginOffset: 12,
            // suppressScrollY: true
        }
    },
    components: { PerfectScrollbar },
    computed: {
        ...mapGetters(['deviceType']),
    },
    methods: {
        getScrollHeight() {
            if (this.deviceType === 'desktop') {
                const scroll = document.querySelectorAll('.ps')
                scroll.forEach(elem => {
                    const scrollY = elem.getBoundingClientRect().top
                    const windowHeight = window.innerHeight
                    const height = windowHeight - scrollY - 32
                    this.scrollHeight = height + 'px'
                })
            } else {
                this.scrollHeight = 100 + '%'
            }
        }
    },
    mounted() {
        this.getScrollHeight()
    }
}
</script>

<style src="vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css"></style>
<style lang="sass">
@import '@/sass/vars'

.scrollFade
    @media (min-width: 1199px) 
        position: relative
        &::before
            content: ''
            position: absolute
            top: 0
            left: 0
            width: calc(100% - 4px)
            height: 20px
            background: linear-gradient(0deg, rgba(0,0,0,0) 0%, white 100%)
            z-index: 10
        &::after
            content: ''
            position: absolute
            bottom: 0
            left: 0
            width: calc(100% - 4px)
            height: 20px
            background: linear-gradient(180deg, rgba(0,0,0,0) 0%, white 100%)
            z-index: 10
        

.scrollContainer 
    @media (max-width: 1199px) 
        display: flex

.ps
    z-index: 5

.ps__thumb-y
    background-color: $blue-color
    width: 2px

.ps__thumb-x
    background-color: $blue-color
    height: 2px

.ps__rail-y:hover > .ps__thumb-y,
.ps__rail-y:focus > .ps__thumb-y,
.ps__rail-y.ps--clicking .ps__thumb-y
    background-color: #4150d3
    width: 4px

.ps__rail-y
    width: 8px

.ps__rail-x:hover > .ps__thumb-x,
.ps__rail-x:focus > .ps__thumb-x,
.ps__rail-x.ps--clicking .ps__thumb-x 
    background-color: #4150d3
    height: 4px

.ps:hover > .ps__rail-x,
.ps:hover > .ps__rail-y,
.ps--focus > .ps__rail-x,
.ps--focus > .ps__rail-y,
.ps--scrolling-x > .ps__rail-x,
.ps--scrolling-y > .ps__rail-y 
    opacity: 1

.ps .ps__rail-x:hover,
.ps .ps__rail-y:hover,
.ps .ps__rail-x:focus,
.ps .ps__rail-y:focus,
.ps .ps__rail-x.ps--clicking,
.ps .ps__rail-y.ps--clicking 
  background-color: none
  opacity: 1

// Для списка городов
@media (max-width: 1199px)
    .cityList
        .scrollContainer
            flex-direction: column
</style>