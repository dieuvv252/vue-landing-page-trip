<script setup lang="ts">
import ButtonCustom from '@/components/button/ButtonCustom.vue'
import notificationIcon from '@/assets/icon/notification.svg'
import Avatar from '../avatar/Avatar.vue'
import ButtonPrimary from '../button/ButtonPrimary.vue'
import NavMobile from './NavMobile.vue'
import { ref } from 'vue'

const isOpenNavMobile = ref(false)

const handleOpenNavMobile = () => {
  isOpenNavMobile.value = true
}

const handleCloseNavMobile = () => {
  isOpenNavMobile.value = false
}
</script>

<template>
  <div class="px-6 py-3 lg:py-7 lg:px-16">
    <div class="h-full w-full flex items-center justify-between">
      <!-- logo -->
      <div class="flex items-center">
        <span class="bg-primary h-10 w-10 flex justify-center items-center rounded-xl">
          <svg
            width="21"
            height="25"
            viewBox="0 0 21 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="bg-inherit"
          >
            <g id="logo icon">
              <path
                id="Vector 1"
                d="M2.51285 14.3138L7.42839 14.1693L9.02104 10.7185C9.1915 10.3492 8.87382 9.9456 8.47681 10.0342C7.15859 10.3282 5.30331 10.8151 4.26172 11.3359C3.26156 11.836 2.51148 12.8675 2.08182 13.6566C1.91103 13.9703 2.15583 14.3243 2.51285 14.3138Z"
                fill="white"
              />
              <path
                id="Vector 2"
                d="M18.619 23.628L14.4042 16.2522C14.0338 15.604 13.1092 15.5743 12.6953 16.1956C11.4016 18.1376 9.60367 20.7833 8.76153 21.8359C7.69486 23.1693 6.53931 23.3915 6.09486 23.3359C4.87265 23.2804 2.0949 23.0693 0.761565 22.6693C-0.571768 22.2693 0.12166 21.4507 0.761565 21.1693C1.52536 20.8333 3.42823 20.2359 4.76157 19.8359C6.0949 19.436 7.0949 17.8915 7.42823 17.1693L12.4282 7.66919C13.706 5.05808 16.7282 -0.130812 18.5949 0.00252097C20.4616 0.135854 19.9282 2.16919 19.4282 3.16919L16.7571 8.98285C16.6528 9.20992 16.6367 9.46605 16.713 9.70401C17.6984 12.7776 19.5828 18.6717 20.0949 20.3359C20.5188 21.7134 19.918 22.9716 19.3468 23.709C19.1509 23.9619 18.7777 23.9057 18.619 23.628Z"
                fill="white"
              />
            </g>
          </svg>
        </span>
        <p class="text-base font-bold md:text-xl text-primary ml-3">Airtrav</p>
      </div>

      <!-- menu -->
      <div class="hidden sm:block">
        <nav class="relative z-10">
          <ul class="flex gap-x-5">
            <li class="inline-block text-primary">
              <router-link to="/" active-class="text-[#F5B318]" class="font-medium"
                >Things To Do</router-link
              >
            </li>
            <li class="inline-block text-primary">
              <router-link to="/tour" active-class="text-[#F5B318]" class="font-medium"
                >Tour</router-link
              >
            </li>
            <li class="inline-block text-primary">
              <router-link to="/login" active-class="text-[#F5B318]" class="font-medium"
                >Blog</router-link
              >
            </li>
          </ul>
        </nav>
      </div>

      <!-- setting -->
      <div>
        <div class="flex">
          <div class="flex items-center">
            <p class="text-[#777E90] font-bold mr-2">USD</p>
            <p class="text-[#777E90] font-bold">FAQ</p>

            <button-custom
              :urlSvgIcon="notificationIcon"
              class="border-none !px-0 !py-0 focus:border-none focus:outline-none h-8 w-8 flex justify-center items-center"
            >
            </button-custom>
          </div>

          <div class="h-[32px] w-[2px] bg-[#B1B5C3] mx-2 sm:mx-4"></div>

          <div>
            <div class="flex justify-center items-center gap-x-2">
              <Avatar
                url="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
              ></Avatar>

              <ButtonPrimary
                class="sm:hidden cursor-pointer relative z-50"
                @click="handleOpenNavMobile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 8C4.44772 8 4 8.44772 4 9C4 9.55228 4.44772 10 5 10H19C19.5523 10 20 9.55228 20 9C20 8.44772 19.5523 8 19 8H5Z"
                    fill="#777E91"
                  />
                  <path
                    d="M5 14C4.44772 14 4 14.4477 4 15C4 15.5523 4.44772 16 5 16H19C19.5523 16 20 15.5523 20 15C20 14.4477 19.5523 14 19 14H5Z"
                    fill="#777E91"
                  />
                </svg>
              </ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- nav mobile -->
  <Transition name="slide-fade">
    <NavMobile
      :class="{ block: isOpenNavMobile, hidden: !isOpenNavMobile }"
      @close="handleCloseNavMobile"
      v-if="isOpenNavMobile"
    />
  </Transition>
</template>
<style scope>
/* css for navbar mobile */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
