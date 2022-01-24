<template>
    <header>
        <nav class="d-flex justify-content-between">
            <div class="nav-link">lang</div>
            <div class="justify-content-between">
                <ul class="nav">
                    <li class="nav-item" v-for="(element,index) in menuVoices"
                    :key="'menu-voice' + index">
                        <a class="nav-link active" href="#">Active</a>
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
  create() {
    this.menuVoices = require('../menuLinks.json');
  },
};
</script>

<style>

</style>
