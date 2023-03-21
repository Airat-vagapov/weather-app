<template>
    <BaseBigCard class="right__side" :width="70">
        <BaseText :size="24" :marginBot="24">Today's highlights</BaseText>
        <BaseCard class="today__block" :type="'row'" :padding="'none'">
            <BaseCard :padding="'none'" class="today__card">
                <BaseCard><span>{{ 'Ощущается как' + ' ' + weatherData.feelslike_c + " " +
                    "C°" }}</span></BaseCard>
            </BaseCard>
            <BaseCard :padding="'none'" class="today__card">
                <BaseCard><span>{{ 'Ощущается как' + ' ' + weatherData.feelslike_c + " " +
                    "C°" }}</span></BaseCard>
            </BaseCard>
            <BaseCard :padding="'none'" class="today__card">
                <BaseCard><span>{{ 'Ощущается как' + ' ' + weatherData.feelslike_c + " " +
                    "C°" }}</span></BaseCard>
            </BaseCard>
            <BaseCard :padding="'none'" class="today__card">
                <BaseCard><span>{{ 'Ощущается как' + ' ' + weatherData.feelslike_c + " " +
                    "C°" }}</span></BaseCard>
            </BaseCard>
            <BaseCard :padding="'none'" class="today__card">
                <BaseCard><span>{{ 'Ощущается как' + ' ' + weatherData.feelslike_c + " " +
                    "C°" }}</span></BaseCard>
            </BaseCard>
            <BaseCard :padding="'none'" class="today__card">
                <BaseCard><span>{{ 'Ощущается как' + ' ' + weatherData.feelslike_c + " " +
                    "C°" }}</span></BaseCard>
            </BaseCard>
        </BaseCard>
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
@import '@/sass/vars'

.right__side
    background-color: $gray-color
.today__block
    flex-wrap: wrap
    gap: 24px
.today__card
    flex-basis: 30%
    align-items: center
    justify-content: center
    // flex-grow: 2
    border: 1px solid $gray-color
    border-radius: 12px
</style>