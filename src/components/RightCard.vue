<template>
    <BaseBigCard class="right__side" :width="70">
        <BaseText :size="24" :marginBot="24">Today's highlights</BaseText>
        <BaseCard class="today__block" :type="'row'" :padding="'none'">
            <BaseCard :padding="'none'" class="today__card">
                <p>Chance of rain</p>
                <BaseCard><span>{{ forecastWeatherData[0].day.daily_chance_of_rain + " " +
                    "%" }}</span></BaseCard>
            </BaseCard>
            <BaseCard :padding="'none'" class="today__card">
                <BaseCard>
                    Закат / рассвет
                    <span>{{ 'Ощущается как' + ' ' + weatherData.feelslike_c + " " +
                        "C°" }}</span>
                </BaseCard>
            </BaseCard>
            <BaseCard :padding="'none'" class="today__card">
                <BaseCard>
                    Max temp
                    <span>{{ 'Ощущается как' + ' ' + weatherData.feelslike_c + " " +
                        "C°" }}</span>
                </BaseCard>
            </BaseCard>
            <BaseCard :padding="'none'" class="today__card">
                Visible
                <BaseCard><span>{{ 'Ощущается как' + ' ' + weatherData.feelslike_c + " " +
                    "C°" }}</span></BaseCard>
            </BaseCard>
            <BaseCard :padding="'none'" class="today__card">
                Влажность
                <BaseCard><span>{{ 'Ощущается как' + ' ' + weatherData.feelslike_c + " " +
                    "C°" }}</span></BaseCard>
            </BaseCard>
            <BaseCard :padding="'none'" class="today__card">
                УФ
                <BaseCard><span>{{ 'Ощущается как' + ' ' + weatherData.feelslike_c + " " +
                    "C°" }}</span></BaseCard>
            </BaseCard>
        </BaseCard>
    </BaseBigCard>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['weatherData', 'forecastWeatherData'])
    },
    mounted() {
        console.log(this.forecastWeatherData)
    }
}
</script>

<style scoped lang="sass">
@import '@/sass/components/rightCard';
</style>