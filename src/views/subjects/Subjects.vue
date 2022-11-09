<template>
  <div class="text-purple">
    <button class="gradiend-button w-25 rounded">1 (A)</button>
    <b-row class="my-3">
      <b-col cols="4"> Subjects </b-col>
      <b-col cols="4"> Teacher </b-col>
      <b-col cols="4"> Type </b-col>
    </b-row>
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
