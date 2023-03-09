<template>
    <div :style="widthValue" class="content">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['width'],
    computed: {
        widthValue() {
            return { width: this.width + '%' }
        }
    }
}
</script>

<style scoped lang="sass">
.content
    padding: 32px 24px
    display: flex
    flex-direction: column
    height: 100%
    width: 50%
</style>