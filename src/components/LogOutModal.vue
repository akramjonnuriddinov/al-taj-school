<template>
  <b-modal
    id="modal-danger"
    ok-only
    ok-variant="danger"
    ok-title="Accept"
    class="header-none"
    modal-class="modal-danger modal-sm"
    centered
    title="Logout"
    hide-footer
    hide-header
  >
    <b-card-text> Are you sure you want to logout? </b-card-text>
    <div class="d-flex justify-content-end fw-bold">
      <span class="text-danger cursor-pointer" @click="closeModal">
        Cancel
      </span>
      <span class="text-success px-3 cursor-pointer" @click="closeModal">
        Ok
      </span>
    </div>
  </b-modal>
</template>

<script>
export default {
    methods: {
        closeModal() {
        this.$bvModal.hide("modal-danger");
        },
    },
}
</script>
