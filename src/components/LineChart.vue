<template>
    <Line :data="chartData" :options="chartConfig" :style="chartStyles"></Line>
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
            let labels = []
            let temp = []
            this.data.forEach(element => {
                let time = element.time
                labels.push(time)

                let tempValue = element.temp_c
                temp.push(tempValue)
            });


            let chartData = {
                labels: labels,
                datasets: [{
                    label: 'Data One',
                    backgroundColor: '#f87979',
                    data: temp,
                }],
            }
            return chartData
        },
        chartConfig() {
            let chartConfig = {
                type: 'line'
            }
            return chartConfig
        },

        chartStyles() {
            let styles = {
                height: '200px',
            }
            return styles
        }

    },
}
</script>