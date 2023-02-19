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
  data() {
    return {
      currentDate: "",
      currentTime: "",
      city: "",
      country: "",
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
    getCity() {
      this.axios.get("/api/v1/getCity.php").then((response) => {
        console.log(response.data);
        this.city = response.data.city;
        this.country = response.data.country_name;
      });
    },
  },
  mounted() {
    this.timeUpdate = setInterval(this.getTime, 1000);
    this.getCity();
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
