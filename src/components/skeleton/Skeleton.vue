<template>
  <div
    v-if="variant == 'circle'"
    class="animate-pulse h-10 w-10 rounded-full bg-[#DDDDDD]"
    v-bind="$attrs"
  ></div>

  <div
    v-if="variant == 'line'"
    class="animate-pulse h-2 w-full rounded-xl bg-[#DDDDDD]"
    v-bind="$attrs"
  ></div>
</template>

<script setup lang="ts">
import type { SkeletonProps } from '@/@types/skeleton'

const { variant } = defineProps<SkeletonProps>()
</script>

<style scoped></style>
