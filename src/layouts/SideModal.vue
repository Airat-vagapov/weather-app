<!-- Нужно передать пропс isOpen, 
по которому открывается родительский попап 
Если нужен прелоудер, то передаем параметр в пропс openLoader
по которому определяем, что еще получаем данные-->

<template>
    <transition name="fade-in">
        <div v-if="isOpen" @click="closeModal" class="modal__background"></div>
    </transition>
    <transition name="slide-in">
        <div v-if="isOpen" class="modal">
            <BaseBigCard :type="'col'" :width="100">
                <slot></slot>
            </BaseBigCard>
        </div>
    </transition>
    <div class="city__modal__loader">
        <!-- v-if="openLoader" -->
        <span>Loading...</span>
    </div>
</template>

<script>
import BaseBigCard from '@/UI/BaseBigCard.vue';

export default {
    emits: ['closeModal', 'openLoader'],
    props: ['isOpen'],
    components: { BaseBigCard },
    methods: {
        closeModal() {
            this.$emit('closeModal')
        }
    },
}
</script>

<style scoped lang="sass">
@import '@/sass/layouts/sideModal.sass'
</style>

