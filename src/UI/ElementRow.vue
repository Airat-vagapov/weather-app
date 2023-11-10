<template>
    <div class="elemsRow">
        <slot></slot>
    </div>
</template>

<style scoped lang="sass">
.elemsRow
    display: flex
    align-items: center
    justify-content: space-between
    gap: 12px
    width: 100%
</style>
