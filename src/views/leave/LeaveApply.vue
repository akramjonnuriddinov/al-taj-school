<template>
  <div class="d-flex flex-column justify-content-between align-items-center">
    <div class="w-100">
      <b-form-datepicker
        class="input-small mb-3"
        id="datepicker-placeholder"
        placeholder="Apply Date"
        locale="en"
      />
      <b-form-datepicker
        class="input-small mb-3"
        id="datepicker-placeholder"
        placeholder="From Date"
        locale="en"
      />
      <b-form-datepicker
        class="input-small mb-3"
        id="datepicker-placeholder"
        placeholder="To Date"
        locale="en"
      />
      <div class="mb-3">
        <input class="form-control input-small" type="file" id="formFile" />
      </div>
      <b-form-textarea no-resize placeholder="Reason" rows="3" class="mb-3" />
    </div>
    <button class="gradiend-button w-100">
      Apply
    </button>
  </div>
</template>
