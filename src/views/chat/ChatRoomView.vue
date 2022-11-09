<template>
  <div class="d-flex flex-column justify-content-end">
    <b-row class="mb-4 pb-2">
      <div class="chat-message">
        <span class="text-muted" style="font-size: 10px"> admin </span>
        <div class="chat-message__content text-start text-light">
          <div class="chat-message__content__text">
            <span>Hi</span>
            <div class="time">12 days ago</div>
          </div>
        </div>
      </div>
      <div class="chat-message">
        <div class="chat-message__content text-start text-light">
          <div class="chat-message__content__text">
            <span
              >Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Aliquam, dolorem doloribus. Saepe eaque nam quia aliquid maxime
              vero distinctio odit sequi praesentium, unde voluptatem, natus
              minus sed ducimus dolorem eum.</span
            >
            <div class="time">12 days ago</div>
          </div>
        </div>
      </div>
    </b-row>

    <div class="chat-write-panel py-1 pt-2" style="background: gainsboro">
      <b-row class="w-100 px-2">
        <b-col
          class="d-flex justify-content-center align-items-center"
          cols="1"
        >
          <img
            class="text-center"
            src="https://xsgames.co/randomusers/avatar.php?g=female"
            style="width: 40px; border-radius: 50%"
          />
        </b-col>
        <b-col
          class="d-flex justify-content-center align-items-center"
          cols="10"
        >
          <b-form-input
            @focus="isTyping = true"
            @blur="isTyping = false"
            type="text"
            placeholder="Type your message"
            class="border-0 w-100"
          ></b-form-input>
        </b-col>
        <b-col
          cols="1"
          class="d-flex justify-content-center align-items-center"
        >
          <img :src="image" width="32" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTyping: false,
      image: "",
    };
  },

  watch: {
    isTyping() {
      if (this.isTyping) {
        this.image =
          "https://cdn3d.iconscout.com/3d/premium/thumb/send-5591115-4652892.png";
      } else {
        this.image =
          "https://cdn3d.iconscout.com/3d/premium/thumb/paper-clip-3711634-3105355.png";
      }
    },
  },

  mounted() {
    this.image =
      "https://cdn3d.iconscout.com/3d/premium/thumb/paper-clip-3711634-3105355.png";
  },
};
</script>

<style>
.chat-message {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
  flex-direction: column;
  align-items: flex-start;
}

.chat-message__content {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: #6e7db6;
  border-radius: 0 10px 10px;
  max-width: 70%;
  min-width: 20%;
  padding: 10px;
}

.chat-message__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.chat-message__content__text .time {
  font-size: 10px !important;
  color: #ccc !important;
}

.chat-write-panel {
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
