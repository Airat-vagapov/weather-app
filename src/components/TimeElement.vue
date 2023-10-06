<template>
    <div class="time">
        <span class="bold" v-if="showDate">{{ currentDayName }}</span>, <span v-if="showTime">{{ weatherTime }}</span>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    props: {
        showDate: {
            default: true
        },
        showTime: {
            default: true
        }
    },
    computed: {
        ...mapGetters(['currentDayName', 'weatherTime']),
    },
}
</script>