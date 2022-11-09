<template>
  <div class="fw-light">
    <b-tabs content-class="mt-3 border-0">
      <b-tab title="Add Vehicle" active>
        <form>
          <b-form-input
            id="input-small"
            size="sm"
            class="mb-4 mt-5"
            placeholder="Vehicle No"
          />
          <b-form-input
            id="input-small"
            size="sm"
            class="mb-4"
            placeholder="Vehicle Model"
          />
          <b-form-input
            id="input-small"
            size="sm"
            class="mb-4"
            placeholder="Year Model"
          />
          <b-form-textarea
            id="textarea"
            no-resize
            size="sm"
            placeholder="Note"
            rows="1"
          />
        </form>
      </b-tab>
      <b-tab title="Vehicle List">
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
