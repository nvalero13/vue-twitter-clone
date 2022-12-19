<template>
 
        <Tweet v-for="tweet in tweets" :tweet="tweet" />
    
    
</template>

<script setup>
import Tweet from "./Tweet.vue";
import { ref } from "vue";

const tweets = ref([{
    user: {
        img: "src/assets/user.jpg",
        name: "NV (Parody)",
        username: "nvalero13"
    },
    timestamp: "3h ago",
    content: "Lorem"
},
{
    user: {
        img: "src/assets/user1.jpg",
        name: "CE Sabadell",
        username: "cesabadell"
    },
    timestamp: "5h ago",
    content: "Gabri a la puta calle gente"
},
{
    user: {
        img: "src/assets/user2.jpg",
        name: "Elon Musk",
        username: "elonmusk"
    },
    timestamp: "8h ago",
    content: "Those who want power are the ones who least deserve it"
}]);

</script>

<style scoped>

</style>