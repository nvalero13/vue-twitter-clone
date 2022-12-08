<template>
  <div
    class="h-screen w-[275px] flex flex-col justify-between border-r border-lighter px-4 py-2"
  >
    <div class="flex flex-col gap-4">
      <button
        class="h-12 w-12 hover:bg-lightblue text-3xl text-blue rounded-full"
      >
        <font-awesome-icon icon="fa-brands fa-twitter" />
      </button>
      <div v-for="tab in tabs" :key="tab.id">
        <button
          class="flex items-center py-2 px-4 hover:bg-lightgrey rounded-full"
        >
          <i class="flex justify-center pr-4 w-8 text-2xl"
            ><font-awesome-icon :icon="tab.icon"
          /></i>
          <p class="text-xl">{{ tab.text }}</p>
        </button>
      </div>
      <button
        class="bg-blue text-white p-3 mt-3 rounded-full hover:bg-darkblue"
      >
        Twittear
      </button>
    </div>
    <button class="flex justify-between items-center mb-5 rounded-full p-3 hover:bg-lightgrey">
      <div class="flex items-center justify-start">
        <img
          class="w-[40px] h-[40px] rounded-full"
          src="../assets/user.jpg"
          alt="avatar"
        />
        <div class="flex flex-col ml-3 items-start">
          <div class="flex font-bold items-center gap-2">
            <p class="">NV (Parody)</p>
            <font-awesome-icon icon="fa-solid fa-lock" />
          </div>
          <p class="text-light">@nvalero</p>
        </div>
      </div>
      <font-awesome-icon icon="fa-solid fa-ellipsis" />
    </button>
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
  { icon: "fa-regular fa-user", text: "Perfil", id: "Perfil" },
  { icon: "fa-solid fa-ellipsis", text: " Más opciones", id: "Opciones" },
]);
console.log(tabs.value);
</script>

<style></style>
