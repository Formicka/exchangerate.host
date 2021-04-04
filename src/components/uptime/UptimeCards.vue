<template>
  <div class="flex flex-wrap -m-3">
    <UptimeCard
      v-for="monitor in monitors"
      :key="monitor.id"
      :monitor="monitor"
    ></UptimeCard>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import UptimeCard from "./UptimeCard.vue";
import VueTailwind from "vue-tailwind";

Vue.use(VueTailwind);

export default {
  components: {
    UptimeCard,
  },
  data() {
    return {
      apiKeys: ["ur909924-1b12644aabf15ded3d8c0007"],
      monitors: [],
      uptime_ratio: "30",
      response_times_start_date: Vue.moment().subtract(7, "days").unix(),
      response_times_end_date: Vue.moment().unix(),
    };
  },
  mounted() {
    this.refresh();
    setInterval(() => this.refresh(), 60000);
  },
  methods: {
    refresh() {
      this.apiKeys.forEach((apiKey) => {
        axios
          .post("https://api.uptimerobot.com/v2/getMonitors", {
            api_key: apiKey,
            custom_uptime_ratios: this.uptime_ratio,
            response_times: "1",
            response_times_start_date: this.response_times_start_date,
            response_times_end_date: this.response_times_end_date,
            format: "json",
          })
          .then((response) => {
            this.monitors = response.data.monitors;
          });
      });
    },
  },
};
</script>

<style>
@import "./../../assets/css/uptime.css";
</style>