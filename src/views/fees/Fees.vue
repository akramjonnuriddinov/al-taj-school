<template>
  <div class="content">
    <button
      v-for="item in feeList"
      :key="item.id"
      class="card"
      @click="$router.push('/fees'+item.router)"
      >
      <img 
        style="width: 70%"
        src="https://cdn3d.iconscout.com/3d/premium/thumb/student-loan-6248022-5117351.png" />
        {{item.title}}
    </button>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        feeList: [
          {
            id: 1,
            title: "Fee Group",
            router: "/fees-group"
          },
          {
            id: 2,
            title: "Fee Type",
            router: "/fees-group"
          },
          {
            id: 3,
            title: "Fee Invoice",
            router: "/fees-invoice"
          },
          {
            id: 4,
            title: "Bank Payment",
            router: "/fees-bank"
          },
          {
            id: 5,
            title: "Reports",
            router: "/fees-reports"
          },
        ]
      }
    }
  }
</script>
