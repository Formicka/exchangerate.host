<template>
    <div role="tabpanel" class="tab-pane active" id="php">
        <prism language="javascript">
$req_url = '{{ baseUrl }}';
$response_json = file_get_contents($req_url);
if(false !== $response_json) {
    try {
        $response = json_decode($response_json);
        if($response->success === true) {
            var_dump($response);
        }
    } catch(Exception $e) {
        // Handle JSON parse error...
    }
}  
        </prism>
    </div>

</template>

<script>
import Prism from 'vue-prism-component'
import 'prismjs'
import 'prismjs/themes/prism.css'

export default {
  name: 'LatestPhpDoc',
  components:{
    Prism
  },
  props: {
    baseUrl: String
  }
}
</script>
