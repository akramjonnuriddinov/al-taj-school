<template>
  <div class="content">
    <button
      class="card"
      v-for="item in materialsList"
      :key="item.id"
      @click="$router.push(item.router)"
    >
      <img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/documents-in-drawer-6013672-4979967.png"
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
      materialsList: [
        {
          id: 1,
          title: "Assigment",
          router: "/homework",
        },
        {
          id: 2,
          title: "Syllabus",
          router: "/homework",
        },
        {
          id: 3,
          title: "Other Downloads",
          router: "/homework",
        },
      ],
    };
  },
};
</script>
