<template>
  <div>
    <InNumbers></InNumbers>

    <Services></Services>

    <Docs></Docs>

    <Faq></Faq>

    <Footer></Footer>
  </div>
</template>

<script>
import Docs from "@/components/sections/Docs.vue";
import Faq from "@/components/sections/Faq.vue";
import Services from "@/components/sections/Services.vue";
import Footer from "@/components/sections/Footer.vue";
import InNumbers from "@/components/sections/InNumbers.vue";

export default {
  name: "Home",
  components: {
    Footer,
    Faq,
    Services,
    InNumbers,
    Docs
  },
  data: function() {
    return {
      title: "Foreign exchange rates API with currency conversion for Free",
      description: "Exchange rates API is a free service for current and historical foreign exchange rates published by the European Central Bank"
    };
  },
  head: {
    title: function() {
      return {
        inner: this.title
      };
    }
  }
};
</script>