<template>
    <div role="tabpanel" class="tab-pane active" id="java">
        <prism language="javascript">
String url_str = "{{ baseUrl }}";

URL url = new URL(url_str);
HttpURLConnection request = (HttpURLConnection) url.openConnection();
request.connect();

JsonParser jp = new JsonParser();
JsonElement root = jp.parse(new InputStreamReader((InputStream) request.getContent()));
JsonObject jsonobj = root.getAsJsonObject();

String req_result = jsonobj.get("result").getAsString();
        </prism>
    </div>

</template>

<script>
import Prism from 'vue-prism-component'
import 'prismjs'
import 'prismjs/themes/prism.css'

export default {
  name: 'LatestJavaDoc',
  components:{
    Prism
  },
  props: {
    baseUrl: String
  }
}
</script>
