<template>
  <section id="docs" class="docs-area pt-115">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div class="section-title text-center" style="visibility: visible">
            <h6 class="sub-title mb-10">API documentation</h6>
            <p>
              The API comes with multiple endpoints, each serving a different
              use case. Endpoint functionalities include getting the latest
              exchange rate data for all or a specific set of currencies,
              converting amounts from one currency to another, retrieving
              Time-Series data for one or multiple currencies and querying the
              API for daily fluctuation data.
            </p>
          </div>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div class="section-title text-center" style="visibility: visible">
            <h4 class="title">
              Bunch of API endpoints <span>to Rock Your Business</span>
            </h4>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <div class="our-services-tab pt-30">
            <ul
              class="nav justify-content-center"
              id="myTab"
              role="tablist"
              style="visibility: visible"
            >
              <li
                v-for="tab in mainTabs"
                v-bind:key="tab"
                v-bind:class="['nav-item']"
                v-on:click="mainCurrentTab = tab"
              >
                <a
                  v-bind:aria-selected="{ true: mainCurrentTab === tab }"
                  v-bind:class="[{ active: mainCurrentTab === tab }]"
                  role="tab"
                  data-toggle="tab"
                >
                  <span>{{ tab }}</span>
                </a>
              </li>
            </ul>

            <div class="tab-content" id="myTabContent">
              <keep-alive>
                <component
                  v-bind:is="mainTabComponent"
                  v-bind:baseUrl="baseUrl"
                  v-bind:baseUrlXml="baseUrlXml"
                  class="tab-content"
                ></component>
              </keep-alive>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";

import Latest from "@/components/maintab/Latest.vue";
import Convert from "@/components/maintab/Convert.vue";
import Historical from "@/components/maintab/Historical.vue";
import TimeSeries from "@/components/maintab/TimeSeries.vue";
import Fluctuation from "@/components/maintab/Fluctuation.vue";
import Supported from "@/components/maintab/Supported.vue";
import Vatrates from "@/components/maintab/Vatrates.vue";

Vue.component("maintab-latest-rates", Latest);
Vue.component("maintab-convert-currency", Convert);
Vue.component("maintab-historical-rates", Historical);
Vue.component("maintab-time-series-data", TimeSeries);
Vue.component("maintab-fluctuation-data", Fluctuation);
Vue.component("maintab-supported-symbols", Supported);
Vue.component("maintab-eu-vat-rates", Vatrates);

export default {
  name: "Docs",
  components: {},
  computed: {
    mainTabComponent: function () {
      return (
        "maintab-" + this.mainCurrentTab.toLowerCase().replaceAll(" ", "-")
      );
    },
  },
  watch: {
    mainTabComponent: {
      deep: false,
      handler: function (value) {
        let map = {
          "maintab-supported-symbols": "symbols",
          "maintab-fluctuation-data":
            "fluctuation?start_date=2020-01-01&end_date=2020-01-04",
          "maintab-time-series-data":
            "timeseries?start_date=2020-01-01&end_date=2020-01-04",
          "maintab-historical-rates": "2020-04-04",
          "maintab-convert-currency": "convert?from=USD&to=EUR",
          "maintab-latest-rates": "latest",
          "maintab-eu-vat-rates": "vat_rates",
        };

        this.baseUrl = this.hostname + map[value];
        this.baseUrlXml =
          this.hostname +
          map[value] +
          (map[value].indexOf("?") !== -1 ? "&" : "?") +
          "format=xml";
      },
    },
  },
  data: function () {
    const hostname = "https://api.exchangerate.host/";
    return {
      hostname: hostname,
      baseUrl: hostname + "latest",
      baseUrlXml: hostname + "latest?format=xml",
      currentTab: "javascript",
      tabs: [
        "Javascript",
        "PHP",
        "cURL",
        "Go",
        "Java",
        "Python",
        "Ruby",
        "Perl",
        "Objective C",
      ],
      mainTabs: [
        "Latest rates",
        "Convert currency",
        "Historical rates",
        "Time-Series data",
        "Fluctuation data",
        "Supported symbols",
        "EU VAT Rates",
      ],
      mainCurrentTab: "latest-rates",
    };
  },
};
</script>
