<template>
    <TheScroll>
        <BaseCard class="scroll__byhour" :border="'bottom'" :type="'row'" v-for="(weather, index) in weatherByHour"
            :key="index">

            <span>{{ weather.time_hour }}</span>
            <div class="condition">
                <i :class="weather.condition.iconName" class="wi condition__icon"></i>
                <span>{{ weather.condition.text }}</span>
            </div>
            <span>{{ Math.round(weather.temp_c) + " " + "C°" }}</span>
        </BaseCard>
    </TheScroll>
</template>

<script>
import TheScroll from '@/UI/TheScroll.vue';
import { mapGetters } from 'vuex';
export default {
    components: { TheScroll },
    computed: {
        ...mapGetters(["weatherByHour"])
    },
}
</script>

<style scoped lang="sass">
@import '@/sass/vars';
.condition
    display: flex
    align-items: center
    gap: 8px

.border__bottom
    border-bottom: 1px solid $gray-color
    cursor: pointer
    transition: all 0.3s ease-in
    &:hover
        transition: all 0.3s ease-in
        background-color: $gray-color
        color: $blue-color
    &:last-child
        border-bottom: none

.scroll__byhour
    padding: 12px 0 
    padding-right: 16px
</style>
