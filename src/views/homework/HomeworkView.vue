<template>
  <div>
    <button class="gradiend-button w-25">1 (A)</button>
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
