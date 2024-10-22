<template>
    <div class="topics-list">
        <div class="topic-item" v-for="(topic, index) in topics" :key="index">
            <img :src="topic.image" alt="topic image" class="topic-image" />
            <div class="topic-info">
                <h3>{{ topic.title }}</h3>
                <p>{{ topic.date }}</p>
            </div>
            <button @click="openTopic(topic.url)" class="view-btn">View</button>
        </div>
    </div>
</template>

<script>
import image7 from '@/assets/image7.png';
import image8 from '@/assets/image8.png';
import image9 from '@/assets/image9.png';
import image10 from '@/assets/image10.png';
import image11 from '@/assets/image11.png';

export default {
    name: 'TopicsList',
    data() {
        return {
            topics: [
                { title: "BANDAI CARD GAMES Fest 24-25", date: "October 18, 2024", url: "https://asia-th.onepiece-cardgame.com/events/2024/officialevents/bcgfest24-25/bangkok.php" , image: image7 },
                { title: "BOOSTER PACK -Royal Blood-", date: "October 11, 2024", url: "https://asia-th.onepiece-cardgame.com/products/boosters/op10.php", image: image8 },
                { title: "STARTER DECK EX -GEAR5-", date: "October 11, 2024", url: "https://asia-th.onepiece-cardgame.com/products/decks/st21.php", image: image9 },
                { title: "EXTRA BOOSTER -Anime 25th Collection-", date: "October 11, 2024", url: "https://asia-th.onepiece-cardgame.com/products/other/sleeve018.php", image: image10 },
                { title: "OFFICIAL CARD SLEEVES 9", date: "October 11, 2024", url: "https://asia-th.onepiece-cardgame.com/products/other/sleeve019.php", image: image11 }
            ]
        };
    },
    methods: {
        openTopic(url) {
            window.open(url, "_blank");
        }
    }
};
</script>

<style scoped>
.topics-list {
    margin: 20px 0;
}

.topic-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background-color: #F5E3CB;
    margin-bottom: 12px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.topic-image {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    object-fit: cover;
    margin-right: 16px;
}

.topic-info h3 {
    margin: 0;
    font-size: 18px;
}

.topic-info p {
    margin: 0;
    color: gray;
}

.view-btn {
    background-color: #424242;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.view-btn:hover {
    background-color: #2980b9;
}
</style>
