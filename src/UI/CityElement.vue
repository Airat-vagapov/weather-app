<template>
    <div @click="choseCity">
        <BaseIcon class="location__icon" :icon="'location_on'"></BaseIcon>
        <!-- <img :src='require("@/assets/icons/location-pin.svg")'> -->
        <span>{{ city + ', ' + country }}</span>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    computed: {
        ...mapGetters(["city", "country", "cityChoose"])
    },
    methods: {
        ...mapMutations(["setCityChoose"]),
        choseCity() {
            this.setCityChoose(true);
            console.log(this.cityChoose);
        }
    },
}
</script>

<style scoped lang="sass">
@import '@/sass/vars.sass'
div
    display: flex
    // justify-content: center
    align-items: center
    margin-bottom: 24px
    &:hover 
        cursor: pointer
        .location__icon span
        color: $blue-color

span
    font-size: 12px
    line-height: 16px
    transition: all 0.2s ease-in
.location__icon
    font-size: 12px
    margin-right: 8px
    transition: all 0.2s ease-in

    

</style>