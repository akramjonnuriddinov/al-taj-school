<template>
  <nav>
    <div class="logo">
      <img
        src="http://bbb.barbeque.uz/public/uploads/settings/logo.png"
        alt="logo"
      />
      <!-- style="width: 52px" -->
    </div>
    <div class="accaount-image">
      <!-- <img src="../assets/logo.png" alt="logo" style="width: 32px" /> -->
      <img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/message-delivered-4737169-3934374.png"
        alt="chat"
        class="mx-2"
        style="width: 40px; cursor: pointer;"
        @click="$router.push('/chat')"
      />
      <img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/right-arrow-button-5588633-4688182.png"
        style="width: 45px; border-radius: 50%"
        v-b-modal.modal-danger
      />
    </div>
    <LogOutModal />
  </nav>
</template>

<script>
import LogOutModal from "./LogOutModal.vue";
export default {
  name: "NavbarMain",
  components: {
    LogOutModal,
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
  background: #fff;
  backdrop-filter: blur(2px);
  border-radius: 8px;
}
</style>
