<template>
  <div class="container ms_main-padding">
      <div class="row pt-5 pb-5">
          <div class="col-7 d-flex align-items-center">
            <div>
                <h1 class="ms_main-title">Start Investing in You</h1>
                <p class="pt-4 pb-4 fw-light">With over 1200 courses in 18 subjects,
                    you're guaranteed to find something that's is right for you.</p>
                <button class="text-uppercase rounded-pill
                border-0 text-light ms_button-highlights">join for free</button>
            </div>
          </div>
          <div class="col-5">
              <img src="../../assets/img/base.png" alt="">
          </div>
      </div>
      <div class="row">
          <div class="col-4">
            <div class="card h-100 p-4 ms_card">
                <div class="card-header">
                        <div class="ms_icon">
                            <font-awesome-icon :icon="[ 'fas', 'globe-europe' ]" />
                        </div>
                        <h3>Worldwide Recognize</h3>
                    </div>
                <div class="card-body">
                    Our online course certificates can be used around
                    the world and also in most popular universities and company.
                </div>
                </div>
          </div>
          <div class="col-4">
            <div class="card h-100 p-4 ms_card">
                <div class="card-header">
                        <div class="ms_icon">
                            <font-awesome-icon :icon="[ 'fas', 'desktop' ]" />
                        </div>
                        <h3>Mostly Online Learning (sd)</h3>
                    </div>
                <div class="card-body">
                    Masterstudy online certificates can be obtained in a range of
                    specialized areas and typical take about a year to complete.
                </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card h-100 p-4 ms_card">
                <div class="card-header">
                        <div class="ms_icon">
                            <font-awesome-icon :icon="[ 'far', 'calendar-check' ]" />
                        </div>
                        <h3>Graduate in as little as 1 Year</h3>
                    </div>
                <div class="card-body">
                    Online post-graduate certificates are a popular way to develop you professiona
                    qualifications of Masterstudy
                </div>
            </div>
        </div>
      </div>
      <div class="ms_grid" @mouseover="clearAutoPlaySlider()" @mouseleave="setAutoPlaySlider()">
          <div class="ms_grid-item" v-for="element, index in categoryShow"
          :key="'category' + index">
              <div class="ms_slider-img">
                <img
                :src="require(`../../assets/img/cat_${initials(element.category)}-740x310.jpg`)"
                class="h-100 w-100" alt="">
              </div>
              <div class="ms_slider-description">
                <span>{{element.category}}</span>
                <span class="float-end ms_quantity">{{element.quantity}} Courses</span>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Highlights',
  data() {
    return {
      autoPlay: null,
      categoryShow: null,
    };
  },
  props: {
    categoryList: Array,
  },
  methods: {
    setAutoPlaySlider() {
      this.autoPlay = setInterval(() => {
        const firstVariable = this.categoryShow[0];
        this.categoryShow.splice(this.categoryShow[0], 1);
        this.categoryShow.push(firstVariable);
      }, 5000);
      // forzo l'update di vue
      this.$forceUpdate();
    },
    clearAutoPlaySlider() {
      clearInterval(this.autoPlay);
    },
    initials(string) {
      return string.toLowerCase().split('')[0] + string.toLowerCase().split('')[1];
    },
  },
  created() {
    this.categoryShow = this.categoryList.map((element) => element);
    this.setAutoPlaySlider();
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/partials/_variables.scss";

.container.ms_main-padding {
    padding: 30px 80px;
}

h1.ms_main-title {
    font-size: 4em;
    font-weight: 300;
    & ~ p {
        font-size: 1.8em;
    }
}

.ms_button-highlights {
    background-color: $denim;
    padding: 10px 30px;
}

.card.ms_card {
    background-color: rgba($color: $athens-gray, $alpha: 0.5);
    border: 0;
    border-radius: 0;
    & .card-header {
        background-color: transparent;
        border: 0;
    }
    & .card-header {
        & .ms_icon {
            font-size: 2.3em;
            color: $denim;
            margin-bottom: 20px;
        }
        & h3 {
            font-size: 1.1em;
            margin-bottom: 0;
        }
    }
    & .card-body {
        color: $gull-gray;
        font-size: 0.95em;
    }
}
// ms_grid
.ms_grid {
    display: grid;
    gap: 24px;
    grid-template-columns:
        calc(100% / 3 - 48px / 3) calc(100% / 3 - 48px / 3) calc(100% / 3 - 48px / 3);
    grid-template-rows: 200px 200px 200px;
    margin: 80px 0;
}

.ms_grid-item {
    cursor: pointer;
    overflow: hidden;
    & .ms_slider-img {
        height: calc(100% - 35px);
    }
    & .ms_quantity {
        color: gray;
    }
    &:first-child {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
    }
    &:nth-child(4) {
    grid-column: 3 / 3;
    grid-row: 3 / 3;
    }
    &:nth-child(6) {
    grid-column: 1 / 1;
    grid-row: 3 / 3;
}

}

.ms_slider-description {
    margin-top: 10px;
}

</style>
