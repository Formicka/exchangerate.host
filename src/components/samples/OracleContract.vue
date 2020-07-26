<template>
    <div role="tabpanel" class="tab-pane active" id="java">
        <prism language="javascript">
// This code has not been professionally audited, therefore I cannot make any promises about
// safety or correctness. Use at own risk.
import "github.com/oraclize/ethereum-api/oraclizeAPI.sol";

contract OracleExample is usingOraclize {

    string public EURUSD;

    function updatePrice() public payable {
        if (oraclize_getPrice("URL") > this.balance) {
            //Handle out of funds error
        } else {
            oraclize_query("URL", "json({{ baseUrl }}).rates.USD");
        }
    }
    
    function __callback(bytes32 myid, string result) public {
        require(msg.sender == oraclize_cbAddress());
        EURUSD = result;
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
  name: 'OracleContract',
  components:{
    Prism
  },
  props: {
    baseUrl: String
  }
}
</script>
