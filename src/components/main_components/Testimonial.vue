<template>
  <div class="container-fluid ms_photo">
    <div class="container h-100">
            <div class="row ms_row-secondary h-100 align-items-center">
                <div class="col-6 p-5 ms-text-testimonial">
                    <div>
                        <h2>Come as you are</h2>
                        <p>MasterStudy used in an excellent workshop wether you came
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
    & h2 {
        font-weight: 400;
    }
    & p {
        margin: 30px 0;
        font-size: 1.1em;
        color: $gull-gray;
    }
}
</style>
