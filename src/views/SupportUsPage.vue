<template>
  <div>
    <div
      class="page-banner bg_cover"
      v-bind:style="{
        backgroundImage:
          'url(' + require('@/assets/images/page-banner-1.jpg') + ')',
      }"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="page-banner-content">
              <h3 class="page-title">
                <b> Want to show your support? </b><br />
                Donate via <span>Bitcoin</span> or <span>buy me coffee</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="blog-details-area pt-70 pb-120">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 blog-details-content">
            <h4 class="details-title">Why donate?</h4>
            <p class="text">
              Many people love this service and have asked to donate. In all a
              good conscience, I can't write about how awesome and
              cost-effective AWS and private VPS are then asked for donations to
              fund it. Instead, it's enormously time-consuming to run this
              service and the sacrifices required to do so are where the real
              cost is. If you want to kick in to help me cover those costs, that
              would be awesome!
            </p>
            <p class="pt-2 pl-3 pr-3 mt-4 mark border-left border-danger">
              If you or your company use this project or like what I'm doing,
              please consider backing me so I can continue maintaining and
              evolving this project and new ones.
            </p>
          </div>
          <div class="col-lg-6 blog-details-content">
            <center>
              <h4 class="details-title">If you'd prefer Bitcoin</h4>
              <div class="text">
                <a href="https://nowpayments.io/donation?api_key=SMHBNKR-MYRMBFK-PHXAAHK-3GP6TZA" target="_blank">
                  <img src="https://nowpayments.io/images/embeds/donation-button-black.svg" alt="Crypto donation button by NOWPayments">
                </a>
              </div>
            </center>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12 blog-details-content">
            <h1 class="details-title">
              Choose what you'd like to donate from the items below then click
              the button:
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8">
            <div class="mt-50">
              <h5 class="mt-3 mb-1">2€ — A large cappuccino 😍 at my local</h5>
              <p class="text">
                I'm in this for the long run. Things just work better with
                coffee! I like to grab a cappuccino from my local before
                beginning the things that take mental energy.
              </p>
              <a
                href="https://ko-fi.com/lukasmestan"
                target="_blank"
                class="mt-1"
                ><img src="https://www.ko-fi.com/img/githubbutton_sm.svg"
              /></a>
            </div>
          </div>
          <div class="col-lg-4 mt-50"></div>
        </div>

        <div class="row">
          <div class="col-lg-8">
            <h5 class="mt-5 mb-1">Bill for .host domain ⚡️</h5>
            <p class="text">
              The price for the .host domain is close to € 60 per year, so
              support me with a monthly donation and help me continue my
              activities.
            </p>
            <a
              href="https://opencollective.com/exchangeratehost/contribute/backer-20423/checkout"
              target="_blank"
              class="btn btn-primary btn-sm mt-1"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                focusable="false"
                width="1em"
                height="1em"
                style="
                  display: inline;
                  -ms-transform: rotate(360deg);
                  -webkit-transform: rotate(360deg);
                  transform: rotate(360deg);
                "
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 256 256"
              >
                <path
                  d="M209.765 128.15c0 16.013-4.9 31.34-13.266 44.575l33.447 33.447a128.918 128.918 0 0 0 25.783-77.35c0-29.265-9.754-55.751-26.47-77.336l-32.776 32.729a79.442 79.442 0 0 1 13.267 43.888l.015.047z"
                  fill="#B8D3F4"
                />
                <path
                  d="M127.513 210.355c-45.367-.086-82.125-36.838-82.22-82.205c.069-45.386 36.835-82.166 82.22-82.252c16.732 0 32.058 4.901 44.607 13.267l32.744-32.776A128.965 128.965 0 0 0 127.514.636C57.123.636 0 57.76 0 128.15c0 70.359 57.124 127.513 127.513 127.513a125.126 125.126 0 0 0 77.351-26.501l-33.447-33.431c-11.861 9.754-27.157 14.624-43.904 14.624z"
                  fill="#7FADF2"
                />
              </svg>
              <span class="pl-2">Donate 5€ / month</span></a
            >
          </div>
          <div class="col-lg-4 mt-5"></div>
        </div>

        <div class="row">
          <div class="col-lg-8">
            <h5 class="mt-5 mb-1">Bill for server hosting 🚀</h5>
            <p class="text">
              This service is used by more and more users every month (+ 50%
              MoM). The exchangerate.host project reached 4 million applications
              per month (October 2020) and is still growing. I never expected
              such a number, not even for sharing this number. Private VPS is
              not cheap or AWS services, so please join me for € 50.00 per month
              and help me maintain my activities!
            </p>
            <a
              href="https://opencollective.com/exchangeratehost/contribute/support-for-server-20425/checkout"
              target="_blank"
              class="btn btn-primary btn-sm mt-1"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                focusable="false"
                width="1em"
                height="1em"
                style="
                  display: inline;
                  -ms-transform: rotate(360deg);
                  -webkit-transform: rotate(360deg);
                  transform: rotate(360deg);
                "
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 256 256"
              >
                <path
                  d="M209.765 128.15c0 16.013-4.9 31.34-13.266 44.575l33.447 33.447a128.918 128.918 0 0 0 25.783-77.35c0-29.265-9.754-55.751-26.47-77.336l-32.776 32.729a79.442 79.442 0 0 1 13.267 43.888l.015.047z"
                  fill="#B8D3F4"
                />
                <path
                  d="M127.513 210.355c-45.367-.086-82.125-36.838-82.22-82.205c.069-45.386 36.835-82.166 82.22-82.252c16.732 0 32.058 4.901 44.607 13.267l32.744-32.776A128.965 128.965 0 0 0 127.514.636C57.123.636 0 57.76 0 128.15c0 70.359 57.124 127.513 127.513 127.513a125.126 125.126 0 0 0 77.351-26.501l-33.447-33.431c-11.861 9.754-27.157 14.624-43.904 14.624z"
                  fill="#7FADF2"
                />
              </svg>
              <span class="pl-2">Donate 50€ / month</span></a
            >
          </div>
          <div class="col-lg-4 mt-5"></div>
        </div>

        <div class="row">
          <div class="col-lg-8">
            <h4 class="mt-5 mb-1">Github sponsor</h4>
            <p class="text">
              The easiest way to support us financially is by buying or
              subscribing to one of our tiers. <br />If you'd like to make a
              donation to keep us going, support us via Github Sponsors.
              <br />
              <iframe
                src="https://github.com/sponsors/arzzen/button"
                title="Sponsor arzzen"
                height="35"
                width="116"
                style="border: 0"
              ></iframe>
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-8">
            <h5 class="mt-5 mb-1">Become a friend of Exchangerate.host</h5>
            <p class="text mb-5">
              Becoming our friend is easy. Talk to your friends and contacts in
              your network about us and find ways to support the project
              Exchangerate. If you are interested in supporting our mission, we
              would love to connect with you and your connections are invaluable
              to us to spread the word and the good work.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12">
            <div class="text-center mt-5">
              <h5 class="mt-4 mb-3 display-4">
                Thank you for your support! 🙌
              </h5>
              <p class="" style="font-size: 20px"></p>
            </div>
            <!--
            <p>
              Following patreons have helped us out in a substantial way.
            </p>
              -->
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
    Footer,
  },
  data: function () {
    return {
      title:
        "Donate - Foreign & crypto exchange rates API with currency conversion for Free",
      description:
        "Exchange rates API is a free service for current and historical foreign exchange rates & crypto exchange rates published by the many public sources.",
    };
  },
  head: {
    title: function () {
      return {
        inner: this.title,
      };
    },
  },
};
</script>

<style>
@import "./../assets/css/uptime.css";
</style>
