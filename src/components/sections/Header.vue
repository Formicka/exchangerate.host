<template>
    <header class="header-area">
        <div class="navbar-area headroom">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <nav class="navbar navbar-expand-lg">
                            <router-link to="/" class="navbar-brand">
                                <strong>exchangerate<span class="dot">.</span>host</strong>
                            </router-link>
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
                                        <router-link to="/#our-services">Services</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/#faq">FAQ</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link to="/status">Status</router-link>
                                    </li>
                                </ul>
                            </div> 

                            <div class="navbar-btn d-none d-sm-inline-block">
                                <router-link to="/#docs" class="main-btn">API documentation</router-link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div> 
        </div>

        
    </header>
</template>

<script>
export default {
  name: "Header",
};
</script>