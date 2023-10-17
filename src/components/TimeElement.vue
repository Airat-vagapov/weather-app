<template>
    <div class="time">
        <span class="bold" v-if="showDayName">{{ currentDayName }}</span> <span v-if="showTime">, {{ weatherTime }}</span>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    props: {
        showDayName: {
            default: true
        },
        showTime: {
            default: true
        },
        showDate: {
            default: true
        }
    },
    computed: {
        ...mapGetters(['currentDayName', 'weatherTime']),
    },
}
</script>
<style scoped lang="sass">
.time 
    display: flex
</style>