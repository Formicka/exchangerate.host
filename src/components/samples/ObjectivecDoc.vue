<template>
    <div role="tabpanel" class="tab-pane active" id="objectivec">
        <prism language="javascript">
NSString *url = [NSString stringWithFormat: @"{{ baseUrl }}"];
NSData *data = [NSData dataWithContentsOfURL: [NSURL URLWithString:url]];
NSError *err;
NSMutableArray *json = [NSJSONSerialization JSONObjectWithData:data options:kNilOptions error:&err];

NSLog(@"json: %@", json);
        </prism>
    </div>

</template>

<script>
import Prism from 'vue-prism-component'
import 'prismjs'
import 'prismjs/themes/prism.css'

export default {
  name: 'LatestObjectivecDoc',
  components:{
    Prism
  },
  props: {
    baseUrl: String
  }
}
</script>
