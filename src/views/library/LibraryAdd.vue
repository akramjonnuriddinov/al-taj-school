<template>
  <div>
    <form class="text-start">
      <b-form-input
        id="input-small"
        size="sm"
        class="mb-4"
        placeholder="Enter title here"
      />
      <b-input-group class="mb-4">
        <b-form-input id="input-small" size="sm" placeholder="Book number" />
        <b-form-input id="input-small" size="sm" placeholder="ISBN" />
      </b-input-group>
      <b-form-input
        id="input-small"
        size="sm"
        class="mb-4"
        placeholder="Publisher name"
      />
      <b-form-input
        id="input-small"
        size="sm"
        class="mb-4"
        placeholder="Author name"
      />
      <b-input-group class="mb-4">
        <b-form-input id="input-small" size="sm" placeholder="Rack number" />
        <b-form-input id="input-small" size="sm" placeholder="Quantity" />
      </b-input-group>
      <b-input-group class="mb-4">
        <b-form-input id="input-small" size="sm" placeholder="Price" />
        <b-form-input id="input-small" size="sm" placeholder="Date" />
      </b-input-group>
      <b-form-textarea
        id="textarea"
        no-resize
        placeholder="Enter something..."
        rows="3"
        class="mb-4"
      />
      <button type="submit" class="mt-5 form-btn btn btn-primary">
        Submit
      </button>
    </form>
  </div>
</template>
