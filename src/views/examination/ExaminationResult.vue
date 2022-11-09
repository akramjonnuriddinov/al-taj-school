<template>
  <div>
    <no-data />
  </div>
</template>

<script>
export default {
  components: {
    NoData: () => import("@/components/NoData.vue"),
  },
};
</script>
