<template>
    <BaseBigCard :width="70">
        <span>TEST</span>
        <span>{{ 'Ощущается как' + ' ' + weatherData.feelslike_c + " " + "C°" }}</span>
        <span>{{ 'Ветер' + ' ' + weatherData.wind_kph + " " + "км/ч" }}</span>
        <span>{{ 'Направление ветра' + ' ' + weatherData.wind_dir }}</span>
        <span>{{ 'Влажность' + ' ' + weatherData.humidity + " " + "%" }}</span>
        <span>{{ 'Облачность' + ' ' + weatherData.cloud + " " + "%" }}</span>
    </BaseBigCard>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['weatherData'])
    }
}
</script>

<style scoped lang="sass">

</style>