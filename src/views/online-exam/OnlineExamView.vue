<template>
  <div class="content">
    <button class="card" v-for="item in examList" :key="item">
      <img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/online-graduation-4805419-4002558.png"
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
