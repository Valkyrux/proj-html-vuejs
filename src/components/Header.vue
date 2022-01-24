<template>
    <header>
        <nav class="d-flex justify-content-between nav ms_padding ms_header-top">
            <div class="nav-link">
              <a href="#">English <font-awesome-icon :icon="[ 'fas', 'chevron-down' ]" /></a>
            </div>
            <div class="d-flex justify-content-between align-items-center w-50">
                <ul class="nav">
                    <li class="nav-item" v-for="(element,index) in menuVoices"
                    :class="element.new ? 'ms_new-link':''" :key="'menu-voice' + index">
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
        <!-- header-bottom -->
        <nav class="d-flex justify-content-between align-items-center
        nav ms_padding ms_header-bottom">
          <div class="p-3">
            <img src="../assets/img/MasterStudy_logo.svg" alt="">
          </div>
          <div class="ms_input-container">
            <a href="#"><font-awesome-icon :icon="[ 'fas', 'bars' ]" /> Category</a>
            <input type="text" placeholder="Search courses">
            <button><font-awesome-icon :icon="[ 'fas', 'search' ]" /></button>
          </div>
          <ul class="nav">
            <li class="me-5">
              <a href="#"><font-awesome-icon :icon="[ 'fas', 'bullhorn' ]" />
              <span class="text-dark ms-2">Became an Istructor</span></a>
            </li>
            <li>
              <a href="#"><font-awesome-icon :icon="[ 'fas', 'briefcase' ]" />
              <span class="text-dark ms-2">For Enterprise</span></a>
            </li>
          </ul>
          <ul class="nav">
            <li class="nav-item p-2 d-flex align-items-center">
              <a href="#"><font-awesome-icon :icon="[ 'far', 'user' ]" /> Log In</a>
            </li>
            <li class="nav-item p-2 d-flex align-items-center">
              <button class="rounded-pill text-uppercase ms-2 me-2 ps-4 pe-4 ms_fw">Sign up</button>
            </li>
            <li class="nav-item p-2 d-flex align-items-center fs-4">
              <a href="#"><font-awesome-icon :icon="[ 'far', 'bookmark' ]" /></a>
            </li>
          </ul>
        </nav>

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

.nav.ms_padding {
  padding: 0 80px;
}

.ms_header-top {
  font-size: 0.8em;
  border-bottom: 1px solid $athens-gray;

  & a {
    text-decoration: none;
    color: $gull-gray;
    text-transform: capitalize;
  }
}

.ms_new-link{
  position: relative;
  &::before {
    content: "NEW";
    background-color: $red;
    color: $white;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 0.7em;
    padding: 0 3px;
    border-radius: 3px;
    border-bottom-left-radius: 0;
  }
}

.ms_header-bottom {
  & a {
    text-decoration: none;
  }
  & button {
    background-color: $denim;
    border: 0;
    padding: 10px 17px;
    color: white;
  }
  & .ms_input-container {
    width: 40%;
    & a {
      text-transform: uppercase;
      font-weight: 600;
      color: gray;
    }
    & input {
      margin-left: 10px;
      width: 72%;
      padding: 10px;
      background-color: $athens-gray;
      border: 0;
    }
  }
}

.ms_fw {
  font-weight: 500;
}
</style>
