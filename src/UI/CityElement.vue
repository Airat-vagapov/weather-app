<template>
    <div>
        <img>
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

img
    margin-right: 8px

span
    font-size: 12px
    line-height: 16px
</style>