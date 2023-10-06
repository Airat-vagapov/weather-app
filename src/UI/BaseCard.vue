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
        },
        column: {
            type: Number,
            required: false
        }

    },
    computed: {
        typeClass() {
            let classNames;
            // Тип блока 
            if (this.type === 'row') {
                classNames = 'flex__row'
            } else if (this.type === 'col') {
                classNames = 'flex__col'
            } else if(this.type === 'grid') {
                classNames = 'grid'
            }

            // Настройки грида
            if(this.type === 'grid' && this.column) {
                classNames+= ' ' + `grid__col--${this.column}`
            }

            // Бордеры
            if (this.border == 'bottom') {
                classNames = classNames + ' ' + 'border__bottom'
            }

            // Отступы
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