<template>
    <div class="accordeon">
        <div class="accordeon__titleBlock" @click="openContent">
            <p class="accordeon__title">{{ this.title }}</p>
            <BaseIcon class="location__icon" :icon="'expand_less'"></BaseIcon>
        </div>
        <Transition name="slide">
            <div v-if="this.isOpen" class="accordeon__body">
                <slot name="content"></slot>
            </div>
        </Transition>
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
            this.isOpen === true ? this.isOpen = false : this.isOpen = true
            
        }
    },
    mounted() {
        // const
    }
}
</script>

<style scoped lang="sass">
.accordeon__titleBlock
    display: flex
    align-items: center
    justify-content: space-between
    .accordeon__title 
        font-weight: 400
</style>