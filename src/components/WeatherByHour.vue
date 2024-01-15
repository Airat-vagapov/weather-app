<template>
    <TheScroll>
        <BaseCard class="scrollByhour" :border="'bottom'" v-for="(weather, index) in weatherByHour"
            :key="index">
            
            <span class="scrollByhour__timeText">{{ weather.time_hour }}</span>
            <div class="condition">
                <i :class="weather.condition.iconName" class="wi condition__icon"></i>
                <span class="condition__text">{{ weather.condition.text }}</span>
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

.scrollByhour
    display: flex
    flex-direction: row
    padding: 12px 0 
    padding-right: 16px
    @media (max-width: 1199px) 
        flex-direction: column
        padding: 12px 24px
        width: fit-content
        align-items: center
        gap: 12px
    &:first-child
        padding-left: 0
    &:last-child
        padding-right: 0
    .scrollByhour__timeText 
        white-space: nowrap
    .condition 
        @media (max-width: 1999px) 
            flex-direction: column
        .condition__text 
            text-align: center
            display: none
</style>
