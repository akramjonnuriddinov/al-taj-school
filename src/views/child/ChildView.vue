<template>
  <div class="content">
    <button
      class="card"
      v-for="item in childList"
      :key="item"
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
      childList: [
        {
          id: 1,
          icon: "https://cdn3d.iconscout.com/3d/premium/thumb/student-studying-on-laptop-while-sitting-on-big-books-5711045-4779537.png",
          title: "Child",
          router: "/child/child",
        },
        {
          id: 2,
          icon: "https://cdn3d.iconscout.com/3d/free/thumb/chat-information-5658928-4715734.png",
          title: "About",
          router: "/child/about",
        },
        {
          id: 3,
          icon: "https://cdn3d.iconscout.com/3d/free/thumb/settings-3543017-2969404.png",
          title: "Settings",
          router: "/settings",
        },
      ],
    };
  },
};
</script>
