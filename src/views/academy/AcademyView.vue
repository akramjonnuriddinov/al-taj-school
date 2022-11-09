<template>
  <div class="content">
    <button
      class="card"
      v-for="(item, index) in academyItems"
      :key="index"
      @click="$router.push('/academy/' + item.router)"
    >
      <img :src="item.icon" style="width: 70%" />
      {{ item.title }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      academyItems: [
        {
          id: 1,
          title: "Section",
          router: "/section",
          icon: "https://cdn3d.iconscout.com/3d/premium/thumb/web-layout-5590535-4652650.png",
        },
        {
          id: 2,
          title: "Class / group",
          router: "/class",
          icon: "https://cdn3d.iconscout.com/3d/premium/thumb/classroom-5333536-4463489.png",
        },
        {
          id: 3,
          title: "Subjects",
          router: "/subject",
          icon: "https://cdn3d.iconscout.com/3d/premium/thumb/geography-subject-5274772-4404334.png",
        },
        {
          id: 4,
          title: "Assign a class teacher",
          router: "/assign-class-teacher",
          icon: "https://cdn3d.iconscout.com/3d/free/thumb/male-professor-3142511-2617475.png",
        },
        {
          id: 5,
          title: "Assign a subject",
          router: "/assign-subject",
          icon: "https://cdn3d.iconscout.com/3d/premium/thumb/geography-subject-5274772-4404334.png",
        },
      ],
    };
  },
};
</script>
