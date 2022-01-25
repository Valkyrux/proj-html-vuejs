<template>
    <main>
        <Highlights />
        <div v-for="element, index in categoryList" :key="index">
            {{element}}
        </div>
    </main>
</template>

<script>
import Highlights from './main_components/Highlights.vue';

export default {
  name: 'Main',
  components: {
    Highlights,
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
    categoryList() {
      const theCategoryList = [];
      this.coursesList.forEach((element) => {
        if (!theCategoryList.includes(element.category)) {
          theCategoryList.push(element.category);
        }
      });
      return theCategoryList;
    },
  },
};
</script>

<style>

</style>
