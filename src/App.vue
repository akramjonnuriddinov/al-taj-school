<template>
  <div id="app">
    <main>
      <navbar-main v-if="this.$route.path == '/'" id="navbar" />
      <navbar-chat v-else-if="this.$route.name == 'Chat Room'" id="navbar" />
      <navbar-secondary v-else :title="currentRoute" id="navbar" />
      <Transition>
        <router-view class="scroll"></router-view>
      </Transition>
      <navbar-bottom v-if="this.$route.name !== 'Chat Room'" />
    </main>
  </div>
</template>

<script>
import NavbarMain from "./components/NavbarMain.vue";
import NavbarSecondary from "./components/NavbarSecondary.vue";
import NavbarChat from "./components/NavbarChat.vue";
import NavbarBottom from "./components/NavbarBottom.vue";
import "vue-select/dist/vue-select.css";

export default {
  name: "App",
  components: {
    NavbarMain,
    NavbarSecondary,
    NavbarChat,
    NavbarBottom,
  },

  data() {
    return {
      currentRoute: "",
    };
  },
  watch: {
    $route() {
      this.currentRoute = this.$route.name;
      console.log("route /" + this.currentRoute);
    },
  },
};
</script>

<style>
@import url("@/assets/style/global--styles.css");
</style>
