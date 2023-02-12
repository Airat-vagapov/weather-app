<template>
  <div :class="type" class="glass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: { type: String, require: false, default: "full" },
  },
};
</script>

<style scoped lang='sass'>
.glass
  background: rgba(255, 255, 255, 0)
  border-radius: 16px
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1)
  backdrop-filter: blur(5.4px)
  -webkit-backdrop-filter: blur(5.4px)

.half
  width: 50%
.quater
  width: 25%
</style>

