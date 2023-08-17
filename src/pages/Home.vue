<script setup lang="ts">
import Banner from '@/components/banner/Banner.vue'
import ContainerContent from '@/components/container/ContainerContent.vue'
import Nav from '@/components/nav/Nav.vue'
import Company from '@/components/company/Company.vue'
import TripPlaning from '@/components/trip-planing/TripPlaning.vue'
import CreateTrip from '@/components/trip-planing/CreateTrip.vue'
import ContainerFluid from '@/components/container/ContainerFluid.vue'
import Booking from '@/components/booking/Booking.vue'
import HowItWork from '@/components/how-it-work/HowItWork.vue'
import BestService from '@/components/best-service/BestService.vue'
import Feature from '@/components/feature/Feature.vue'
import TripPlaningVer2 from '@/components/trip-planing/TripPlaningVer2.vue'
import Footer from '@/components/footer/Footer.vue'
</script>

<template>
  <Nav />
  <ContainerContent>
    <Banner></Banner>
  </ContainerContent>

  <Company></Company>

  <ContainerContent class="2xl:mb-12">
    <TripPlaning></TripPlaning>
  </ContainerContent>

  <ContainerContent class="mt-7 2xl:mb-12">
    <CreateTrip></CreateTrip>
  </ContainerContent>

  <ContainerFluid class="mt-7 bg-[#EAF0FF]">
    <div class="px-6 lg:px-32 py-8 w-full">
      <Booking></Booking>
    </div>
  </ContainerFluid>

  <ContainerContent class="mt-7">
    <HowItWork></HowItWork>
  </ContainerContent>

  <ContainerFluid class="px-6 lg:px-32 py-8 w-full bg-[#3B71FE] text-white bg-circle">
    <BestService></BestService>
  </ContainerFluid>

  <ContainerContent class="mt-7">
    <Feature></Feature>
  </ContainerContent>

  <ContainerFluid class="px-6 lg:px-32 pt-8 w-full bg-[#fbf6c7]">
    <TripPlaningVer2></TripPlaningVer2>
  </ContainerFluid>

  <Footer></Footer>
</template>

<style scoped></style>
