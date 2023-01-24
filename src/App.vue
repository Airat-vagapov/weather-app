<template>
  <div class="main_container">
    <TheHeader></TheHeader>
  </div>
  <!-- </div> -->
</template>

<script>
import TheHeader from "@/components/layouts/TheHeader.vue";

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
