<template>
  <div>
    <div
      class="page-banner bg_cover"
      v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/page-banner-1.jpg') + ')' }"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-banner-content">
              <h3 class="page-title">
                <b>Status </b>
                <span>page</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="blog-details-area pt-70 pb-120">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
              <div id="uptime">
                <UptimeCards></UptimeCards>
              </div>
          </div>
        </div>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/sections/Footer.vue";
import UptimeCards from "@/components/uptime/UptimeCards.vue";

export default {
  name: "Home",
  components: {
    Footer,
    UptimeCards
  },
  data: function() {
    return {
      title: "Status page - Foreign & crypto exchange rates API with currency conversion for Free",
      description:
        "Exchange rates API is a free service for current and historical foreign exchange rates & crypto exchange rates published by the many public sources."
    };
  },
  head: {
    title: function() {
      return {
        inner: this.title
      };
    }
  }
};
</script>

<style>
@import "./../assets/css/uptime.css";
</style>