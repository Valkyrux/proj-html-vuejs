<template>
  <div class="container-fluid ms_photo">
    <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-6 p-5 ms-text-testimonial">
                    <div>
                        <h2>Come as you are</h2>
                        <p class="fs-5">
                            MasterStudy used in an excellent workshop wether you came
                            as a consuoler, advisor, admnistrator or facility member. I am
                            going home empowered. I am loking foward to attending to On Course
                            MasterStudy and the MasterStudy National Conference next year
                            facilitating the use of this excellent retention/student success
                            course at my college.
                        </p>
                        <h3>Tina Turner</h3>
                        <small>General Developer, Photoshop</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Testimonial',

};
</script>

<style lang="scss">
@import "../../assets/scss/partials/_variables.scss";

.ms_photo {
    margin-top: 60px;
    background-image: url(../../assets/img/testimonial-1-1917x640.jpg);
    height: 640px;
}

.ms-text-testimonial {
    background-color: white;
    position:relative;
    &::after {
        content: "\25ba";
        font-size: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50px;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(80%, -50%)
                   scaleY(200%);
        color: $white;
    }
    & h2 {
        font-weight: 400;
    }
    & p {
        line-height: 1.8em;
        margin: 30px 0;
        font-size: 1.1em;
        font-weight: 300;
        color: $gull-gray;
    }
}
</style>
