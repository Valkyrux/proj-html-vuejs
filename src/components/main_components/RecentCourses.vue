<template>
    <div class="container-fluid p-5">
      <h2 class="text-center ms_section-title">Recent Courses</h2>
      <nav class="nav justify-content-center ms_recent-nav mt-5 mb-5">
        <a href="#" class="nav-link rounded-pill pt-1 pb-1"
        :class="active=='All'?'ms_active':''" @click="setActiveAll($event)">All</a>
        <a href="#" v-for="categoryElement, index in categoryList" :key="'categoryNav' + index"
        :class="active==categoryElement.category?'ms_active':''" class="nav-link rounded-pill
        pt-1 pb-1" @click="setActiveCategory(categoryElement.category, $event)">
        {{categoryElement.category}}</a>
      </nav>
      <div class="row">
        <div class="col-2 mb-4" v-for="course,index in showCourses"
        :key="'course-' + index">
          <Card :courseObj="course"/>
        </div>
      </div>
      <div class="text-center mt-5 mb-5">
        <button class="text-uppercase rounded-pill
                border-0 text-light ms_button-highlights"
                @click="setShowAll()">{{showAll? "show less":"show all"}}</button>
      </div>
    </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'RecentCourses',
  data() {
    return {
      active: 'All',
      showAll: false,
    };
  },
  props: {
    coursesList: Array,
    categoryList: Array,
  },
  components: {
    Card,
  },
  computed: {
    showCourses() {
      let categoryChoosedList = [];
      if (this.active === 'All') {
        categoryChoosedList = this.coursesList.map((element) => element);
      } else {
        categoryChoosedList = this.coursesList.filter((element) => element.category
        === this.active);
      }
      if (this.showAll === true) {
        return categoryChoosedList;
      }
      return categoryChoosedList.filter((element, index) => index < 12);
    },
  },
  methods: {
    setActiveCategory(element, event) {
      this.active = element;
      event.preventDefault();
    },
    setActiveAll(event) {
      this.active = 'All';
      event.preventDefault();
    },
    setShowAll() {
      if (this.showAll) {
        this.showAll = false;
      } else {
        this.showAll = true;
      }
      console.log(this.showAll);
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/partials/_variables.scss";
@import "../../assets/scss/partials/_commons.scss";

  .ms_recent-nav {
    & a {
      color: $denim;
      &.ms_active {
        color: $gull-gray;
        background-color: $athens-gray;
      }
    }
  }
</style>
