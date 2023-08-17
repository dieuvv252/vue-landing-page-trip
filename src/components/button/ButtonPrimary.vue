<template>
  <button @click="handleClick" type="button">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click')
}
</script>

<style scoped></style>
