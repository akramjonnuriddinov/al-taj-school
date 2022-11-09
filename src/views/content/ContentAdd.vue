<template>
  <div>
    <form class="text-start fw-light">
      <label class="mb-1"> Content Type </label>
      <v-select
        v-model="selectedType"
        :reduce="(item) => item.id"
        label="label"
        class="w-100 mb-2"
        :options="ContentType"
      />

      <label class="mb-1"> Title </label>
      <b-form-input size="sm" class="mb-3" placeholder="Title" />

      <label class="mb-1"> Available for </label>
      <b-form-group v-slot="{ ariaDescribedby }">
        <b-form-radio
          :aria-describedby="ariaDescribedby"
          name="some-radios"
          value="A"
        >
          All Admin
        </b-form-radio>
        <b-form-radio
          :aria-describedby="ariaDescribedby"
          name="some-radios"
          value="B"
        >
          Student
        </b-form-radio>
      </b-form-group>

      <b-form-datepicker
        placeholder="Assign Date"
        id="example-datepicker"
        v-model="value"
        class="my-3"
      ></b-form-datepicker>

      <div class="mb-3">
        <input class="form-control" type="file" id="formFile" />
      </div>

      <b-form-textarea no-resize placeholder="Description" rows="3" />

      <button class="gradiend-button mx-auto d-block mt-5">Search</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedType: { id: 1, label: "Assigment" },
      ContentType: [
        { id: 1, label: "Assigment" },
        { id: 2, label: "Syllabus" },
        { id: 3, label: "Other Downloads" },
      ],
    };
  },
};
</script>
