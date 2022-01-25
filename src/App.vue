<template>
  <div id="app">
    <!-- <img alt="Vue logo" :src="./assets/logo.png"> -->
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';

export default {
  name: 'App',
  components: {
    Header,
    Main,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
@import "bootstrap";
</style>
