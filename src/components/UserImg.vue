<template>
  <div class="relative group" @mouseenter="startTimer" @mouseleave="clearTimer">
    <img
      
      class="h-[48px] w-[48px] mr-3 rounded-full cursor-pointer hover:opacity-80"
      :src="user.avatar"
      alt=""
    />
    <HoverInfo :user="user" :show="show"/>
    <!-- <Transition>
    <div
      v-if="show"
      class="bg-white rounded-xl shadow-[0_15px_60px_-15px_rgba(0,0,0,0.3)] w-80 p-3
      absolute right-1/2 translate-y-2 translate-x-1/2 z-10"
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
  </Transition> -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HoverInfo from './HoverInfo.vue'

const props = defineProps(["user"]);

const show = ref(false)
const timer = ref(null)
const timer2 = ref(null)

function startTimer() {
      clearTimeout(timer2.value)

      timer.value = setTimeout(() => {
        show.value = true
      }, 500)
    }

function clearTimer() {
      clearTimeout(timer.value)

      timer2.value = setTimeout(() => {
        show.value = false
      }, 400)
      timer.value=null
     
    }
</script>

<style scoped>

</style>
