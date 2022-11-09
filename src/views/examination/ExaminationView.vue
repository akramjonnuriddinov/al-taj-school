<template>
  <div class="content">
    <button
      class="card"
      v-for="item in examList"
      :key="item"
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
      examList: [
        {
          id: 1,
          title: "Schedule",
          router: "/examination/schedule",
        },
        {
          id: 2,
          title: "Result",
          router: "/examination/result",
        },
      ],
    };
  },
};
</script>
