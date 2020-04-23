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
            loading: true,
            author: "",
            message: "",
            title: "",
            description: ""
        }
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