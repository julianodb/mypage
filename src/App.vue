<template>
  <div id="app" class="container">
    <nav id="nav" class="navbar">
      <div class="navbar-brand">
        <a
          class="navbar-burger burger"
          data-target="navbarMenu"
          :class="{ 'is-active': burgerIsActive }"
          @click="burgerToggle"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div
        id="navbarMenu"
        class="navbar-menu"
        :class="{ 'is-active': burgerIsActive }"
      >
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="/about" class="navbar-item">About</router-link>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      burgerIsActive: false
    };
  },
  methods: {
    burgerToggle() {
      this.burgerIsActive = !this.burgerIsActive;
    }
  }
};
</script>

<style lang="scss">
@import "../node_modules/bulma/sass/utilities/initial-variables.sass";
$body-background-color: $green;
@import "bulma";
</style>
