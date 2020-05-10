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
                <b>How to </b>
                <span>support us</span>
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
            <div class="blog-details-content mt-50">
              <h4 class="details-title">Become a friend of Exchangerate.host</h4>
              <p class="text">
                Becoming our friend is easy. Talk to your friends and contacts in your network about us and find ways to support the project Exchangerate.
                <br />If you are interested in supporting our mission, we would love to connect with you and your connections are invaluable to us to spread the word and the good work.
              </p>

              <h4 class="details-title">Hard work way - your helping hand</h4>
              <p class="text">
                We tried to put as much love into these as in our open source work—and we hope it shows.
                <br />You can help with our open source efforts in many ways:
                <a
                  href="https://github.com/arzzen/exchangerate.host/issues"
                >by resolving open issues</a>.
              </p>

              <h4 class="details-title">Easiest way</h4>
              <p class="text">
                The easiest way to
                <a
                  href="https://github.com/sponsors/arzzen"
                >support us financially</a> is by buying or subscribing to one of our tiers.
                <br />If you'd like to make a donation to keep us going, support us via
                <a
                  href="https://github.com/sponsors/arzzen"
                >Github Sponsors</a>.
              </p>

              <!--
            <p>
              Following patreons have helped us out in a substantial way.
            </p>
              -->
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

export default {
  name: "Home",
  components: {
    Footer
  },
  data: function() {
    return {
      title:
        "Support Us - Foreign & crypto exchange rates API with currency conversion for Free",
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