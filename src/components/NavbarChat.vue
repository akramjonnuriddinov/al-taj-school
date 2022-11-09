<template>
  <nav class="d-flex justify-content-between align-items-center">
    <div>
      <img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/left-arrow-5621263-4673807.png"
        alt="logo"
        style="width: 32px; cursor: pointer"
        @click="$router.go(-1)"
      />
      <span class="text-white mx-4">
        <img
          src="https://xsgames.co/randomusers/avatar.php?g=female"
          alt="logo"
          class="rounded-circle"
          style="width: 42px; cursor: pointer"
          @click="$router.go(-1)"
        />
        <span class="px-2">
            Admin
        </span>
      </span>
    </div>
    <div class="accaount-image">
      <img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/right-arrow-button-5588633-4688182.png"
        style="width: 45px; border-radius: 50%"
        v-b-modal.modal-danger
      />
    </div>

    <Logout-modal @closeModal="closeModal" />
  </nav>
</template>

<script>
import LogoutModal from "@/components/LogOutModal.vue";
export default {
  components: {
    LogoutModal,
  },
  props: {
    title: {
      type: String,
    },
  },
  methods: {
    closeModal() {
      this.$bvModal.hide("modal-danger");
    },
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
  background: rgba(255, 255, 255, 0.37);
  backdrop-filter: blur(10px);
  border-radius: 8px;
}
</style>
