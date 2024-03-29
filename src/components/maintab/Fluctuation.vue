<template>
  <div
    class="tab-pane fade show active"
    id="business"
    role="tabpanel"
    aria-labelledby="business-tab"
  >
    <div class="row">
      <div class="col-lg-4 mt-45">
        <h3 class="services-title">
          Fluctuation 
          <span>Endpoint</span>
        </h3>
        <p class="text">
            Using the fluctuation endpoint you will be able to retrieve information about how currencies fluctuate on a day-to-day basis. 
            To use this feature, simply append a <code>start_date</code> and <code>end_date</code> and choose which currencies (symbols) you would like to query the API for. 
            Please note that the maximum allowed timeframe is 366 days.
        </p>
        <ParametersInfo>
          <tr>
            <td>start_date</td>
            <td>[<span class="text-danger">required</span>] The start date of your preferred fluctuation timeframe.</td>
          </tr>
          <tr>
            <td>end_date</td>
            <td>[<span class="text-danger">required</span>] The end date of your preferred fluctuation timeframe.</td>
          </tr>
        </ParametersInfo>
      </div>
      <div class="col-lg-8">
        <div class="our-services-content mt-45">
          <div id="wrapper dynamic-component" class="col-md-12">
            <ul id="codes" class="nav nav-tabs" role="tablist">
              <li
                v-for="tab in tabs"
                v-bind:key="tab"
                v-bind:class="['presentation']"
                v-on:click="currentTab = tab"
              >
                <a
                  v-bind:aria-selected="[ currentTab === tab ? 'true' : 'false' ]"
                  v-bind:class="[{ active: currentTab === tab }]"
                  role="tab"
                  data-toggle="tab"
                >{{ tab }}</a>
              </li>
            </ul>

            <div role="tabpanel" class="tab-pane active" id="js">
              <component v-bind:is="docsTabComponent" v-bind:baseUrl="baseUrl" v-bind:baseUrlXml="baseUrlXml" class="tab-content"></component>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import ParametersInfo from "@/components/sections/ParametersInfo.vue";

import JavascriptDoc from "@/components/samples/JavascriptDoc.vue";
import PhpDoc from "@/components/samples/PhpDoc.vue";
import JavaDoc from "@/components/samples/JavaDoc.vue";
import PythonDoc from "@/components/samples/PythonDoc.vue";
import RubyDoc from "@/components/samples/RubyDoc.vue";
import PerlDoc from "@/components/samples/PerlDoc.vue";
import ObjectivecDoc from "@/components/samples/ObjectivecDoc.vue";
import CurlDoc from "@/components/samples/CurlDoc.vue";
import GoDoc from "@/components/samples/GoDoc.vue";
import ExcelFormulaDoc from "@/components/samples/ExcelFormulaDoc.vue";
import GoogleSpreadsheetDoc from "@/components/samples/GoogleSpreadsheetDoc.vue";
import OracleContract from "@/components/samples/OracleContract.vue";
import RDoc from "@/components/samples/RDoc.vue";

Vue.component("tab-javascript", JavascriptDoc);
Vue.component("tab-php", PhpDoc);
Vue.component("tab-java", JavaDoc);
Vue.component("tab-python", PythonDoc);
Vue.component("tab-ruby", RubyDoc);
Vue.component("tab-perl", PerlDoc);
Vue.component("tab-objectivec", ObjectivecDoc);
Vue.component("tab-go", GoDoc);
Vue.component("tab-curl", CurlDoc);
Vue.component("tab-excelformulas", ExcelFormulaDoc);
Vue.component("tab-googlespreadsheet", GoogleSpreadsheetDoc);
Vue.component("tab-oraclecontract", OracleContract);
Vue.component("tab-r", RDoc);

export default {
  name: "Fluctuation",
  components: {
      ParametersInfo
  },
  computed: {
    docsTabComponent: function() {
      return (
        "tab-" +
        this.currentTab
          .toLowerCase()
          .replace(" ", "")
          .replace(".", "")
          .replace("#", "sharp")
      );
    }
  },
  data: function() {
    return {
      currentTab: "JavaScript",
      tabs: [
        "JavaScript",
        "PHP",
        "cURL",
        "Go",
        "Java",
        "Python",
        "Ruby",
        "Perl",
        "R",
        "Objective C",
        "Excel formulas",
        "Google Spreadsheet",
        "Oracle Contract"
      ]
    };
  },
  props: {
    baseUrl: String,
    baseUrlXml: String
  }
};
</script>
