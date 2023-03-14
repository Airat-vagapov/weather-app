<template>
    <p :class="`f${size} mb${marginBot}`">
        <slot></slot>
    </p>
</template>

<script>
export default {
    props: ['marginBot', 'size']
}
</script>

<style scoped lang="sass">
.f12
    font-size: 12px
    line-height: 16px
.f16
    font-size: 16px
    line-height: 24px
.f24
    font-size: 24px
    line-height: 32px
.mb16
    margin-bottom: 16px
.mb24
    margin-bottom: 24px
</style>