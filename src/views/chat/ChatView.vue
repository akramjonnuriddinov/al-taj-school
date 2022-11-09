<template>
  <div class="fw-light transport">
    <b-tabs content-class="mt-3 pt-2 border-0">
      <b-tab title="Chats" active>
        <b-row
          class="border-bottom py-2"
          v-for="(item, index) in 5"
          :key="index"
        >
          <b-col cols="12">
            <router-link :to="'/chat/' + (index + 1)">
              <b-row>
                <b-col
                  cols="3"
                  class="d-flex justify-content-center align-items-center"
                >
                  <b-img
                    src="https://xsgames.co/randomusers/avatar.php?g=female"
                    blank-color="#ccc"
                    width="50"
                    alt="placeholder"
                    rounded="circle"
                  />
                </b-col>
                <b-col
                  cols="9"
                  class="media-info d-flex flex-column align-items-start justify-content-center"
                >
                  <span class="text-purple fw-bold">Admin</span>
                  <span>Slushya syuda</span>
                </b-col>
              </b-row>
            </router-link>
          </b-col>
        </b-row>    
      </b-tab>
      <b-tab title="Groups">
        <p class="text-start fw-bold text-purple">Groups</p>
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
