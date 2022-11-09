<template>
  <div class="content">
    <button @click="$router.push('/leave/apply-leave')" class="card">
      <img
        style="width: 70%"
        src="https://cdn3d.iconscout.com/3d/free/thumb/planning-list-6431882-5307258.png"
      />
      Leave
    </button>
    <button @click="$router.push('/leave/leave-list')" class="card">
      <img
        style="width: 70%"
        src="https://cdn3d.iconscout.com/3d/premium/thumb/add-button-5396205-4511591.png"
      />
      Leave List
    </button>
  </div>
</template>

<script>
import NoData from "@/components/NoData.vue";
export default {
  components: {
    NoData,
  },
};
</script>

<style></style>
