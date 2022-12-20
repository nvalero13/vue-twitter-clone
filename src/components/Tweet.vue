<template>
  <div class="flex items-start w-full py-2 px-4 hover:bg-lightestgrey border-b border-lighter">
    <UserImg :user="tweet.user"/>
    <div class="flex flex-col w-full ml-1">
    <div class="flex w-full items-center justify-between">
      <div class="flex gap-1">
        <p class="font-bold hover:underline cursor-pointer">{{ tweet.user.name }}</p>
        <p class="text-grey before:content-['@']">{{ tweet.user.username }}</p>
        <p class="text-grey">·</p>
        
        <Timestamp :date="tweet.date"/>
      </div>
      <button class="text-grey text-xl h-[34px] w-[34px] rounded-full hover:bg-lighter hover:text-blue transition-all">
        <font-awesome-icon icon="fa-solid fa-ellipsis" />
      </button>
    </div>
    <p>{{ tweet.content  }}</p>
    <img v-if="tweet.img" class="rounded-2xl mt-3 mr-1 max-w-full cursor-pointer border border-lightgrey" :src="tweet.img" alt="Image">
    <Interactions :stats="tweet.stats"/>
    </div>
    

  </div>

</template>

<script setup>
import Interactions from './Interactions.vue';
import Timestamp from './Timestamp.vue';
import UserImg from './UserImg.vue'

const props = defineProps(["tweet"]);


</script>

<style></style>
