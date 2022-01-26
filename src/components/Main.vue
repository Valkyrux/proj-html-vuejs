<template>
    <main>
        <Highlights :categoryList="categoryListFinder"/>
        <Jumbo />
        <RecentCourses :categoryList="categoryListFinder" :coursesList="coursesList"/>
    </main>
</template>

<script>
import Highlights from './main_components/Highlights.vue';
import Jumbo from './main_components/Jumbo.vue';
import RecentCourses from './main_components/RecentCourses.vue';

export default {
  name: 'Main',
  components: {
    Highlights,
    Jumbo,
    RecentCourses,
  },
  data() {
    return {
      coursesList: null,
    };
  },
  created() {
    // eslint-disable-next-line global-require
    this.coursesList = require('../assets/courses.json');
  },
  computed: {
    categoryListFinder() {
      const categoryList = [];
      const categoryNumberedList = [];
      this.coursesList.forEach((element) => {
        if (!categoryList.includes(element.category)) {
          categoryList.push(element.category);
          categoryNumberedList.push({ category: element.category, quantity: 1 });
        } else {
          let indexFound;
          categoryList.forEach((category, index) => {
            if (category === element.category) {
              indexFound = index;
            }
          });
          categoryNumberedList[indexFound].quantity += 1;
        }
      });
      console.log(categoryNumberedList);
      return categoryNumberedList;
    },
  },
};
</script>

<style>

</style>
