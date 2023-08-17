<template>
  <div class="md:flex-row-reverse md:flex">
    <!-- top -->
    <div class="bg-white rounded-3xl px-5 py-5 2xl:flex-[0.6]">
      <div class="flex items-center mb-5">
        <Avatar
          url="https://images.unsplash.com/photo-1542887800-faca0261c9e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=727&q=80"
          class="h-12 w-12"
        ></Avatar>
        <div class="ml-4">
          <h2 class="font-semibold text-2xl">Hey! Welcome to Airtrav</h2>
          <p class="text-[#777E90] text-sm">Please Select to one</p>
        </div>
      </div>

      <div class="w-full bg-[#DDDDDD] rounded-3xl p-4">
        <div class="py-2 px-2 bg-white rounded-2xl relative">
          <div class="flex items-center">
            <Skeleton variant="circle" class="w-12"></Skeleton>
            <div class="ml-4 w-full">
              <Skeleton variant="line" class="w-2/4 mb-2"></Skeleton>
              <Skeleton variant="line" class="w-full"></Skeleton>
            </div>
          </div>

          <div class="mt-4">
            <Skeleton variant="line" class="w-2/4 mb-2"></Skeleton>
            <Skeleton variant="line" class="w-full"></Skeleton>
            <Skeleton variant="line" class="w-full mt-2"></Skeleton>
          </div>

          <div class="absolute fly">
            <span
              class="block after:content-['Book'] after:bg-[#FA8F54] after:px-5 after:py-2 after:rounded-lg relative after:absolute after:left-2 after:text-white after:font-bold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
              >
                <path
                  d="M0.436827 2.78032C0.267443 1.50249 1.48462 0.482438 2.71339 0.872456L10.8233 3.44657C12.1459 3.86638 12.4847 5.58035 11.4212 6.47161L4.42925 12.3312C3.36575 13.2224 1.73708 12.5894 1.55476 11.214L0.436827 2.78032Z"
                  fill="#FA8F54"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="py-2 px-2 bg-white rounded-2xl mt-4">
          <div class="flex items-center">
            <Skeleton variant="circle" class="w-12"></Skeleton>
            <div class="ml-4 w-full">
              <Skeleton variant="line" class="w-2/4 mb-2"></Skeleton>
              <Skeleton variant="line" class="w-full"></Skeleton>
            </div>
          </div>

          <div class="mt-4">
            <Skeleton variant="line" class="w-2/4 mb-2"></Skeleton>
            <Skeleton variant="line" class="w-full"></Skeleton>
            <Skeleton variant="line" class="w-full mt-2"></Skeleton>
          </div>
        </div>
      </div>
    </div>

    <!-- bottom -->
    <div class="mt-7 md:flex-1 md:overflow-hidden md:mr-10">
      <h1 class="text-2xl mb-3 font-medium">Easy Trip Booking Website</h1>
      <p class="mb-3 text-sm text-[#777E90] xl:w-[75%]">
        A new way to book travel online, saving you time. With trip, There are no confusing
        spreadsheets or complicated searches. We just ask the right questions, find the best deal
        for you, then book it.
      </p>

      <div class="w-full overflow-x-auto flex">
        <div
          class="px-4 py-5 bg-white rounded-xl w-[200px] mr-4"
          v-for="item in listWebsiteBooking"
          :key="item.id"
        >
          <Avatar :url="item.urlImage" class="mb-2"></Avatar>

          <a class="mb-2 font-bold text-xl block" href="#">{{ item.title }}</a>

          <p class="text-[#777E90] w-[140px] text-sm">{{ item.rateString }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, reactive } from 'vue'
import Avatar from '../avatar/Avatar.vue'
import Skeleton from '../skeleton/Skeleton.vue'

const listWebsiteBooking = reactive([
  {
    id: 1,
    urlImage:
      'https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    title: 'Trip Advisor',
    rateString: 'Cheap Flights Amazing Experiences'
  },
  {
    id: 2,
    urlImage:
      'https://images.unsplash.com/photo-1632413190065-bc4dd198aa2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=642&q=80',
    title: 'Turkish Kargo',
    rateString: 'Best Flights Amazing Services'
  },
  {
    id: 3,
    urlImage:
      'https://images.unsplash.com/photo-1529612700005-e35377bf1415?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Arbn',
    rateString: 'Choose From a Wide Range of Properties Which Booking.'
  },
  {
    id: 4,
    urlImage:
      'https://images.unsplash.com/photo-1454779132693-e5cd0a216ed3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80',
    title: 'Itata',
    rateString: 'Cheap Flights Amazing Experiences'
  }
])

const position = reactive<{ x: number; y: number }>({ x: 33.33, y: 50 })

const updatePosition = () => {
  position.x = Math.floor(Math.random() * (50 - 20 + 1)) + 30
  position.y = Math.floor(Math.random() * (50 - 20 + 1)) + 50
}

const classPosition = computed(() => {
  return {
    bottom: `${position.x}%`,
    right: `${position.y}%`
  }
})

onMounted(() => {
  const timer = setInterval(() => {
    updatePosition()
  }, 1000)

  return () => {
    clearInterval(timer)
  }
})
</script>

<style scoped>
.fly {
  bottom: v-bind('classPosition.bottom');
  right: v-bind('classPosition.right');
  transition: all 0.2s;
}
</style>
