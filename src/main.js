import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import * as firebase from "firebase/app";
import firebaseConfig from "./firebase.config.js";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
