<template>
  <div id="app">
    <Header></Header>

    <div class="clear">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/sections/Header.vue";

export default {
  name: "app",
  components: {
    Header
  }
};
</script>

<style>
@import "./assets/css/slick.css";
@import "./assets/css/font-awesome.min.css";
@import "./assets/css/LineIcons.css";
@import "./assets/css/animate.css";
@import "./assets/css/bootstrap.min.css";
@import "./assets/css/default.css";
@import "./assets/css/style.css";
</style>