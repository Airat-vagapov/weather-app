<template>
  <GlassCard>
    <div class="header">
      <div class="header__left">
        <span>My city</span>
      </div>
      <div class="header__right">
        <span class="header__right__item">{{ currentDate }}</span>
        <span class="header__right__item">Time</span>
      </div>
    </div>
  </GlassCard>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      currentDate: "",
    };
  },
  methods: {},
  mounted() {
    this.axios
      .get("http://worldtimeapi.org/api/timezone/Europe/Moscow")
      .then((response) => {
        let result = response.data;
        let splitted = result.datetime.split("T");
        console.log(splitted[0]);
        this.currentDate = splitted[0];
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/sass/theHeader.sass";
</style>
