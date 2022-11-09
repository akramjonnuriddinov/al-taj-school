<template>
  <div class="gradient">
    <b-row>
      <span class="d-flex text-white fw-bold m-5" style="font-size: 18px">
        System Adminstrator
      </span>
      <span class="d-flex m-5">
        <b-avatar
          src="https://xsgames.co/randomusers/avatar.php?g=female"
          size="150"
        />
      </span>
    </b-row>
    <b-row>
      <b-col cols="12" class="text-purple">
        <div class="border-bottom d-flex px-2 py-1">Address: {{ stuffInfo.address }}</div>
        <div class="border-bottom d-flex px-2 py-1">Phone: {{ stuffInfo.phone }}</div>
        <div class="border-bottom d-flex px-2 py-1">Title: {{ stuffInfo.title }}</div>
        <div class="border-bottom d-flex px-2 py-1">
          Qualification: {{ stuffInfo.qualification }}
        </div>
        <div class="border-bottom d-flex px-2 py-1">
          MaeritalStatus: {{ stuffInfo.maeritalStatus }}
        </div>
        <div class="border-bottom d-flex px-2 py-1">
          JoiningDate: {{ stuffInfo.joiningDate }}
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { BAvatar } from "bootstrap-vue";
export default {
  components: {
    BAvatar,
  },
  data() {
    return {
      stuffInfo: {
        address: "Tashkent, Uzbekistan",
        phone: "+998 99 999 99 99",
        title: "Principal",
        qualification: "Master",
        maeritalStatus: "Married",
        joiningDate: "01-01-2021",
      },
    };
  },
};
</script>

<style scoped>
.gradient {
  background: url("https://www.pngkey.com/png/full/82-824046_chris-pine-filled-with-doubt-as-kirk-in.png");
  background-size: contain;
  background-repeat: no-repeat;
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
