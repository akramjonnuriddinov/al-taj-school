<template>
  <div class="content">
    <button
      class="card"
      v-for="item in attendanceList"
      :key="item.id"
      @click="openRoute(item)"
    >
      <b-img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/shield-6332704-5209350.png"
        style="width: 70%"
        fluid
        rounded="circle"
        alt="Responsive image"
      />
      {{ item.title }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Attendance",
  data() {
    return {
      attendanceList: [
        {
          id: 1,
          title: "Class Atten",
          router: "/attendance-action",
        },
        {
          id: 2,
          title: "Search Atten",
          router: "/attendance-action",
        },
      ],
    };
  },
  methods: {
    openRoute(item) {
      this.$router.push(item.router);
    },
  },
};
</script>
