<template>
  <div class="h-screen w-[500px] border-r border-lighter">
    <div class="flex justify-between items-center border-b border-lighter px-4 py-4">
        <h3 class="text-xl font-bold">Inicio</h3>
        <font-awesome-icon icon="fa-solid fa-star" />
    </div>
    <div class="flex items-start px-4 py-1">
        <img class="w-[48px] h-[48px] rounded-full" src="../assets/user.jpg" alt="Avatar">
        <div class="flex-col w-full px-3">
            <input class="py-4 text-xl" type="text" placeholder="¿Qué está pasando?">
            <div class="">
                <div class="flex-row gap-5" >
                    <font-awesome-icon v-for="icon in icons" :key="icon" :icon="icon" />
                </div>
                <button class="bg-blue rounded-full p-3 text-white font-bold">Twittear</button>
            </div>
        </div>
    </div>


  </div>
</template>

<script setup>
import { ref } from 'vue';

const icons = ref(["fa-regular fa-image","fa-solid fa-gift", "fa-solid fa-list-ul", "fa-regular fa-face-smile", "fa-regular fa-calendar"])

</script>

<style>

</style>