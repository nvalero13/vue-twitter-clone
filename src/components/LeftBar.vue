<template>
  <div
    class="h-screen w-1/5 flex flex-col justify-between border-r border-lighter px-8 py-2"
  >
    <div class="flex flex-col gap-4">
      <button
        class="h-12 w-12 hover:bg-lightblue text-3xl text-blue rounded-full"
      >
        <font-awesome-icon icon="fa-brands fa-twitter" />
      </button>
      <div v-for="tab in tabs" :key="tab.id">
        <button
          class="flex items-center py-2 px-4 hover:bg-lightblue rounded-full"
        >
          <i class="flex justify-center pr-4 w-8 text-2xl"
            ><font-awesome-icon :icon="tab.icon"
          /></i>
          <p class="text-xl">{{ tab.text }}</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const tabs = ref([
  { icon: "fa-solid fa-home", text: "Inicio", id: "Inicio" },
  { icon: "fa-solid fa-hashtag", text: "Explorar", id: "Explorar" },
  { icon: "fa-regular fa-bell", text: "Notificaciones", id: "Notificaciones" },
  { icon: "fa-regular fa-envelope", text: "Mensajes", id: "Mensajes" },
  { icon: "fa-regular fa-bookmark", text: "Guardados", id: "Guardados" },
]);
console.log(tabs.value);
</script>

<style></style>
