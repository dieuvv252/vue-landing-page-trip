<template>
  <span
    id="magic"
    ref="container"
    class="block text-[#353945] text-2xl font-bold mt-4 mb-2 w-full text-center"
    v-bind="$attrs"
    >{{ intialNumber }}</span
  >
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const intialNumber = ref(0)
const container = ref<HTMLElement | null>(null)

const { maxNumber, jumpNumber, timeJump } = withDefaults(
  defineProps<{
    maxNumber: number
    jumpNumber: number
    timeJump?: number
  }>(),
  {
    timeJump: 50
  }
)

onMounted(() => {
  let timer: number | undefined

  const handleScroll = () => {
    const element = container.value
    if (element) {
      const rect = element.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0

      if (isVisible) {
        timer = setInterval(counting, timeJump)
      }
    }
  }

  const counting = () => {
    if (intialNumber.value >= maxNumber) {
      intialNumber.value = maxNumber

      clearInterval(timer)
      window.removeEventListener('scroll', handleScroll)
    } else {
      intialNumber.value += Math.ceil(Math.random() * jumpNumber)
    }
  }

  window.addEventListener('scroll', handleScroll)

  return () => {
    clearInterval(timer)
  }
})
</script>

<style scoped></style>
