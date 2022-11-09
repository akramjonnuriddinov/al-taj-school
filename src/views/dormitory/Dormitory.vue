<template>
  <div class="content">
    <button
      class="card"
      v-for="item in dormitoryList"
      :key="item"
      @click="redirectUrl(item.id)"
    >
      <img
        v-if="item.id !== 3"
        src="https://cdn3d.iconscout.com/3d/premium/thumb/add-button-5396205-4511591.png"
        style="width: 70%"
      />
      <img
        v-else
        src="https://free3dicon.com/wp-content/uploads/2022/08/Hotel-264x264.png"
        style="width: 70%"
      />
      {{ item.title }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dormitoryList: [
        {
          id: 1,
          title: "Add Dormitory",
          router: "/super-admin",
        },
        {
          id: 2,
          title: "Add Room",
          router: "/super-admin",
        },
        {
          id: 3,
          title: "Room List",
          router: "/super-admin",
        },
      ],
    };
  },

  methods: {
    redirectUrl(id) {
      if (id === 1) {
        this.$router.push("/dormitory/add-dormitory");
      } else if (id === 2) {
        this.$router.push("/dormitory/add-room");
      } else if (id === 3) {
        this.$router.push("/dormitory/room-list");
      }
    },
  },
};
</script>
