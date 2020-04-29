<template>
    <div role="tabpanel" class="tab-pane active" id="java">
        <prism language="javascript">
// Fetch all rates
=FILTERXML(WEBSERVICE("{{ baseUrlXml }}"); "//document/data/rate")

// Fetch all rates by currency symbol
=FILTERXML(WEBSERVICE("{{ baseUrlXml }}"); "//document/data/*")
        </prism>
    </div>
</template>

<script>
import Prism from 'vue-prism-component'
import 'prismjs'
import 'prismjs/themes/prism.css'

export default {
  name: 'ExcelFormulaDoc',
  components:{
    Prism
  },
  props: {
    baseUrlXml: String
  }
}
</script>
