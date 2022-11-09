<template>
  <nav>
    <img
      src="http://bbb.barbeque.uz/public/uploads/settings/logo.png"
      alt="logo"
      class="site-logo"
    />
    <!-- style="width: 52px" -->
    <!-- <div class="logo">
    </div> -->
    <div class="accaount-image">
      <!-- <img src="../assets/logo.png" alt="logo" style="width: 32px" /> -->
      <img
        src="../assets/icon-img/message-icon.svg"
        alt="chat"
        class="mx-2"
        style="width: 40px; cursor: pointer;"
        @click="$router.push('/chat')"
      />
      <!-- <MessageIcon @click="$router.push('/chat')" class="mx-2 message-icon" /> -->
      <img
        src="../assets/icon-img/logout-icon.svg"
        style="width: 45px; border-radius: 50%"
        v-b-modal.modal-danger
      />
      <!-- <LogoutIcon class="logout-icon" /> -->
    </div>
    <LogOutModal />
  </nav>
</template>

<script>
import LogOutModal from "./LogOutModal.vue";
import MessageIcon from "./icons/MessageIcon.vue";
import LogoutIcon from "./icons/LogoutIcon.vue"
export default {
  name: "NavbarMain",
  components: {
    LogOutModal, MessageIcon, LogoutIcon
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

nav .logo img {
  /* background: rgba(252, 213, 213, 0.37); */
  width: 140px;
}

.message-icon {
  width: 40px;
  color: #EEB332;
}

.logout-icon {
  width: 40px;
  color: #4202af;
}
</style>
