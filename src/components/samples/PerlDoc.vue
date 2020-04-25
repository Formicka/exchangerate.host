<template>
    <div role="tabpanel" class="tab-pane active" id="perl">
        <prism language="javascript">
use LWP::UserAgent;
use HTTP::Request;
use JSON;

my $URL = "{{ baseUrl }}";
my $ua = LWP::UserAgent->new(ssl_opts => { verify_hostname => 1 });
my $header = HTTP::Request->new(GET => $URL);
my $request = HTTP::Request->new('GET', $URL, $header);
my $response = $ua->request($request);
my $content = $response->content;

$json = JSON->new->allow_nonref;
$response = $json->decode( $content );
        </prism>
    </div>

</template>

<script>
import Prism from 'vue-prism-component'
import 'prismjs'
import 'prismjs/themes/prism.css'

export default {
  name: 'LatestPerlDoc',
  components:{
    Prism
  },
  props: {
    baseUrl: String
  }
}
</script>
