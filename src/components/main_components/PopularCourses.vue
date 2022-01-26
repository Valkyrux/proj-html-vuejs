<template>
    <div class="container-fluid ms_popular-background">
        <h2 class="ms_section-title text-center">Popular courses</h2>
        <p class="text-center">Discover our most popular courses for self learning</p>
        <div class="slider">
        <div class="row p-4">
            <div v-for="element,index in sixPopularCourses" :key="'popular-' + index" class="col-2">
                <Card :courseObj="element"/>
            </div>
        </div>
        <div class="text-center mt-5 mb-5">
            <button :class="firstShowIndex == 0?'ms_disable':''" @click="prevPopular()">
                 <font-awesome-icon :icon="[ 'fas', 'chevron-left' ]"/></button>
            <button :class="lastShowIndex == allCourses.length - 1?'ms_disable':''"
            @click="nextPopular()">
                <font-awesome-icon :icon="[ 'fas', 'chevron-right' ]"/></button>
        </div>
        </div>
    </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'PopularCourses',
  data() {
    return {
      sixPopularCourses: [],
      firstShowIndex: null,
      lastShowIndex: null,
    };
  },
  props: {
    allCourses: Array,
  },
  components: {
    Card,
  },
  methods: {
    nextPopular() {
      if (this.lastShowIndex !== this.allCourses.length - 1) {
        this.sixPopularCourses.splice(0, 1);
        this.firstShowIndex += 1;
        this.lastShowIndex += 1;
        this.sixPopularCourses.push(this.allCourses[this.lastShowIndex]);
        console.log(this.firstShowIndex);
      }
    },
    prevPopular() {
      if (this.firstShowIndex !== 0) {
        this.sixPopularCourses.splice(5, 1);
        this.firstShowIndex -= 1;
        this.lastShowIndex -= 1;
        this.sixPopularCourses.splice(0, 0, this.allCourses[this.firstShowIndex]);
      }
    },
  },
  created() {
    this.sixPopularCourses = this.allCourses.filter((element, index) => index < 6);
    this.firstShowIndex = 0;
    this.lastShowIndex = 5;
    console.log(this.sixPopularCourses);
  },

};
</script>

<style lang="scss">
@import "../../assets/scss/partials/_variables.scss";
@import "../../assets/scss/partials/_commons.scss";

.ms_popular-background {
    padding: 50px 30px 40px;
    background-color: rgba($color: $athens-gray, $alpha: 0.5);
    & p {
        margin-bottom: 40px;
        color: $gull-gray;
    }
    & button {
        padding: 12px 20px;
        margin-right: 2px;
        border: 1px solid $gull-gray;
        background-color: $white;
        color: $gull-gray;
        &:not(.ms_disable):hover {
          background-color: $gull-gray;
          color: $white;
        }
        &.ms_disable {
            color: rgba($color: $gull-gray, $alpha: 0.2);
        }
    }
}
</style>
