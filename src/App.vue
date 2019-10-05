<template>
  <div id="app" class="container">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import router from "./router";
import navbar from "@/components/Navbar.vue";
export default {
  name: "App",
  components: {
    // eslint-disable-next-line
    router,
    navbar
  }
};
</script>

<style lang="scss">
@import "../node_modules/bulma/sass/utilities/initial-variables.sass";
@import "../node_modules/bulma/sass/utilities/_all.sass";
$body-background-color: $light;
@import "bulma";
</style>
