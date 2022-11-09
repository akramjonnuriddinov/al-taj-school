<template>
  <div>
    <b-form-input
      id="input-small"
      size="sm"
      class="mb-3"
      placeholder="Dominatory name"
    />
    <b-form-input
      id="input-small"
      size="sm"
      class="mb-3"
      placeholder="Intake"
    />
    <b-form-input
      id="input-small"
      size="sm"
      class="mb-3"
      placeholder="Address"
    />
    <v-select
      v-model="selected"
      :reduce="(item) => item.id"
      label="label"
      class="w-100 mb-2"
      :options="[
        { id: 1, label: 'Boys' },
        { id: 2, label: 'Girls' },
      ]"
    />
    <b-form-textarea
      id="textarea"
      no-resize
      placeholder="Enter something..."
      rows="3"
    />
    <b-button variant="primary" size="sm" class="mt-4 form-btn">
      Save
    </b-button>
  </div>
</template>
