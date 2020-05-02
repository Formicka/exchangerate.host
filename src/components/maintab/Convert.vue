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
          Convert
          <span>Endpoint</span>
        </h3>
        <p class="text">Currency conversion endpoint, can be used to convert any amount from one currency to another. 
            In order to convert currencies, please use the API's convert endpoint, append the <code>from</code> and <code>to</code> parameters and set them to your preferred base and target currency codes.
        </p>
        <ParametersInfo>
          <tr>
            <td>from</td>
            <td>[<span class="text-danger">required</span>] The three-letter currency code of the currency you would like to convert from.</td>
          </tr>
          <tr>
            <td>to</td>
            <td>[<span class="text-danger">required</span>] The three-letter currency code of the currency you would like to convert to.</td>
          </tr>
          <tr>
            <td>date</td>
            <td>[optional] It is also possible to convert currencies using historical exchange rate data. To do this, please also use the API's <code>date</code> parameter and set it to your preferred date. (format YYYY-MM-DD)</td>
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

export default {
  name: "Convert",
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
        "Excel formulas",
        "Google Spreadsheet"
      ]
    };
  },
  props: {
    baseUrl: String,
    baseUrlXml: String
  }
};
</script>