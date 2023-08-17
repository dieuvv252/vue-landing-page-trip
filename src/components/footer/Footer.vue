<template>
  <footer class="px-6 lg:px-32 w-full mt-7">
    <div class="w-full sm:grid sm:grid-cols-2 gap-8 lg:grid-cols-4">
      <!-- 1 -->
      <div>
        <div class="flex items-center mb-4">
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
        <p class="mb-4">
          Similarly, a loan taken out to buy a car may be secured by the car. The duration of the
          loan.
        </p>

        <div class="px-4 py-2 border rounded-3xl overflow-hidden flex">
          <input
            type="text"
            class="flex-1 border-none outline-none"
            placeholder="Enter your email"
          />
          <ButtonPrimary class="w-12 h-12 bg-primary flex justify-center items-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="24"
              viewBox="0 0 23 24"
              fill="none"
              class="w-full"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.5032 7.1316C13.8921 6.7726 14.4984 6.79685 14.8574 7.18576L17.9535 10.5399C18.2924 10.907 18.2924 11.4728 17.9535 11.8399L14.8574 15.1941C14.4984 15.583 13.8921 15.6073 13.5032 15.2483C13.1143 14.8893 13.09 14.283 13.449 13.8941L15.0605 12.1482L5.74935 12.1482C5.22008 12.1482 4.79101 11.7192 4.79101 11.1899C4.79101 10.6606 5.22008 10.2316 5.74935 10.2316L15.0605 10.2316L13.449 8.4858C13.09 8.09689 13.1143 7.4906 13.5032 7.1316Z"
                fill="white"
              />
            </svg>
          </ButtonPrimary>
        </div>
      </div>

      <!-- 2 -->
      <div class="my-5 md:my-0">
        <h4 class="text-3xl mb-4">Services</h4>
        <ul>
          <li class="mb-3 text-[#777E90]">Trip Planner</li>
          <li class="mb-3 text-[#777E90]">Tour Planning</li>
          <li class="mb-3 text-[#777E90]">Tour Guide</li>
          <li class="mb-3 text-[#777E90]">Tour Package</li>
          <li class="mb-3 text-[#777E90]">Tour advice</li>
        </ul>
      </div>

      <!-- 3 -->
      <div class="my-5 md:my-0">
        <h4 class="text-3xl mb-4">Support</h4>
        <ul>
          <li class="mb-3 text-[#777E90]">Account</li>
          <li class="mb-3 text-[#777E90]">Legal</li>
          <li class="mb-3 text-[#777E90]">Contact</li>
          <li class="mb-3 text-[#777E90]">Terms & Condition</li>
          <li class="mb-3 text-[#777E90]">Privacy Policy</li>
        </ul>
      </div>

      <!-- 4 -->
      <div class="my-5 md:my-0">
        <h4 class="text-3xl mb-4">Business</h4>
        <ul>
          <li class="mb-3 text-[#777E90]">Success</li>
          <li class="mb-3 text-[#777E90]">About Locato</li>
          <li class="mb-3 text-[#777E90]">Blog</li>
          <li class="mb-3 text-[#777E90]">Information</li>
          <li class="mb-3 text-[#777E90]">Travel Guide</li>
        </ul>
      </div>
    </div>

    <div class="h-[2px] w-full bg-[#E6E8EC] my-6">
      <p class="py-4 text-[#B1B5C3]">Copyright© 2021 UIHUT LLC. All rights reserved</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import ButtonPrimary from '../button/ButtonPrimary.vue'
</script>

<style scoped></style>
