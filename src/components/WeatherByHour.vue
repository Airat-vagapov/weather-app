<template>
    <div>
        <BaseCard :type="'row'" v-for="(weather, index) in weatherByHour" :key="index">
            
            <span>{{weather.time_hour}}</span>
            <span>{{weather.temp_c + " " + "C°" }}</span>
        </BaseCard>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
computed: {
    ...mapGetters(['weatherByHour']),

},

}
</script>

<style scoped lang="sass">
div
    overflow-y: hidden
    height: 100%
</style>