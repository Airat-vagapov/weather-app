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
            required: false
        },
        border: {
            type: String,
            default: 'none',
            required: false
        },
        padding: {
            type: String,
            required: false
        },
        marginBot: {
            type: Number,
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
            if (this.marginBot) {
                classNames += ' ' + `mb${this.marginBot}`
            }
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
</style>