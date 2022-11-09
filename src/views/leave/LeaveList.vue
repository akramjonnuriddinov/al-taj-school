<template>
  <div class="text-purple">
    <div class="text-start">Leave List</div>
    <b-tabs content-class="mt-3 border-0">
      <b-tab title="Pending" active>
        <p>
          <no-data />
        </p>
      </b-tab>
      <b-tab title="Approved">
        <p>
          <no-data />
        </p>
      </b-tab>
      <b-tab title="Rejected">
        <p>
          <no-data />
        </p>
      </b-tab>
    </b-tabs>
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
