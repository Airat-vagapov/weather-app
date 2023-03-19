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
    &:hover
        color: $blue-color
        
</style>