<template>
  <div>
    <b-row v-for="child in 5" :key="child" class="mb-2 text-start text-purple border-bottom pb-1">
      <b-col cols="2">
        <b-avatar src="" class="w-75 border rounded-circle" />
      </b-col>
      <b-col cols="10">
        <div>Ibn Umar</div>
        <div class="fw-light">
            1 (A)
        </div>
      </b-col>
    </b-row>
  </div>
</template>
