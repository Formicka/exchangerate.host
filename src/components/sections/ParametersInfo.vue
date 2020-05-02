<template>
  <table class="mt-3 table table-sm">
    <tr>
      <td colspan="2">
        <strong>Request GET parameters:</strong>
      </td>
    </tr>
    <slot></slot>

    <tr v-show="base">
      <td>base</td>
      <td>
        [optional] Changing base currency. Enter the three-letter currency code of your preferred base currency.
        <br />
        <small>example:</small>
        <code>base=USD</code>
      </td>
    </tr>
    <tr v-show="symbols">
      <td>symbols</td>
      <td>
        [optional] Enter a list of comma-separated currency codes to limit output currencies.
        <br />
        <small>example:</small>
        <code>symbols=USD,EUR,CZK</code>
      </td>
    </tr>
    <tr v-show="amount">
      <td>amount</td>
      <td>
        [optional] The amount to be converted.
        <br />
        <small>example:</small>
        <code>amount=1200</code>
      </td>
    </tr>
    <tr v-show="callback">
      <td>callback</td>
      <td>
        [optional] API comes with support for JSONP Callbacks. This feature enables you to specify a
        function name, pass it into the API's callback GET parameter and cause the API to return
        your requested API response wrapped inside that function.
        <br />
        <small>example:</small>
        <code>callback=functionName</code>
      </td>
    </tr>
    <tr v-show="places">
      <td>places</td>
      <td>
        [optional] Round numbers to decimal place.
        <br />
        <small>example:</small>
        <code>places=2</code>
      </td>
    </tr>
    <tr v-show="format">
      <td>format</td>
      <td>
        [optional] If respone success, then you can format output to XML, CSV or TSV.
        <br />
        <small>example:</small>
        <code>format=tsv</code>
      </td>
    </tr>
    <tr v-show="source">
      <td>source</td>
      <td>
        [optional] You can switch source data between (default) forex or bank view. List of banks: ECB (next soon).
        <br />
        <small>example:</small>
        <code>source=ecb</code>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "ParametersInfo",
  props: {
    base: {
        type: Boolean,
        default: true
    },
    places: {
        type: Boolean,
        default: true
    },
    symbols: {
        type: Boolean,
        default: true
    },
    callback: {
        type: Boolean,
        default: true
    },
    amount: {
        type: Boolean,
        default: true
    },
    format: {
        type: Boolean,
        default: true
    },
    source: {
        type: Boolean,
        default: true
    }
  }
};
</script>
