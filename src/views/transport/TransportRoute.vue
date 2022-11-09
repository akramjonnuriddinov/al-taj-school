<template>
  <div class="fw-light transport">
    <b-tabs content-class="mt-3 border-0">
      <b-tab title="Route List" active>
        <p>
          <no-data />
        </p>
      </b-tab>
      <b-tab title="Add New">
        <form>
          <b-form-input
            id="input-small"
            size="sm"
            class="mb-4 mt-5"
            placeholder="Route title here"
          />
          <b-form-input
            id="input-small"
            size="sm"
            class="mb-4"
            placeholder="Enter fare here"
          />
          <button type="submit" class="mt-2 form-btn btn btn-primary">
            Submit
          </button>
        </form>
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
