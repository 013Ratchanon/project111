<template>
    <div class="slideshow">
        <div class="slide" v-for="(slide, index) in slides" :key="index" v-show="currentSlide === index">
            <img :src="slide.image" :alt="slide.title">
        </div>
        <div class="controls">
            <button @click="prevSlide" class="control-btn">‹</button>
            <button @click="nextSlide" class="control-btn">›</button>
        </div>
    </div>
</template>

<script>
import image2 from '@/assets/image2.png';
import image3 from '@/assets/image3.png';

export default {
    name: 'SlideShow',
    data() {
        return {
            currentSlide: 0,
            slides: [
                { image: image2, title: "Slide 1" },
                { image: image3, title: "Slide 2" }
            ]
        };
    },
    methods: {
        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        },
        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        }
    }
};
</script>

<style scoped>
.slideshow {
    position: relative;
    width: 50%;
    /* ปรับความกว้างให้เป็น 50% */
    height: 200px;
    /* ปรับความสูงให้เป็น 200px */
    overflow: hidden;
    margin: 0 auto;
    /* จัดกลางเพื่อให้อยู่กลางหน้า */
}

.slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.controls {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
}

.control-btn {
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    font-size: 24px;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.control-btn:hover {
    background-color: rgba(0, 0, 0, 0.8);
}
</style>
