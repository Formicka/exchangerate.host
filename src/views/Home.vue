<template>
  <div>
    <div
      id="home"
      class="header-hero bg_cover d-lg-flex align-items-center"
      v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/header-hero.jpg') + ')' }"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="header-hero-content">
              <h1 class="hero-title">
                Free
                <b>foreign</b> exchange
                <br />& <b>crypto</b> rates
                <span>API</span>
              </h1>

              <p class="text">
                Exchange rates API is a simple and lightweight free service for current and historical
                foreign exchange rates & crypto exchange rates.
              </p>
              <div class="pricing-btn pt-70">
                <a class="main-btn" href="#docs">explore the docs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="header-hero-image d-flex align-items-center">
        <div class="image">
          <img src="@/assets/images/hero-image.png" alt="Hero Image" />
        </div>
      </div>
    </div>

    <InNumbers></InNumbers>

    <Services></Services>

    <Docs></Docs>

    <Testimonial></Testimonial>

    <Faq></Faq>

    <Footer></Footer>
  </div>
</template>

<script>
import Docs from "@/components/sections/Docs.vue";
import Faq from "@/components/sections/Faq.vue";
import Services from "@/components/sections/Services.vue";
import Footer from "@/components/sections/Footer.vue";
import InNumbers from "@/components/sections/InNumbers.vue";
import Testimonial from "@/components/sections/Testimonial.vue";

export default {
  name: "Home",
  components: {
    Footer,
    Faq,
    Services,
    InNumbers,
    Docs,
    Testimonial
  },
  data: function() {
    return {
      title: "Foreign & crypto exchange rates API with currency conversion for Free",
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