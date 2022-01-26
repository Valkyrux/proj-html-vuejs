<template>
  <div class="container-fluid ms_we-are-proud position-relative">
    <div class="position-absolute w-100 ms_position">
        <h2 class="ms_section-title text-center">We are Proud</h2>
        <p>Certificated courses are instructed by high educated and qualified
      istructors who hold doctoral and master's level degrees.</p>
      </div>
    <div class="container h-100 d-flex align-items-center justify-content-center">

        <div class="row ms_row">
            <div class="col-3">
                <h3 class="ms_numbers">2000
                    <span class="d-block text-uppercase">student</span>
                </h3>
            </div>
            <div class="col-3">
                <h3 class="ms_numbers">950
                    <span class="d-block text-uppercase">courses</span>
                </h3>
            </div>
            <div class="col-3">
                <h3 class="ms_numbers">1600
                    <span class="d-block text-uppercase">hours video</span>
                </h3>
            </div>
            <div class="col-3">
                <h3 class="ms_numbers">150
                    <span class="d-block text-uppercase">countries reached</span>
                </h3>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'WeAreProud',
};
</script>

<style lang="scss">
@import "../../assets/scss/partials/_variables.scss";
@import "../../assets/scss/partials/_commons.scss";

.ms_we-are-proud {
    height: 750px;
    background-image: url(../../assets/img/we_proud.png);
    background-repeat: no-repeat;
    background-position: bottom;
    background-color: rgba($color: $athens-gray, $alpha: 0.5);
    & .ms_position {
        top: 50px;
        & p {
            margin-top: 20px;
            color: $gull-gray;
            width: 40%;
            text-align: center;
            margin: auto;
        }
    }
    & .ms_row {
        width: 80%;
    }
    & .ms_numbers {
        text-align: center;
        font-size: 5em;
        font-weight: 300;
        border-right: 1px solid $gull-gray;
        & span {
            font-size: 0.3em;
        }
    }
    & .col-3:nth-child(4) .ms_numbers {
        border-right: 0;
    }
}
</style>
