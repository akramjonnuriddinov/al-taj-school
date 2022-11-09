<template>
  <div>
    <b-row
    v-b-modal.modal-lang
      class="text-start d-flex justify-content-center align-items-center border-bottom py-2 cursor-pointer"
    >
      <b-col cols="2">
        <b-img
          class="w-100"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/globe-2891398-2409805@0.png"
        />
      </b-col>
      <b-col cols="8">
        <span> Change Language </span>
      </b-col>
      <b-col cols="2">
        <span class="badge bg-danger">English</span>
      </b-col>
    </b-row>
    <b-row
    v-b-modal.modal-password
      class="text-start d-flex justify-content-center align-items-center border-bottom py-2 cursor-pointer"
    >
      <b-col cols="2">
        <b-img
          class="w-100"
          src="https://cdn3d.iconscout.com/3d/premium/thumb/lock-5383139-4500072.png"
        />
      </b-col>
      <b-col cols="10">
        <b-button variant="none" > Change Password </b-button>
      </b-col>
    </b-row>

    <b-modal
    id="modal-password"
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
    <div class="form-floating my-3">
        <input
          type="text"
          class="form-control input-sm"
          id="floatingInput"
          placeholder="Name"
        />
        <label for="floatingInput">Current Password</label>
      </div>
      <div class="form-floating my-3">
        <input
          type="text"
          class="form-control input-sm"
          id="floatingInput"
          placeholder="Name"
        />
        <label for="floatingInput">New Password</label>
      </div>
      <div class="form-floating my-3">
        <input
          type="text"
          class="form-control input-sm"
          id="floatingInput"
          placeholder="Name"
        />
        <label for="floatingInput">Confirm Password</label>
      </div>
    <button class="gradiend-button mx-auto d-block">Save</button>
  </b-modal>

  <b-modal
    id="modal-lang"
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
    <b-button class="w-100 border-bottom rounded-0" variant="none">
      English
    </b-button>
    <b-button class="w-100 border-bottom rounded-0" variant="none">
      العربية
    </b-button>
    <b-button class="w-100 rounded-0" variant="none">
      O'zbek
    </b-button>
  </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      langs: [
        {id: 1, name: 'English'},
        {id: 2, name: 'العربية'},
        {id: 3, name: '中文'},
      ]
    };
  },


  mounted() {
    console.log(this.langs);
  },
  methods: {
    showModal() {
      this.$bvModal.show("modal-password");
    },
  },
};
