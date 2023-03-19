<template>
    <TheScroll>
        <BaseCard :type="'row'" v-for="(weather, index) in weatherByHour" :key="index">

            <span>{{ weather.time_hour }}</span>
            <span>{{ weather.temp_c + " " + "C°" }}</span>
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
.ps 
    height: 100vh
.scrollContainer
    overflow-y: hidden
    height: 100%
    justify-content: space-between
</style>