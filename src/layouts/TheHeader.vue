<template>
  <GlassCard>
    <div class="header">
      <div class="header__left">
        <span>{{ city }}, {{ country }}</span>
      </div>
      <div class="header__right">
        <span class="header__right__item">{{ currentDate }}</span>
        <span class="header__right__item">{{ currentTime }}</span>
      </div>
    </div>
  </GlassCard>
</template>

<script>
export default {
  name: "TheHeader",
  props: ['city', 'country'],
  data() {
    return {
      currentDate: "",
      currentTime: "",
    };
  },
  methods: {
    getIp() {
      this.axios.get("/api/v1/getIp.php").then((response) => {
        console.log(response.data);
      });
    },
    getTime() {
      const clientTime = new Date();

      let year = clientTime.getFullYear();
      let month = clientTime.getMonth() + 1;
      let day = clientTime.getDate();
      let hour = clientTime.getHours();
      let minute = clientTime.getMinutes();
      let second = clientTime.getSeconds();

      if (month < 10) {
        month = "0" + month;
      }
      if (day < 10) {
        day = "0" + day;
      }
      if (hour < 10) {
        hour = "0" + hour;
      }
      if (minute < 10) {
        minute = "0" + minute;
      }
      if (second < 10) {
        second = "0" + second;
      }
      let date = day + "-" + month + "-" + year;
      let time = hour + ":" + minute + ":" + second;

      this.currentDate = date;
      this.currentTime = time;
    },
    
  },
  mounted() {
    this.timeUpdate = setInterval(this.getTime, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timeUpdate);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/sass/theHeader.sass";
</style>
