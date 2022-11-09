<template>
  <div>
    <b-form-input
      id="input-small"
      size="sm"
      class="mb-3"
      placeholder="Enter ID Here"
    />
    <v-select
      v-model="selected"
      :reduce="(item) => item.id"
      label="label"
      class="w-100 mb-2"
      :options="options"
    />
    <b-button variant="primary" size="sm" class="mt-4 form-btn">
      Save
    </b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: { id: 1, label: "Driver" },
      options: [
        { id: 1, label: "Driver" },
        { id: 2, label: "Librarian" },
        { id: 3, label: "Receptionist" },
        { id: 4, label: "Accountant" },
        { id: 5, label: "Admin" },
        { id: 6, label: "Teacher" },
        { id: 7, label: "Parent" },
        { id: 8, label: "Student" },
        { id: 9, label: "Super Admin" },
      ],
    };
  },
};
</script>
