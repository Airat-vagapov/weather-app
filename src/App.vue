<template>
  <div class="backgroud">
    <TheHeader></TheHeader>
    <div class="content">
      <div class="container"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      time: "",
      city: "",
    };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Ubuntu:wght@400;700&display=swap");
@import "./sass/removeDefault.sass";
@import "./sass/styles.sass";
</style>
