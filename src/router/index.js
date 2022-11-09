import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Al-Taj School",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import("../views/AboutView.vue");
    },
  },

  // STUDENT
  {
    path: "/student",
    name: "Student",
    component: function () {
      return import("../views/student/StudentView.vue");
    },
  },

  {
    path: "/student-info",
    name: "Student Info",
    component: function () {
      return import("../views/student/StudentInfoView.vue");
    },
  },

  // LEAVE
  {
    path: "/leave",
    name: "Leave",
    component: function () {
      return import("../views/leave/Leave.vue");
    },
  },

  {
    path: "/leave/apply-leave",
    name: "Apply Leave",
    component: function () {
      return import("../views/leave/LeaveApply.vue");
    },
  },

  {
    path: "/leave/leave-list",
    name: "Leave List",
    component: function () {
      return import("../views/leave/LeaveList.vue");
    },
  },

  // SUBJECTS
  {
    path: "/subjects",
    name: "Subjects",
    component: function () {
      return import("../views/subjects/Subjects.vue");
    },
  },

  // TEACHER
  {
    path: "/teacher",
    name: "Teacher",
    component: function () {
      return import("../views/teacher/Teacher.vue");
    },
  },

  // STUFF
  {
    path: "/stuff",
    name: "Stuff",
    component: function () {
      return import("../views/stuffs/StuffsView.vue");
    },
  },
  {
    path: "/stuff/super-admin",
    name: "Super Admin",
    component: function () {
      return import("../views/stuffs/SuperAdminList.vue");
    },
  },
  {
    path: "/stuff/super-admin/:id",
    name: "Stuff Details",
    component: function () {
      return import("../views/stuffs/SuperAdmin.vue");
    },
  },

  // DOMINATORY
  {
    path: "/dormitory",
    name: "Dormitory",
    component: function () {
      return import("../views/dormitory/Dormitory.vue");
    },
  },

  {
    path: "/dormitory/add-dormitory",
    name: "Add Dormitory",
    component: function () {
      return import("../views/dormitory/AddDormitory.vue");
    },
  },
  {
    path: "/dormitory/add-room",
    name: "Add Room",
    component: function () {
      return import("../views/dormitory/AddRoom.vue");
    },
  },
  {
    path: "/dormitory/room-list",
    name: "Room List",
    component: function () {
      return import("../views/dormitory/RoomList.vue");
    },
  },

  // ATTENDANCE
  {
    path: "/attendance",
    name: "Attendance",
    component: function () {
      return import("../views/attendance/Attendance.vue");
    },
  },

  // FEES
  {
    path: "/fees",
    name: "Fees",
    component: function () {
      return import("../views/fees/Fees.vue");
    },
  },

  {
    path: "/fees/fees-group",
    name: "Fees Group",
    component: function () {
      return import("../views/fees/FeesGroup.vue");
    },
  },

  {
    path: "/fees/fees-invoice",
    name: "Fees Invoice",
    component: function () {
      return import("../views/fees/FeesInvoice.vue");
    },
  },

  {
    path: "/fees/fees-invoice/view/:id",
    name: "Fees Invoice View",
    component: function () {
      return import("../views/fees/FeesInvoiceView.vue");
    },
  },

  {
    path: "/fees/fees-invoice/transaction/:id",
    name: "Fees Invoice Transaction",
    component: function () {
      return import("../views/fees/FeesInvoiceTransaction.vue");
    },
  },

  {
    path: "/fees/fees-bank",
    name: "Fees Bank Payment",
    component: function () {
      return import("../views/fees/FeesBankPayment.vue");
    },
  },

  {
    path: "/fees/fees-reports",
    name: "Fees",
    component: function () {
      return import("../views/fees/reports/index.vue");
    },
  },

  {
    path: "/fees/report/:id",
    name: "Report",
    component: function () {
      return import("../views/fees/reports/Report.vue");
    },
  },

  // SETTINGS
  {
    path: "/settings",
    name: "Settings",
    component: function () {
      return import("../views/SettingsView.vue");
    },
  },

  // CONTENT

  {
    path: "/content",
    name: "Content",
    component: function () {
      return import("../views/content/ContentView.vue");
    },
  },

  {
    path: "/content/list",
    name: "Content List",
    component: function () {
      return import("../views/content/ContentList.vue");
    },
  },

  {
    path: "/content/add",
    name: "Add Content",
    component: function () {
      return import("../views/content/ContentAdd.vue");
    },
  },

  // NOTICE

  {
    path: "/notice",
    name: "Notice",
    component: function () {
      return import("../views/notice/NoticeView.vue");
    },
  },

  // LIBRARY

  {
    path: "/library",
    name: "Library",
    component: function () {
      return import("../views/library/LibraryView.vue");
    },
  },

  {
    path: "/library/add",
    name: "Library Add",
    component: function () {
      return import("../views/library/LibraryAdd.vue");
    },
  },

  {
    path: "/library/list",
    name: "Book List",
    component: function () {
      return import("../views/library/LibraryBookList.vue");
    },
  },

  {
    path: "/library/member",
    name: "Add Member",
    component: function () {
      return import("../views/library/LibraryAddMember.vue");
    },
  },

  // TRANSPORT

  {
    path: "/transport",
    name: "Transport",
    component: function () {
      return import("../views/transport/TransportView.vue");
    },
  },

  {
    path: "/transport/route",
    name: "Transport Route",
    component: function () {
      return import("../views/transport/TransportRoute.vue");
    },
  },

  {
    path: "/transport/vehicle",
    name: "Transport Vehicle",
    component: function () {
      return import("../views/transport/TransportVehicle.vue");
    },
  },

  {
    path: "/transport/assign-vehicle",
    name: "Assign Vehicle To Route",
    component: function () {
      return import("../views/transport/TransportAssignVehicle.vue");
    },
  },

  {
    path: "/transport/transport",
    name: "Transport",
    component: function () {
      return import("../views/transport/TransportTrans.vue");
    },
  },

  // CHILD

  {
    path: "/child",
    name: "Child",
    component: function () {
      return import("../views/child/ChildView.vue");
    },
  },

  {
    path: "/child/child",
    name: "Child List",
    component: function () {
      return import("../views/child/ChildList.vue");
    },
  },

  {
    path: "/child/about",
    name: "About",
    component: function () {
      return import("../views/child/ChildAbout.vue");
    },
  },

  // ZOOM
  {
    path: "/zoom",
    name: "Online Class",
    component: function () {
      return import("../views/zoom/ZoomView.vue");
    },
  },

  // HOMEWORK
  {
    path: "/homework",
    name: "Homework",
    component: function () {
      return import("../views/homework/HomeworkView.vue");
    },
  },

  // MATERIALS
  {
    path: "/materials",
    name: "Materials",
    component: function () {
      return import("../views/materials/MaterialsView.vue");
    },
  },

  // TIMELINE
  {
    path: "/timeline",
    name: "Timeline",
    component: function () {
      return import("../views/timeline/TimeLineView.vue");
    },
  },

  // WALLET
  {
    path: "/wallet",
    name: "My Wallet",
    component: function () {
      return import("../views/wallet/WalletView.vue");
    },
  },

  // EXAMINATION
  {
    path: "/examination",
    name: "Examination",
    component: function () {
      return import("../views/examination/ExaminationView.vue");
    },
  },

  {
    path: "/examination/schedule",
    name: "Schedule",
    component: function () {
      return import("../views/examination/ExaminationSchedule.vue");
    },
  },

  {
    path: "/examination/result",
    name: "Exam Result",
    component: function () {
      return import("../views/examination/ExaminationResult.vue");
    },
  },

  // ONLINE EXAM
  {
    path: "/online-exam",
    name: "Online Exam",
    component: function () {
      return import("../views/online-exam/OnlineExamView.vue");
    },
  },

  // HR
  {
    path: "/hr",
    name: "HR",
    component: function () {
      return import("../views/hr/HrView.vue");
    },
  },

  // ACADEMY
  {
    path: "/academy",
    name: "Academy",
    component: function () {
      return import("../views/academy/AcademyView.vue");
    },
  },

  // CHAT
  {
    path: "/chat",
    name: "Chat",
    component: function () {
      return import("../views/chat/ChatView.vue");
    },
  },

  {
    path: "/chat/:id",
    name: "Chat Room",
    component: function () {
      return import("../views/chat/ChatRoomView.vue");
    },
  },

  // 404
  {
    path: "*",
    name: "Page Not Found ",
    component: function () {
      return import("../views/404.vue");
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
