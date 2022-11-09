<template>
  <div class="content">
    <button
      class="card"
      v-for="(item, index) in items"
      :key="index"
      @click="$router.push(item.router)"
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
      items: [
        {
          id: 1,
          title: "Route",
          icon: "https://cdn3d.iconscout.com/3d/free/thumb/train-3985336-3317714.png",
          router: "/transport/route",
        },
        {
          id: 2,
          title: "Vehicle",
          icon: "https://cdn3d.iconscout.com/3d/free/thumb/train-3985336-3317714.png",
          router: "/transport/vehicle",
        },
        {
          id: 3,
          title: "Assign Vehicle",
          icon: "https://cdn3d.iconscout.com/3d/premium/thumb/add-button-5396205-4511591.png",
          router: "/transport/assign-vehicle",
        },
        {
          id: 4,
          title: "Transport",
          icon: "https://cdn3d.iconscout.com/3d/free/thumb/train-3985336-3317714.png",
          router: "/transport/transport",
        },
      ],
    };
  },
};
</script>
