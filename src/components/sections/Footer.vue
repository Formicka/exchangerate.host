<template>
    <div>
        <footer id="footer" class="footer-area mt-115 bg_cover" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/footer-bg.jpg') + ')' }">
            <div class="container">
                <div class="footer-widget pt-30 pb-70">
                    <div class="row">
                        <div class="col-lg-3 col-sm-6 order-sm-1 order-lg-1">
                            <div class="footer-about pt-10">
                                <a class="navbar-brand" href="/">
                                    <strong>exchangerate<span class="dot">.</span>host</strong>
                                </a>
                                <p class="text">
                                    Exchange rates API is a free service for current and historical foreign exchange rates & crypto currencies rates.
                                </p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-6 order-sm-2 order-lg-3">
                            <div class="footer-link pt-10">
                                <div class="footer-title">
                                    <h5 class="title">About Us</h5>
                                </div>
                                <ul>
                                    <li><router-link to="/#our-services">Services</router-link></li>
                                    <li><router-link to="/#faq">FAQ</router-link></li>
                                    <li><router-link to="/#docs">API documentation</router-link></li>
                                    <li><a target="_blank" href="https://github.com/arzzen/exchangerate.host">Github repository &nearr;</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-6 order-sm-2 order-lg-3">
                            <div class="footer-link pt-10">
                                <div class="footer-title">
                                    <h5 class="title">General</h5>
                                </div>
                                <ul>
                                    <li><router-link to="/terms#top">Terms of Service</router-link></li>
                                    <li><router-link to="/terms#privacy-policy">Privacy Policy</router-link></li>
                                    <li><router-link to="/terms#cookie-policy">Cookie Policy</router-link></li>
                                    <li><router-link to="/value">Are you interested in buying our domain?</router-link></li>
                                </ul>
                            </div>
                        </div>

                        <div class="col-lg-3 col-sm-6 order-sm-2 order-lg-3">
                            <div class="footer-contact pt-10">
                                <div class="footer-title">
                                    <h5 class="title">Contact Info</h5>
                                </div>
                                <div class="contact">
                                    <p class="text">Tulská 3240/33, Žilina 01008<br> Slovak Republic</p>
                                    <p class="text"><mark><a target="_blank" href="https://github.com/arzzen/exchangerate.host/issues">Submit a Question or Bug  &nearr;</a></mark></p>

                                    <!--
                                    <ul class="social mt-40">
                                        <li><a href="#"><i class="lni-facebook"></i></a></li>
                                        <li><a href="#"><i class="lni-twitter"></i></a></li>
                                        <li><a href="#"><i class="lni-instagram"></i></a></li>
                                        <li><a href="#"><i class="lni-linkedin"></i></a></li>
                                    </ul>
                                    -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright text-center">
                    <small class="">© 2020-2022 Exchangerate.host, All Rights Reserved.</small>
                </div>
            </div>
        </footer>

        
        <a href="#" class="back-to-top"><i class="lni-chevron-up"></i></a>
    </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>
