<template>
  <div
    class="fixed h-[100vh] w-[100vw] bg-slate-500 bg-opacity-30 z-50 top-0 left-0"
    @click.self="$emit('close')"
  >
    <div class="w-[60vw] h-[100vh] bg-white">
      <nav>
        <ul class="flex gap-y-5 flex-col text-center py-4">
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
            <router-link to="/blog" active-class="text-[#F5B318]" class="font-medium"
              >Blog</router-link
            >
          </li>

          <li class="inline-block text-primary">
            <router-link to="/login" active-class="text-[#F5B318]" class="font-medium"
              >Login</router-link
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
