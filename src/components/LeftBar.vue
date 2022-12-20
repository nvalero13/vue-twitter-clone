<template>
  <div class="w-[88px] xl:w-[275px]">
  <div
    class="fixed h-screen w-[88px] xl:w-[275px] flex flex-col justify-between xl:items-start items-center border-r border-lighter px-2 xl:px-4 py-2"
  >
    <div class="flex flex-col gap-4">
      <button
        class="h-12 w-12 hover:bg-lighterblue text-3xl xl:ml-2 text-blue rounded-full transition-all"
      >
        <font-awesome-icon icon="fa-brands fa-twitter" />
      </button>
      <div v-for="tab in tabs" :key="tab.id">
        <button
          class="flex justify-center items-center h-[44px] w-[44px] xl:w-auto xl:justify-between xl:py-2 xl:px-4 xl:pr-6 hover:bg-lightgrey rounded-full transition-all"
        >
          <i class="flex justify-center w-8 text-2xl"
            ><font-awesome-icon :icon="tab.icon"
          /></i>
          <p class="text-xl pl-4 hidden xl:block">{{ tab.text }}</p>
        </button>
      </div>
      <button
        v-if="screenXL"
        class="bg-blue text-white h-[50px] w-5/6 p-3 mt-3 rounded-full hover:bg-darkblue font-bold"
      >
        Twittear
      </button>
      <button
        v-else
        class="bg-blue text-white h-[50px] w-[50px] p-3 mt-3 rounded-full hover:bg-darkblue font-bold"
      >
      <font-awesome-icon class="text-white text-2xl" icon="fa-solid fa-feather" />
      </button>
    </div>
    <button class="flex justify-between items-center w-auto xl:w-full mb-5 rounded-full p-3 hover:bg-lightgrey transition-all">
      <div class="flex items-center justify-start">
        <img
          class="w-[40px] h-[40px] rounded-full"
          src="../assets/user.jpg"
          alt="avatar"
        />
        <div v-if="screenXL" class="flex flex-col ml-3 items-start">
          <div class="flex font-bold items-center gap-2">
            <p class="leading-[0px]">NV (Parody)</p>
            <font-awesome-icon icon="fa-solid fa-lock" />
          </div>
          <p class="text-light">@nvalero</p>
        </div>
      </div>
      <font-awesome-icon v-if="screenXL" icon="fa-solid fa-ellipsis" />
    </button>
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
  { icon: "fa-regular fa-user", text: "Perfil", id: "Perfil" },
  { icon: "fa-solid fa-ellipsis", text: " Más opciones", id: "Opciones" },
]);

const screenXL = ref(false)

window.addEventListener('load',() => {
 window.innerWidth < 1300 ? screenXL.value = false : screenXL.value = true;
})

window.addEventListener('resize', () => {
 window.innerWidth < 1300 ? screenXL.value = false : screenXL.value = true;
});


</script>

<style></style>
