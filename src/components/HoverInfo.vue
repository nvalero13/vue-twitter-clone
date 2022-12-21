<template>
    <Transition>
    <div
      v-if="show"
      class="bg-white rounded-xl shadow-[0_15px_60px_-15px_rgba(0,0,0,0.3)] w-80 p-3
      absolute right-1/2 translate-y-2 translate-x-1/2 z-10"
    >
      <div class="flex justify-between items-start">
        <img
          class="h-[56px] w-[56px] mr-3 rounded-full cursor-pointer hover:opacity-80"
          :src="user.avatar"
          alt=""
        />
        <button v-if="!following" class="border rounded-full py-1.5 px-4 w-36 font-semibold hover:bg-red-100 hover:border-red-200 hover:text-red-500" @click="following=!following" @mouseenter="hoverText='Dejar de seguir'" @mouseleave="hoverText='Siguiendo'">{{ hoverText }}</button>
        <button v-else class="border rounded-full py-1.5 px-4 font-semibold text-white bg-black hover:bg-gray-900" @click="following=!following">Seguir</button>
      </div>
      <h3 class="font-bold mt-2">
        {{ user.name }}
        <font-awesome-icon
          v-if="user.verified"
          class="text-blue"
          icon="fa-solid fa-certificate"
        />
      </h3>
      <h4 class="text-grey leading-4 before:content-['@']">{{ user.username }}</h4>

      <p class="mt-3 text-sm">{{ user.desc }}</p>
      <div class="mt-5 mb-3 flex justify-between w-8/12 text-sm">
        <p class="font-semibold">{{ user.stats.following}} <span class="font-normal text-grey">Siguiendo</span></p>
        <p class="font-semibold">{{ user.stats.followers}} <span class="font-normal text-grey">Seguidores</span></p>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps(["user", "show"]);

const hoverText = ref("Siguiendo");
const following = ref(false);

</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>