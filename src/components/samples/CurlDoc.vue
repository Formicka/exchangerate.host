<template>
    <div role="tabpanel" class="tab-pane active" id="curl">
        <prism language="javascript">
curl -s -XGET '{{ baseUrl }}'
        </prism>
    </div>

</template>

<script>
import Prism from 'vue-prism-component'
import 'prismjs'
import 'prismjs/themes/prism.css'

export default {
  name: 'LatestCurlDoc',
  components:{
    Prism
  },
  props: {
    baseUrl: String
  }
}
</script>
