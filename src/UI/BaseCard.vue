<template>
    <div :class="typeClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'row',
            required: true
        }
    },
    computed: {
        typeClass() {
            if (this.type === 'row') {
                return 'flex__row'
            }
            return 'flex__col'
        }
    }
}
</script>

<style scoped lang="sass">
div
    padding: 12px
</style>