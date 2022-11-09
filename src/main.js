import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vSelect from "vue-select";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

Vue.component("v-select", vSelect);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  router,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
