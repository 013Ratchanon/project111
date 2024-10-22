<template>
  <div id="app">
    <Navbar />
    <!-- ใส่คู่มือการเล่นก่อน slide bar -->
    <Guide />

    <!-- Slide bar section -->
    <SlideShow />

    <!-- Topics section -->
    <TopicsList />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Guide from './components/Guide.vue';
import SlideShow from './components/SlideShow.vue';
import TopicsList from './components/TopicsList.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Guide,
    SlideShow,
    TopicsList,
    Footer
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
