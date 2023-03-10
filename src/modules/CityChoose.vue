<template>
    <div class="modal__background"></div>
    <div class="city__modal">
        <BaseBigCard :type="'col'">
            <h2>Choose the City</h2>
            <img class="close__icon" :src="require('@/assets/icons/close_icon.svg')">
            <input type="text">
            <div>
                <ul>
                    <li>test</li>
                    <li>test</li>
                    <li>test</li>
                </ul>
            </div>
        </BaseBigCard>
    </div>
</template>

<script>
import BaseBigCard from '@/UI/BaseBigCard.vue';

export default { components: { BaseBigCard } }
</script>

<style scoped lang="sass">
@import '@/sass/modules/cityChoose.sass'
</style>