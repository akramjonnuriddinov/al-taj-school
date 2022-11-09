<template>
  <div class="content">
    <button class="card" v-for="(item, index) in hrItems" :key="index"
      @click="$router.push('/hr/' + item.router)">
      <img :src="item.icon" style="width: 70%" />
      {{ item.title }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hrItems: [
        {
          id: 1,
          title: "Designation",
          router: "/designation",
          icon: "https://cdn3d.iconscout.com/3d/premium/thumb/graduation-hat-5419682-4537773.png",
        },
        {
          id: 2,
          title: "Department",
          router: "/department",
          icon: "https://cdn3d.iconscout.com/3d/premium/thumb/police-station-5379844-4497514.png",
        },
        {
          id: 3,
          title: "Add employee",
          router: "/add-employee",
          icon: "https://cdn3d.iconscout.com/3d/premium/thumb/add-button-5396205-4511591.png",
        },
      ],
    };
  },
};
</script>
