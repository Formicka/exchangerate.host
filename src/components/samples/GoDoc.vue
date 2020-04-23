<template>
    <div role="tabpanel" class="tab-pane active" id="go">
        <prism language="javascript">
package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {
	client := http.Client{}
	request, err := http.NewRequest("GET", "{{ baseUrl }}", nil)
	if err != nil {
		fmt.Println(err)
	}

	resp, err := client.Do(request)
	if err != nil {
		fmt.Println(err)
	}

	var result map[string]interface{}
	json.NewDecoder(resp.Body).Decode(&result)
	fmt.Println(result)
}
        </prism>
    </div>

</template>

<script>
import Prism from 'vue-prism-component'
import 'prismjs'
import 'prismjs/themes/prism.css'

export default {
  name: 'LatestGoDoc',
  components:{
    Prism
  },
  props: {
    baseUrl: String
  }
}
</script>
