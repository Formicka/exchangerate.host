<template>
    <div role="tabpanel" class="tab-pane active" id="java">
        <prism language="javascript">
library(jsonlite)

url &lt;- '{{ baseUrl }}'
data &lt;- fromJSON(url)
print(data)
        </prism>
    </div>

</template>

<script>
import Prism from 'vue-prism-component'
import 'prismjs'
import 'prismjs/themes/prism.css'

export default {
  name: 'RDoc',
  components:{
    Prism
  },
  props: {
    baseUrl: String
  }
}
</script>
