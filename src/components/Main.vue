<template>
  <div class="h-screen w-[600px] border-r border-lighter">
    <div class="flex justify-between items-center px-4 py-4">
      <h3 class="text-xl font-bold">Inicio</h3>
      <button class="flex items-center justify-center rounded-full p-2 h-[32px] w-[32px] hover:bg-lightgrey transition-all">
      <font-awesome-icon icon="fa-solid fa-star" />
    </button>
    </div>
    <div class="flex items-start px-4 py-1 border-b border-lighter pb-3">
      <img
        class="w-[48px] h-[48px] rounded-full hover:opacity-80 transition-all"
        src="../assets/user.jpg"
        alt="Avatar"
      />
    
      <div class="flex-col w-full pl-3">
        <input
          class="py-3 mb-3 text-xl outline-none w-full"
          type="text"
          placeholder="¿Qué está pasando?"
          v-model="text"
          @input="handleInput"
        />
        <div class="flex flex-row justify-between items-center">
          <div class="flex flex-row">
            <font-awesome-icon
              class="text-blue p-2 rounded-full hover:bg-lighterblue cursor-pointer"
              v-for="icon in icons"
              :key="icon"
              :icon="icon"
            />
          </div>
          <button :disabled="isDisabled" class="rounded-full px-4 py-1.5 text-white font-bold" :class="disabledClass">
            Twittear
          </button>
        </div>
      </div>
    </div>
    <button class="h-14 w-full flex justify-center items-center border-b border-lighter hover:bg-lightest transition-all">
      <p class="text-blue">Mostrar 323 tweets</p>
    </button>
    <Tweet/>
    <Tweet/>
    <Tweet/>
    <Tweet/>
    <div>

    </div>
  </div>
</template>

<script setup>
import Tweet from "./Tweet.vue";
import { ref } from "vue";

const icons = ref([
  "fa-regular fa-image",
  "fa-solid fa-gift",
  "fa-solid fa-list-ul",
  "fa-regular fa-face-smile",
  "fa-regular fa-calendar",
  "fa-solid fa-location-dot",
]);

const text = ref()
const isDisabled = ref(true)
const disabledClass = ref("bg-lightblue")

function handleInput() {
    if (text.value.length > 0) {
        isDisabled.value = false
        disabledClass.value = "bg-blue hover:bg-darkblue"
    } else {
        isDisabled.value = true
        disabledClass.value = "bg-lightblue"
    }
}





</script>

<style></style>
