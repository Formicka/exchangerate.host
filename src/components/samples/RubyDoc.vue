<template>
    <div role="tabpanel" class="tab-pane active" id="ruby">
        <prism language="javascript">
require 'net/http'
require 'json'

url = "{{ baseUrl }}"
uri = URI(url)
response = Net::HTTP.get(uri)
response_obj = JSON.parse(response)

rate = response_obj['rates']['EUR']
        </prism>
    </div>

</template>

<script>
import Prism from 'vue-prism-component'
import 'prismjs'
import 'prismjs/themes/prism.css'

export default {
  name: 'LatestRubyDoc',
  components:{
    Prism
  },
  props: {
    baseUrl: String
  }
}
</script>
