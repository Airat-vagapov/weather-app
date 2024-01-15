<template>
    <div class="cityElement">
        <div class="cityElement__choose" @click="choseCity">
            <BaseIcon class="location__icon" :icon="'location_on'"></BaseIcon>
            <span>{{ city + ', ' + country }}</span>
        </div>

        <LocationUpdate class="cityElement__update"></LocationUpdate>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import LocationUpdate from '@/components/LocationUpdate.vue';
export default {
    components: { LocationUpdate },
    computed: {
        ...mapGetters(["city", "country", "cityChoose"])
    },
    methods: {
        ...mapMutations(["setCityChoose"]),
        choseCity() {
            this.setCityChoose(true);
        }
    },
}
</script>

<style scoped lang="sass">
@import '@/sass/vars.sass'
.cityElement
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 20px
.cityElement__choose
    display: flex
    align-items: center
    &:hover 
        cursor: pointer
        .location__icon span
        color: $blue-color

.cityElement__update
    height: 24px

span
    font-size: 12px
    line-height: 16px
    transition: all 0.2s ease-in
.location__icon
    font-size: 12px
    margin-right: 8px
    transition: all 0.2s ease-in
    
</style>