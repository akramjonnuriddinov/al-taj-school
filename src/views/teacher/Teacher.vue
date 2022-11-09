<template>
  <div class="text-purple">
    <button class="gradiend-button w-25 rounded">1 (A)</button>
    <b-row>
      <no-data />
    </b-row>
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
