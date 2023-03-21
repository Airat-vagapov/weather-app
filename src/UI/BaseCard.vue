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
        },
        border: {
            type: String,
            default: 'none',
            required: false
        },
        padding: {
            type: String,
            required: false
        }
    },
    computed: {
        typeClass() {
            let classNames;
            if (this.type === 'row') {
                classNames = 'flex__row'
            } else {
                classNames = 'flex__col'
            }

            if (this.border == 'bottom') {
                classNames = classNames + ' ' + 'border__bottom'
            }

            if (this.padding == 'none') {
                classNames += ' ' + 'no__padding'
            }
            console.log(classNames)
            return classNames
        }

    }
}
</script>

<style scoped lang="sass">
@import '@/sass/vars'
div
    padding: 12px
    justify-content: space-between

.no__padding 
    padding: 0

.border__bottom
    border-bottom: 1px solid $gray-color
    cursor: pointer
    transition: all 0.3s ease-in
    &:hover
        transition: all 0.3s ease-in
        background-color: $gray-color
    &:last-child
        border-bottom: none
</style>