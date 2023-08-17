<script setup lang="ts">
const { url } = defineProps<{
  url: string
}>()
</script>
<template>
  <div class="w-8 h-8 rounded-full overflow-hidden">
    <img :src="url" alt="avatar" v-bind="$attrs" class="w-full h-full object-cover" />
  </div>
</template>
<styled scoped></styled>
