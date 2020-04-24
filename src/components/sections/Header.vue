<template>
    <header class="header-area">
        <div class="navbar-area headroom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg">
                            <a class="navbar-brand" href="/">
                                <strong>exchangerate<span class="dot">.</span>host</strong>
                            </a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                                <span class="toggler-icon"></span>
                            </button>

                            <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                <ul id="nav" class="navbar-nav ml-auto mr-50">
                                    <li class="nav-item">
                                        <a href="#our-services">Services</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#faq">FAQ</a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#status">Status</a>
                                    </li>
                                </ul>
                            </div> 

                            <div class="navbar-btn d-none d-sm-inline-block">
                                <a class="main-btn" href="#docs">API documentation</a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div> 
        </div>

        <div id="home" class="header-hero bg_cover d-lg-flex align-items-center"
            v-bind:style="{ backgroundImage: 'url(' + require('@/assets/images/header-hero.jpg') + ')' }" >
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="header-hero-content">
                            <h1 class="hero-title wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s">Free
                                <b>foreign exchange</b><br> rates <span>API</span></h1>

                            <p class="text wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                                Exchange rates API is a simple and lightweight free service for current and historical
                                foreign exchange rates.
                            </p>
                            <div class="pricing-btn pt-70">
                                <a class="main-btn" href="#docs">explore the docs</a>
                            </div>
                        </div>
                    </div>
                </div> 
            </div> 
            <div class="header-hero-image d-flex align-items-center wow fadeInRightBig" data-wow-duration="1s"
                data-wow-delay="1.1s">
                <div class="image">
                    <img src="@/assets/images/hero-image.png" alt="Hero Image">
                </div>
            </div>
        </div>
    </header>
</template>