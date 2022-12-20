<template>
    <p class="text-grey">{{ timestampString }}</p>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps(["date"]);

const timestampString = ref(timestamp(props.date))

function timestamp(date) {
    const tweetTime = new Date(date)
    const actualTime = new Date()
    
    const diff = Math.abs(actualTime - tweetTime);
    const diffSeconds = Math.round(diff/1000);
    const diffMins = Math.round(diffSeconds/60);
    const diffHours = Math.round(diffMins/60);
    const diffDays = Math.round(diffHours/24);
      
    
      if (diffMins < 60) {
        return Math.round(diffMins)+"min"
      } else if (diffHours < 24) {
        return Math.round(diffHours)+"h"
      } else if (diffDays >= 1) {
        return tweetTime.getDate()+" "+monthString(tweetTime.getMonth())
      }
}
  
 function monthString(month) {
    switch(month+1) {
      case 1:
        return "ene.";
        break;
      case 2:
        return "feb.";
        break;
      case 3:
        return "mar.";
        break;
      case 4:
        return "abr.";
        break;
      case 5:
        return "may.";
        break;
      case 6:
        return "jun.";
        break;
      case 7:
        return "jul.";
        break;
      case 8:
        return "ago.";
        break;
      case 9:
        return "sep.";
        break;
      case 10:
        return "oct.";
        break;
      case 11:
        return "nov.";
        break;
      case 12:
        return "dic.";
        break;
    }
 }

</script>


<style scoped>

</style>