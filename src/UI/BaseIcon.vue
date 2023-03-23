<template>
    <i class="material-icons">{{ icon }}</i>
</template>

<script>
export default {
    props: ['icon']
}
</script>

<style scoped lang="sass">
@import '@/sass/vars' 
.icon__near
    font-size: 24px
    cursor: pointer
    color: $dark-gray
    transition: all 0.3s ease-in
    &:hover
        transition: all 0.3s ease-in
        color: $blue-color
        
</style>