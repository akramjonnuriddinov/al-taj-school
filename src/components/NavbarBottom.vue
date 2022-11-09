<template>
  <div id="bottom-navbar">
    <div class="bottom-nav bg-white">
      <b-row class="pb-2">
        <b-col class="d-flex justify-content-center align-items-center">
          <!-- home icon -->
          <router-link to="/">
            <!-- <b-img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/home-4168210-3457141.png"
              blank-color="#ccc"
              alt="placeholder"
              rounded="circle"
              class="w-50"
            /> -->
            <HomeIcon class="icon" />
            <br />
            <span>Home</span>
          </router-link>
        </b-col>
        <b-col class="d-flex justify-content-center align-items-center">
          <!-- home icon -->
          <router-link to="/notice">
            <!-- <b-img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/chat-4168204-3457135.png"
              blank-color="#ccc"
              alt="placeholder"
              rounded="circle"
              class="w-50"
            /> -->
            <NotificationIcon class="icon notification-icon" />
            <br />
            <span>Notification</span>
          </router-link>
        </b-col>
        <b-col class="d-flex justify-content-center align-items-center">
          <!-- home icon -->
          <router-link
            to="/fees"
            class="rounded-circle d-flex justify-content-center align-items-center flex-column"
          >
            <span class="rounded-c">
              <!-- <b-img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/file-folder-4168200-3457131.png"
                blank-color="#ccc"
                alt="placeholder"
                rounded="circle"
                class="w-50"
              /> -->
              <PayIcon class="icon" />
            </span>
            <span>Fees</span>
          </router-link>
        </b-col>
        <b-col class="d-flex justify-content-center align-items-center">
          <!-- home icon -->
          <router-link to="/">
            <b-img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/calendar-4168195-3457126.png"
              blank-color="#ccc"
              alt="placeholder"
              rounded="circle"
              class="w-50"
            />
            <br />
            <span>Routine</span>
          </router-link>
        </b-col>
        <b-col class="d-flex justify-content-center align-items-center">
          <!-- home icon -->
          <router-link to="/student">
            <b-img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/contact-book-4168199-3457130.png"
              blank-color="#ccc"
              alt="placeholder"
              rounded="circle"
              class="w-50"
            />
            <br />
            <span>Profile</span>
          </router-link>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import HomeIcon from './icons/HomeIcon.vue';
import NotificationIcon from './icons/NotificationIcon.vue';
import PayIcon from './icons/PayIcon.vue';

export default {
  name: 'App',
  components: { HomeIcon, NotificationIcon, PayIcon }
}
</script>

<style>
.rounded-c {
  width: 70%;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transform: scale(1.2) translate(0, -20%);
}

.icon {
  color: #519CFE;
  font-size: 24px;
}

.notification-icon {
  width: 35px;
}
</style>
