<template>
  <div class="content">
    <button
      class="card"
      v-for="(item, index) in studentItems"
      :key="index"
      @click="$router.push(item.router)"
    >
      <img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/graduate-student-4346323-3600796.png"
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
      studentItems: [
        {
          id: 1,
          title: "Add Student",
          router: "/student/add",
        },
        {
          id: 2,
          title: "Disable Student",
          router: "/student/disable",
        },
      ],
    };
  },
};
</script>
