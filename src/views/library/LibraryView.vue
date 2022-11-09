<template>
  <div class="content">
    <button class="card" @click="$router.push('/library/add')">
      <img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/add-button-5396205-4511591.png"
        style="width: 70%"
      />
      Add Book
    </button>
    <button class="card" @click="$router.push('/library/list')">
      <img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/shopping-list-5168446-4323764.png"
        style="width: 70%"
      />
      Book List
    </button>
    <button class="card" @click="$router.push('/library/member')">
      <img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/add-button-5396205-4511591.png"
        style="width: 70%"
      />
      Add Member
    </button>
  </div>
</template>
