<template>
  <div class="content main-content">
    <button
      class="card"
      v-for="(item, index) in items"
      :key="index"
      @click="openRoute(item)"
      :class="{ activeList: current === item.id }"
    >
      <img :src="item.icon" style="width: 70%" />
      {{ item.title }}
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarMain from "@/components/NavbarMain.vue";
export default {
  name: "HomeView",
  components: {
    NavbarMain,
  },
  data() {
    return {
      current: null,
      pushedBtn: null,
      items: [
        {
          id: 1,
          icon: "https://cdn3d.iconscout.com/3d/premium/thumb/graduate-student-4346323-3600796.png",
          title: "Student",
          router: "/student",
        },
        {
          id: 2,
          icon: "https://cdn3d.iconscout.com/3d/premium/thumb/man-sleeping-on-the-sofa-5513550-4602545.png",
          title: "Leave",
          router: "/leave",
        },
        {
          id: 3,
          icon: "https://cdn3d.iconscout.com/3d/premium/thumb/businessman-3635279-3038678.png",
          title: "Stuff",
          router: "/stuff",
        },
        {
          id: 4,
          icon: "https://free3dicon.com/wp-content/uploads/2022/08/Hotel-264x264.png",
          title: "Dormitory",
          router: "/dormitory",
        },
        {
          id: 5,
          icon: "https://cdn3d.iconscout.com/3d/free/thumb/approve-badge-5658962-4715768.png",
          title: "Attendance",
          router: "/attendance",
        },
        {
          id: 6,
          icon: "https://cdn3d.iconscout.com/3d/premium/thumb/student-loan-6248022-5117351.png",
          title: "Fees",
          router: "/fees",
        },
        {
          id: 7,
          icon: "https://cdn3d.iconscout.com/3d/premium/thumb/content-writing-5056394-4221961.png",
          title: "Content",
          router: "/content",
        },
        {
          id: 15,
          icon: "https://cdn3d.iconscout.com/3d/free/thumb/contact-us-3543012-2969399.png",
          title: "Notice",
          router: "/notice",
        },
        {
          id: 18,
          icon: "https://cdn3d.iconscout.com/3d/premium/thumb/books-4035950-3342375@0.png",
          title: "Library",
          router: "/library",
        },
        {
          id: 19,
          icon: "https://cdn3d.iconscout.com/3d/free/thumb/train-3985336-3317714.png",
          title: "Transport",
          router: "/transport",
        },
        {
          id: 20,
          icon: "https://cdn3d.iconscout.com/3d/free/thumb/settings-3543017-2969404.png",
          title: "Settings",
          router: "/settings",
        },
        {
          id: 21,
          icon: "https://cdn3d.iconscout.com/3d/premium/thumb/student-studying-on-laptop-while-sitting-on-big-books-5711045-4779537.png",
          title: "Child",
          router: "/child",
        },
        {
          id: 22,
          icon: "https://cdn3d.iconscout.com/3d/free/thumb/personal-computer-5163540-4316524.png",
          title: "Zoom",
          router: "/zoom",
        },
        {
          id: 23,
          icon: "https://cdn3d.iconscout.com/3d/free/thumb/diary-3985337-3317715.png",
          title: "Homework",
          router: "/homework",
        },
        {
          id: 24,
          icon: "https://cdn3d.iconscout.com/3d/premium/thumb/documents-in-drawer-6013672-4979967.png",
          title: "Study Materials",
          router: "/materials",
        },
        {
          id: 25,
          icon: "https://cdn3d.iconscout.com/3d/free/thumb/timeline-chart-3814628-3187476.png",
          title: "Timeline",
          router: "/timeline",
        },
        {
          id: 26,
          icon: "https://cdn3d.iconscout.com/3d/premium/thumb/wallet-3732310-3121282.png",
          title: "Wallet",
          router: "/wallet",
        },
        {
          id: 27,
          icon: "https://cdn3d.iconscout.com/3d/premium/thumb/exam-6344860-5220728.png",
          title: "Examination",
          router: "/examination",
        },
        {
          id: 28,
          icon: "https://cdn3d.iconscout.com/3d/premium/thumb/online-graduation-4805419-4002558.png",
          title: "Online Exam",
          router: "/online-exam",
        },
        {
          id: 29,
          icon: "https://cdn3d.iconscout.com/3d/premium/thumb/reviewing-candidate-profile-4652508-3892860.png",
          title: "Stuff / HR",
          router: "/hr",
        },
        {
          id: 30,
          icon: "https://cdn3d.iconscout.com/3d/premium/thumb/school-4035945-3342370@0.png",
          title: "Academy",
          router: "/academy",
        },
        {
          id: 31,
          icon: "https://cdn3d.iconscout.com/3d/premium/thumb/graduate-student-4346323-3600796.png",
          title: "Student Information",
          router: "/student-info",
        },
        // {
        //   id: 1,
        //   icon: "https://cdn3d.iconscout.com/3d/free/thumb/check-profile-5658946-4715752.png",
        //   // icon: "https://cdn3d.iconscout.com/3d/free/thumb/user-account-5658938-4715744.png",
        //   title: "Profile",
        //   router: "/about",
        // },
        // {
        //   id: 8,
        //   icon: "https://cdn3d.iconscout.com/3d/free/thumb/14th-feb-4926902-4098517.png",
        //   title: "Class Routine",
        // },
        // {
        //   id: 10,
        //   icon: "https://cdn3d.iconscout.com/3d/premium/thumb/approve-folder-6356591-5231796.png",
        //   title: "Downloads",
        // },
        // {
        //   id: 11,
        //   icon: "https://cdn3d.iconscout.com/3d/premium/thumb/clipboard-6356601-5231805.png",
        //   title: "My Documents",
        // },

        // {
        //   id: 16,
        //   icon: "https://cdn3d.iconscout.com/3d/free/thumb/book-4573596-3802605.png",
        //   title: "Subjects",
        // },
        // {
        //   id: 17,
        //   icon: "https://cdn3d.iconscout.com/3d/free/thumb/male-professor-3142511-2617475.png",
        //   title: "Teacher",
        // },
        // {
        //   id: 20,
        //   icon: "https://cdn3d.iconscout.com/3d/free/thumb/cryptocurrency-certificate-3678203-3061807@0.png",
        //   title: "To Do",
        // },
        // {
        //   id: 21,
        //   icon: "https://cdn3d.iconscout.com/3d/free/thumb/chat-information-5658928-4715734.png",
        //   title: "About",
        // },
      ],
    };
  },

  methods: {
    openRoute(item) {
      this.$router.push(item.router);

      // save to local storage
      this.current = item.id;
      localStorage.setItem("pushedBtn", JSON.stringify(item));
    },
  },
};
</script>

<style scoped>
#navbar {
  background-image: url("../assets/nav-bg.jpg");
  background-size: cover;
}

.activeList {
  background: linear-gradient(to top, #7d32fd, #c439d7);
  color: #fff !important;
}

.main-content .card:last-child {
  margin-bottom: 50px;
}
</style>
