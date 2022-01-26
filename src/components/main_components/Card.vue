<template>
  <div>
  <div><img :src="require(`../../assets/img/${courseObj.imgName}`)" alt=""></div>
  <div class="card" v-if="courseObj">
      <div class="card-header">

          <small>{{courseObj.category}} &gt;</small>
          <h2>{{courseObj.name}}</h2>
      </div>
      <div class="card-body"></div>
      <div class="card-footer"></div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    courseObj: Object,
  },
};
</script>

<style>

</style>
