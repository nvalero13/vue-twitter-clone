<template>
  <div class="flex items-start w-full py-2 px-4 hover:bg-lightest border-b border-lighter">
    <img
      class="h-[48px] w-[48px] mr-3 rounded-full"
      :src="tweet.user.img"
      alt=""
    />
    <div class="flex flex-col w-full">
    <div class="flex w-full items-center justify-between">
      <div class="flex gap-1">
        <p class="font-semibold">{{ tweet.user.name }}</p>
        <p class="text-grey before:content-['@']">{{ tweet.user.username }}</p>
        <p class="text-grey">·</p>
        
        <Timestamp :date="tweet.date"/>
      </div>
      <button class="text-grey text-xl h-[34px] w-[34px] rounded-full hover:bg-lighter hover:text-blue transition-all">
        <font-awesome-icon icon="fa-solid fa-ellipsis" />
      </button>
    </div>
    <p>{{ tweet.content  }}</p>
    </div>
  </div>

</template>

<script setup>
import Timestamp from './Timestamp.vue';

const props = defineProps(["tweet"]);



</script>

<style></style>
