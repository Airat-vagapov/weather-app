<template>
    <Line :data="chartData" :options="chartConfig"></Line>
</template>

<script>
import { Line } from 'vue-chartjs'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
export default {
    components: { Line },
    props: ['data'],
    computed: {
        chartData() {
            console.log(this.data)
            let chartData = {

            }
            return chartData
        },
        chartConfig() {
            let chartConfig = {
                type: 'line'
            }
            return chartConfig
        }

    },
    mounted() {
        console.log(this.data)
    },
}
</script>