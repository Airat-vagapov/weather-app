<template>
  <div class="backgroud">
    <AppHeader></AppHeader>
    <div class="content">
      <div class="container"></div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      time: "",
      date: "",
      city: "",
    };
  },
  
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Ubuntu:wght@400;700&display=swap");
@import "./sass/removeDefault.sass";
@import "./sass/appHeader.sass";
@import "./sass/styles.sass";
</style>
