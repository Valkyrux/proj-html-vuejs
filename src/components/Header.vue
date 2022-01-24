<template>
    <header>
        <nav class="d-flex justify-content-between ms_header-top nav">
            <div class="nav-link">
              <a href="#">English <font-awesome-icon :icon="[ 'fas', 'chevron-down' ]" /></a>
            </div>
            <div class="d-flex justify-content-between align-items-center w-50">
                <ul class="nav">
                    <li class="nav-item" v-for="(element,index) in menuVoices"
                    :key="'menu-voice' + index">
                        <a class="nav-link" :href="element.href">{{ element.name }}</a>
                    </li>
                </ul>
                <ul class="nav fs-6">
                  <li class="nav-item p-2">
                    <a href="#">
                      <font-awesome-icon :icon="[ 'fab', 'twitter' ]" /></a>
                  </li>
                  <li class="nav-item p-2">
                    <a href="#">
                      <font-awesome-icon :icon="[ 'fab', 'instagram' ]" /></a>
                  </li>
                  <li class="nav-item p-2">
                    <a href="#">
                      <font-awesome-icon :icon="[ 'fab', 'behance' ]" /></a>
                  </li>
                  <li class="nav-item p-2">
                    <a href="#">
                      <font-awesome-icon :icon="[ 'fab', 'dribbble' ]" /></a>
                  </li>
                  <li class="nav-item p-2">
                    <a href="#">
                      <font-awesome-icon :icon="[ 'fab', 'flickr' ]" /></a>
                  </li>
                  <li class="nav-item p-2">
                    <a href="#">
                      <font-awesome-icon :icon="[ 'fab', 'git' ]" /></a>
                  </li>
                  <li class="nav-item p-2">
                    <a href="#">
                      <font-awesome-icon :icon="[ 'fab', 'linkedin' ]" /></a>
                  </li>
                  <li class="nav-item p-2">
                    <a href="#">
                      <font-awesome-icon :icon="[ 'fab', 'pinterest' ]" /></a>
                  </li>
                </ul>
            </div>
        </nav>
        <div></div>
    </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      menuVoices: null,
    };
  },
  created() {
    // eslint-disable-next-line global-require
    this.menuVoices = require('../assets/menu-links.json');
  },
};
</script>

<style lang="scss">
@import "../assets/scss/partials/_variables.scss";

.ms_header-top {
  font-size: 0.8em;

  & a {
    text-decoration: none;
    color: $gull-gray;
    text-transform: capitalize;
  }
}
</style>
