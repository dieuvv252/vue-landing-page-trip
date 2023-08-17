<script setup lang="ts">
defineProps(['urlSvgIcon', 'altText'])
</script>

<template>
  <button type="button" class="px-9 py-3 border rounded-xl hover:bg-slate-100" v-bind="$attrs">
    <slot>
      <img :src="urlSvgIcon" :alt="altText" />
    </slot>
  </button>
</template>
