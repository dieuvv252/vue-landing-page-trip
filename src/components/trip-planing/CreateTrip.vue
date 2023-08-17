<template>
  <div class="md:flex">
    <!-- top -->
    <div class="w-full bg-[#FEE2B6] rounded-[39px] py-10">
      <div
        class="mx-8 sm:mx-11 xl:mx-16 bg-[#3B71FE] text-white py-4 px-5 md:px-4 rounded-tl-[20px] rounded-tr-[20px]"
      >
        <h5 class="text-lg font-semibold mb-1.5">Create Your Trip</h5>
        <p class="text-[#F4F5F6] text-base font-normal mb-3">Set up all trip</p>
        <div class="flex bg-white items-center py-2 px-1 rounded-xl mb-3">
          <input
            type="text"
            placeholder="Plan in trip"
            class="placeholder:text-black placeholder:font-bold py text-black text-sm sm:text-base outline-none flex-1 w-full"
          />
          <span class="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.32243 4.76793C9.58784 4.52294 10.0016 4.53948 10.2466 4.80489L12.3595 7.09386C12.5908 7.34438 12.5908 7.73053 12.3595 7.98105L10.2466 10.2701C10.0016 10.5355 9.58784 10.552 9.32243 10.3071C9.05703 10.0621 9.04047 9.6483 9.28546 9.38289L10.3852 8.19146L4.03095 8.19146C3.66976 8.19146 3.37695 7.89866 3.37695 7.53746C3.37695 7.17627 3.66976 6.88346 4.03095 6.88346L10.3852 6.88346L9.28547 5.69208C9.04048 5.42668 9.05702 5.01292 9.32243 4.76793Z"
                fill="#3B71FE"
              />
            </svg>
          </span>
        </div>

        <div class="flex items-center mb-2">
          <input type="radio" class="mr-2" id="account" name="trip" />
          <label for="account">Set Up your Account</label>
        </div>
        <p class="mb-2">Book your best exprience</p>
        <div class="flex items-center mb-2">
          <input
            type="radio"
            class="mr-2 focus:ring-black-500 focus:right-2"
            id="plan"
            name="trip"
            checked
          />
          <label for="plan">Day by day Plan</label>
        </div>
        <p>Book your best exprience</p>
      </div>
      <div class="mx-8 sm:mx-11 xl:mx-16 bg-white py-4 px-5 rounded-bl-[20px] rounded-br-[20px]">
        <h5><span class="font-bold text-3xl">$50.00 </span>/ per Trip</h5>
        <p class="text-[#E6E8EC]">Book your best exprience</p>
      </div>
    </div>
    <!-- bottom -->

    <div class="mt-8 sm:ml-16">
      <h3 class="text-2xl font-medium mb-3">Book Easy 3 Steps</h3>
      <p class="font-light text-sm mb-3">
        Planning a trip is sometimes not easy. But Trip Plan will help you to manage time and budget
        for your journey! There are only 3 steps: Create an account, choose your destination city.
      </p>
      <ul class="flex flex-col mb-2">
        <li class="inline-flex items-center mb-4">
          <span class="h-4 w-4 border-4 rounded-full block border-[#3B71FE] mr-2"></span>
          <span class="font-bold"> Set Up your Account </span>
        </li>

        <li class="inline-flex items-center mb-4">
          <span class="h-4 w-4 border-4 rounded-full block border-[#3B71FE] mr-2"></span>
          <span class="font-bold"> Respond to Private requests </span>
        </li>

        <li class="inline-flex items-center mb-4">
          <span class="h-4 w-4 border-4 rounded-full block border-[#3B71FE] mr-2"> </span>

          <span class="font-bold"> Book your Trip </span>
        </li>
      </ul>

      <div class="border-b-2 border-dashed mb-4"></div>

      <p class="text-sm mb-4">
        “Plan your trip with a 3-step trip plan. Check in out at a glance, select hotel rooms on the
        go, and create a packing list”
      </p>

      <div class="flex items-center">
        <Avatar
          url="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
          class="mr-3 h-[50px] w-[50px]"
        ></Avatar>
        <div>
          <p class="font-bold text-sm">Steve Jobs</p>
          <p class="text-sm text-[#777E90]">Co-Founder and CEO</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from '../avatar/Avatar.vue'
</script>

<style scoped></style>
