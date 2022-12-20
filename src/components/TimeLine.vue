<template>
 
        <Tweet v-for="tweet in tweets" :tweet="tweet" />
    
    
</template>

<script setup>
import Tweet from "./Tweet.vue";
import { ref } from "vue";

const tweets = ref([
{
    user: {
        img: "src/assets/user.jpg",
        name: "NV (Parody)",
        username: "nvalero13"
    },
    date: "2022-12-20T08:00:00",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit 🐦. Soluta, ut aliquid maiores omnis adipisci tenetur fuga dolores repellendus molestias! Aspernatur."
},
{
    user: {
        img: "src/assets/user1.jpg",
        name: "CE Sabadell",
        username: "cesabadell"
    },
    date: "2022-12-19T18:00:00",
    content: "Gabri a la puta calle gente"
},
{
    user: {
        img: "src/assets/user2.jpg",
        name: "Elon Musk",
        username: "elonmusk"
    },
    date: "2022-12-17T12:00:00",
    content: "Those who want power are the ones who least deserve it"
}]);

</script>

<style scoped>

</style>