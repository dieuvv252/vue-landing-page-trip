<template>
  <div class="sm:grid sm:grid-cols-2 items-center">
    <div class="sm:w-[80%]">
      <h2 class="text-xl font-bold mb-3">Ready for 14 days Trip Plan</h2>
      <p class="font-light text-sm">
        The secret of good trip planning is to plan in advance, and we can't get much more advanced
        than 14 days.
      </p>

      <ButtonPrimary class="px-7 bg-primary text-white py-2 rounded-lg font-bold mt-3"
        >Go plan</ButtonPrimary
      >
    </div>

    <div class="mt-44 relative">
      <div class="flex justify-center items-center absolute -top-[20%] sm:-top-[25%] w-full left-0">
        <img src="../../assets/img/trip-plan.png" alt="trip-plan" class="object-cover" />
      </div>

      <div class="bg-white px-6 py-7 rounded-xl w-full relative rounded-bl-none rounded-br-none">
        <div class="relative z-30 bg-white">
          <div
            class="shadow-lg shadow-blue-50 flex justify-between items-center px-4 py-2 mb-3 rounded-lg"
          >
            <ButtonPrimary class="bg-[#D8E3FF] w-9 h-9 flex items-center justify-center rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M13.3478 10.013H12.3781V8.55843C12.3781 8.42984 12.3271 8.30652 12.2361 8.21559C12.1452 8.12466 12.0219 8.07358 11.8933 8.07358H8.9842V7.10389H9.95389C10.0825 7.10389 10.2058 7.0528 10.2967 6.96188C10.3877 6.87095 10.4387 6.74763 10.4387 6.61904V3.70995C10.4387 3.58136 10.3877 3.45803 10.2967 3.36711C10.2058 3.27618 10.0825 3.2251 9.95389 3.2251H7.0448C6.91621 3.2251 6.79289 3.27618 6.70196 3.36711C6.61104 3.45803 6.55995 3.58136 6.55995 3.70995V6.61904C6.55995 6.74763 6.61104 6.87095 6.70196 6.96188C6.79289 7.0528 6.91621 7.10389 7.0448 7.10389H8.0145V8.07358H5.10541C4.97682 8.07358 4.8535 8.12466 4.76257 8.21559C4.67164 8.30652 4.62056 8.42984 4.62056 8.55843V10.013H3.65086C3.52227 10.013 3.39895 10.0641 3.30802 10.155C3.2171 10.2459 3.16602 10.3692 3.16602 10.4978V13.4069C3.16602 13.5355 3.2171 13.6588 3.30802 13.7498C3.39895 13.8407 3.52227 13.8918 3.65086 13.8918H6.55995C6.68854 13.8918 6.81187 13.8407 6.90279 13.7498C6.99372 13.6588 7.0448 13.5355 7.0448 13.4069V10.4978C7.0448 10.3692 6.99372 10.2459 6.90279 10.155C6.81187 10.0641 6.68854 10.013 6.55995 10.013H5.59026V9.04328H11.4084V10.013H10.4387C10.3102 10.013 10.1868 10.0641 10.0959 10.155C10.005 10.2459 9.95389 10.3692 9.95389 10.4978V13.4069C9.95389 13.5355 10.005 13.6588 10.0959 13.7498C10.1868 13.8407 10.3102 13.8918 10.4387 13.8918H13.3478C13.4764 13.8918 13.5997 13.8407 13.6907 13.7498C13.7816 13.6588 13.8327 13.5355 13.8327 13.4069V10.4978C13.8327 10.3692 13.7816 10.2459 13.6907 10.155C13.5997 10.0641 13.4764 10.013 13.3478 10.013ZM6.07511 10.9827V12.9221H4.13571V10.9827H6.07511ZM7.52965 6.13419V4.19479H9.46905V6.13419H7.52965ZM12.863 12.9221H10.9236V10.9827H12.863V12.9221Z"
                  fill="#3B71FE"
                />
              </svg>
            </ButtonPrimary>

            <div class="flex-1 ml-3">
              <h5 class="text-base font-semibold">Check your Route</h5>
              <div class="flex items-center my-1">
                <Avatar
                  url="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                ></Avatar>
                <span class="ml-2 text-xs text-[#777E90]">Rebecca</span>
              </div>

              <p class="p-1 bg-[#F4F5F9] w-[43%] rounded-lg text-xs text-[#FF6370]">
                13 Day,6 hours
              </p>
            </div>

            <ButtonPrimary class="bg-[#FEE9DD] px-3 py-1.5 rounded-lg text-[#FA8F54] text-xs">
              Check now
            </ButtonPrimary>
          </div>

          <div class="shadow-lg flex justify-between items-center px-4 py-2 mb-3 rounded-lg">
            <ButtonPrimary class="bg-[#D8E3FF] w-9 h-9 flex items-center justify-center rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.16403 4.42542C6.13058 4.76231 5.84634 5.02542 5.50065 5.02542C5.15496 5.02542 4.87072 4.76231 4.83728 4.42542H3.16732V5.49209H13.834V4.42542H12.764C12.7306 4.76231 12.4463 5.02542 12.1006 5.02542C11.755 5.02542 11.4707 4.76231 11.4373 4.42542H6.16403ZM6.16403 4.42542H11.4373H6.16403ZM4.83398 3.09209V2.55876C4.83398 2.19057 5.13246 1.89209 5.50065 1.89209C5.86884 1.89209 6.16732 2.19057 6.16732 2.55876V3.09209H11.434V2.55876C11.434 2.19057 11.7325 1.89209 12.1007 1.89209C12.4688 1.89209 12.7673 2.19057 12.7673 2.55876V3.09209H13.9007C14.6002 3.09209 15.1673 3.6592 15.1673 4.35876V13.2254C15.1673 14.33 14.2719 15.2254 13.1673 15.2254H3.83398C2.72941 15.2254 1.83398 14.33 1.83398 13.2254V4.35876C1.83398 3.6592 2.40109 3.09209 3.10065 3.09209H4.83398ZM13.834 6.82542H3.16732V13.2254C3.16732 13.5936 3.46579 13.8921 3.83398 13.8921H13.1673C13.5355 13.8921 13.834 13.5936 13.834 13.2254V6.82542ZM4.90065 9.22542C4.53246 9.22542 4.23398 8.92695 4.23398 8.55876C4.23398 8.19057 4.53246 7.89209 4.90065 7.89209H7.30065C7.66884 7.89209 7.96732 8.19057 7.96732 8.55876C7.96732 8.92695 7.66884 9.22542 7.30065 9.22542H4.90065ZM4.90065 11.6254C4.53246 11.6254 4.23398 11.3269 4.23398 10.9588C4.23398 10.5906 4.53246 10.2921 4.90065 10.2921H9.70065C10.0688 10.2921 10.3673 10.5906 10.3673 10.9588C10.3673 11.3269 10.0688 11.6254 9.70065 11.6254H4.90065Z"
                  fill="#3B71FE"
                />
              </svg>
            </ButtonPrimary>

            <div class="flex-1 ml-3">
              <h5 class="text-base font-semibold">Set Day by day Plan</h5>
              <div class="flex items-center my-1">
                <Avatar
                  url="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=699&q=80"
                ></Avatar>
                <span class="ml-2 text-xs text-[#777E90]">Mc colaman</span>
              </div>

              <p class="p-1 bg-[#F4F5F9] w-[43%] rounded-lg text-xs text-[#FF6370]">Day by day</p>
            </div>

            <ButtonPrimary class="bg-[#FEE9DD] px-3 py-1.5 rounded-lg text-[#FA8F54] text-xs">
              Check now
            </ButtonPrimary>
          </div>

          <div class="shadow-lg flex justify-between items-center px-4 py-2 mb-3 rounded-lg">
            <ButtonPrimary class="bg-[#D8E3FF] w-9 h-9 flex items-center justify-center rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M9.23398 9.75859H6.83398C6.67485 9.75859 6.52224 9.82181 6.40972 9.93433C6.2972 10.0469 6.23398 10.1995 6.23398 10.3586C6.23398 10.5177 6.2972 10.6703 6.40972 10.7829C6.52224 10.8954 6.67485 10.9586 6.83398 10.9586H9.23398C9.39312 10.9586 9.54573 10.8954 9.65825 10.7829C9.77077 10.6703 9.83399 10.5177 9.83399 10.3586C9.83399 10.1995 9.77077 10.0469 9.65825 9.93433C9.54573 9.82181 9.39312 9.75859 9.23398 9.75859ZM11.634 3.75859H10.926C10.8022 3.40846 10.5731 3.10519 10.2702 2.89036C9.96731 2.67552 9.60535 2.55964 9.23398 2.55859H8.03399C7.66262 2.55964 7.30066 2.67552 6.99775 2.89036C6.69483 3.10519 6.46577 3.40846 6.34198 3.75859H5.63398C5.15659 3.75859 4.69876 3.94824 4.36119 4.2858C4.02363 4.62337 3.83398 5.0812 3.83398 5.55859V12.7586C3.83398 13.236 4.02363 13.6938 4.36119 14.0314C4.69876 14.369 5.15659 14.5586 5.63398 14.5586H11.634C12.1114 14.5586 12.5692 14.369 12.9068 14.0314C13.2443 13.6938 13.434 13.236 13.434 12.7586V5.55859C13.434 5.0812 13.2443 4.62337 12.9068 4.2858C12.5692 3.94824 12.1114 3.75859 11.634 3.75859ZM7.43398 4.35859C7.43398 4.19946 7.4972 4.04685 7.60972 3.93433C7.72224 3.82181 7.87486 3.75859 8.03399 3.75859H9.23398C9.39312 3.75859 9.54573 3.82181 9.65825 3.93433C9.77077 4.04685 9.83399 4.19946 9.83399 4.35859V4.95859H7.43398V4.35859ZM12.234 12.7586C12.234 12.9177 12.1708 13.0703 12.0583 13.1829C11.9457 13.2954 11.7931 13.3586 11.634 13.3586H5.63398C5.47485 13.3586 5.32224 13.2954 5.20972 13.1829C5.0972 13.0703 5.03398 12.9177 5.03398 12.7586V5.55859C5.03398 5.39946 5.0972 5.24685 5.20972 5.13433C5.32224 5.02181 5.47485 4.95859 5.63398 4.95859H6.23398V5.55859C6.23398 5.71772 6.2972 5.87034 6.40972 5.98286C6.52224 6.09538 6.67485 6.15859 6.83398 6.15859H10.434C10.5931 6.15859 10.7457 6.09538 10.8582 5.98286C10.9708 5.87034 11.034 5.71772 11.034 5.55859V4.95859H11.634C11.7931 4.95859 11.9457 5.02181 12.0583 5.13433C12.1708 5.24685 12.234 5.39946 12.234 5.55859V12.7586ZM10.434 7.35859H6.83398C6.67485 7.35859 6.52224 7.42181 6.40972 7.53433C6.2972 7.64685 6.23398 7.79946 6.23398 7.95859C6.23398 8.11772 6.2972 8.27034 6.40972 8.38286C6.52224 8.49538 6.67485 8.55859 6.83398 8.55859H10.434C10.5931 8.55859 10.7457 8.49538 10.8582 8.38286C10.9708 8.27034 11.034 8.11772 11.034 7.95859C11.034 7.79946 10.9708 7.64685 10.8582 7.53433C10.7457 7.42181 10.5931 7.35859 10.434 7.35859Z"
                  fill="#3B71FE"
                />
              </svg>
            </ButtonPrimary>

            <div class="flex-1 ml-3">
              <h5 class="text-base font-semibold">Choose the Checklist</h5>
              <div class="flex items-center my-1">
                <Avatar
                  url="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                ></Avatar>
                <span class="ml-2 text-xs text-[#777E90]">Kattamic</span>
              </div>

              <p class="p-1 bg-[#F4F5F9] w-[43%] rounded-lg text-xs text-[#FF6370]">
                1 day full view
              </p>
            </div>

            <ButtonPrimary class="bg-[#FEE9DD] px-3 py-1.5 rounded-lg text-[#FA8F54] text-xs">
              Check now
            </ButtonPrimary>
          </div>

          <div class="shadow-lg flex justify-between items-center px-4 py-2 mb-3 rounded-lg">
            <ButtonPrimary class="bg-[#D8E3FF] w-9 h-9 flex items-center justify-center rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
              >
                <path
                  d="M13.0685 6.43402L9.8093 3.63204C9.51053 3.36998 9.12374 3.2251 8.72289 3.2251C8.32204 3.2251 7.93525 3.36998 7.63648 3.63204L4.37724 6.43402C4.2047 6.58535 4.06702 6.77098 3.97335 6.97857C3.87969 7.18615 3.8322 7.41092 3.83404 7.63791V12.2937C3.83404 12.7175 4.00573 13.124 4.31134 13.4237C4.61695 13.7234 5.03145 13.8918 5.46365 13.8918H11.9821C12.4143 13.8918 12.8288 13.7234 13.1344 13.4237C13.4401 13.124 13.6117 12.7175 13.6117 12.2937V7.63259C13.6128 7.40649 13.5649 7.18275 13.4713 6.97614C13.3777 6.76953 13.2404 6.58475 13.0685 6.43402ZM9.8093 12.8264H7.63648V10.1629C7.63648 10.0216 7.69371 9.88612 7.79558 9.78622C7.89745 9.68632 8.03562 9.6302 8.17968 9.6302H9.2661C9.41016 9.6302 9.54833 9.68632 9.6502 9.78622C9.75207 9.88612 9.8093 10.0216 9.8093 10.1629V12.8264ZM12.5253 12.2937C12.5253 12.435 12.4681 12.5704 12.3662 12.6703C12.2644 12.7702 12.1262 12.8264 11.9821 12.8264H10.8957V10.1629C10.8957 9.73905 10.724 9.33257 10.4184 9.03287C10.1128 8.73317 9.6983 8.5648 9.2661 8.5648H8.17968C7.74748 8.5648 7.33298 8.73317 7.02737 9.03287C6.72176 9.33257 6.55007 9.73905 6.55007 10.1629V12.8264H5.46365C5.31959 12.8264 5.18142 12.7702 5.07955 12.6703C4.97768 12.5704 4.92045 12.435 4.92045 12.2937V7.63259C4.92055 7.55695 4.93707 7.48221 4.96891 7.41332C5.00076 7.34443 5.0472 7.28298 5.10514 7.23307L8.36437 4.43641C8.4635 4.35101 8.59094 4.30391 8.72289 4.30391C8.85484 4.30391 8.98228 4.35101 9.08141 4.43641L12.3406 7.23307C12.3986 7.28298 12.445 7.34443 12.4769 7.41332C12.5087 7.48221 12.5252 7.55695 12.5253 7.63259V12.2937Z"
                  fill="#3B71FE"
                />
              </svg>
            </ButtonPrimary>

            <div class="flex-1 ml-3">
              <h5 class="text-base font-semibold">Specify Where to stay</h5>
              <div class="flex items-center my-1">
                <Avatar
                  url="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                ></Avatar>
                <span class="ml-2 text-xs text-[#777E90]">Settram Nc</span>
              </div>

              <p class="p-1 bg-[#F4F5F9] w-[43%] rounded-lg text-xs text-[#FF6370]">Hotel view</p>
            </div>

            <ButtonPrimary class="bg-[#FEE9DD] px-3 py-1.5 rounded-lg text-[#FA8F54] text-xs">
              Check now
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from '../avatar/Avatar.vue'
import ButtonPrimary from '../button/ButtonPrimary.vue'
</script>

<style scoped></style>
