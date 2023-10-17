<template>
    <div class="time">
        <span class="bold" v-if="showDayName">{{ dayName }}</span> <span v-if="showTime">, {{ weatherTime }}</span> <span v-if="showDayAndMonth">, {{ dayAndMonth }}</span>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
// import getDateName from '@/utils/dateGetter.js'
// import getDayAndMonth from '@/utils/dateGetter.js'
import { getDateName, getDayAndMonth } from '@/utils/dateGetter.js'
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
        },
        showDayAndMonth: {
            default: false
        },
        dateType: {
            default: 'current'
        },
        dateData: {},
    },
    computed: {
        ...mapGetters(['currentDayName', 'weatherTime']),

        dayName() {
            let dayName = this.currentDayName

            if (this.dateType === 'custom') {
                dayName = getDateName(this.dateData)
            }
            return dayName
        },

        dayAndMonth() {
            return getDayAndMonth(this.dateData)
        }
    },
}
</script>
<style scoped lang="sass">
.time 
    display: flex
</style>