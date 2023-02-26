<template>
    <div>
        <img :src='require("@/assets/icons/location-pin.svg")' >
        <span>{{ city + ', ' + country }}</span>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['city', 'country'])
    }
}
</script>

<style scoped lang="sass">
div
    display: flex
    // justify-content: center
    align-items: center
    margin-bottom: 24px

img
    margin-right: 8px
    height: 12px

span
    font-size: 12px
    line-height: 16px
</style>