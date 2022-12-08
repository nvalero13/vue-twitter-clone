<template>
  <div class="flex items-center justify-center">
  <div class="h-screen xl:w-[1300px] flex m-auto">
  <LeftBar/>
  <Main/>
</div>
  </div>
</template>

<script setup>
 import LeftBar from './components/LeftBar.vue';
 import Main from './components/Main.vue';
</script>

<style>

</style>
