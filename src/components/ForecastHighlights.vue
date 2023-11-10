<template>
    <ElementRow>
        <BaseCard class="forecastHighlight">
            <span class="wi-umbrella wi forecastHighlight__icon"></span>
            <span class="forecastHighlight__text">{{ data.day.daily_chance_of_rain }} %</span>
            <span>Chance of rain</span>
        </BaseCard>
        <BaseCard class="forecastHighlight">
            <span class="wi-thermometer wi forecastHighlight__icon"></span>
            <span class="forecastHighlight__text">{{ data.day.maxtemp_c + " " + "C°" }}  </span>
            <span>Max temperature</span>
        </BaseCard>
        <BaseCard class="forecastHighlight">
            <span class="wi-thermometer wi forecastHighlight__icon"></span>
            <span class="forecastHighlight__text">{{ data.day.avghumidity + ' ' + '%' }}  </span>
            <span>Average humidity</span>
        </BaseCard>
    </ElementRow>
</template>

<script>
import ElementRow from '@/UI/ElementRow.vue'

export default {
    components: { ElementRow },
    props: ['data']
}
</script>

<style scoped lang="sass">
.forecastHighlight
    display: flex
    flex-direction: column
    justify-content: space-between
    gap: 8px
    .forecastHighlight__icon
        font-size: 24px
    .forecastHighlight__text 
        font-size: 32px
</style>