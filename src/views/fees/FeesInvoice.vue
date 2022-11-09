<template>
  <div>
    <div class="my-toast" v-if="toast">
      <small class="bg-danger text-light rounded-pill p-2 py-1">
        Item deleted successfully
      </small>
    </div>
    <b-row
      class="p-2 border-bottom"
      v-for="(item, index) in count"
      :key="index"
    >
      <b-col cols="11" class="text-start fs-small mb-2">
        Ibn Umar (1-A) <br />
        <span class="fs-ex-small"> 1st Oct, 2022 </span>
      </b-col>
      <b-col cols="1" class="text-start fs-small mb-2">
        <b-button
          v-b-toggle="'collapse-' + index"
          variant="none"
          @click="checkOtherCollapse(index)"
        >
          ...
        </b-button>
        <b-collapse
          :id="'collapse-' + index"
          class="z-index my-collapse"
          style="overflow: visible"
        >
          <div class="border w-100 bg-light">
            <div class="py-2 px-3 hover" @click="redirectToView(index)">
              View
            </div>
            <div class="py-2 px-3 hover" @click="redirectToTransaction(index)">
              View Transaction
            </div>
            <div class="py-2 px-3 hover" @click="deleteItem">Delete</div>
          </div>
        </b-collapse>
      </b-col>
      <b-col cols="3" class="text-start">
        <div>Amount</div>
        <div class="fw-light">100.00</div>
      </b-col>
      <b-col cols="3" class="text-start">
        <div>Paid</div>
        <div class="fw-light">0.00</div>
      </b-col>
      <b-col cols="3" class="text-start">
        <div>Balance</div>
        <div class="fw-light">100.00</div>
      </b-col>
      <b-col cols="3" class="text-start">
        <div>Status</div>
        <b-badge variant="danger" class="rounded-0 w-100 bg-danger">
          UNPAID
        </b-badge>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BBadge } from "bootstrap-vue";
export default {
  components: {
    BBadge,
  },
  data() {
    return {
      count: 5,
      toast: false,
      counter: 0,
    };
  },
  methods: {
    redirectToView(index) {
      this.$router.push({
        name: "Fees Invoice View",
        params: { id: index + 1 },
      });
    },

    redirectToTransaction(index) {
      this.$router.push({
        name: "Fees Invoice Transaction",
        params: { id: index + 1 },
      });
    },

    deleteItem() {
      this.count--;

      this.counter++;

      this.toast = true;
      setTimeout(() => {
        this.toast = false;
      }, 3000);
      const collapse = document.querySelectorAll(".my-collapse");
      collapse.forEach((item) => {
        item.classList.remove("show");
      });
    },

    checkOtherCollapse(index) {
      const collapse = document.querySelectorAll(".my-collapse");
      collapse.forEach((item, i) => {
        if (i !== index) {
          item.classList.remove("show");
        }
      });
    },
  },
};
</script>
