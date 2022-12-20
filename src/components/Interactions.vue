<template>
  <div class="flex justify-between w-10/12 mt-2 -ml-2">
    <button class="group relative w-8 text-grey flex items-center hover:text-blue transition-all">
      <font-awesome-icon
        class="p-2 rounded-full group-hover:bg-bluegrey transition-all"
        icon="fa-regular fa-comment"
      />
      <p class="absolute p-2 left-7">{{ stats.comments }}</p>
    </button>
    <button class="group relative text-grey flex items-center hover:text-green transition-all">
      <font-awesome-icon
        class="p-2 rounded-full group-hover:bg-lightgreen transition-all"
        icon="fa-solid fa-retweet"
      />
      <p class="absolute p-2 left-8">{{ stats.retweets }}</p>
    </button>
    <button class="group relative text-grey flex items-center hover:text-pink transition-all">
      <font-awesome-icon
        class="p-2 rounded-full group-hover:bg-lightpink transition-all"
        icon="fa-regular fa-heart"
      />
      <p class="absolute p-2 left-7">{{ stats.likes }}</p>
    </button>
    <button class="group relative text-grey flex items-center hover:text-blue transition-all">
      <font-awesome-icon
        class="p-2 rounded-full group-hover:bg-bluegrey transition-all"
        icon="fa-solid fa-arrow-up-from-bracket"
      />
    </button>
  </div>
</template>

<script setup>
const props = defineProps(["stats"]);
</script>

<style lang="scss" scoped></style>
