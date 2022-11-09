<template>
  <div class="border d-flex flex-column justify-content-between">
    <form>
      <v-select
        :options="options1"
        :reduce="(item) => item.id"
        label="label"
        class="w-100 mb-2"
        placeholder="Select a class"
      />
      <v-select
        :options="options2"
        :reduce="(item) => item.id"
        label="label"
        class="w-100 mb-2"
        placeholder="Select a class"
      />
      <div class="form-floating my-3">
        <input
          type="text"
          class="form-control input-sm"
          id="floatingInput"
          placeholder="Name"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="text"
          class="form-control"
          id="floatingPassword"
          placeholder="Role"
        />
        <label for="floatingPassword">Password</label>
      </div>
    </form>
    <button class="gradiend-button">Search</button>
  </div>
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
  components: {
    vSelect,
  },
  data() {
    return {
      selected: null,
      options1: [
        { id: 1, label: "1" },
        { id: 2, label: "2" },
      ],
      options2: [
        { id: 1, label: "A" },
        { id: 2, label: "B" },
      ],
    };
  },
};
</script>

<style scoped>
.student-content {
  display: block;
  overflow-x: hidden;
}
</style>
