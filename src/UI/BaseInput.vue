<template>
    <input :value="value" @input="$emit('newValue', $event.target.value)" :placeholder="placeholderText">
</template>

<script>
export default {
    props: ['value' ,'placeholderText'],
    emits: ['newValue'],
}
</script>

<style scoped lang="sass">
@import '@/sass/vars.sass'
input
    // width: 100%
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

</style>