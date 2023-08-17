<template>
  <div
    class="px-9 py-5 rounded-3xl w-[300px] mr-2 md:mr-4 md:w-[350px] lg:w-[450px]"
    :class="attr.bgCard"
  >
    <div class="flex justify-center items-center mb-4">
      <ButtonPrimary class="px-3 py-3 rounded-full" :class="attr.bgButton">
        <slot></slot>
      </ButtonPrimary>
    </div>

    <p class="text-lg text-center leading-7 font-medium mb-8">
      {{ desc }}
    </p>
    <div class="flex justify-center items-center">
      <div class="inline-flex items-center">
        <ButtonPrimary class="flex items-center">
          <span> Learn more</span>

          <span class="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.0909 7.69575C14.4968 7.32114 15.1294 7.34645 15.504 7.75226L18.7348 11.2522C19.0884 11.6353 19.0884 12.2257 18.7348 12.6088L15.504 16.1088C15.1294 16.5146 14.4968 16.54 14.091 16.1654C13.6851 15.7908 13.6598 15.1581 14.0344 14.7523L15.716 12.9305L6 12.9305C5.44771 12.9305 5 12.4828 5 11.9305C5 11.3782 5.44771 10.9305 6 10.9305L15.716 10.9305L14.0344 9.10883C13.6598 8.70301 13.6851 8.07036 14.0909 7.69575Z"
                fill="#353945"
              />
            </svg>
          </span>
        </ButtonPrimary>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ButtonPrimary from '@/components/button/ButtonPrimary.vue'
import { useAttrs } from 'vue'

defineOptions({
  inheritAttrs: false
})

const { desc } = defineProps<{
  desc: string
}>()

const attr = useAttrs()
</script>

<style scoped></style>
