<template>
  <div class="backgroud">
    <div class="container">
      <div class="header">
        <div class="header__left">
          <span>My city</span>
        </div>
        <div class="header__right">
          <span class="header__right__item">Date</span>
          <span class="header__right__item">Time</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="container"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: "",
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
