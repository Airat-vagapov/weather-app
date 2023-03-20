<template>
    <TheScroll>
        <BaseCard :border="'bottom'" :type="'row'" v-for="(weather, index) in weatherByHour" :key="index">

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
    computed: {
        ...mapGetters(["weatherByHour"])
    },
    components: { TheScroll }
}
</script>

<style scoped lang="sass">
.condition
    display: flex
    align-items: center
    gap: 8px
</style>