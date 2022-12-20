<template>
  <div class="relative group">
    <img
      class="h-[48px] w-[48px] mr-3 rounded-full cursor-pointer hover:opacity-80"
      :src="user.avatar"
      alt=""
    />
    <div
      class="bg-white rounded-xl shadow-[0_15px_60px_-15px_rgba(0,0,0,0.3)] w-80 p-3
      absolute right-1/2 translate-y-2 translate-x-1/2 z-10 pointer-events-none group-hover:pointer-events-auto 
      opacity-0 group-hover:opacity-100 transition-all delay-700"
    >
      <div class="flex justify-between items-start">
        <img
          class="h-[48px] w-[48px] mr-3 rounded-full cursor-pointer hover:opacity-80"
          :src="user.avatar"
          alt=""
        />
        <button class="border rounded-full py-2 px-3">Siguiendo</button>
      </div>
      <h3 class="font-bold mt-2">
        {{ user.name }}
        <font-awesome-icon
          v-if="user.verified"
          class="text-blue"
          icon="fa-solid fa-certificate"
        />
      </h3>
      <h4 class="text-grey before:content-['@']">{{ user.username }}</h4>

      <p class="">{{ user.desc }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["user"]);
</script>

<style scoped></style>
