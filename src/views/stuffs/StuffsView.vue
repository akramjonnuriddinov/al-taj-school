<template>
  <div class="content">
    <button
      class="card"
      v-for="item in stuffList"
      :key="item"
      @click="$router.push('/stuff' + item.router)"
    >
      <img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/add-button-5396205-4511591.png"
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
      stuffList: [
        {
          id: 1,
          title: "Super admin",
          router: "/super-admin",
        },
        {
          id: 2,
          title: "Teacher",
          router: "/super-admin",
        },
        {
          id: 3,
          title: "Admin",
          router: "/super-admin",
        },
        {
          id: 4,
          title: "Accountant",
          router: "/super-admin",
        },
        {
          id: 5,
          title: "Receptionist",
          router: "/super-admin",
        },
        {
          id: 6,
          title: "Librarian",
          router: "/super-admin",
        },
        {
          id: 7,
          title: "Driver",
          router: "/super-admin",
        },
      ],
    };
  },
};
</script>

<style></style>
