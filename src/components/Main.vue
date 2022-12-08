<template>
  <div class="h-screen w-[600px] border-r border-lighter">
    <div class="flex justify-between items-center px-4 py-4">
      <h3 class="text-xl font-bold">Inicio</h3>
      <font-awesome-icon icon="fa-solid fa-star" />
    </div>
    <div class="flex items-start px-4 py-1 border-b border-lighter pb-3">
      <img
        class="w-[48px] h-[48px] rounded-full"
        src="../assets/user.jpg"
        alt="Avatar"
      />
      <div class="flex-col w-full px-3">
        <input
          class="py-3 mb-3 text-xl outline-none"
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
          <button :disabled="isDisabled" class="rounded-full px-4 py-2 text-white font-bold" :class="disabledClass">
            Twittear
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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


function handleInput() {
    if (text.value.length > 0) {
        isDisabled.value = false
        disabledClass.value = "bg-blue hover:bg-darkblue"
    } else {
        isDisabled.value = true
        disabledClass.value = "bg-lightblue"
    }
}

const isDisabled = ref(true)

const disabledClass = ref("bg-lightblue")



</script>

<style></style>
