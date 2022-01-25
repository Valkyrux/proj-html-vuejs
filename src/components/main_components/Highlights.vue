<template>
  <div class="container ms_main-padding">
      <div class="row pt-5 pb-5">
          <div class="col-7 d-flex align-items-center">
            <div>
                <h1 class="ms_main-title">Start Investing in You</h1>
                <p class="fs-5 pt-4 pb-4">With over 1200 courses in 18 subjects,
                    you're guaranteed to find something that's is right for you.</p>
                <button class="text-uppercase rounded-pill
                border-0 text-light ms_button-highlights fw-bold">join for free</button>
            </div>
          </div>
          <div class="col-5">
              <img src="../../assets/img/base.png" alt="">
          </div>
      </div>
      <div class="row">
          <div class="col-4 ps-0">
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
          <div class="col-4 pe-0">
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
      <div class="row">

      </div>
  </div>
</template>

<script>
export default {
  name: 'Highlights',
};
</script>

<style lang="scss">
@import "../../assets/scss/partials/_variables.scss";

.container.ms_main-padding {
    padding: 30px 100px;
}

h1.ms_main-title {
    font-size: 4em;
    font-weight: 300;
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

</style>
