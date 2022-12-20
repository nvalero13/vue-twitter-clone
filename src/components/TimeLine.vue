<template>
    <Tweet v-for="tweet in tweets" :tweet="tweet" />
</template>

<script setup>
import Tweet from "./Tweet.vue";
import { ref } from "vue";

const tweets = ref([
{
    user: {
        avatar: "src/assets/user.jpg",
        name: "NV (Parody)",
        username: "nvalero13",
        desc: "don't you know the world is built with blood and genocide and exploitatioon",
        verified: false,
        stats: {
            following: 213,
            followers: 1830,
        }
    },
    date: "2022-12-20T08:00:00",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit 🐦. Soluta, ut aliquid maiores omnis adipisci tenetur fuga dolores repellendus molestias! Aspernatur.",
    stats: {
       comments: 3,
       retweets: 12,
       likes: 21,
    }
},
{
    user: {
        avatar: "src/assets/user1.jpg",
        name: "CE Sabadell",
        username: "cesabadell",
        desc: "El millor equip de futbol del món",
        verified: true,
        stats: {
            following: 213,
            followers: 1830,
        }
    },
    date: "2022-12-19T18:00:00",
    content: "Gabri a la puta calle gente",
    stats: {
       comments: 53,
       retweets: 201,
       likes: 1293,
    }
},
{
    user: {
        avatar: "src/assets/user2.jpg",
        name: "Elon Musk",
        username: "elonmusk",
        desc: "My sons hate me",
        verified: false,
        stats: {
            following: 213,
            followers: 1830,
        }
    },
    date: "2022-12-17T12:00:00",
    content: "Those who want power are the ones who least deserve it", 
    img: "src/assets/img1.jpg",
    stats: {
       comments: 1,
       retweets: 220,
       likes: 15,
    }
}]);

</script>

<style scoped>

</style>