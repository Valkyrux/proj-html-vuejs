<template>
  <div id="app">
    <!-- <img alt="Vue logo" :src="./assets/logo.png"> -->
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
@import "bootstrap";
</style>
