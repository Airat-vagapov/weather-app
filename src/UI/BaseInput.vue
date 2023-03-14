<template>
    <input :class="errorClass" :value="value" @input="$emit('newValue', $event.target.value)"
        :placeholder="placeholderText">
    <div v-if="!valid" class="input__error__text">
        <BaseText :size="12">Empty value</BaseText>
    </div>
</template>

<script>
export default {
    props: ['value', 'placeholderText', 'valid'],
    emits: ['newValue'],
    data() {
        return {
            errorClass: 't',
        }
    },
    watch: {
        valid() {
            console.log(this.valid)
            if (!this.valid) { this.errorClass = 'input__error' } else { this.errorClass = '' }
        }
    }
}
</script>

<style scoped lang="sass">
@import '@/sass/vars.sass'
input
    width: 100%
    border-bottom: 1px solid #cbcbcb
    border-top: none
    border-left: none
    border-right: none
    transition: all 0.2s ease-in
    padding: 8px 12px
    &:hover
        transition: all 0.2s ease-in
        border-color: $blue-color
    &:focus
        transition: all 0.2s ease-in
        border-color: $blue-color

.input__error__text
    color: $red-color
    position: relative
    left: 12px
    padding-top: 4px

.input__error
    border-color: $red-color!important
</style>