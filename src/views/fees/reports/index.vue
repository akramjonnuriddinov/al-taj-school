<template>
    <div class="content">
      <button
        v-for="item in feeList"
        :key="item.id"
        class="card"
        @click="$router.push('/fees/'+item.router+'/'+item.id)"
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
              title: "Duo Report",
              router: "/report"
            },
            {
              id: 2,
              title: "Fine Report",
              router: "/report"
            },
            {
              id: 3,
              title: "Payment Report",
              router: "/report"
            },
            {
              id: 4,
              title: "Balance Report",
              router: "/report"
            },
            {
              id: 5,
              title: "Waiver Report",
              router: "/report"
            },
          ]
        }
      }
    }
  </script>
  