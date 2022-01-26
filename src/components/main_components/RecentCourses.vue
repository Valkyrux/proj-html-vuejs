<template>
    <div class="container-fluid p-5">
      <h2>Recent Courses</h2>
      <nav class="nav">
        <a href="#" class="nav-link">All</a>
        <a href="#" v-for="categoryElement, index in categoryList" :key="'categoryNav' + index"
        class="nav-link">{{categoryElement.category}}</a>
      </nav>
      <div class="row">
        <div class="col-2 mb-4" v-for="course,index in showCourses"
        :key="'course-' + index">
          <Card :courseObj="course"/>
        </div>
      </div>
    </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'RecentCourses',
  props: {
    coursesList: Array,
    categoryList: Array,
  },
  components: {
    Card,
  },
  computed: {
    showCourses() {
      return this.coursesList.filter((element, index) => index < 12);
    },
  },
};
</script>

<style>

</style>
