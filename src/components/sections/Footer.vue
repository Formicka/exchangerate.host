<template>
    <div>
        <footer id="footer" class="footer-area mt-115 bg_cover" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/footer-bg.jpg') + ')' }">
            <div class="container">
                <div class="footer-widget pt-30 pb-70">
                    <div class="row">
                        <div class="col-lg-3 col-sm-6 order-sm-1 order-lg-1">
                            <div class="footer-about pt-40">
                                <a class="navbar-brand" href="/">
                                    <strong>exchangerate<span class="dot">.</span>host</strong>
                                </a>
                                <p class="text">
                                    Exchange rates API is a free service for current and historical foreign exchange rates
                                    published by the European Central Bank
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 order-sm-3 order-lg-2">
                            <div class="footer-link pt-40">
                                <div class="footer-title">
                                    <h5 class="title">General</h5>
                                </div>
                                <ul>
                                    <li><a href="#our-services">Services</a></li>
                                    <li><a href="#faq">FAQ</a></li>
                                    <li><a href="#docs">API documentation</a></li>
                                    <li><a href="#currencies">List of currencies</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 order-sm-4 order-lg-3">
                            <div class="footer-link pt-40">
                                <div class="footer-title">
                                    <h5 class="title">About Us</h5>
                                </div>
                                <ul>
                                    <li><a href="#home">Overview</a></li>
                                    <li><a href="#">Terms of Service</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Cookie Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6 order-sm-2 order-lg-4">
                            <div class="footer-contact pt-40">
                                <div class="footer-title">
                                    <h5 class="title">Contact Info</h5>
                                </div>
                                <div class="contact pt-10">
                                    <p class="text">Tulská 3240/33, Žilina 01008<br> Slovak Republic</p>
                                    <p class="text">support@exchangerate.host</p>

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
                    <small class="">© 2020 All Rights Reserved.</small>
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