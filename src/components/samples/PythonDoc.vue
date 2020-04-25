<template>
    <div role="tabpanel" class="tab-pane active" id="python">
        <prism language="javascript">
import requests

url = '{{ baseUrl }}'
response = requests.get(url)
data = response.json()

print(data)
        </prism>
    </div>

</template>

<script>
import Prism from 'vue-prism-component'
import 'prismjs'
import 'prismjs/themes/prism.css'

export default {
  name: 'LatestPythonDoc',
  components:{
    Prism
  },
  props: {
    baseUrl: String
  }
}
</script>
