<template>
    <div role="tabpanel" class="tab-pane active" id="go">
        <prism language="javascript">
<%
currcall = convertCurrency("GBP", "EUR", "YOUR-API-KEY")

currFrom = currcall(0)
'response.write currFrom

Function convertCurrency(currFrom, currTo, apiKey)
  apikey = apiKey
  from_currency = currFrom
  to_currency = currTo

  Server.URLEncode(from_currency)
  Server.URLEncode(to_currency)

  json = file_get_contents("{{ baseUrl }}")

  if json <> "{}" then

    curr = split(json, ":")
    currrate = cstr(curr(1))
    currrate = left(curr(1), len(currrate)-1)

  end if

  convertCurrency = array(currfrom, currto, currrate)

end Function

function file_get_contents(sURL)
  dim xmlhttp, sResult
  set xmlhttp = server.Createobject("MSXML2.ServerXMLHTTP")
  xmlhttp.open "GET",sURL, false
  xmlhttp.send sURL
  sResult = xmlhttp.ResponseText
  set xmlhttp = nothing
  file_get_contents = sResult
end function
%>
        </prism>
    </div>

</template>

<script>
import Prism from 'vue-prism-component'
import 'prismjs'
import 'prismjs/themes/prism.css'

export default {
  name: 'LatestAspnetDoc',
  components:{
    Prism
  },
  props: {
    baseUrl: String
  }
}
</script>
