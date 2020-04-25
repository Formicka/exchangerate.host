<template>
    <div role="tabpanel" class="tab-pane active" id="js">
        <prism language="javascript">
var requestURL = '{{ baseUrl }}';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var response = request.response;
  console.log(response);
}
        </prism>
    </div>

</template>

<script>
import Prism from 'vue-prism-component'
import 'prismjs'
import 'prismjs/themes/prism.css'

export default {
  name: 'LatestJavascriptDoc',
  components:{
    Prism
  },
  props: {
    baseUrl: String
  }
}
</script>
