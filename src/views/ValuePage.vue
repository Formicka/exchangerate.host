<template>
  <div>
    <div
      class="page-banner bg_cover"
      v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/page-banner-1.jpg') + ')' }"
    >
      <div class="container" id="top">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-banner-content">
              <h3 class="page-title">
                <b>Are you interested in buying</b><br> <span>exchangerate</span>.<span>host</span> domain?
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

              <h2 class="details-title">Overview Stats</h2>

              <p class="text">
                API has reached more than 100+ million requests in the last month. Hovewer, it is worth sharing to inspire those of you,<br>
                 who have your project in minds and hesitate wheter is worth of coding it. 
                It is. If it will help one (even it is you) your effort will matter.
                <br> Job well done spreads from one to hundreds and more.
                <img src="https://user-images.githubusercontent.com/6382002/182347338-317117da-fafb-47be-be62-466d088bb28c.png" alt="stats" />
              </p>

              <h2 class="details-title">Are you interested in buying our domain?</h2>
              <p class="text">
                People occasionally email us about buying the domain exchangerate.host from us. 
              </p>
              <p>
                We used to respond to such requests with, "How much are you offering?". 
              </p>
              <p>
                These days, if you don't mention a number, We probably won't mail you back.
              </p>
              <p class="text">
                However, let me warn you that We like the name and We have a reasonably well-paying job, so we'll have to be a pretty damn good offer. 
              </p>
              <p>
                Note that a number (in whole U.S. dollars) which includes fewer than 5 significant digits to the left of the decimal point does not constitute "pretty damn good" in our book.
              </p>
              
              <p class="text">
                <a href="https://domainagents.com/namecheap/index.php?domain=exchangerate.host&aff=nc" target="_blank" class="btn btn-danger"> Make an offer  </a>
              </p>

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
  name: "Terms",
  components: {
    Footer
  },
  data: function() {
    return {
      title:
        "Value - Foreign & crypto exchange rates API with currency conversion for Free",
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