<template>
    <div>
        <v-select
        :options="options1"
        :reduce="(item) => item.id"
        label="label"
        class="w-100 mb-2"
        placeholder="Select a class"
      />
      <v-select
        :options="options2"
        :reduce="(item) => item.id"
        label="label"
        class="w-100 mb-2"
        placeholder="Select a class"
      />
    </div>
</template>

<script>
</script>