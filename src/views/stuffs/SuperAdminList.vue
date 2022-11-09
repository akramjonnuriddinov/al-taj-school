<template>
  <div>
    <b-row class="border-bottom py-2" v-for="(item, index) in 5" :key="index">
      <b-col cols="12">
        <router-link :to="'/stuff/super-admin/' + (index + 1)">
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
              <span>System Adminstrator</span>
              <span>Phone: +998 99 999 99 99</span>
              <span>Address: Tashkent, Uzbekistan</span>
            </b-col>
          </b-row>
        </router-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BMedia, BImg, BCardText } from "bootstrap-vue";

export default {
  components: {
    BMedia,
    BCardText,
    BImg,
  },
};
</script>

<style scoped>
.media-info {
  font-size: 12px;
}

.media-info span:first-child {
  font-weight: 600;
}
</style>
